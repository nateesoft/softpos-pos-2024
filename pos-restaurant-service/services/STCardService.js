const moment = require('moment')
const pool = require('../config/database/MySqlConnect')

const { getProductByPCode, getProductActiveByPCode } = require('./ProductService');
const { getDataCompany } = require('./CompanyService');

const SeekStkFile = async (TempCode, T_Stk) => {
    const sql = `select bpcode from stkfile 
    where (bpcode='${TempCode}') and (bstk='${T_Stk}') limit 1 `;
    console.log('SeekStkFile:', sql)
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const getPSetByPCode = async (TempCode) => {
    const sql = `select * from pset where pcode='${TempCode}'`;
    console.log('getPSetByPCode:', sql)
    const results = await pool.query(sql)
    return results
}

const getBalanceSetByPCodeRIndex = async (XCode, r_index) => {
    const sql = `select * from balanceset 
    where r_plucode='${XCode}' and r_index='${r_index}' `;
    console.log('getBalanceSetByPCodeRIndex:', sql)
    const results = await pool.query(sql)
    return results
}

const getTSaleSet = async (XCode, r_index, XDocNo) => {
    const sql = `select * from t_saleset 
    where r_plucode='${XCode}' 
    and r_index='${r_index}'  and r_refno='${XDocNo}' `;
    console.log('getTSaleSet:', sql)
    const results = await pool.query(sql)
    return results
}

const getCompany = async () => {
    const sql = `select * from company limit 1`;
    console.log('getTSaleSet:', sql)
    const results = await pool.query(sql)
    if(results.length>0){
        return results[0]
    }
    return moment().format('YYYY-MM-DD')
}

const GetActionMon = async () => {
    const Company = await getCompany()
    let TempYear = Company.Accterm.split('/')[0]
    let CurYear = moment().format('YYYY')
    let CurMonth = moment().format('MM')

    let responseMonth = 0
    if (TempYear === CurYear) {
        responseMonth = parseInt(CurMonth) + 12
    } else {
        if (parseInt(CurYear) === parseInt(TempYear) - 1) {
            responseMonth = parseInt(CurMonth)
        } else {
            responseMonth = 0
        }
    }
    return responseMonth
}

const ProcessSetUpdateStockOut = async (DocNo, StkCode, XCode, StkRemark, XQty, UserPost) => {
    let psetList = await getPSetByPCode(XCode);
    psetList.forEach(async psetBean => {
        let TempQty = psetBean.PSubQty * XQty;

        let productBean = await getProductByPCode(psetBean.PSubCode);
        let TempAmt = productBean.PPrice11 * XQty;

        if (productBean.PStock === "Y") {
            let sql = `insert into stcard 
                (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,
                s_out,s_outcost,s_rem,s_user,s_entrydate,s_entrytime) 
                values (curdate(),?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`;
            const s_no = DocNo + "@" + XCode;
            const s_stk = StkCode;
            const s_pcode = psetBean.PSubCode;
            const s_que = 1;
            const s_in = 0;
            const s_incost = 0
            const s_out = TempQty
            const s_outcost = TempAmt
            const s_rem = StkRemark
            const s_user = UserPost
            await pool.query(sql, [
                s_no, s_stk, s_pcode, s_que, s_in, s_incost,
                s_out, s_outcost, s_rem, s_user
            ])

            let TempAct = await GetActionMon();
            let resultSeekStkFile = await SeekStkFile(psetBean.PSubCode, StkCode)
            if (!resultSeekStkFile) {
                let sql = "insert into stkfile (bpcode,bstk) values (?,?)"
                await pool.query(sql, [psetBean.PSubCode, StkCode])
            }

            let sqlUpd = `update stkfile set bqty?=bqty?-? where (bpcode=?) and (bstk=?)`;
            for (let i = TempAct; i <= 24; i++) {
                await pool.query(sqlUpd, [i, i, TempQty, psetBean.PSubCode, StkCode])
            }
        }
    })
}

const ProcessSelectSetUpdateStockOut = async (DocNo, StkCode, XCode, StkRemark, XQty, UserPost, r_index) => {
    let listBalanceSet = await getBalanceSetByPCodeRIndex(XCode, r_index);
    listBalanceSet.forEach(async balance => {
        let TempCode = balance.R_PSubcode
        let TempQty = balance.R_SetQty * XQty;

        let proBean = await getProductByPCode(TempCode);
        let TempAmt = proBean.PPrice11 * XQty;

        if (proBean.PStock === "Y") {
            let InsertQuery = `insert into stcard (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,
                s_out,s_outcost,s_rem,s_user,s_entrydate,s_entrytime) 
                values (curdate(),?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`;
            const s_no = DocNo + "@" + XCode
            const s_stk = StkCode
            const s_pcode = TempCode
            const s_que = 1
            const s_in = 0
            const s_incost = 0
            const s_out = TempQty
            const s_outcost = TempAmt
            const s_rem = StkRemark
            const s_user = UserPost //User
            await pool.query(InsertQuery, 
                [s_no, s_stk, s_pcode, s_que, s_in, s_incost, s_out, s_outcost, s_rem, s_user])

            let TempAct = await GetActionMon();
            let resultSeekStkFile = await SeekStkFile(TempCode, StkCode)
            if (!resultSeekStkFile) {
                let sqlInsert = "insert into stkfile (bpcode,bstk) values (?,?)";
                await pool.query(sqlInsert, [TempCode, StkCode])

                let sqlUpdate = "update stkfile set bqty?=bqty?-? where (bpcode=?) and (bstk=?)";
                for (let i = TempAct; i <= 24; i++) {
                    await pool.query(sqlUpdate, [i, i, TempQty, TempCode, StkCode])
                }
            }
        }
    })
}

const ProcessSelectSetUpdateStockOutRefund = async (DocNo, StkCode, XCode, StkRemark, XQty, UserPost, r_index) => {
    let XDocNo = DocNo.substring(1, 8)

    let TSaleSetList = await getTSaleSet(XCode, r_index, XDocNo)
    TSaleSetList.forEach(async data => {
        let TempCode = data.r_psubcode
        let TempQty = data.r_setqty * XQty;
        let T_Rem = StkRemark;
        let StkProc = false;

        let productBean = await getProductByPCode(TempCode);
        let TempAmt = productBean.pprice11 * XQty

        if (productBean.pstock === "Y") {
            let InsertQuery = `insert into stcard 
                (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,s_out,s_outcost,s_rem,
                s_user,s_entrydate,s_entrytime) 
                values (curdate(),?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`;
            const s_no = DocNo + "@" + XCode
            const s_stk = StkCode
            const s_pcode = TempCode
            const s_que = 1
            const s_in = 0
            const s_incost = 0
            const s_out = TempQty
            const s_outcost = TempAmt
            const s_rem = T_Rem
            const s_user = UserPost //User
            await pool.query(InsertQuery, [s_no, s_stk, s_pcode, s_que, s_in, s_incost, s_out, s_outcost, s_rem, s_user])

            let TempAct = await GetActionMon();
            let resultSeekStkFile = await SeekStkFile(TempCode, StkCode)
            if (!resultSeekStkFile) {
                let InsertQuery4 = `insert into stkfile (bpcode,bstk) values (?,?)`
                await pool.query(InsertQuery4, [TempCode, StkCode])
            }
            for (let i = TempAct; i <= 24; i++) {
                let T_Mon = "bqty" + i;
                let InsertQuery4 = `update stkfile set ${T_Mon}=${T_Mon}-? where (bpcode=?) and (bstk=?)`
                await pool.query(InsertQuery4, [TempQty, TempCode, StkCode])
            }
        }
    })
}

const ProcessStockOut = async (S_No, S_SubNo, S_Que, S_PCode, S_In, S_Out, 
    S_InCost, S_OutCost, S_ACost, S_Rem, S_User, S_Link,
    PStock, PSet, r_index, SaleOrRefund) => {
    const S_Date = moment().format('YYYY-MM-DD')
    const S_Stk = "A1";
    const S_EntryDate = moment().format('YYYY-MM-DD')
    const S_EntryTime = moment().format('HH:mm');

    // remove from stock
    if (PStock === 'Y') {
        try {
            let sql = `INSERT INTO stcard 
            (S_Date,S_No,S_SubNo,S_Que,S_PCode,S_Stk,S_In,S_Out,S_InCost,S_OutCost,
            S_ACost,S_Rem,S_User,S_EntryDate,S_EntryTime,S_Link) 
            VALUES ('${S_Date}','${S_No}','${S_SubNo}','${S_Que}','${S_PCode}',
            '${S_Stk}','${S_In}','${S_Out}',
            '${S_InCost}','${S_OutCost}','${S_ACost}','${S_Rem}','${S_User}',
            '${S_EntryDate}','${S_EntryTime}','${S_Link}')`
            console.log('ProcessStockOut:', sql)
            await pool.query(sql)

            let TempAct = GetActionMon()
            let resultSeekStkFile = await SeekStkFile(S_PCode, S_Stk)
            if (!resultSeekStkFile) {
                let sql1 = `insert into stkfile (bpcode,bstk) values (?,?)`
                await pool.query(sql1, [S_PCode, S_Stk])
            }

            for (let i = TempAct; i <= 24; i++) {
                let T_Mon = "bqty" + i;
                let sql1 = `update stkfile set ${T_Mon}=${T_Mon}-? where (bpcode=?) and (bstk=?)`
                await pool.query(sql1, [S_Out, S_PCode, S_Stk])
            }

            return resultSeekStkFile
        } catch (error) {
            console.log('ProcessStockOut', error)
            return null
        }
    }

    // check pset or not
    if (PSet === 'Y') {
        let productBean = await getProductActiveByPCode(S_PCode)
        if (!productBean) {
            await ProcessSetUpdateStockOut(S_No, S_Stk, S_PCode, S_Rem, S_Out, S_User)
        } else {
            if (SaleOrRefund === "SALE") {
                await ProcessSelectSetUpdateStockOut(S_No, S_Stk, S_PCode, S_Rem, S_Out, S_User, r_index);
            } else if (SaleOrRefund === "REFUND") {
                await ProcessSelectSetUpdateStockOutRefund(S_No, S_Stk, S_PCode, S_Rem, S_Out, S_User, r_index);
            }
        }
    }
}

// const ProcessStockIn = async (DocNo, StkCode, PCode, TDate,
//     Stk_Remark, Qty, Amount, UserPost, PStock, PSet, r_index, SaleOrRefund) => {

//     if (PStock === "Y") {
//         let InsertQuery = `insert into stcard 
//         (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,s_out,s_outcost,s_rem,
//         s_user,s_entrydate,s_entrytime) 
//         values (curdate(),?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`;
//         const s_no = DocNo
//         const s_stk = StkCode
//         const s_pcode = PCode
//         const s_que = 1
//         const s_in = 0
//         const s_incost = 0
//         const s_out = Qty
//         const s_outcost = Amount
//         const s_rem = Stk_Remark
//         const s_user = UserPost //User
//         await pool.query(InsertQuery, [s_no, s_stk, s_pcode, s_que, s_in, s_incost, s_out, s_outcost, s_rem, s_user])

//         let TempAct = await GetActionMon(TDate);
//         let resultSeekStkFile = await SeekStkFile(PCode, StkCode)
//         if (!resultSeekStkFile) {
//             let InsertQuery4 = `insert into stkfile (bpcode,bstk) values (?,?)`
//             await pool.query(InsertQuery4, [PCode, StkCode])
//         }
//         for (let i = TempAct; i <= 24; i++) {
//             let T_Mon = "bqty" + i;
//             let InsertQuery4 = `update stkfile set ${T_Mon}=${T_Mon}-? where (bpcode=?) and (bstk=?)`;
//             await pool.query(InsertQuery4, [Qty, PCode, StkCode])
//         }
//     }
//     if (PSet === "Y") {
//         let productBean = await getProductByPCode(PCode);
//         if (!productBean) {
//             ProcessSetUpdateStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost);
//         } else {
//             if (SaleOrRefund === "1") {
//                 ProcessSelectSetUpdateStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost, r_index);
//             } else if (SaleOrRefund === "2") {
//                 ProcessSelectSetUpdateStockOutRefund(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost, r_index);
//             }

//         }
//     }
// }

module.exports = {
    ProcessStockOut
}

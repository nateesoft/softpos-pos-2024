const moment = require('moment')
const pool = require('../config/database/MySqlConnect')

const { getProductByPCode } = require('./ProductService');
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

const getPSetByPCode = async (TempCode, T_Stk) => {
    const sql = `select * from pset where pcode='${TempCode}'`;
    console.log('getPSetByPCode:', sql)
    const results = await pool.query(sql)
    return results
}

const getBalanceSetByPCodeRIndex = async (XCode, r_index) => {
    const sql = `select * from balanceset where r_plucode='${XCode}' and r_index='${r_index}' `;
    console.log('getBalanceSetByPCodeRIndex:', sql)
    const results = await pool.query(sql)
    return results
}

const getTSaleSet = async (XCode, r_index, XDocNo) => {
    const sql = `select * from t_saleset where r_plucode='${XCode}' and r_index='${r_index}'  and r_refno='${XDocNo}' `;
    console.log('getTSaleSet:', sql)
    const results = await pool.query(sql)
    return results
}

const GetActionMon = async (EndofdayDate) => {
    let Company = await getDataCompany()
    let TempYear = moment().format('YYYY')
    let CurYear = moment().format('YYYY')
    let CurMonth = moment().format('MM')

    let RetVal = 0
    if (TempYear === CurYear) {
        RetVal = parseInt(CurMonth) + 12
    } else {
        if (parseInt(CurYear) === parseInt(TempYear) - 1) {
            RetVal = parseInt(CurMonth)
        } else {
            RetVal = 0
        }
    }
    return RetVal
}

const ProcessSetUpdateStockOut = async (DocNo, StkCode, XCode, TDate, StkRemark, XQty, UserPost) => {
    let psetList = await getPSetByPCode(XCode);
    psetList.forEach(async psetBean => {
        let TempCode = psetBean.getPsubcode();
        let TempQty = psetBean.getPsubQTY() * XQty;
        let T_Rem = StkRemark;

        let productBean = await getProductByPCode(TempCode);
        let StkProc = productBean.PStock === "Y";
        let TempAmt = productBean.PPrice11 * XQty;

        if (StkProc) {
            let sql = `insert into stcard 
                (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,
                s_out,s_outcost,s_rem,s_user,s_entrydate,s_entrytime) 
                values (curdate(),?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`;
            const s_no = DocNo + "@" + XCode;
            const s_stk = StkCode;
            const s_pcode = TempCode;
            const s_que = 1;
            const s_in = 0;
            const s_incost = 0
            const s_out = TempQty
            const s_outcost = TempAmt
            const s_rem = T_Rem
            const s_user = UserPost
            await pool.query(sql, [
                s_no, s_stk, s_pcode, s_que, s_in, s_incost,
                s_out, s_outcost, s_rem, s_user
            ])

            let TempAct = await GetActionMon(TDate);
            let resultSeekStkFile = await SeekStkFile(TempCode, StkCode)
            if (!resultSeekStkFile) {
                let sql = "insert into stkfile (bpcode,bstk) values (?,?)"
                await pool.query(sql, [TempCode, StkCode])
            }

            let sqlUpd = "update stkfile set bqty?=bqty?-? where (bpcode=?) and (bstk=?)";
            for (let i = TempAct; i <= 24; i++) {
                await pool.query(sqlupd, [i, i, TempQty, TempCode, StkCode])
            }
        }
    })
}

const ProcessSelectSetUpdateStockOut = async (DocNo, StkCode, XCode, TDate, StkRemark, XQty, UserPost, r_index) => {
    let listBalanceSet = await getBalanceSetByPCodeRIndex(XCode, r_index);
    listBalanceSet.forEach(async bean => {
        let TempCode = bean.R_PSubcode
        let TempQty = bean.R_SetQty * XQty;
        let T_Rem = StkRemark;

        let proBean = await getProductByPCode(TempCode);
        let StkProc = proBean.PStock === "Y";
        let TempAmt = proBean.PPrice11 * XQty;

        if (StkProc) {
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
            const s_rem = T_Rem
            const s_user = UserPost //User
            await pool.query(InsertQuery, [s_no, s_stk, s_pcode, s_que, s_in, s_incost, s_out, s_outcost, s_rem, s_user])

            let TempAct = await GetActionMon(TDate);
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

const ProcessSelectSetUpdateStockOutRefund = async (DocNo, StkCode, XCode, TDate, StkRemark, XQty, UserPost, r_index) => {
    let XDocNo = DocNo.substring(1, 8)

    let TSaleSetList = await getTSaleSet(XCode, r_index, XDocNo)
    TSaleSetList.forEach(async data => {
        let TempCode = data.r_psubcode
        let TempQty = data.r_setqty * XQty;
        let TempAmt = 0.0;
        let T_Rem = StkRemark;
        let StkProc = false;

        let productBean = await getProductByPCode(TempCode);
        if (productBean) {
            StkProc = productBean.pstock === "Y"
            TempAmt = productBean.pprice11 * XQty
        }

        if (StkProc) {
            let InsertQuery = `insert into stcard 
                (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,s_out,s_outcost,s_rem,s_user,s_entrydate,s_entrytime) 
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

            let TempAct = await GetActionMon(TDate);
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

const ProcessStockOut = async (DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, Amount,
    UserPost, PStock, PSet, r_index, SaleOrRefund) => {
    const S_No = DocNo;
    const S_SubNo = "";
    const S_Que = 0;
    const S_PCode = PCode;
    const S_Stk = StkCode;
    const S_In = 0;
    const S_Out = Qty;
    const S_InCost = 0;
    const S_OutCost = Amount;
    const S_ACost = 0;
    const S_Rem = Stk_Remark;
    const S_User = UserPost;
    const S_Link = "";

    if (PStock === 'Y') {
        try {
            let sql = `INSERT INTO stcard 
            (S_Date,S_No,S_SubNo,S_Que,S_PCode,S_Stk,S_In,S_Out,S_InCost,S_OutCost,S_ACost,
            S_Rem,S_User,S_EntryDate,S_EntryTime) 
            VALUES (curdate(),?,?,?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`
            console.log('ProcessStockOut:', sql)
            await pool.query(sql,
                [
                    S_No, S_SubNo, S_Que, S_PCode, S_Stk,
                    S_In, S_Out, S_InCost, S_OutCost, S_ACost,
                    S_Rem, S_User, S_Link
                ]
            )

            let TempAct = await GetActionMon(TDate)
            let resultSeekStkFile = await SeekStkFile(PCode, StkCode)
            if (!resultSeekStkFile) {
                sql = `insert into stkfile (bpcode,bstk) values (?,?)`
                await pool.query(sql, [PCode, StkCode])
            }

            for (let i = TempAct; i <= 24; i++) {
                let T_Mon = "bqty" + i;
                sql = `update stkfile set ${T_Mon}=${T_Mon}-? where (bpcode=?) and (bstk=?)`
                await pool.query(sql, [Qty, PCode, StkCode])
            }

            return resultSeekStkFile
        } catch (error) {
            console.log('ProcessStockOut', error)
            return null
        }
    }
    if (PSet === 'Y') {
        let productBean = await getProductByPCode(PCode)
        if (!productBean) {
            ProcessSetUpdateStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost)
        } else {
            if (SaleOrRefund === "1") {
                ProcessSelectSetUpdateStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost, r_index);
            } else if (SaleOrRefund === "2") {
                ProcessSelectSetUpdateStockOutRefund(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost, r_index);
            }
        }
    }
}

const ProcessStockIn = async (DocNo, StkCode, PCode, TDate,
    Stk_Remark, Qty, Amount, UserPost, PStock, PSet, r_index, SaleOrRefund) => {

    if (PStock === "Y") {
        let InsertQuery = `insert into stcard 
        (s_date,s_no,s_stk,s_pcode,s_que,s_in,s_incost,s_out,s_outcost,s_rem,
        s_user,s_entrydate,s_entrytime) 
        values (curdate(),?,?,?,?,?,?,?,?,?,?,curdate(),curtime())`;
        const s_no = DocNo
        const s_stk = StkCode
        const s_pcode = PCode
        const s_que = 1
        const s_in = 0
        const s_incost = 0
        const s_out = Qty
        const s_outcost = Amount
        const s_rem = Stk_Remark
        const s_user = UserPost //User
        await pool.query(InsertQuery, [s_no, s_stk, s_pcode, s_que, s_in, s_incost, s_out, s_outcost, s_rem, s_user])

        let TempAct = await GetActionMon(TDate);
        let resultSeekStkFile = await SeekStkFile(PCode, StkCode)
        if (!resultSeekStkFile) {
            let InsertQuery4 = `insert into stkfile (bpcode,bstk) values (?,?)`
            await pool.query(InsertQuery4, [PCode, StkCode])
        }
        for (let i = TempAct; i <= 24; i++) {
            let T_Mon = "bqty" + i;
            let InsertQuery4 = `update stkfile set ${T_Mon}=${T_Mon}-? where (bpcode=?) and (bstk=?)`;
            await pool.query(InsertQuery4, [Qty, PCode, StkCode])
        }
    }
    if (PSet === "Y") {
        let productBean = await getProductByPCode(PCode);
        if (!productBean) {
            ProcessSetUpdateStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost);
        } else {
            if (SaleOrRefund === "1") {
                ProcessSelectSetUpdateStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost, r_index);
            } else if (SaleOrRefund === "2") {
                ProcessSelectSetUpdateStockOutRefund(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, UserPost, r_index);
            }

        }
    }
}

module.exports = {
    ProcessStockOut
}

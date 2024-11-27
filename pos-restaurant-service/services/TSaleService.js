const pool = require('../config/database/MySqlConnect')
const { PrefixZeroFormat, Unicode2ASCII } = require('../utils/StringUtil');

const { getBalanceByTableNo } = require('./BalanceService');
const { listIngredeint, getPSetByPCode } = require('./ProductService');
const { ProcessStockOut } = require('./STCardService');

const createNewTSale = async (balance, BillRefNo) => {
    const { R_Table, Macno, R_PluCode, R_PName, R_Unit, R_Group, R_Status, R_Normal,
        R_Discount, R_Service, R_Stock, R_Set, R_Vat, R_Type, R_ETD, R_Quan, R_Price, R_Total, R_PrType, R_PrCode, R_PrDisc,
        R_PrBath, R_PrAmt, R_DiscBath, R_PrCuType, R_PrCuQuan, R_PrCuAmt, R_Redule, R_Kic, R_KicPrint, R_Void, R_VoidUser,
        R_VoidTime, R_Opt1, R_Opt2, R_Opt3, R_Opt4, R_Opt5, R_Opt6, R_Opt7, R_Opt8, R_Opt9, R_PrCuCode,
        StkCode, PosStk, R_PrChkType, R_PrQuan, R_PrSubType, R_PrSubCode, R_PrSubQuan, R_PrSubDisc,
        R_PrSubBath, R_PrSubAmt, R_PrSubAdj, R_PrCuDisc, R_PrCuBath, R_PrCuAdj, R_PItemNo, R_PKicQue,
        R_PrVcType, R_PrVcCode, R_PrVcAmt, R_PrVcAdj, R_MoveFlag, R_Pause, R_SPIndex,
        R_LinkIndex, R_VoidPause, R_MoveItem, R_MoveFrom, R_MoveUser, VoidMsg, R_PrintItemBill, R_CountTime,
        R_Earn, R_EarnNo } = balance

    const R_Refno = BillRefNo;
    const R_Index = BillRefNo + "/" + balance.R_Index.split('/')[1]
    const Cashier = balance.Cashier; // can change
    const R_Emp = balance.R_Emp; // can change
    // const R_Date = "curdate()";
    // const R_Time = "curtime()";
    const MacNo = Macno;
    const R_PrAdj = 0;
    const R_PreDisAmt = 0;
    const R_NetTotal = 0;
    const R_Refund = "";
    const R_PrChkType2 = "";
    const R_PrQuan2 = 0;
    const R_PrType2 = "";
    const R_PrCode2 = "";
    const R_PrDisc2 = 0;
    const R_PrBath2 = 0;
    const R_PrAmt2 = 0;
    const R_PrAdj2 = 0;
    const R_SetPrice = 0;
    const R_SetDiscAmt = 0;
    const R_Return = "";
    const R_NetDiff = 0;
    const R_SendOnline = "";
    const R_BranchCode = "";
    const R_ServiceAmt = 0;

    const sql = `INSERT INTO t_sale 
    (R_Index,R_Refno,R_Table,R_Date,R_Time,MacNo,Cashier,R_Emp,R_PluCode,R_PName,R_Unit,R_Group,R_Status,R_Normal,
    R_Discount,R_Service,R_Stock,R_Set,R_Vat,R_Type,R_ETD,R_Quan,R_Price,R_Total,R_PrType,R_PrCode,R_PrDisc,R_PrBath,
    R_PrAmt,R_PrCuType,R_PrCuCode,R_PrCuQuan,R_PrCuAmt,R_Redule,R_DiscBath,R_PrAdj,R_PreDisAmt,R_NetTotal,R_Kic,
    R_KicPrint,R_Refund,VoidMsg,R_Void,R_VoidUser,R_VoidTime,StkCode,PosStk,R_ServiceAmt,R_PrChkType,R_PrQuan,
    R_PrSubType,R_PrSubCode,R_PrSubQuan,R_PrSubDisc,R_PrSubBath,R_PrSubAmt,R_PrSubAdj,R_PrCuDisc,R_PrCuBath,R_PrCuAdj,
    R_PrChkType2,R_PrQuan2,R_PrType2,R_PrCode2,R_PrDisc2,R_PrBath2,R_PrAmt2,R_PrAdj2,R_PItemNo,R_PKicQue,R_PrVcType,
    R_PrVcCode,R_PrVcAmt,R_PrVcAdj,R_MoveFlag,R_Pause,R_SPIndex,R_LinkIndex,R_VoidPause,R_SetPrice,R_SetDiscAmt,
    R_MoveItem,R_MoveFrom,R_MoveUser,R_Opt9,R_Opt1,R_Opt2,R_Opt3,R_Opt4,R_Opt5,R_Opt6,R_Opt7,R_Opt8,R_PrintItemBill,
    R_CountTime,R_Return,R_Earn,R_EarnNo,R_NetDiff,R_SendOnline,R_BranchCode) 
    values (?,?,?,curdate(),curtime(),?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
    ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    console.log('createNewTSale:', sql)
    try {
        const results = await pool.query(sql,
            [R_Index, R_Refno, R_Table, MacNo, Cashier, R_Emp, R_PluCode, Unicode2ASCII(R_PName), R_Unit, R_Group, R_Status, R_Normal,
                R_Discount, R_Service, R_Stock, R_Set, R_Vat, R_Type, R_ETD, R_Quan, R_Price, R_Total, R_PrType, R_PrCode, R_PrDisc, R_PrBath,
                R_PrAmt, R_PrCuType, R_PrCuCode, R_PrCuQuan, R_PrCuAmt, R_Redule, R_DiscBath, R_PrAdj, R_PreDisAmt, R_NetTotal, R_Kic,
                R_KicPrint, R_Refund, VoidMsg, R_Void, R_VoidUser, R_VoidTime, StkCode, PosStk, R_ServiceAmt, R_PrChkType, R_PrQuan,
                R_PrSubType, R_PrSubCode, R_PrSubQuan, R_PrSubDisc, R_PrSubBath, R_PrSubAmt, R_PrSubAdj, R_PrCuDisc, R_PrCuBath, R_PrCuAdj,
                R_PrChkType2, R_PrQuan2, R_PrType2, R_PrCode2, R_PrDisc2, R_PrBath2, R_PrAmt2, R_PrAdj2, R_PItemNo, R_PKicQue, R_PrVcType,
                R_PrVcCode, R_PrVcAmt, R_PrVcAdj, R_MoveFlag, R_Pause, R_SPIndex, R_LinkIndex, R_VoidPause, R_SetPrice, R_SetDiscAmt,
                R_MoveItem, R_MoveFrom, R_MoveUser, R_Opt9, R_Opt1, R_Opt2, R_Opt3, R_Opt4, R_Opt5, R_Opt6, R_Opt7, R_Opt8, R_PrintItemBill,
                R_CountTime, R_Return, R_Earn, R_EarnNo, R_NetDiff, R_SendOnline, R_BranchCode])
        return results
    } catch (error) {
        console.log('createNewTSale', error)
        return null
    }
}

const processAllPIngredent = (PCode, R_Quan, Cashier) => {
    let listING = listIngredeint(PCode);
    listING.forEach(async ingBean => {
        if (ingBean.Pstock === "Y" && ingBean.Pactive === "Y") {
            let PingCode = ingBean.PingCode;
            let PBPack = ingBean.PBPack;
            if (PBPack <= 0) {
                PBPack = 1;
            }
            let R_QuanIng = ingBean.PingQty * R_Quan;
            let R_Total = 0;
            await ProcessStockOut(DocNo, StkCode, R_PluCode, new Date(), Stk_Remark, R_QuanIng, R_Total,
                Cashier, "Y", "", "", "");
        }
    })
}

const processAllPSet = (PCode, R_Quan, Cashier) => {
    let listPset = getPSetByPCode(balance.PCode);
    listPset.forEach(async psetBean => {
        let pSubCode = psetBean.getPsubcode();
        let pSubQTY = psetBean.getPsubQTY();
        await ProcessStockOut(DocNo, StkCode, pSubCode, new Date(), "A1", pSubQTY * R_Quan, 0.00,
        Cashier, "Y", "", "", "");
    })
}

const addDataFromBalance = async (tableNo, BillRefNo, allBalance) => {
    // loop insert
    allBalance.forEach(async balance => {

        // new t_sale
        await createNewTSale(balance, BillRefNo)

        // process stockcard and stkfile
        // if (balance.R_Stock === 'Y') {
        //     const DocNo = tableNo + "/" + BillRefNo
        //     const StkCode = balance.StkCode
        //     const PCode = balance.R_PluCode
        //     const TDate = balance.R_Date
        //     const Stk_Remark = "SAL"
        //     const Qty = balance.R_Quan
        //     const Amount = balance.R_Total
        //     const UserPost = balance.Cashier
        //     const PStock = balance.R_Stock
        //     const PSet = balance.R_Set
        //     const r_index = balance.R_Index
        //     const SaleOrRefund = "1"
        //     await ProcessStockOut(DocNo, StkCode, PCode, TDate, Stk_Remark, Qty, Amount,
        //         UserPost, PStock, PSet, r_index, SaleOrRefund)

        //     // ตัดสต็อกสินค้าที่มี Ingredent
        //     await processAllPIngredent(balance.R_PluCode, balance.R_Quan, balance.Cashier)

        //     // ตัดสต็อกสินค้าที่เป็นชุด SET (PSET)
        //     await processAllPSet(balance.R_PluCode, balance.R_Quan, balance.Cashier)
        // }
    })
}

module.exports = {
    addDataFromBalance
}

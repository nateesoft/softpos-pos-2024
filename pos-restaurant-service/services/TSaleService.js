const pool = require('../config/database/MySqlConnect')
const moment = require('moment')
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
    const R_Date = moment().format('YYYY-MM-DD');
    const R_Time = moment().format('HH:mm:ss');
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
    const R_CardPay = "";


    const sql = `INSERT INTO t_sale 
        (R_Index,R_Refno,R_Table,R_Date,R_Time,MacNo,Cashier,R_Emp,R_PluCode,R_PName,R_Unit,R_Group,R_Status,R_Normal,
        R_Discount,R_Service,R_Stock,R_Set,R_Vat,R_Type,R_ETD,R_Quan,R_Price,R_Total,R_PrType,R_PrCode,R_PrDisc,R_PrBath,
        R_PrAmt,R_PrCuType,R_PrCuCode,R_PrCuQuan,R_PrCuAmt,R_Redule,R_DiscBath,R_PrAdj,R_PreDisAmt,R_NetTotal,R_Kic,
        R_KicPrint,R_Refund,VoidMsg,R_Void,R_VoidUser,R_VoidTime,StkCode,PosStk,R_ServiceAmt,R_PrChkType,R_PrQuan,
        R_PrSubType,R_PrSubCode,R_PrSubQuan,R_PrSubDisc,R_PrSubBath,R_PrSubAmt,R_PrSubAdj,R_PrCuDisc,R_PrCuBath,
        R_PrCuAdj,R_PrChkType2,R_PrQuan2,R_PrType2,R_PrCode2,R_PrDisc2,R_PrBath2,R_PrAmt2,R_PrAdj2,R_PItemNo,
        R_PKicQue,R_PrVcType,R_PrVcCode,R_PrVcAmt,R_PrVcAdj,R_MoveFlag,R_Pause,R_SPIndex,R_LinkIndex,R_VoidPause,
        R_SetPrice,R_SetDiscAmt,R_MoveItem,R_MoveFrom,R_MoveUser,R_Opt9,R_Opt1,R_Opt2,R_Opt3,R_Opt4,R_Opt5,R_Opt6,R_Opt7,R_Opt8,
        R_PrintItemBill,R_CountTime,R_Return,R_Earn,R_EarnNo,R_NetDiff,R_SendOnline,R_BranchCode,R_CardPay) 
        VALUES ('${R_Index}','${R_Refno}','${R_Table}','${R_Date}','${R_Time}','${MacNo}','${Cashier}','${R_Emp}','${R_PluCode}',
        '${R_PName}','${R_Unit}','${R_Group}','${R_Status}','${R_Normal}','${R_Discount}','${R_Service}','${R_Stock}','${R_Set}',
        '${R_Vat}','${R_Type}','${R_ETD}','${R_Quan}','${R_Price}','${R_Total}','${R_PrType}','${R_PrCode}','${R_PrDisc}','${R_PrBath}',
        '${R_PrAmt}','${R_PrCuType}','${R_PrCuCode}','${R_PrCuQuan}','${R_PrCuAmt}','${R_Redule}','${R_DiscBath}','${R_PrAdj}',
        '${R_PreDisAmt}','${R_NetTotal}','${R_Kic}','${R_KicPrint}','${R_Refund}','${VoidMsg}','${R_Void}','${R_VoidUser}','${R_VoidTime}',
        '${StkCode}','${PosStk}','${R_ServiceAmt}','${R_PrChkType}','${R_PrQuan}','${R_PrSubType}','${R_PrSubCode}','${R_PrSubQuan}',
        '${R_PrSubDisc}','${R_PrSubBath}','${R_PrSubAmt}','${R_PrSubAdj}','${R_PrCuDisc}','${R_PrCuBath}','${R_PrCuAdj}','${R_PrChkType2}',
        '${R_PrQuan2}','${R_PrType2}','${R_PrCode2}','${R_PrDisc2}','${R_PrBath2}','${R_PrAmt2}','${R_PrAdj2}','${R_PItemNo}',
        '${R_PKicQue}','${R_PrVcType}','${R_PrVcCode}','${R_PrVcAmt}','${R_PrVcAdj}','${R_MoveFlag}','${R_Pause}','${R_SPIndex}',
        '${R_LinkIndex}','${R_VoidPause}','${R_SetPrice}','${R_SetDiscAmt}','${R_MoveItem}','${R_MoveFrom}','${R_MoveUser}','${R_Opt9}',
        '${R_Opt1}','${R_Opt2}','${R_Opt3}','${R_Opt4}','${R_Opt5}','${R_Opt6}','${R_Opt7}','${R_Opt8}','${R_PrintItemBill}',
        '${R_CountTime}','${R_Return}','${R_Earn}','${R_EarnNo}','${R_NetDiff}','${R_SendOnline}','${R_BranchCode}','${R_CardPay}')`;
    // console.log('createNewTSale:', sql)
    try {
        const results = await pool.query(sql)
        return results
    } catch (error) {
        console.log('createNewTSale', error)
        return null
    }
}

const processAllPIngredent = async (S_No, PCode, R_Quan, Cashier) => {
    let listING = await listIngredeint(PCode);
    listING && listING.forEach(async (ingBean, index) => {
        if (ingBean.pstock === "Y" && ingBean.pactive === "Y") {
            let PBPack = ingBean.PBPack;
            if (PBPack <= 0) {
                PBPack = 1;
            }
            let R_QuanIng = ingBean.PingQty * R_Quan;

            const S_SubNo = "@"+ingBean.PCode
            const S_Que = (index+1)
            const S_PCode = ingBean.PingCode
            const S_Stk = "A1"
            const S_In = 0
            const S_Out = R_QuanIng
            const S_InCost = 0
            const S_OutCost = 0
            const S_ACost = 0
            const S_Rem = "SAL"
            const S_User = Cashier
            const S_Link = "@"+ingBean.PCode
    
            const PStock = "Y"
            const PSet = "N"
            const r_index = ""
            const SaleOrRefund = "SALE" // SALE or REFUND

            await ProcessStockOut(S_No, S_SubNo, S_Que, S_PCode, S_In, S_Out, S_InCost, S_OutCost, 
                S_ACost, S_Rem, S_User, S_Link, PStock, PSet, r_index, SaleOrRefund);
        }
    })
}

const processAllPSet = async (S_No, PCode, R_Quan, Cashier) => {
    let listPset = await getPSetByPCode(PCode);
    listPset && listPset.forEach(async psetBean => {
        const S_SubNo = ""
        const S_Que = 0
        const S_PCode = psetBean.PSubCode
        const S_Stk = "A1"
        const S_In = 0
        const S_Out = R_Quan * psetBean.PSubQty
        const S_InCost = 0
        const S_OutCost = 0
        const S_ACost = 0
        const S_Rem = "SAL"
        const S_User = Cashier
        const S_Link = ""

        const PStock = "N"
        const PSet = "N"
        const r_index = ""
        const SaleOrRefund = "SALE" // SALE or REFUND

        await ProcessStockOut(S_No, S_SubNo, S_Que, S_PCode, S_In, S_Out, S_InCost, 
            S_OutCost, S_ACost, S_Rem, S_User, S_Link, PStock, PSet, r_index, SaleOrRefund);
    })
}

const addDataFromBalance = async (tableNo, BillRefNo, allBalance) => {
    // loop insert
    allBalance && allBalance.forEach(async balance => {

        // new t_sale
        await createNewTSale(balance, BillRefNo)
    })
}

module.exports = {
    addDataFromBalance,
    processAllPIngredent,
    processAllPSet
}

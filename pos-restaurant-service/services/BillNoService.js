const moment = require('moment')

const pool = require('../config/database/MySqlConnect')
const { PrefixZeroFormat } = require('../utils/StringUtil');
const { emptyTableBalance, getBalanceByTableNo } = require('./BalanceService');
const { getAllProtab, updatePromotion } = require('./PromotionService');

const { getTableByCode, updateTableAvailableStatus } = require('./TableFileService');
const { addDataFromBalance } = require('./TSaleService');
const { updateDiscount } = require('./DiscountService');

const getBillNoByTableNo = async tableNo => {
    const sql = `select * from bill_no where B_Refno='${tableNo}'`;
    console.log('getBillNoByTableNo:', sql)
    const results = await pool.query(sql)
    return results
}

const updateNextBill = async (macno) => {
    const sql = `UPDATE poshwsetup SET receno1=receno1+1 WHERE terminal='${macno}' `;
    console.log('updateNextBill:', sql)
    const results = await pool.query(sql)
    return results
}

const getBillIDCurrent = async (macno) => {
    const sql = `select ReceNo1 from poshwsetup where Terminal='${macno}' limit 1`;
    console.log('getBillIDCurrent:', sql)
    const results = await pool.query(sql)

    let NextBillId = null;
    if (results) {
        if (results) {
            const ReceNo1 = parseInt(results[0].ReceNo1)
            NextBillId = PrefixZeroFormat(ReceNo1, 7)
        }
    }

    return NextBillId
}

const addNewBill = async (tableNo, requestPayload) => {
    const { macno, orderList,
        cashAmount,
        creditAmount,
        transferAmount,
        discountAmount,
        tonAmount,
        paymentAmount,
        invoiceTotal
    } = requestPayload
    const tableFile = await getTableByCode(tableNo)
    const { Tcode, MacNo, Cashier, TLoginTime, TCurTime, TCustomer } = tableFile

    const B_Refno = await getBillIDCurrent(macno);
    const B_CuponDiscAmt = 0;
    const B_Ontime = "curdate()";
    const B_LoginTime = "curdate()";
    // const B_OnDate = "curdate()"
    // const B_PostDate = "curdate()"
    const B_Table = Tcode;
    const B_MacNo = MacNo;
    const B_Cashier = Cashier;
    const B_Cust = TCustomer;
    const B_ETD = "E";
    const B_Food = 0;
    const B_Drink = 0;
    const B_Product = 0;
    const B_Total = (B_Food + B_Drink + B_Product);
    const B_Service = 0;
    const B_ServiceAmt = 0;
    const B_ItemDiscAmt = 0;
    const B_FastDisc = "";
    const B_FastDiscAmt = 0;
    const B_EmpDisc = "";
    const B_EmpDiscAmt = 0;
    const B_TrainDisc = "";
    const B_TrainDiscAmt = 0;
    const B_MemDisc = "";
    const B_MemDiscAmt = 0;
    const B_SubDisc = "";
    const B_SubDiscAmt = 0;
    const B_SubDiscBath = 0;
    const B_ProDiscAmt = 0;
    const B_SpaDiscAmt = 0;
    const B_AdjAmt = 0;
    const B_PreDisAmt = 0;
    const B_NetTotal = invoiceTotal;
    const B_NetFood = 0;
    const B_NetDrink = 0;
    const B_NetProduct = 0;
    const B_NetVat = 0;
    const B_NetNonVat = 0;
    const B_Vat = 0;
    const B_PayAmt = paymentAmount;
    const B_Cash = cashAmount;
    const B_GiftVoucher = 0;
    const B_Earnest = 0;
    const B_Ton = tonAmount;
    const B_CrCode1 = "";
    const B_CardNo1 = "";
    const B_AppCode1 = "";
    const B_CrCharge1 = 0;
    const B_CrChargeAmt1 = 0;
    const B_CrAmt1 = 0;
    const B_AccrCode = "";
    const B_AccrAmt = 0;
    const B_AccrCr = 0;
    const B_MemCode = "";
    const B_MemName = "";
    // const B_MemBegin = "now()"
    // const B_MemEnd = "now()"
    const B_MemCurSum = 0;
    const B_Void = "";
    const B_VoidUser = "";
    const B_VoidTime = "";
    const B_BillCopy = 0;
    const B_PrnCnt = 0;
    const B_PrnTime1 = "";
    const B_PrnTime2 = "";
    const B_InvNo = "";
    const B_InvType = "";
    const B_Bran = "";
    const B_BranName = "";
    const B_Tel = "";
    const B_RecTime = "";
    const MStamp = "";
    const MScore = "";
    const CurStamp = "";
    const StampRate = "";
    const B_ChkBill = "";
    const B_ChkBillTime = "";
    const B_CashTime = "";
    const B_WaitTime = "";
    const B_SumScore = 0;
    const B_CrBank = "";
    const B_CrCardAmt = creditAmount;
    const B_CrCurPoint = 0;
    const B_CrSumPoint = 0;
    const B_Entertain = 0;
    const B_VoucherDiscAmt = 0;
    const B_VoucherOver = 0;
    const B_NetDiff = 0;
    const B_SumSetDiscAmt = 0;
    const B_DetailFood = 0;
    const B_DetailDrink = 0;
    const B_DetailProduct = 0;
    const B_KicQue = "";
    const B_ROUNDCLOSE = "";
    const R_Opt9 = "";
    const R_Opt1 = "";
    const R_Opt2 = "";
    const R_Opt3 = "";
    const R_Opt4 = "";
    const R_Opt5 = "";
    const R_Opt6 = "";
    const R_Opt7 = "";
    const R_Opt8 = "";
    const VoidMsg = tableFile.VoidMsg;
    const B_EarnDocNo = "";
    const B_UseEarnNo = "";
    const B_UserEntertain = "";
    const B_SendOnline = "";

    try {
        const sql = `INSERT INTO billno 
            (B_Refno,B_CuponDiscAmt,B_Ontime,B_LoginTime,B_OnDate,B_PostDate,B_Table,B_MacNo,
            B_Cashier,B_Cust,B_ETD,B_Total,B_Food,B_Drink,B_Product,B_Service,B_ServiceAmt,B_ItemDiscAmt,
            B_FastDisc,B_FastDiscAmt,B_EmpDisc,B_EmpDiscAmt,B_TrainDisc,B_TrainDiscAmt,B_MemDisc,B_MemDiscAmt,B_SubDisc,B_SubDiscAmt,
            B_SubDiscBath,B_ProDiscAmt,B_SpaDiscAmt,B_AdjAmt,B_PreDisAmt,B_NetTotal,B_NetFood,B_NetDrink,B_NetProduct,B_NetVat,
            B_NetNonVat,B_Vat,B_PayAmt,B_Cash,B_GiftVoucher,B_Earnest,B_Ton,B_CrCode1,B_CardNo1,B_AppCode1,
            B_CrCharge1,B_CrChargeAmt1,B_CrAmt1,B_AccrCode,B_AccrAmt,B_AccrCr,B_MemCode,B_MemName,
            B_MemCurSum,B_Void,B_VoidUser,B_VoidTime,B_BillCopy,B_PrnCnt,B_PrnTime1,B_PrnTime2,B_InvNo,B_InvType,
            B_Bran,B_BranName,B_Tel,B_RecTime,MStamp,MScore,CurStamp,StampRate,B_ChkBill,B_ChkBillTime,
            B_CashTime,B_WaitTime,B_SumScore,B_CrBank,B_CrCardAmt,B_CrCurPoint,B_CrSumPoint,B_Entertain,B_VoucherDiscAmt,B_VoucherOver,
            B_NetDiff,B_SumSetDiscAmt,B_DetailFood,B_DetailDrink,B_DetailProduct,B_KicQue,B_ROUNDCLOSE,R_Opt9,R_Opt1,R_Opt2,
            R_Opt3,R_Opt4,R_Opt5,R_Opt6,R_Opt7,R_Opt8,VoidMsg,B_EarnDocNo,B_UseEarnNo,B_UserEntertain,
            B_SendOnline) 
            VALUES (?,?,curdate(),curdate(),curdate(),curdate(),?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?,?,?,?,?,?,?,?,?,?,
            ?)`;
        console.log('addNewBill:', sql)
        const results = await pool.query(
            sql,
            [B_Refno, B_CuponDiscAmt, B_Table, B_MacNo,
                B_Cashier, B_Cust, B_ETD, B_Total, B_Food, B_Drink, B_Product, B_Service, B_ServiceAmt, B_ItemDiscAmt,
                B_FastDisc, B_FastDiscAmt, B_EmpDisc, B_EmpDiscAmt, B_TrainDisc, B_TrainDiscAmt, B_MemDisc, B_MemDiscAmt, B_SubDisc, B_SubDiscAmt,
                B_SubDiscBath, B_ProDiscAmt, B_SpaDiscAmt, B_AdjAmt, B_PreDisAmt, B_NetTotal, B_NetFood, B_NetDrink, B_NetProduct, B_NetVat,
                B_NetNonVat, B_Vat, B_PayAmt, B_Cash, B_GiftVoucher, B_Earnest, B_Ton, B_CrCode1, B_CardNo1, B_AppCode1,
                B_CrCharge1, B_CrChargeAmt1, B_CrAmt1, B_AccrCode, B_AccrAmt, B_AccrCr, B_MemCode, B_MemName,
                B_MemCurSum, B_Void, B_VoidUser, B_VoidTime, B_BillCopy, B_PrnCnt, B_PrnTime1, B_PrnTime2, B_InvNo, B_InvType,
                B_Bran, B_BranName, B_Tel, B_RecTime, MStamp, MScore, CurStamp, StampRate, B_ChkBill, B_ChkBillTime,
                B_CashTime, B_WaitTime, B_SumScore, B_CrBank, B_CrCardAmt, B_CrCurPoint, B_CrSumPoint, B_Entertain, B_VoucherDiscAmt, B_VoucherOver,
                B_NetDiff, B_SumSetDiscAmt, B_DetailFood, B_DetailDrink, B_DetailProduct, B_KicQue, B_ROUNDCLOSE, R_Opt9, R_Opt1, R_Opt2,
                R_Opt3, R_Opt4, R_Opt5, R_Opt6, R_Opt7, R_Opt8, VoidMsg, B_EarnDocNo, B_UseEarnNo, B_UserEntertain,
                B_SendOnline])
        if (results) {
            // list all balance
            const allBalance = await getBalanceByTableNo(tableNo)
            console.log('addDataFromBalance:', allBalance)

            // save t_sale list
            await addDataFromBalance(B_Table, B_Refno, allBalance)

            // // update promotion
            // await updateProSerTable(B_Table, allBalance);

            // update next bill id
            await updateNextBill(macno)

            // clear balance
            await emptyTableBalance(B_Table)

            // update tablefile
            await updateTableAvailableStatus(B_Table)
        }
        return null
    } catch (error) {
        console.log('addNewBill', error)
        return null
    }
}

const updateService = async (tableNo, allBalance) => {

}

const updateProSerTable = async (tableNo, allBalance) => {
    //คำนวนโปรโมชั่น
    let allProtabs = await getAllProtab()
    allProtabs.forEach(async protab => {
        let dateEXP = moment(protab.pdate2);
        let nowDate = moment();
        if (dateEXP >= nowDate) {
            await updatePromotion(tableNo);
        }
    })

    //คำนวณส่วนลด
    await updateDiscount(tableNo, allBalance);

    //คำนวน % ชาร์จเครดิต
    //คำนวณค่าบริการ + คำนวณภาษีมูลค่าเพิ่ม
    await updateService(tableNo, allBalance);
}

module.exports = {
    getBillNoByTableNo,
    addNewBill,
    updateNextBill,
    getBillIDCurrent
}

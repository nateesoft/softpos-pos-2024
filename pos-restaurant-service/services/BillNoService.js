const pool = require('../config/database/MySqlConnect')
const { PrefixZeroFormat } = require('../utils/StringUtil');
const { emptyTableBalance, getBalanceByTableNo } = require('./BalanceService');

const { getTableByCode, updateTableAvailableStatus } = require('./TableFileService'); 
const { addDataFromBalance, getTSaleByBillNo, processAllPIngredentReturnStock } = require('./TSaleService');

const { getBranch } = require('./BranchService')
const { ProcessStockOut } = require('./STCardService');
const { getPOSConfigSetup } = require('./POSConfigSetupService');
const { updateRefundMember } = require('./member/crm/MemberMasterService');
const { getMoment } = require('../utils/MomentUtil');

const getAllBillNoToday = async () => {
    const sql = `select * from billno where B_OnDate=curdate()`;
    const results = await pool.query(sql)
    return results
}

const searchBillNoCondition = async (billNo, postDate, macno) => {
    let sql = `select * from billno`;
    if (billNo) {
        sql = sql + ` where B_Refno='${billNo}' order by B_PostDate`;
    } else if (postDate) {
        sql = sql + ` where DATE_FORMAT(B_PostDate, '%Y-%m-%d')='${postDate}'`;
    } else if (macno) {
        sql = sql + ` where B_MacNo='${macno}' or B_Cashier='${macno}' order by B_PostDate`;
    }
    const results = await pool.query(sql)
    return results
}

const getBillNoByTableNo = async tableNo => {
    const sql = `select * from billno where B_Table='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const getBillNoByRefno = async billNo => {
    const sql = `select * from billno where B_Refno='${billNo}'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const updateNextBill = async (macno) => {
    const sql = `UPDATE poshwsetup SET receno1=receno1+1 WHERE terminal='${macno}' `;
    const results = await pool.query(sql)
    return results
}

const printCopyBill = async (billNo, Cashier, macno, copy) => {
    const sql = `UPDATE billno 
    SET B_MacNo='${macno}',
    B_Cashier='${Cashier}',
    B_BillCopy=B_BillCopy+${copy} WHERE B_Refno='${billNo}'`;
    await pool.query(sql)
    
    return billNo
}

const updateRefundBill = async (billNoData) => {
    const sql = `UPDATE billno SET B_Void='${billNoData.B_Void}', 
    B_VoidTime=curtime(), 
    B_VoidUser='${billNoData.B_VoidUser}' 
    WHERE B_Refno='${billNoData.B_Refno}'`;
    const results = await pool.query(sql)
    return results
}

const updateRefundTsale = async (billNo) => {
    const sql = `UPDATE t_sale SET R_Refund='V' WHERE R_Refno='${billNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateRefundTSaleSet = async (billNo) => {
    const sql = `UPDATE t_saleset SET R_Refund='V' WHERE R_Refno='${billNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateRefundTCupon = async (billNo) => {
    const sql = `update t_cupon set refund='V' where r_refno='${billNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateRefundTPromotion = async (billNo) => {
    const sql = `delete from t_promotion where r_refno='${billNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateRefundTGift = async (billNo) => {
    const sql = `update t_gift set fat='V' where refno='${billNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateRefundAccr = async (billNo, macno, branchCode) => {
    const sql = `delete from accr where (arno='${branchCode}/${macno}/${billNo}')`;
    const results = await pool.query(sql)
    return results
}

const updateRefundMTran = async (billNo, macno) => {
    const sql = "delete from mtran where m_billno='" + macno + "/" + billNo + "'";
    const results = await pool.query(sql)
    return results
}

const updateRefundMTranPlu = async (billNo, macno) => {
    const sql = "delete from mtranplu where m_billno='" + macno + "/" + billNo + "'";
    const results = await pool.query(sql)
    return results
}

const getBillIDCurrent = async (macno) => {
    const sql = `select ReceNo1 from poshwsetup where Terminal='${macno}' limit 1`;
    const results = await pool.query(sql)

    let NextBillId = null;
    if (results.length > 0) {
        const ReceNo1 = parseInt(results[0].ReceNo1)
        NextBillId = PrefixZeroFormat(ReceNo1, 7)
    }

    return NextBillId
}

const addNewBill = async (payload) => {
    const posConfigSetup = await getPOSConfigSetup()
    const {
        macno, tableNo, billType, orderList, tonAmount, paymentAmount, netTotal,
        memberInfo, cashInfo, creditInfo, transferInfo, discountInfo, serviceInfo,
    } = payload
    const tableFile = await getTableByCode(tableNo)
    const { serviceAmount, vatAmount } = serviceInfo
    const { Cashier, TCustomer, Food, Drink, Product } = tableFile

    const { cashEnable, cashAmount } = cashInfo
    const {
        creditEnable,
        crCode,
        creditNumber,
        creditRef,
        creditChargePercent,
        creditChargeAmount,
        creditAmount,
    } = creditInfo
    const {
        transferEnable,
        transferAmount,
        transferAccountNo,
        transferAccount
    } = transferInfo
    const {
        discountEnable,
        discountAmount,
    } = discountInfo
    const {
        memberCode,
        memberName,
        memberBegin,
        memberEnd,
        memberCurSum
    } = memberInfo

    // summary before create billno
    const curdate = getMoment().format('YYYY-MM-DD')
    const curtime = getMoment().format('HH:mm:ss')

    const B_Refno = await getBillIDCurrent(macno);
    const B_CuponDiscAmt = 0;
    const B_Ontime = curtime;
    const B_LoginTime = curtime;
    const B_OnDate = curdate
    const B_PostDate = curdate
    const B_Table = tableNo;
    const B_MacNo = macno;
    const B_Cashier = Cashier;
    const B_Cust = TCustomer;
    const B_ETD = billType;
    const B_Food = Food;
    const B_Drink = Drink;
    const B_Product = Product;
    const B_Total = (B_Food + B_Drink + B_Product);

    const B_Service = posConfigSetup.P_Service;
    const B_ServiceAmt = serviceAmount;
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
    const B_NetTotal = netTotal;
    const B_NetFood = Food;
    const B_NetDrink = Drink;
    const B_NetProduct = Product;
    const B_NetVat = netTotal - creditChargeAmount;
    const B_NetNonVat = 0;
    const B_Vat = vatAmount;
    const B_PayAmt = cashAmount;
    const B_Cash = cashAmount;
    const B_GiftVoucher = 0;
    const B_Earnest = 0;
    const B_Ton = tonAmount;
    const B_CrCode1 = crCode;
    const B_CardNo1 = creditNumber;
    const B_AppCode1 = creditRef;
    const B_CrCharge1 = creditChargePercent;
    const B_CrChargeAmt1 = creditChargeAmount;
    const B_CrAmt1 = creditAmount;
    const B_AccrCode = "";
    const B_AccrAmt = 0;
    const B_AccrCr = 0;
    const B_MemCode = memberCode;
    const B_MemName = memberName;
    const B_MemBegin = memberBegin
    const B_MemEnd = memberEnd
    const B_MemCurSum = memberCurSum;
    const B_Void = "-";
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
    const B_ChkBillTime = curtime;
    const B_CashTime = curtime;
    const B_WaitTime = "00:00:00";
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
    const B_ROUNDCLOSE = "N";
    const R_Opt9 = "";
    const R_Opt1 = "";
    const R_Opt2 = "";
    const R_Opt3 = "";
    const R_Opt4 = "";
    const R_Opt5 = "";
    const R_Opt6 = "";
    const R_Opt7 = "";
    const R_Opt8 = "";
    const VoidMsg = "";
    const B_EarnDocNo = "";
    const B_UseEarnNo = "";
    const B_UserEntertain = "";
    const B_SendOnline = "";

    try {
        const sql = `INSERT INTO billno 
        (B_Refno,B_CuponDiscAmt,B_Ontime,B_LoginTime,B_OnDate,B_PostDate,B_Table,B_MacNo,B_Cashier,B_Cust,B_ETD,
        B_Total,B_Food,B_Drink,B_Product,B_Service,B_ServiceAmt,B_ItemDiscAmt,B_FastDisc,B_FastDiscAmt,B_EmpDisc,
        B_EmpDiscAmt,B_TrainDisc,B_TrainDiscAmt,B_MemDisc,B_MemDiscAmt,B_SubDisc,B_SubDiscAmt,B_SubDiscBath,
        B_ProDiscAmt,B_SpaDiscAmt,B_AdjAmt,B_PreDisAmt,B_NetTotal,B_NetFood,B_NetDrink,B_NetProduct,B_NetVat,
        B_NetNonVat,B_Vat,B_PayAmt,B_Cash,B_GiftVoucher,B_Earnest,B_Ton,B_CrCode1,B_CardNo1,B_AppCode1,
        B_CrCharge1,B_CrChargeAmt1,B_CrAmt1,B_AccrCode,B_AccrAmt,B_AccrCr,B_MemCode,B_MemName,B_MemBegin,
        B_MemEnd,B_MemCurSum,B_Void,B_VoidUser,B_VoidTime,B_BillCopy,B_PrnCnt,B_PrnTime1,B_PrnTime2,B_InvNo,
        B_InvType,B_Bran,B_BranName,B_Tel,B_RecTime,MStamp,MScore,CurStamp,StampRate,B_ChkBill,B_ChkBillTime,
        B_CashTime,B_WaitTime,B_SumScore,B_CrBank,B_CrCardAmt,B_CrCurPoint,B_CrSumPoint,B_Entertain,
        B_VoucherDiscAmt,B_VoucherOver,B_NetDiff,B_SumSetDiscAmt,B_DetailFood,B_DetailDrink,B_DetailProduct,
        B_KicQue,B_ROUNDCLOSE,R_Opt9,R_Opt1,R_Opt2,R_Opt3,R_Opt4,R_Opt5,R_Opt6,R_Opt7,R_Opt8,VoidMsg,
        B_EarnDocNo,B_UseEarnNo,B_UserEntertain,B_SendOnline) 
        VALUES ('${B_Refno}','${B_CuponDiscAmt}','${B_Ontime}','${B_LoginTime}','${B_OnDate}','${B_PostDate}','${B_Table}',
        '${B_MacNo}','${B_Cashier}','${B_Cust}','${B_ETD}','${B_Total}','${B_Food}','${B_Drink}','${B_Product}',
        '${B_Service}','${B_ServiceAmt}','${B_ItemDiscAmt}','${B_FastDisc}','${B_FastDiscAmt}','${B_EmpDisc}',
        '${B_EmpDiscAmt}','${B_TrainDisc}','${B_TrainDiscAmt}','${B_MemDisc}','${B_MemDiscAmt}','${B_SubDisc}',
        '${B_SubDiscAmt}','${B_SubDiscBath}','${B_ProDiscAmt}','${B_SpaDiscAmt}','${B_AdjAmt}','${B_PreDisAmt}',
        '${B_NetTotal}','${B_NetFood}','${B_NetDrink}','${B_NetProduct}','${B_NetVat}','${B_NetNonVat}','${B_Vat}',
        '${B_PayAmt}','${B_Cash}','${B_GiftVoucher}','${B_Earnest}','${B_Ton}','${B_CrCode1}','${B_CardNo1}',
        '${B_AppCode1}','${B_CrCharge1}','${B_CrChargeAmt1}','${B_CrAmt1}','${B_AccrCode}','${B_AccrAmt}','${B_AccrCr}',
        '${B_MemCode}','${B_MemName}','${B_MemBegin}','${B_MemEnd}','${B_MemCurSum}','${B_Void}','${B_VoidUser}',
        '${B_VoidTime}','${B_BillCopy}','${B_PrnCnt}','${B_PrnTime1}','${B_PrnTime2}','${B_InvNo}','${B_InvType}',
        '${B_Bran}','${B_BranName}','${B_Tel}','${B_RecTime}','${MStamp}','${MScore}','${CurStamp}','${StampRate}',
        '${B_ChkBill}','${B_ChkBillTime}','${B_CashTime}','${B_WaitTime}','${B_SumScore}','${B_CrBank}','${B_CrCardAmt}',
        '${B_CrCurPoint}','${B_CrSumPoint}','${B_Entertain}','${B_VoucherDiscAmt}','${B_VoucherOver}','${B_NetDiff}',
        '${B_SumSetDiscAmt}','${B_DetailFood}','${B_DetailDrink}','${B_DetailProduct}','${B_KicQue}','${B_ROUNDCLOSE}',
        '${R_Opt9}','${R_Opt1}','${R_Opt2}','${R_Opt3}','${R_Opt4}','${R_Opt5}','${R_Opt6}','${R_Opt7}','${R_Opt8}',
        '${VoidMsg}','${B_EarnDocNo}','${B_UseEarnNo}','${B_UserEntertain}','${B_SendOnline}')`;
        const results = await pool.query(sql)
        if (results) {
            // list all balance
            const allBalance = await getBalanceByTableNo(tableNo)

            // save t_sale list
            await addDataFromBalance(B_Table, B_Refno, allBalance)

            // // update promotion
            // await updateProSerTable(B_Table, allBalance);

            // await ThermalPrinterConnect("192.168.1.209", "", B_Table)

            // update next bill id
            await updateNextBill(macno)

            // clear balance
            await emptyTableBalance(B_Table)

            // update tablefile
            await updateTableAvailableStatus(B_Table)

            return B_Refno
        }
        return null
    } catch (error) {
        return null
    }
}

const refundTSale = async (tSaleData, Cashier) => {
    tSaleData.forEach(async tSale => {
        if (tSale.R_Void !== 'V' && tSale.R_Stock === 'Y') {
            const S_No = "R" + tSale.R_Refno
            const S_SubNo = ""
            const S_Que = 0
            const S_PCode = tSale.R_PluCode
            const S_In = tSale.R_Quan
            const S_Out = 0
            const S_InCost = tSale.R_Total
            const S_OutCost = 0
            const S_ACost = 0
            const S_Rem = "SAL"
            const S_User = Cashier
            const S_Link = ""

            const PStock = tSale.R_Stock
            const PSet = tSale.R_Set
            const r_index = tSale.R_Index
            const SaleOrRefund = "REFUND" // SALE or REFUND

            await ProcessStockOut(S_No, S_SubNo, S_Que, S_PCode, S_In, S_Out,
                S_InCost, S_OutCost, S_ACost, S_Rem, S_User, S_Link,
                PStock, PSet, r_index, SaleOrRefund)

            // ตัดสต็อกสินค้าที่มี Ingredent
            await processAllPIngredentReturnStock(S_No, tSale.R_PluCode, tSale.R_Quan, tSale.Cashier)
        }
    })
}

const billRefundStockIn = async (billNo, Cashier, macno) => {
    const branchData = await getBranch()
    const billNoData = await getBillNoByRefno(billNo)
    const tSaleData = await getTSaleByBillNo(billNo)

    // update table t_sale void
    await updateRefundTsale(billNo)
    await updateRefundTSaleSet(billNo)
    await updateRefundTCupon(billNo)
    await updateRefundTPromotion(billNo)
    await updateRefundTGift(billNo)
    await updateRefundAccr(billNo, macno, branchData.Code)

    if (!billNoData.B_MemCode) {
        await updateRefundMember(billNoData)

        // empty member on POS
        await updateRefundMTran(billNo, macno)
        await updateRefundMTranPlu(billNo, macno)
    }

    // update billno
    billNoData.B_Void = 'V'
    billNoData.B_VoidUser = Cashier
    await updateRefundBill(billNoData)

    // update refund tSale List
    await refundTSale(tSaleData, Cashier)

    return billNo
}

module.exports = {
    getBillNoByTableNo,
    addNewBill,
    updateNextBill,
    getBillIDCurrent,
    getBillNoByRefno,
    getAllBillNoToday,
    searchBillNoCondition,
    billRefundStockIn,
    printCopyBill
}

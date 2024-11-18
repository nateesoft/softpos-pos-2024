const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')

router.get('/', function (req, res) {
  const sql = `select * from billno`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {}
    res.status(200).json(response)
  })
});

router.post('/', function (req, res, next) {
  const { B_Refno, B_CuponDiscAmt, B_MacNo, B_Cashier, B_Cust, B_ETD, B_Total, B_Food, B_Drink, B_Product, 
    B_Service, B_ServiceAmt, B_ItemDiscAmt, B_FastDiscAmt, B_EmpDiscAmt, B_TrainDiscAmt, B_MemDiscAmt, 
    B_SubDiscBath, B_ProDiscAmt, B_SpaDiscAmt, B_AdjAmt, B_PreDisAmt, B_NetTotal, B_NetFood, B_NetDrink, 
    B_NetProduct, B_NetVat, B_NetNonVat, B_Vat, B_PayAmt, B_Cash, B_GiftVoucher, B_Earnest, B_Ton, 
    B_CrCharge1, B_CrChargeAmt1, B_CrAmt1, B_AccrAmt, B_AccrCr, B_MemCurSum, B_Void, B_BillCopy, B_PrnCnt, 
    B_ChkBill, B_ChkBillTime, B_CashTime, B_WaitTime, B_SumScore, B_CrCardAmt, B_CrCurPoint, B_CrSumPoint, 
    B_Entertain, B_VoucherDiscAmt, B_VoucherOver, B_NetDiff, B_SumSetDiscAmt, B_DetailFood, B_DetailDrink, 
    B_DetailProduct } = req.body

  pool.query(
    `INSERT INTO MyRestaurantJefferSakon.billno (B_Refno,B_CuponDiscAmt,B_MacNo,B_Cashier,
    B_Cust,B_ETD,B_Total,B_Food,B_Drink,B_Product,B_Service,B_ServiceAmt,B_ItemDiscAmt,B_FastDiscAmt,
    B_EmpDiscAmt,B_TrainDiscAmt,B_MemDiscAmt,B_SubDiscBath,B_ProDiscAmt,B_SpaDiscAmt,B_AdjAmt,B_PreDisAmt,
    B_NetTotal,B_NetFood,B_NetDrink,B_NetProduct,B_NetVat,B_NetNonVat,B_Vat,B_PayAmt,B_Cash,B_GiftVoucher,
    B_Earnest,B_Ton,B_CrCharge1,B_CrChargeAmt1,B_CrAmt1,B_AccrAmt,B_AccrCr,B_MemCurSum,B_Void,B_BillCopy,
    B_PrnCnt,B_ChkBill,B_ChkBillTime,B_CashTime,B_WaitTime,B_SumScore,B_CrCardAmt,B_CrCurPoint,B_CrSumPoint,
    B_Entertain,B_VoucherDiscAmt,B_VoucherOver,B_NetDiff,B_SumSetDiscAmt,B_DetailFood,B_DetailDrink,B_DetailProduct) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,
    ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [B_Refno, B_CuponDiscAmt, B_MacNo, B_Cashier, B_Cust, B_ETD, B_Total, B_Food, B_Drink, B_Product, 
      B_Service, B_ServiceAmt, B_ItemDiscAmt, B_FastDiscAmt, B_EmpDiscAmt, B_TrainDiscAmt, B_MemDiscAmt, 
      B_SubDiscBath, B_ProDiscAmt, B_SpaDiscAmt, B_AdjAmt, B_PreDisAmt, B_NetTotal, B_NetFood, B_NetDrink, 
      B_NetProduct, B_NetVat, B_NetNonVat, B_Vat, B_PayAmt, B_Cash, B_GiftVoucher, B_Earnest, B_Ton, 
      B_CrCharge1, B_CrChargeAmt1, B_CrAmt1, B_AccrAmt, B_AccrCr, B_MemCurSum, B_Void, B_BillCopy, B_PrnCnt, 
      B_ChkBill, B_ChkBillTime, B_CashTime, B_WaitTime, B_SumScore, B_CrCardAmt, B_CrCurPoint, B_CrSumPoint, 
      B_Entertain, B_VoucherDiscAmt, B_VoucherOver, B_NetDiff, B_SumSetDiscAmt, B_DetailFood, B_DetailDrink, 
      B_DetailProduct],
    (err, results) => {
      if (err) throw err
      res.status(201).json({ status: 'data inserted.' })
    }
  )
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { B_Refno, B_CuponDiscAmt, B_MacNo, B_Cashier, B_Cust, B_ETD, B_Total, B_Food, B_Drink, B_Product, 
    B_Service, B_ServiceAmt, B_ItemDiscAmt, B_FastDiscAmt, B_EmpDiscAmt, B_TrainDiscAmt, B_MemDiscAmt, 
    B_SubDiscBath, B_ProDiscAmt, B_SpaDiscAmt, B_AdjAmt, B_PreDisAmt, B_NetTotal, B_NetFood, B_NetDrink, 
    B_NetProduct, B_NetVat, B_NetNonVat, B_Vat, B_PayAmt, B_Cash, B_GiftVoucher, B_Earnest, B_Ton, B_CrCharge1, 
    B_CrChargeAmt1, B_CrAmt1, B_AccrAmt, B_AccrCr, B_MemCurSum, B_VoB_BillCopy, B_PrnCnt, B_ChkBill, B_ChkBillTime, 
    B_CashTime, B_WaitTime, B_SumScore, B_CrCardAmt, B_CrCurPoint, B_CrSumPoint, B_Entertain, B_VoucherDiscAmt, 
    B_VoucherOver, B_NetDiff, B_SumSetDiscAmt, B_DetailFood, B_DetailDrink, B_DetailProduct } = req.body

  pool.query(
    `UPDATE MyRestaurantJefferSakon.billno 
        SET B_Refno = ?,B_CuponDiscAmt = ?,B_MacNo = ?,B_Cashier = ?,B_Cust = ?,B_ETD = ?,B_Total = ?,
        B_Food = ?,B_Drink = ?,B_Product = ?,B_Service = ?,B_ServiceAmt = ?,B_ItemDiscAmt = ?,B_FastDiscAmt = ?,
        B_EmpDiscAmt = ?,B_TrainDiscAmt = ?,B_MemDiscAmt = ?,B_SubDiscBath = ?,B_ProDiscAmt = ?,B_SpaDiscAmt = ?,
        B_AdjAmt = ?,B_PreDisAmt = ?,B_NetTotal = ?,B_NetFood = ?,B_NetDrink = ?,B_NetProduct = ?,B_NetVat = ?,
        B_NetNonVat = ?,B_Vat = ?,B_PayAmt = ?,B_Cash = ?,B_GiftVoucher = ?,B_Earnest = ?,B_Ton = ?,B_CrCharge1 = ?,
        B_CrChargeAmt1 = ?,B_CrAmt1 = ?,B_AccrAmt = ?,B_AccrCr = ?,B_MemCurSum = ?,B_VoB_BillCopy = ?,B_PrnCnt = ?,
        B_ChkBill = ?,B_ChkBillTime = ?,B_CashTime = ?,B_WaitTime = ?,B_SumScore = ?,B_CrCardAmt = ?,B_CrCurPoint = ?,
        B_CrSumPoint = ?,B_Entertain = ?,B_VoucherDiscAmt = ?,B_VoucherOver = ?,B_NetDiff = ?,B_SumSetDiscAmt = ?,
        B_DetailFood = ?,B_DetailDrink = ?,B_DetailProduct = ? 
        WHERE id = ?`,
    [B_Refno, B_CuponDiscAmt, B_MacNo, B_Cashier, B_Cust, B_ETD, B_Total, B_Food, B_Drink, B_Product, 
      B_Service, B_ServiceAmt, B_ItemDiscAmt, B_FastDiscAmt, B_EmpDiscAmt, B_TrainDiscAmt, B_MemDiscAmt, 
      B_SubDiscBath, B_ProDiscAmt, B_SpaDiscAmt, B_AdjAmt, B_PreDisAmt, B_NetTotal, B_NetFood, B_NetDrink, 
      B_NetProduct, B_NetVat, B_NetNonVat, B_Vat, B_PayAmt, B_Cash, B_GiftVoucher, B_Earnest, B_Ton, B_CrCharge1, 
      B_CrChargeAmt1, B_CrAmt1, B_AccrAmt, B_AccrCr, B_MemCurSum, B_VoB_BillCopy, B_PrnCnt, B_ChkBill, B_ChkBillTime, 
      B_CashTime, B_WaitTime, B_SumScore, B_CrCardAmt, B_CrCurPoint, B_CrSumPoint, B_Entertain, B_VoucherDiscAmt, 
      B_VoucherOver, B_NetDiff, B_SumSetDiscAmt, B_DetailFood, B_DetailDrink, B_DetailProduct, id],
    (err, results) => {
      if (err) throw err

      res.status(200).json({ status: "update success" })
    }
  )
})

module.exports = router;

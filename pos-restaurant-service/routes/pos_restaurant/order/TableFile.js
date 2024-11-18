const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')

router.post('/checkTableOpen', function (req, res, next) {
  const { tableNo } = req.body
  const sql = `select Cashier from tablefile where TOnact='Y' and tcode='${tableNo}'`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = { tableStatus: "available" }
    if (results.length > 0) {
      response.tableStatus = "employInUse"
    }
    res.status(200).json(response)
  })
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { Tcode, SoneCode, TCustomer, TItem, TAmount, TOnAct, Service, ServiceAmt, EmpDiscAmt, FastDiscAmt, 
    TrainDiscAmt, MemDiscAmt, SubDiscAmt, DiscBath, ProDiscAmt, SpaDiscAmt, CuponDiscAmt, ItemDiscAmt, 
    MemCurAmt, Food, Drink, Product, NetTotal, PrintTotal, PrintChkBill, PrintCnt, ChkBill, ChkBillTime, 
    StkCode1, StkCode2, TDesk } = req.body

  pool.query(
    `UPDATE MyRestaurantJefferSakon.tablefile 
      SET Tcode = ?,SoneCode = ?,TCustomer = ?,TItem = ?,TAmount = ?,TOnAct = ?,Service = ?,ServiceAmt = ?,
      EmpDiscAmt = ?,FastDiscAmt = ?,TrainDiscAmt = ?,MemDiscAmt = ?,SubDiscAmt = ?,DiscBath = ?,ProDiscAmt = ?,
      SpaDiscAmt = ?,CuponDiscAmt = ?,ItemDiscAmt = ?,MemCurAmt = ?,Food = ?,Drink = ?,Product = ?,NetTotal = ?,
      PrintTotal = ?,PrintChkBill = ?,PrintCnt = ?,ChkBill = ?,ChkBillTime = ?,StkCode1 = ?,StkCode2 = ?,TDesk = ? 
      WHERE id = ?`,
    [Tcode, SoneCode, TCustomer, TItem, TAmount, TOnAct, Service, ServiceAmt, EmpDiscAmt, FastDiscAmt, 
      TrainDiscAmt, MemDiscAmt, SubDiscAmt, DiscBath, ProDiscAmt, SpaDiscAmt, CuponDiscAmt, ItemDiscAmt, 
      MemCurAmt, Food, Drink, Product, NetTotal, PrintTotal, PrintChkBill, PrintCnt, ChkBill, ChkBillTime, 
      StkCode1, StkCode2, TDesk, id],
    (err, results) => {
      if (err) throw err

      res.status(200).json({ status: "update success" })
    }
  )
})

module.exports = router;

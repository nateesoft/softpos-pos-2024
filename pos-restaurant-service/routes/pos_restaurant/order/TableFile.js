const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')
const TableFileService = require('../../../services/TableFileService')

router.post('/checkTableOpen', function (req, res, next) {
  const { tableNo } = req.body
  TableFileService.checkTableOpen(tableNo)
    .then(rows => {
      if (rows === null) {
        return res.status(200).json({
          status: 2000,
          data: { tableStatus: "available" }
        })
      } else {
        res.status(200).json({
          status: 2000,
          data: { tableStatus: "cashierInUse", Cashier: rows.Cashier, Employ: rows.TUser }
        })
      }
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.patch('/updateOpenTable/:tableNo', function (req, res, next) {
  const { tableNo } = req.params
  const { Cashier, TUser } = req.body
  TableFileService.updateTableOpenStatus(tableNo, Cashier, TUser)
    .then(rows => {
      return res.status(200).json({
        status: 2000,
        data: { message: `update success ${rows}` }
      })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.patch('/updateMember/:tableNo', function (req, res, next) {
  const { tableNo } = req.params
  const { Member_Code, Member_NameThai, Member_AppliedDate, Member_ExpiredDate } = req.body
  TableFileService.updateMember({
    Member_Code, Member_NameThai, Member_AppliedDate, Member_ExpiredDate 
  }, tableNo)
    .then(rows => {
      return res.status(200).json({
        status: 2000,
        data: { message: `update success ${tableNo}` }
      })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err })
    })
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { Tcode, SoneCode, TCustomer, TItem, TAmount, TOnAct, Service, ServiceAmt, EmpDiscAmt, FastDiscAmt,
    TrainDiscAmt, MemDiscAmt, SubDiscAmt, DiscBath, ProDiscAmt, SpaDiscAmt, CuponDiscAmt, ItemDiscAmt,
    MemCurAmt, Food, Drink, Product, NetTotal, PrintTotal, PrintChkBill, PrintCnt, ChkBill, ChkBillTime,
    StkCode1, StkCode2, TDesk } = req.body

  pool.query(
    `UPDATE tablefile 
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

router.post('/summaryBalance', (req, res) => {
  const {tableNo} = req.body
  TableFileService.summaryBalance(tableNo)
    .then(rows => {
      res.status(200).json({ status: 2000, data: rows })
    })
    .catch(err => {
      res.status(500).json({ status: 5000, data: null, errorMessage: err.message })
    })
});

module.exports = router;

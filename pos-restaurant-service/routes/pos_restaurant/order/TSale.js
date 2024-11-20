const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')

router.get('/', function (req, res) {
  const sql = `select * from t_sale`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {}
    res.status(200).json(response)
  })
});

router.post('/', function (req, res, next) {
  const { R_Index, R_Refno, R_Date, R_Time, MacNo, Cashier, R_Emp, R_PluCode, R_Redule, R_PreDisAmt, R_Refund,
    R_Void, StkCode, PosStk, R_ServiceAmt, R_PItemNo, R_PKicQue, R_PrVcAmt, R_PrVcAdj, R_MoveFlag, R_Pause,
    R_SPIndex, R_SetPrice, R_SetDiscAmt, R_Return, R_Earn } = req.body

  pool.query(
    `INSERT INTO t_sale (R_Index,R_Refno,R_Date,R_Time,MacNo,Cashier,
       R_Emp,R_PluCode,R_Redule,R_PreDisAmt,R_Refund,R_Void,StkCode,PosStk,R_ServiceAmt,R_PItemNo,
       R_PKicQue,R_PrVcAmt,R_PrVcAdj,R_MoveFlag,R_Pause,R_SPIndex,R_SetPrice,R_SetDiscAmt,R_Return,R_Earn) 
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [R_Index, R_Refno, R_Date, R_Time, MacNo, Cashier, R_Emp, R_PluCode, R_Redule, R_PreDisAmt, R_Refund,
      R_Void, StkCode, PosStk, R_ServiceAmt, R_PItemNo, R_PKicQue, R_PrVcAmt, R_PrVcAdj, R_MoveFlag, R_Pause,
      R_SPIndex, R_SetPrice, R_SetDiscAmt, R_Return, R_Earn],
    (err, results) => {
      if (err) throw err
      res.status(201).json({ status: 'data inserted.' })
    }
  )
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { R_Index, R_Refno, R_Date, R_Time, MacNo, Cashier, R_Emp, R_PluCode, R_Redule, R_PreDisAmt,
    R_Refund, R_VoStkCode, PosStk, R_ServiceAmt, R_PItemNo, R_PKicQue, R_PrVcAmt, R_PrVcAdj, R_MoveFlag,
    R_Pause, R_SPIndex, R_SetPrice, R_SetDiscAmt, R_Return, R_Earn } = req.body

  pool.query(
    `UPDATE t_sale 
        SET R_Index = ?,R_Refno = ?,R_Date = ?,R_Time = ?,MacNo = ?,Cashier = ?,R_Emp = ?,R_PluCode = ?,
        R_Redule = ?,R_PreDisAmt = ?,R_Refund = ?,R_VoStkCode = ?,PosStk = ?,R_ServiceAmt = ?,R_PItemNo = ?,
        R_PKicQue = ?,R_PrVcAmt = ?,R_PrVcAdj = ?,R_MoveFlag = ?,R_Pause = ?,R_SPIndex = ?,R_SetPrice = ?,
        R_SetDiscAmt = ?,R_Return = ?,R_Earn = ? 
        WHERE id = ?`,
    [R_Index, R_Refno, R_Date, R_Time, MacNo, Cashier, R_Emp, R_PluCode, R_Redule, R_PreDisAmt,
      R_Refund, R_VoStkCode, PosStk, R_ServiceAmt, R_PItemNo, R_PKicQue, R_PrVcAmt, R_PrVcAdj, R_MoveFlag,
      R_Pause, R_SPIndex, R_SetPrice, R_SetDiscAmt, R_Return, R_Earn, id],
    (err, results) => {
      if (err) throw err

      res.status(200).json({ status: "update success" })
    }
  )
})

module.exports = router;

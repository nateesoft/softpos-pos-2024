const express = require('express');
const router = express.Router();

const pool = require('../../../config/database')

router.get('/', function (req, res) {
  const sql = `select * from balance`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {}
    res.status(200).json(response)
  })
});

router.post('/', function (req, res, next) {
  const { R_Table, R_PluCode, R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt,
    R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum,
    R_PrVcAmt, R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom } = req.body

  pool.query(
    `INSERT INTO MyRestaurantJefferSakon.balance 
    (R_Table,R_PluCode,R_Quan,R_Price,R_Total,R_PrBath,R_PrAmt,R_DiscBath,R_PrCuQuan,R_PrCuAmt,
    R_Redule,R_Serve,R_PrintOK,R_KicOK,StkCode,PosStk,R_Order,R_PItemNo,R_PKicQue,R_MemSum,
    R_PrVcAmt,R_PrVcAdj,R_VoidQuan,R_MoveFlag,R_MovePrint,R_Pause,R_SPIndex,R_Earn,R_SeparateFrom) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    [R_Table, R_PluCode, R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt,
      R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum, R_PrVcAmt,
      R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom],
    (err, results) => {
      if (err) throw err
      res.status(201).json({ status: 'data inserted.' })
    }
  )
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { R_Table, R_PluCode, R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt, 
    R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum, R_PrVcAmt, 
    R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom } = req.body

  pool.query(
    `UPDATE MyRestaurantJefferSakon.balance 
      SET R_Table = ?,R_PluCode = ?,R_Quan = ?,R_Price = ?,R_Total = ?,R_PrBath = ?,R_PrAmt = ?,R_DiscBath = ?,
      R_PrCuQuan = ?,R_PrCuAmt = ?,R_Redule = ?,R_Serve = ?,R_PrintOK = ?,R_KicOK = ?,StkCode = ?,PosStk = ?,
      R_Order = ?,R_PItemNo = ?,R_PKicQue = ?,R_MemSum = ?,R_PrVcAmt = ?,R_PrVcAdj = ?,R_VoidQuan = ?,
      R_MoveFlag = ?,R_MovePrint = ?,R_Pause = ?,R_SPIndex = ?,R_Earn = ?,R_SeparateFrom = ? 
      WHERE id = ?`,
    [R_Table, R_PluCode, R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt, 
      R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum, R_PrVcAmt, 
      R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom, id],
    (err, results) => {
      if (err) throw err

      res.status(200).json({ status: "update success" })
    }
  )
})

module.exports = router;

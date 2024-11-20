const express = require('express');
const router = express.Router();

const pool = require('../../../config/database/MySqlConnect')
const { Unicode2ASCII, ASCII2Unicode } = require('../../../utils/StringUtil')

router.get('/', function (req, res) {
  const sql = `select * from balance`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const response = {}
    res.status(200).json(response)
  })
});

router.get('/table/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  const sql = `select * from balance where R_Table='${tableNo}'`
  pool.query(sql, (err, results) => {
    if (err) throw err

    const newResult = results.map(data => {
      return {...data, R_PName: ASCII2Unicode(data.R_PName)}
    })

    const response = {
      data: newResult
    }
    res.status(200).json(response)
  })
});

router.get('/getMaxIndex/:tableNo', function (req, res) {
  const tableNo = req.params.tableNo
  const sql = `select max(R_Index) R_Index 
    from balance 
    where R_Table='${tableNo}' order by r_index`
  pool.query(sql, (err, results) => {
    if (err) throw err

    let id = 1
    let index = tableNo + "/001";
    const R_Index = results[0].R_Index
    if (R_Index) {
      let data = R_Index.split("/");
      id = parseInt(data[1]) + 1

      if (id < 10) {
        index = tableNo + "/00" + id;
      } else if (id < 100) {
        index = tableNo + "/0" + id;
      } else if (id < 1000) {
        index = tableNo + "/" + id;
      }
    }
    const response = {
      R_Index: index
    }
    res.status(200).json(response)
  })
});

router.post('/', function (req, res, next) {
  const { 
    R_Index, R_Table, R_PluCode, R_PName, R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt,
    R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum,
    R_PrVcAmt, R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom,
    Macno, Cashier, R_Emp, R_ETD } = req.body

  pool.query(
    `INSERT INTO balance 
    (R_Index,R_Table,R_PluCode,R_PName,R_Quan,R_Price,R_Total,R_PrBath,R_PrAmt,R_DiscBath,R_PrCuQuan,R_PrCuAmt,
    R_Redule,R_Serve,R_PrintOK,R_KicOK,StkCode,PosStk,R_Order,R_PItemNo,R_PKicQue,R_MemSum,
    R_PrVcAmt,R_PrVcAdj,R_VoidQuan,R_MoveFlag,R_MovePrint,R_Pause,R_SPIndex,R_Earn,R_SeparateFrom, 
    R_Date, R_Time, macno, Cashier, R_Emp, R_ETD) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, 
    curdate(), SUBSTR(now(), 12), ?, ?, ?, ?)`,
    [R_Index, R_Table, R_PluCode, Unicode2ASCII(R_PName), R_Quan, R_Price, R_Total, R_PrBath, R_PrAmt, R_DiscBath, R_PrCuQuan, R_PrCuAmt,
      R_Redule, R_Serve, R_PrintOK, R_KicOK, StkCode, PosStk, R_Order, R_PItemNo, R_PKicQue, R_MemSum, R_PrVcAmt,
      R_PrVcAdj, R_VoidQuan, R_MoveFlag, R_MovePrint, R_Pause, R_SPIndex, R_Earn, R_SeparateFrom, 
      Macno, Cashier, R_Emp, R_ETD],
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
    `UPDATE balance 
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

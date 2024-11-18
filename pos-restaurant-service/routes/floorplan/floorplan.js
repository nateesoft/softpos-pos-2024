const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

router.get('/:id', function (req, res) {
  const id = req.params.id
  const response = {}
  const sql = `select * from floorplan_setup where id='${id}'`
  console.log(sql)
  pool.query(sql, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

router.post('/', function (req, res) {
  const { id, table_no, zone, customer_size, table_image, table_status } = req.body
  console.log(req.body)
  pool.query(
    `INSERT INTO floorplan_setup 
      (id,table_no,zone,customer_size,table_image,table_status) 
      VALUES (?,?,?,?,?,?)`, [id, table_no, zone, customer_size, table_image, table_status],
    (err, results) => {
      if (err) throw err
      res.status(200).json({ status: 'data inserted.' })
    }
  )
});

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  const { table_no,zone,customer_size,table_image,table_status } = req.body

  pool.query(
      `UPDATE floorplan_setup 
      SET table_no = ?,zone = ?,customer_size = ?,table_image = ?,table_status = ? 
      WHERE id = ?`, 
      [ table_no,zone,customer_size,table_image,table_status, id ],
      (err, results) => {
          if (err) throw err

          res.status(200).json({ status: "update success"})
      }
  )
})

module.exports = router;

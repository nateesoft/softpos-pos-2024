const express = require('express');
const router = express.Router();

const pool = require('../../config/database')

router.get('/:id', function (req, res) {
  const id = req.params.id
  const response = {}
  const sql = `select * from floorplan_template where id='${id}'`
  console.log(sql)
  pool.query(sql, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results.length > 0 ? results[0] : null

    res.status(200).json(response)
  })
});

router.patch('/:id', function (req, res, next) {
  const id = req.params.id
  const { template } = req.body

  pool.query(
    `UPDATE floorplan_template set template=? WHERE id = ?`,
    [template, id],
    (err, results) => {
      if (err) {
        console.log('err:', err)
        throw err
      }

      res.status(200).json({ status: "update success" })
    }
  )
})

module.exports = router;

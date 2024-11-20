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
    response.data = results[0]

    res.status(200).json(response)
  })
});

module.exports = router;

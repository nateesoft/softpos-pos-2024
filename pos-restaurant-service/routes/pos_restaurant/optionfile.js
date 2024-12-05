const express = require('express');
const router = express.Router();

const pool = require('../../config/database/MySqlConnect')

/* GET all optionfile. */
router.get('/', function (req, res, next) {
  const response = {}

  pool.query(`SELECT * FROM optionfile`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

/* GET optionfile by Product Code. */
router.get('/:productCode', function (req, res, next) {
  const { productCode } = req.params
  const response = {}

  pool.query(`select o.* from product p 
    inner join optionfile o on p.PGroup = o.PGroup 
    where p.PCode = '${productCode}'`, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});

module.exports = router;

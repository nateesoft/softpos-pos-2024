const uuid = require("uuid")
const express = require('express');
const router = express.Router();

const pool = require('../../../config/database')

router.post('/login', function (req, res, next) {
  const { username, password, macno } = req.body
  const response = {}
  const sql = `select username,password,name,onact,macno 
                from posuser 
                where username='${username}' 
                and password='${password}' `
  pool.query(sql, (err, results) => {
    if (err) throw err

    const sqlUpdate = `update posuser 
        set onact='Y', macno='${macno}' where username='${username}'`
    pool.query(sqlUpdate, (err2, results2) => {
      if (err2) throw err2

      response.status = true
      response.code = 200
      response.message = "Success"
      response.data = results

      res.status(200).json(response)
    })
  })
});

router.patch('/logout', function (req, res, next) {
  const { username } = req.body
  const response = {}
  const sqlUpdate = `update posuser set onact='N' where username='${username}'`
  pool.query(sqlUpdate, (err, results) => {
    if (err) throw err

    response.status = true
    response.code = 200
    response.message = "Success"
    response.data = results

    res.status(200).json(response)
  })
});


module.exports = router;

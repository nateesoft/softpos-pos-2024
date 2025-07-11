const pool = require("../config/database/MySqlConnect")

const getBranchByOne = async () => {
    const sql = `select * from branch limit 1`;
    const results = await pool.query(sql)
    return results
}

const getAllBranch = async () => {
    const sql = `select * from branch`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getBranchByOne,
    getAllBranch
}
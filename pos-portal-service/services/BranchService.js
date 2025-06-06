const pool = require('../config/database/MySqlConnect')
const { mappingResultData, mappingResultDataList } = require('../utils/ConvertThai');

const getBranch = async () => {
    const sql = `select * from branch limit 1`;
    const results = await pool.query(sql)
    return mappingResultData(results)
}

const getAllBranch = async () => {
    const sql = `select * from branch`;
    const results = await pool.query(sql)
    return mappingResultDataList(results)
}

module.exports = {
    getBranch,
    getAllBranch
}

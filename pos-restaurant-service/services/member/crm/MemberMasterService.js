const pool = require('../../../config/database/MyCrmDB')
const { ASCII2Unicode } = require('../../../utils/StringUtil')

const getData = async () => {
    const sql = `select * from memmaster order by Member_Code`;
    const results = await pool.query(sql)
    const mappingResult = results.map((item, index) => {
        return { ...item, Member_NameThai: ASCII2Unicode(item.Member_NameThai) }
    })

    return mappingResult
}

const getDataByMemberCode = async (Member_Code) => {
    const sql = `select * from memmaster where Member_Code='${Member_Code}'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return { ...results[0], Member_NameThai: ASCII2Unicode(results[0].Member_NameThai) }
    }
    return null
}

module.exports = {
    getData,
    getDataByMemberCode
}

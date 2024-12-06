const pool = require('../../config/database')

const getMenuSetup = async () => {
    const sql = `SELECT * FROM menu_setup where menu_type='product'`;
    const results = await pool.query(sql)
    return results
}

const getMenuSetupAll = async () => {
    const sql = `SELECT * FROM menu_setup`;
    const results = await pool.query(sql)
    return results
}

const getOptionalByMenuCode = async (menuCode) => {
    const sql = `SELECT * FROM menu_setup where menu_type='optional' and ref_menu='${menuCode}'`;
    const results = await pool.query(sql)
    return results
}

const getMenuSetupByMenuCode = async (menuCode) => {
    const sql = `SELECT * FROM menu_setup where menu_type='product' and menu_code='${menuCode}'`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getMenuSetup,
    getMenuSetupAll,
    getOptionalByMenuCode,
    getMenuSetupByMenuCode
}

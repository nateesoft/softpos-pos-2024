const pool = require('../config/database')

const getTemplateById = async (id) => {
    const sql = `select * from floorplan_template where id='${id}'`
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const updateTemplate = async (payload, id) => {
    const { template } = payload
    const sql = `UPDATE floorplan_template set template=? WHERE id = '${id}'`
    const results = await pool.query(sql, [template])
    return results
}

const getFloorPlanById = async (id) => {
    const sql = `select * from floorplan_setup where id='${id}'`
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const createSetupFloorPlan = async (payload) => {
    const { id, table_no, zone, customer_size, table_image, table_status } = payload
    const sql = `INSERT INTO floorplan_setup 
      (id,table_no,zone,customer_size,table_image,table_status) 
      VALUES (?,?,?,?,?,?)`
    const results = await pool.query(sql, [id, table_no, zone, customer_size, table_image, table_status])
    return results
}

const updateFloorPlanSetup = async (payload, id) => {
    const { table_no, zone, customer_size, table_image, table_status } = payload
    const sql = `UPDATE floorplan_setup 
      SET table_no = ?,zone = ?,customer_size = ?,table_image = ?,table_status = ? 
      WHERE id = ?`
    const results = await pool.query(sql, [table_no, zone, customer_size, table_image, table_status, id])
    return results
}

module.exports = {
    getTemplateById,
    updateTemplate,
    getFloorPlanById,
    createSetupFloorPlan,
    updateFloorPlanSetup
}

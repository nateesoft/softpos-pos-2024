const pool = require('../../config/database');
const mysqlPool = require('../../config/database/MySqlConnect');

const { getMoment } = require('../../utils/MomentUtil');

const getTableInfo = async (tableNo) => {
    const sql = `select * from table_checkin where Tcode='${tableNo}' and active='Y'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const getLastTableCheckIn = async (tableNo) => {
    const sql = `select * from table_checkin tc 
        where tc.Tcode='${tableNo}' 
        order by datetime_checkin 
        desc limit 1`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const updateTableCustomer = async (tableNo, customerCount) => {
    const sql = `update tablefile 
    set TCustomer='${customerCount}' 
    where TCode='${tableNo}'`;
    const results = await mysqlPool.query(sql)
    return results
}

const updateInActiveTable = async (tableNo) => {
    const sql = `update table_checkin set active='N' where Tcode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const createData = async (tableNo, payload) => {
    const { empCode, macno,
        customer_count, cust_man_count, cust_woman_count, cust_kid_count, cust_old_count,
        cust_thai_count, cust_europe_count, cust_america_count, cust_asia_count,
        customer_name, member_code, book_no, table_order_type_start = "E" } = payload
    const emp_code_first = empCode;

    const tableInfo = await getTableInfo(tableNo) // check exists data
    if (tableInfo) {
        return updateData(tableNo, { ...payload, })
    }

    const dateTimeCheckin = getMoment().format('YYYY-MM-DD HH:mm:ss')

    const sql = `INSERT INTO table_checkin 
                (Tcode,emp_code_first,emp_code_last,macno,
                customer_count,cust_man_count,cust_woman_count,cust_kid_count,cust_old_count,
                datetime_checkin,customer_name,member_code,book_no,table_order_type_start,
                cust_thai_count,cust_europe_count,cust_america_count,cust_asia_count) 
                VALUES ('${tableNo}','${emp_code_first}','','${macno}',
                '${customer_count}','${cust_man_count}','${cust_woman_count}','${cust_kid_count}','${cust_old_count}',
                '${dateTimeCheckin}','${customer_name}','${member_code}','${book_no}','${table_order_type_start}',
                '${cust_thai_count}', '${cust_europe_count}', '${cust_america_count}', '${cust_asia_count}')`;
    const results = await pool.query(sql)

    // update tablefile
    updateTableCustomer(tableNo, customer_count)

    return results
}

const updateData = async (tableNo, payload) => {
    const { empCode, macno,
        customer_count, cust_man_count, cust_woman_count, cust_kid_count, cust_old_count,
        customer_name, member_code, book_no, table_order_type_start,
        cust_thai_count, cust_europe_count, cust_america_count, cust_asia_count } = payload
    const emp_code_last = empCode;

    const sql = `UPDATE table_checkin 
                SET emp_code_last='${emp_code_last}', 
                macno='${macno}',
                customer_count='${customer_count}',
                cust_man_count='${cust_man_count}',
                cust_woman_count='${cust_woman_count}',
                cust_kid_count='${cust_kid_count}',
                cust_old_count='${cust_old_count}',
                cust_thai_count='${cust_thai_count}',
                cust_europe_count='${cust_europe_count}',
                cust_america_count='${cust_america_count}',
                cust_asia_count='${cust_asia_count}',
                customer_name='${customer_name}',
                member_code='${member_code}',
                book_no='${book_no}',
                table_order_type_start='${table_order_type_start}' 
                WHERE Tcode='${tableNo}'`;
    const results = await pool.query(sql)

    // update tablefile
    await updateTableCustomer(tableNo, customer_count)

    return results
}

module.exports = {
    getTableInfo,
    createData,
    updateData,
    updateInActiveTable,
    getLastTableCheckIn
}

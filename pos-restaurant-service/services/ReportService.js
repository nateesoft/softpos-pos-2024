const pool = require('../config/database/MySqlConnect')

const getTableOnAction = async () => {
    const sql = `select R_Table,sum(R_Total) R_Total,R_Void,TCurTime,TCustomer 
                from balance left join tablefile on balance.r_table=tablefile.tcode 
                where r_void<>'V' 
                group by r_table, r_void`;
    const results = await pool.query(sql)
    const sql2 = `select sum(R_Total) R_Total from balance where r_void<>'V'`;
    const resultFooter = await pool.query(sql2)
    const reponse = {
        header: {},
        data: results,
        footer: {
            total: resultFooter[0].R_Total
        }
    }
    return reponse
}

const getTableOnActionList = async () => {
    const sql = `select b.Macno, R_Table, R_Date ,sum(R_Total) R_Total, R_Void, TCurTime, TCustomer 
                from balance b left join tablefile t on b.r_table=t.tcode 
                where b.r_void<>'V' 
                group by b.Macno, b.r_table, b.r_date, b.r_void`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getTableOnAction,
    getTableOnActionList
}

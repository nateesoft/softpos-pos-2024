const pool = require('../config/database/MySqlConnect')

const getTableOnAction = async () => {
    const sql = `select R_Table,sum(R_Total) R_Total,R_Void,TCurTime,TCustomer 
                from balance left join tablefile on balance.r_table=tablefile.tcode 
                where r_void<>'V' 
                group by r_table, r_void`;
    const results = await pool.query(sql)
    return results
}

module.exports = {
    getTableOnAction
}

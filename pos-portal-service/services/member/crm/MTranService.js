const pool = require('../../../config/database/MyCrmDB');
const { getMoment } = require('../../../utils/MomentUtil');

const createMtran = async payload => {
    const { Service_Date, Receipt_No, Member_Code, Branch_Code, Sale_Type, GrossAmount, DiscountAmount,
        NetAmount, Mechine_Code, Employee_Code, Service_Time, Score, TranferFlag } = payload
    const sql = `INSERT INTO mtran 
                (Service_Date,Member_Code,Branch_Code,Receipt_No,
                Sale_Type,GrossAmount,DiscountAmount,NetAmount,
                Mechine_Code,Employee_Code,Service_Time,Score,TranferFlag) 
                VALUES ('${Service_Date}','${Member_Code}','${Branch_Code}','${Receipt_No}',
                '${Sale_Type}','${GrossAmount}','${DiscountAmount}','${NetAmount}',
                '${Mechine_Code}','${Employee_Code}','${Service_Time}','${Score}','${TranferFlag}')`;
    const result = await pool.query(sql)
    return result
}

const updateMtran = async payload => {
    const { Service_Date, Receipt_No, Member_Code, Branch_Code, Sale_Type, GrossAmount, DiscountAmount,
        NetAmount, Mechine_Code, Employee_Code, Service_Time, Score, TranferFlag } = payload
    const sql = `UPDATE mtran 
            SET Service_Date='${Service_Date}',
            Branch_Code='${Branch_Code}',
            Sale_Type='${Sale_Type}',
            GrossAmount='${GrossAmount}',
            DiscountAmount='${DiscountAmount}',
            NetAmount='${NetAmount}',
            Mechine_Code='${Mechine_Code}',
            Employee_Code='${Employee_Code}',
            Service_Time='${Service_Time}',
            Score='${Score}',
            TranferFlag='${TranferFlag}' 
            WHERE Receipt_No='${Receipt_No}' and Member_Code='${Member_Code}'`;
    const result = await pool.query(sql)
    return result
}

const getReportCashier = async (cashier, branchCode) => {
    const sql = `SELECT Employee_Code, 
          COUNT(Member_Code) TotalMember, 
          SUM(NetAmount) NetAmount, 
          SUM(Score) TotalScore 
          FROM mtran 
          WHERE Service_Date='${getMoment().format("YYYY-MM-DD")}' 
          AND Employee_Code='${cashier}' 
          AND Branch_Code='${branchCode}' 
          GROUP BY Employee_Code`;
    const result = await pool.query(sql)
    if(result.length>0){
      return result[0]
    }
    return {}
}

const getReportTerminal = async (macno, branchCode) => {
    const sql = `SELECT Mechine_Code, 
          COUNT(Member_Code) TotalMember, 
          SUM(NetAmount) NetAmount, 
          SUM(Score) TotalScore 
          FROM mtran 
          WHERE Service_Date='${getMoment().format("YYYY-MM-DD")}' 
          AND Mechine_Code='${macno}' 
          AND Branch_Code='${branchCode}' 
          GROUP BY Mechine_Code`;
    const result = await pool.query(sql)
    if(result.length>0){
      return result[0]
    }
    return {}
}

module.exports = {
    createMtran,
    updateMtran,
    getReportCashier,
    getReportTerminal
}

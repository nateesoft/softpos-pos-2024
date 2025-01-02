const pool = require('../config/database/MySqlConnect');
const { getMoment } = require('../utils/MomentUtil');

const getTempCredit = async (macno) => {
    const sql = `select * from tempcredit where Mac_No='${macno}'`;
    const results = await pool.query(sql)
    return results
}

const createTempCredit = async (payload) => {
    const S_Date = getMoment().format('YYYY-MM-DD')
    const { MacNo, Ref_No, CrCode, CrNumber, CrApprove, Terminal, 
        CrCreditAmount, CrChargePercent, CrChargeAmount } = payload
    const sql = `INSERT INTO tempcredit 
            (Mac_No,S_Date,Terminal,Ref_No,CrCode,CrId,CrApp,CrAmt,CrCharge,CrChargeAmount) 
            VALUES ('${MacNo}','${S_Date}','${Terminal}', '${Ref_No}','${CrCode}',
            '${CrNumber}','${CrApprove}','${CrCreditAmount}','${CrChargePercent}','${CrChargeAmount}')`;
    const results = await pool.query(sql)
    return results
}

const createListTempCredit = async (arrCreditList) => {
    return arrCreditList.map(async item => {
        return await createTempCredit(item)
    })
}

module.exports = {
    getTempCredit,
    createTempCredit,
    createListTempCredit
}

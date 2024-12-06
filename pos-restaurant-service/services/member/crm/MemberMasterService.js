const pool = require('../../../config/database/MyCrmDB')
const { ASCII2Unicode, Unicode2ASCII } = require('../../../utils/StringUtil')

const getData = async () => {
    const sql = `select * from memmaster order by Member_Code limit 0, 50`;
    const results = await pool.query(sql)
    const mappingResult = results.map((item, index) => {
        return { ...item, Member_NameThai: ASCII2Unicode(item.Member_NameThai) }
    })

    return mappingResult
}

const searchData = async (phone, code, name) => {
    let sql = `select * from memmaster `;
    if (phone && phone !== '') {
        sql = sql + ` where  replace(Member_Mobile, '-', '') = '${phone.replace('-', '')}' limit 0, 100`
    } else if (code && code !== '') {
        sql = sql + ` where Member_Code = '${code}' limit 0, 100`
    } else if (name && name !== '') {
        sql = sql + ` where 
        (Member_NameThai = '%${Unicode2ASCII(name)}%' 
        or Member_NameThai like '%${name}%' 
        or Member_NameEng like '%${name}%') 
        limit 0, 100`
    } else {
        sql = sql + ` limit 0,0`
    }
    console.log('search query:', sql)
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

const updateRefundMember = async (billData) => {
    let sql = `update memmaster 
        set Member_TotalPurchase=Member_TotalPurchase-${billData.B_NetTotal} ,
        Member_TotalScore=Member_TotalScore-${billData.B_MemCurSum} 
        where (Member_Code='${billData.B_MemCode}')`
    const results = await pool.query(sql)

    // empty mplu
    let receiptNo = `${billData.B_MacNo}/${billData.B_Refno}`;
    await pool.query(`delete from mplu where Receipt_No='${receiptNo}'`)
    await pool.query(`delete from mtran where Receipt_No='${receiptNo}'`)
    
    return results
}

module.exports = {
    getData,
    getDataByMemberCode,
    searchData,
    updateRefundMember
}

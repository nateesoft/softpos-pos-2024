const pool = require('../config/database/MySqlConnect');
const { getMoment } = require('../utils/MomentUtil');

const getTableOnAction = async () => {
    const sql = `select R_Date, R_Table,sum(R_Total) R_Total,R_Void,TCurTime,TCustomer 
                from balance left join tablefile on balance.r_table=tablefile.tcode 
                where r_void<>'V' 
                group by r_date, r_table, r_void`;
    const results = await pool.query(sql)
    const sql2 = `select sum(R_Total) R_Total 
    from balance where r_void<>'V'`;
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
    const sql = `select b.Macno, R_Table, R_Date ,
                sum(R_Total) R_Total, R_Void, TCurTime, TCustomer 
                from balance b left join tablefile t on b.r_table=t.tcode 
                where b.r_void<>'V' 
                group by b.Macno, b.r_table, b.r_date, b.r_void`;
    const results = await pool.query(sql)
    return results
}

const getTerminalByMacno = async (macno) => {
    const sql = `SELECT B_MacNo,
            SUM(B_Food) B_Food,
            SUM(B_Drink) B_Drink,
            SUM(B_Product) B_Product,
            SUM(B_Total) Dept_Sum,
            SUM(B_ServiceAmt) B_ServiceAmt,
            SUM(B_CrChargeAmt1) B_CrChargeAmt1,
            SUM(B_MemDiscAmt) B_MemDiscAmt,
            SUM(B_FastDiscAmt) B_FastDiscAmt,
            SUM(B_EmpDiscAmt) B_EmpDiscAmt,
            SUM(B_TrainDiscAmt) B_TrainDiscAmt,
            SUM(B_SubDiscAmt) B_SubDiscAmt,
            SUM(B_SubDiscBath) B_SubDiscBath,
            SUM(B_ProDiscAmt) B_ProDiscAmt,
            SUM(B_SpaDiscAmt) B_SpaDiscAmt,
            SUM(B_ItemDiscAmt) B_ItemDiscAmt,
            SUM(B_CuponDiscAmt) B_CuponDiscAmt,
            SUM(B_Earnest) B_Earnest,
            SUM(B_NetTotal) B_NetTotal,
            SUM(B_Cash) B_Cash,
            SUM(B_GiftVoucher) B_GiftVoucher,
            SUM(B_NetVat) B_NetVat,
            SUM(B_NetNonVat) B_NetNonVat,
            SUM(B_Vat) B_Vat,
            SUM(B_Cust) B_Cust 
            FROM billno 
            WHERE B_OnDate='${getMoment().format('YYYY-MM-DD')}' and B_Void <> 'V' and B_MacNo ='${macno}'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const getTerminalByCashier = async (cashier) => {
    const sql = `SELECT B_Cashier,
            SUM(B_Food) B_Food,
            SUM(B_Drink) B_Drink,
            SUM(B_Product) B_Product,
            SUM(B_Total) Dept_Sum,
            SUM(B_ServiceAmt) B_ServiceAmt,
            SUM(B_CrChargeAmt1) B_CrChargeAmt1,
            SUM(B_MemDiscAmt) B_MemDiscAmt,
            SUM(B_FastDiscAmt) B_FastDiscAmt,
            SUM(B_EmpDiscAmt) B_EmpDiscAmt,
            SUM(B_TrainDiscAmt) B_TrainDiscAmt,
            SUM(B_SubDiscAmt) B_SubDiscAmt,
            SUM(B_SubDiscBath) B_SubDiscBath,
            SUM(B_ProDiscAmt) B_ProDiscAmt,
            SUM(B_SpaDiscAmt) B_SpaDiscAmt,
            SUM(B_ItemDiscAmt) B_ItemDiscAmt,
            SUM(B_CuponDiscAmt) B_CuponDiscAmt,
            SUM(B_Earnest) B_Earnest,
            SUM(B_NetTotal) B_NetTotal,
            SUM(B_Cash) B_Cash,
            SUM(B_GiftVoucher) B_GiftVoucher,
            SUM(B_NetVat) B_NetVat,
            SUM(B_NetNonVat) B_NetNonVat,
            SUM(B_Vat) B_Vat,
            SUM(B_Cust) B_Cust 
            FROM billno 
            WHERE B_OnDate='${getMoment().format('YYYY-MM-DD')}' and B_Void <> 'V' and B_Cashier ='${cashier}'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const summaryETD = (results, dataList) => {
    let sumE = 0
    let sumT = 0
    let sumD = 0
    results.map(item => {
        dataList.push(
            { data1: item.R_Group, data2: item.GroupName, data3: "", data4: "" }
        )
        if (item.R_ETD === "E") {
            sumE += item.R_Total
            dataList.push(
                { data1: "", data2: item.R_Total, data3: "0.00", data4: "0.00" }
            )
        } else if (item.R_ETD === "T") {
            sumT += item.R_Total
            dataList.push(
                { data1: "", data2: "0.00", data3: item.R_Total, data4: "0.00" }
            )
        } else if (item.R_ETD === "D") {
            sumD += item.R_Total
            dataList.push(
                { data1: "", data2: "0.00", data3: "0.00", data4: item.R_Total }
            )
        }
    })

    return { sumE, sumT, sumD }
}

const getGroupPlu = async (groupCode) => {
    const sql = `SELECT ts.R_ETD, ts.R_Group, g.GroupName, 
            SUM(ts.R_Total) R_Total 
            FROM billno b 
            INNER JOIN t_sale ts on b.B_Refno =ts.R_Refno 
            LEFT JOIN groupfile g on ts.R_Group = g.GroupCode 
            WHERE ts.R_Date='${getMoment().format('YYYY-MM-DD')}' and ts.R_Void <> 'V' 
            and ts.R_Group='${groupCode}' 
            GROUP BY ts.R_ETD, ts.R_Group `;
    const results = await pool.query(sql)
    const dataList = []

    // add group
    const { sumE, sumT, sumD } = summaryETD(results, dataList)

    // add summary data
    dataList.push(
        { data1: "Sum-TOTAL...", data2: "", data3: "", data4: "" }
    )
    dataList.push(
        { data1: "", data2: sumE, data3: sumT, data4: sumD }
    )
    return dataList
}

const getPluCode = async (groupCode1, groupCode2, pluCode1 = 'aaaa', pluCode2 = 'zzzz') => {
    const sql = `select ts.R_Group, g.GroupName, ts.R_PluCode, ts.R_PName,
        sum(ts.R_Quan) R_Quan, sum(R_Total) R_Total 
        from billno b 
        inner join t_sale ts on b.B_Refno =ts.R_Refno 
        left join groupfile g on ts.R_Group = g.GroupCode 
        where ts.R_Date='${getMoment().format('YYYY-MM-DD')}' and ts.R_Void <> 'V' 
        and ts.R_Group between '${groupCode1}' and '${groupCode2}' 
        and ts.R_PluCode between '${pluCode1}' and 'zzzz' 
        group by ts.R_Group, ts.R_PluCode, ts.R_PName`;
    const results = await pool.query(sql)
    const sumQty = results.reduce((partialSum, a) => partialSum + a.R_Quan, 0)
    const sumNetTotal = results.reduce((partialSum, a) => partialSum + a.R_Total, 0)
    return {
        data: results,
        summary: {
            qty: sumQty,
            netTotal: sumNetTotal
        }
    }
}

const getTimeData = (fixTime, results) => {
    const newResults = []
    fixTime.forEach(item => {
        const newFindTime = results.filter(t => t.B_Ontime.substr(0, 2) === item) || []
        newResults.push({
            time: item + ":00",
            countBill: newFindTime.length,
            countCust: newFindTime.reduce((partialSum, a) => partialSum + a.B_Cust, 0),
            sumNetTotal: newFindTime.reduce((partialSum, a) => partialSum + a.B_NetTotal, 0)
        })
    })
    return newResults
}

const getCustomerPerHour = async () => {
    const sql = `select B_Ontime, B_Cust, B_NetTotal 
            from billno b 
            where b.B_OnDate ='${getMoment().format('YYYY-MM-DD')}' 
            and b.B_Void <> 'V'`;
    const results = await pool.query(sql)
    const fixTime = [
        '00', '01', '02', '03', '04', '05',
        '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'
    ]
    const newResults = getTimeData(fixTime, results)
    return {
        data: newResults,
        summary: {
            countBill: newResults.reduce((partialSum, a) => partialSum + a.countBill, 0),
            countCust: newResults.reduce((partialSum, a) => partialSum + a.countCust, 0),
            sumNetTotal: newResults.reduce((partialSum, a) => partialSum + a.sumNetTotal, 0)
        }
    }
}

const getTimeCurrentData = (fixTime, results) => {
    const newResults = []
    fixTime.forEach(item => {
        const newFindTime = results.filter(t => t.R_Time.substr(0, 2) === item)
        if (newFindTime.length === 0) {
            return;
        }
        newResults.push({ time: item + ':00' }, newFindTime)
    })
    return newResults
}
const getHourlyReport = async () => {
    const sql = `select R_Time, R_PluCode, R_Quan, R_Total 
        from t_sale ts 
        where ts.R_Date = '${getMoment().format('YYYY-MM-DD')}' 
        and ts.R_Void <> 'V'`;
    const results = await pool.query(sql)
    const fixTime = [
        '00', '01', '02', '03', '04', '05',
        '06', '07', '08', '09', '10', '11',
        '12', '13', '14', '15', '16', '17',
        '18', '19', '20', '21', '22', '23'
    ]
    const newResults = getTimeCurrentData(fixTime, results)
    return newResults
}

const getReceipt = async () => {
    const sql = `select B_Refno, B_Ontime, 
        B_Cash, B_Ton, B_CrCode1, B_CrAmt1, B_NetTotal, B_Vat 
        from billno b 
        where b.B_OnDate ='${getMoment().format('YYYY-MM-DD')}' 
        and b.B_Void <> 'V';`;
    const results = await pool.query(sql)
    const newResults = []
    results.map(item => {
        newResults.push(item)
        if (item.B_Cash > 0) {
            newResults.push(
                {
                    paymentType: "Cash",
                    paymentTime: "",
                    paymentAmount: item.B_Cash - item.B_Ton,
                    paymentVat: ""
                }
            )
        }
        if (item.B_CrCode1 !== '') {
            newResults.push(
                {
                    paymentType: item.B_CrCode1,
                    paymentTime: "",
                    paymentAmount: item.B_CrAmt1,
                    paymentVat: ""
                }
            )
        }
    })
    return newResults
}

const getVoidBill = async () => {
    const sql = `select B_MacNo, B_Cashier, B_Table, B_Ontime, B_VoidUser, B_VoidTime, 
        B_Refno, ts.R_PluCode, ts.R_Quan, ts.R_Total 
        from billno b inner join t_sale ts on b.B_Refno =ts.R_Refno 
        where b.B_OnDate ='${getMoment().format('YYYY-MM-DD')}' and b.B_Void = 'V'`;
    const results = await pool.query(sql)
    return {
        data: results,
        summary: {
            voidCount: results.length,
            voidAmount: results.reduce((partialSum, a) => partialSum + a.R_Total, 0)
        }
    }
}

const getCreditPayment = async () => {
    const sql = `select c.CrCode, c.CrName, 
        b.B_CardNo1, b.B_AppCode1, b.B_CrChargeAmt1, b.B_CrAmt1 
        from billno b  left join creditfile c on b.B_CrCode1 =c.CrCode 
        where b.B_OnDate ='${getMoment().format('YYYY-MM-DD')}' 
        and b.B_Void <> 'V' 
        and (B_CrCode1 <> '' or B_CrCode1 <> null)`;
    const results = await pool.query(sql)
    const sql2 = `select c.CrCode, count(c.CrCode), 
        sum(b.B_CrChargeAmt1) B_CrChargeAmt1, sum(b.B_CrAmt1) B_CrAmt1 
        from billno b  left join creditfile c on b.B_CrCode1 =c.CrCode 
        where b.B_OnDate ='${getMoment().format('YYYY-MM-DD')}' and b.B_Void <> 'V' 
        and (B_CrCode1 <> '' or B_CrCode1 <> null)
        group by CrCode`;
    const results2 = await pool.query(sql2)

    const newResults = results.map((item, index) => {
        return {
            ...item, index: (index + 1)
        }
    })
    return {
        data: newResults,
        summary: {
            creditCount: newResults.length,
            creditAmount: newResults.reduce((partialSum, a) => partialSum + a.B_CrAmt1, 0)
        }
    }
}

function compareNumbers(a, b) {
    return b.R_Quan - a.R_Quan;
}
const getTopSale = async () => {
    const sql = `select g.GroupCode, g.GroupName, t.R_PluCode, t.R_PName,
        sum(t.R_Quan) R_Quan , sum(t.R_Total) R_Total 
        from t_sale t 
        left join groupfile g on t.R_Group=g.GroupCode 
        where t.R_Date ='${getMoment().format('YYYY-MM-DD')}' 
        group by t.R_PluCode, t.R_PName , g.GroupCode, g.GroupName 
        limit 0, 10`;
    const results = await pool.query(sql)
    const newResults = results.sort(compareNumbers).map((item, index) => {
        return {
            ...item, index: (index + 1)
        }
    })
    return newResults
}

const getPromotion = async () => {
    return []
}

const getSpecialCupon = async () => {
    return []
}

module.exports = {
    getTableOnAction,
    getTableOnActionList,
    getTerminalByMacno,
    getTerminalByCashier,
    getGroupPlu,
    getPluCode,
    getCustomerPerHour,
    getHourlyReport,
    getReceipt,
    getVoidBill,
    getCreditPayment,
    getTopSale,
    getPromotion,
    getSpecialCupon
}

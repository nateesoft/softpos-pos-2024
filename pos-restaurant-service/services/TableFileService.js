const moment = require('moment')
const pool = require('../config/database/MySqlConnect');
const { getPOSConfigSetup } = require('./POSConfigSetupService');

const updateTableAvailableStatus = async tableNo => {
    const sql = `update tablefile set TOnact='N', Cashier=null where TCode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateTableOpenStatus = async (tableNo, Cashier, TUser) => {
    const sql = `update tablefile 
    set TOnact='Y', Cashier='${Cashier}', TUser=${TUser} 
    where TCode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const updateMember = async (memberInfo, tableNo) => {
    const memBegin = moment(memberInfo.Member_AppliedDate).format('YYYY-MM-DD')
    const memEnd = moment(memberInfo.Member_ExpiredDate).format('YYYY-MM-DD')
    const sql = `UPDATE tablefile SET 
    MemCode='${memberInfo.Member_Code}',
    MemName='${memberInfo.Member_NameThai}',
    MemBegin='${memBegin}',
    MemEnd='${memEnd}' 
    WHERE Tcode='${tableNo}'`;
    const results = await pool.query(sql)
    return results
}

const getTableByCode = async tableNo => {
    const sql = `select * from tablefile where TCode='${tableNo}' limit 1`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const getBalanceByTable = async tableNo => {
    const sql = `select * from balance  where R_Table='${tableNo}' and R_Void <> 'V' order by r_index`;
    const results = await pool.query(sql)
    return results
}

const checkTableOpen = async (tableNo) => {
    const sql = `select Cashier, TUser from tablefile where TOnact='Y' and TCode='${tableNo}'`;
    const results = await pool.query(sql)
    if (results.length > 0) {
        return results[0]
    }
    return null
}

const updateTableFile = async (tablefile) => {
    const Tcode = tablefile.Tcode;
    const SoneCode = tablefile.SoneCode;
    const MacNo = tablefile.MacNo;
    const Cashier = tablefile.Cashier;
    const TCustomer = tablefile.TCustomer;
    const TItem = tablefile.TItem;
    const TAmount = tablefile.TAmount;
    const TOnAct = tablefile.TOnAct;
    const Service = tablefile.Service;
    const ServiceAmt = tablefile.ServiceAmt;
    const EmpDisc = tablefile.EmpDisc;
    const EmpDiscAmt = tablefile.EmpDiscAmt;
    const FastDisc = tablefile.FastDisc;
    const FastDiscAmt = tablefile.FastDiscAmt;
    const TrainDisc = tablefile.TrainDisc;
    const TrainDiscAmt = tablefile.TrainDiscAmt;
    const MemDisc = tablefile.MemDisc;
    const MemDiscAmt = tablefile.MemDiscAmt;
    const SubDisc = tablefile.SubDisc;
    const SubDiscAmt = tablefile.SubDiscAmt;
    const DiscBath = tablefile.DiscBath;
    const ProDiscAmt = tablefile.ProDiscAmt;
    const SpaDiscAmt = tablefile.SpaDiscAmt;
    const CuponDiscAmt = tablefile.CuponDiscAmt;
    const ItemDiscAmt = tablefile.ItemDiscAmt;
    const MemCode = tablefile.MemCode;
    const MemCurAmt = tablefile.MemCurAmt;
    const MemName = tablefile.MemName;
    const Food = tablefile.Food;
    const Drink = tablefile.Drink;
    const Product = tablefile.Product;
    const NetTotal = tablefile.NetTotal;
    const PrintTotal = tablefile.PrintTotal;
    const PrintChkBill = tablefile.PrintChkBill;
    const PrintCnt = tablefile.PrintCnt;
    const PrintTime1 = tablefile.PrintTime1;
    const PrintTime2 = tablefile.PrintTime2;
    const ChkBill = tablefile.ChkBill;
    const ChkBillTime = tablefile.ChkBillTime;
    const StkCode1 = tablefile.StkCode1;
    const StkCode2 = tablefile.StkCode2;
    const TDesk = tablefile.TDesk;
    const TUser = tablefile.TUser;
    const VoidMsg = tablefile.VoidMsg;
    const TPause = tablefile.TPause;
    const CCUseCode = tablefile.CCUseCode;
    const TTableIsOn = tablefile.TTableIsOn;
    const TActive = tablefile.TActive || '';
    const TAutoClose = tablefile.TAutoClose || ''

    const sql = `UPDATE tablefile 
        SET Tcode='${Tcode}',SoneCode='${SoneCode}',MacNo='${MacNo}',Cashier='${Cashier}',
            TCurTime=curtime(),TCustomer='${TCustomer}',TItem='${TItem}',TAmount='${TAmount}',
            TOnAct='${TOnAct}',
            Service='${Service}',
            ServiceAmt='${ServiceAmt}',
            EmpDisc='${EmpDisc}',EmpDiscAmt='${EmpDiscAmt}',
            FastDisc='${FastDisc}',FastDiscAmt='${FastDiscAmt}',
            TrainDisc='${TrainDisc}',TrainDiscAmt='${TrainDiscAmt}',
            MemDisc='${MemDisc}',MemDiscAmt='${MemDiscAmt}',
            SubDisc='${SubDisc}',SubDiscAmt='${SubDiscAmt}',DiscBath='${DiscBath}',
            ProDiscAmt='${ProDiscAmt}',SpaDiscAmt='${SpaDiscAmt}',
            CuponDiscAmt='${CuponDiscAmt}',ItemDiscAmt='${ItemDiscAmt}',
            MemCode='${MemCode}',MemCurAmt='${MemCurAmt}',
            MemName='${MemName}',
            Food='${Food}',Drink='${Drink}',Product='${Product}',
            NetTotal='${NetTotal}',
            PrintTotal='${PrintTotal}',
            PrintChkBill='${PrintChkBill}',PrintCnt='${PrintCnt}',
            PrintTime1='${PrintTime1}',PrintTime2='${PrintTime2}',
            ChkBill='${ChkBill}',ChkBillTime='${ChkBillTime}',
            StkCode1='${StkCode1}',StkCode2='${StkCode2}',TDesk='${TDesk}',
            TUser='${TUser}',VoidMsg='${VoidMsg}',TPause='${TPause}',
            CCUseCode='${CCUseCode}',
            TTableIsOn='${TTableIsOn}',TActive='${TActive}',TAutoClose='${TAutoClose}' 
            WHERE Tcode='${Tcode}'`;

    const results = await pool.query(sql)
    return results
}

const summaryBalance = async (tableNo) => {
    const tablefile = await getTableByCode(tableNo)
    const configSetup = await getPOSConfigSetup()
    const balanceList = await getBalanceByTable(tableNo)

    const summaryRType = (type, netTotal = 0) => {
        balanceList.forEach(data => {
            if (data.R_Type === type) {
                netTotal = netTotal + data.R_Total
            }
            return netTotal
        })
        return netTotal
    }

    let Food = summaryRType("1")
    let Drink = summaryRType("2")
    let Product = summaryRType("3")

    let subTotalAmount = 0;
    let serviceAmount = 0;
    let vatAmount = 0;
    let netTotalAmount = 0;
    let productAndService = 0;

    const service = configSetup.P_Service
    const serviceType = configSetup.P_ServiceType // Net(N), Gross(G)
    const vatType = configSetup.P_VatType // Include(I) or Exclude(E)
    const vat = configSetup.P_Vat

    subTotalAmount = Food + Drink + Product;
    if (serviceType === 'N') { // Net
        serviceAmount = subTotalAmount * service / 100
    } else if (serviceType === 'G') { // Gross
        serviceAmount = subTotalAmount * service / 100
    }

    netTotalAmount = subTotalAmount + serviceAmount

    if (vatType === 'I') {
        vatAmount = netTotalAmount * vat / (100 + vat)
        productAndService = netTotalAmount - vatAmount
    } else if (vatType === 'E') {
        vatAmount = netTotalAmount * vat / 100
        productAndService = netTotalAmount + vatAmount
        netTotalAmount = netTotalAmount + vatAmount
    }

    tablefile.TAmount = subTotalAmount
    tablefile.ServiceAmt = serviceAmount
    tablefile.NetTotal = netTotalAmount
    tablefile.Food = Food
    tablefile.Drink = Drink
    tablefile.Product = Product

    // update tablefile
    await updateTableFile(tablefile)

    return {
        TAmount: tablefile.TAmount,
        ServiceAmt: tablefile.ServiceAmt,
        vatAmount,
        NetTotal: tablefile.NetTotal,
        productAndService,
        Food: tablefile.Food,
        Drink: tablefile.Drink,
        Product: tablefile.Product,
        printRecpMessage: configSetup.P_PrintRecpMessage
    }
}

module.exports = {
    getTableByCode,
    updateTableAvailableStatus,
    updateTableOpenStatus,
    checkTableOpen,
    updateMember,
    summaryBalance,
    updateTableFile
}

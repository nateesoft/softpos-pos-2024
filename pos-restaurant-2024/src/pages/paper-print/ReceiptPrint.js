import React, { useEffect, useContext, useState, useCallback } from "react"
import Moment from "react-moment"
import apiClient from "../../httpRequest"
import { POSContext } from "../../AppContext"
import { useParams } from "react-router-dom"

const NumFormat = (data) => {
  if (!data) {
    return "0.00"
  }
  return data.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
}

const formatBindCredit = (creditNumber) => {
  if (!creditNumber) {
    return ""
  }
  const newCreditBind = creditNumber.substr(
    creditNumber.length - 4,
    creditNumber.length
  )
  return "******" + newCreditBind
}

const ReceiptHeaderPayment = ({ headers, billInfo, empCode }) => {
  return (
    <>
      <div align="center">
        <div>*** ใบเสร็จรับเงิน ***</div>
      </div>
      {headers && (
        <div>
          {headers && headers.map((header) => <div>{header}</div>)}
          <div>Table: {billInfo.B_Table}</div>
        </div>
      )}
      <div align="center">
        <img src="file:com_logo.jpg" width="100" height="100" />
      </div>
      <div>
        <div>Receipt No: {billInfo.B_Refno}</div>
        <div>
          Date: <Moment format="DD/MM/YYYY HH:mm:ss" date={new Date()} />
        </div>
        <div>Customer: {billInfo.B_Cust}</div>
        <div>
          Cashier: {billInfo.B_Cashier} Employ: {empCode} Mac:{billInfo.B_MacNo}
        </div>
      </div>
    </>
  )
}

const ReceiptHeaderRefund = ({ headers, billInfo }) => {
  return (
    <>
      {headers && (
        <div>
          {headers.map((header) => (
            <div>{header}</div>
          ))}
        </div>
      )}
      <div align="center">
        <img src="/images/payment/com_logo.jpg" width={128} alt="" />
      </div>
      <div align="center">REG ID : {billInfo.B_MacNo}</div>
      <div align="center">
        ------------------------------------------------------------
      </div>
      <div align="center">
        <div align="center">*** บิลยกเลิกรายการขาย ***</div>
      </div>
      <div align="center">
        <div align="center">*** (Refund) ***</div>
      </div>
      <div>
        <div>Void User: {billInfo.B_VoidUser}</div>
        <div>Void Date/Time: {billInfo.B_VoidTime}</div>
        <div>อ้างถึงใบเสร็จรับเงินเลขที่ {billInfo.B_Refno}</div>
      </div>
    </>
  )
}

const PaperToPrint = (props) => {
  const {
    billInfo,
    tCreditList,
    posConfigSetup,
    poshwSetup,
    orderList,
    empCode
  } = props
  const {
    B_NetFood,
    B_NetProduct,
    B_Total,
    B_Vat,
    B_ServiceAmt,
    B_NetTotal,
    B_NetDrink,
    B_Ton = 0,
    B_NetVat,
    B_Cash = 0,
    B_Earnest,
    B_Entertain
  } = billInfo

  let headers = [
    poshwSetup.Heading1,
    poshwSetup.Heading2,
    poshwSetup.Heading3,
    poshwSetup.Heading4
  ]
  headers = headers.filter((h) => h !== "")

  let footers = [
    poshwSetup.Footting1,
    poshwSetup.Footting2,
    poshwSetup.Footting3
  ]
  const orderListFilter = orderList.filter((o) => o.R_Price > 0)
  return (
    <div align="center">
      <div style={{ padding: "5px", marginRight: "22px" }}>
        {billInfo.B_BillCopy > 0 && (
          <div align="right" style={{ fontSize: "12px" }}>
            Bill Copy ({billInfo.B_BillCopy})
          </div>
        )}
        {billInfo.B_Void !== "V" && (
          <ReceiptHeaderPayment
            headers={headers}
            billInfo={billInfo}
            empCode={empCode}
          />
        )}
        {billInfo.B_Void === "V" && (
          <ReceiptHeaderRefund headers={headers} billInfo={billInfo} />
        )}
        <hr />
        <div>
          <table>
            <tr>
              <th align="left">ETD</th>
              <th align="left">Description</th>
              <th align="left"></th>
              <th align="right">Amount</th>
            </tr>
            {orderListFilter &&
              orderListFilter.map((item) => (
                <>
                  {item.R_Void !== "V" && (
                    <tr>
                      <td align="center">{item.R_ETD}</td>
                      <td
                        style={{
                          maxWidth: "150px",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          overflow: "hidden"
                        }}
                      >
                        {item.R_PName}
                      </td>
                      <td align="right">{item.R_Quan}X</td>
                      <td align="right">{NumFormat(item.R_Price)}</td>
                    </tr>
                  )}
                  {item.R_Void === "V" && (
                    <>
                      <tr>
                        <td
                          style={{
                            textDecoration: "line-through",
                            color: "red"
                          }}
                        >
                          {item.R_ETD}
                        </td>
                        <td
                          style={{
                            textDecoration: "line-through",
                            color: "red"
                          }}
                        >
                          {item.R_PName}
                        </td>
                        <td
                          style={{
                            textDecoration: "line-through",
                            color: "red"
                          }}
                          align="right"
                        >
                          {item.R_Quan}X
                        </td>
                        <td align="right">{NumFormat(0)}</td>
                      </tr>
                      <tr>
                        <td colSpan={4} align="right">
                          ** Void สินค้า: {item.VoidMsg}
                        </td>
                      </tr>
                    </>
                  )}
                </>
              ))}
          </table>
        </div>
        <hr />
        <div>
          <div align="center">
            <table>
              <tr>
                <td>
                  Sub-TOTAL....(Item{" "}
                  {orderList.filter((item) => item.R_Void !== "V").length})
                </td>
                <td align="right">{NumFormat(B_Total)}</td>
              </tr>
            </table>
          </div>
          <div align="center" style={{ marginLeft: "10px" }}>
            <table>
              <tr>
                <td>อาหาร (Food)</td>
                <td align="right">{NumFormat(B_NetFood)}</td>
              </tr>
              <tr>
                <td>เครื่องดื่ม (Drink)</td>
                <td align="right">{NumFormat(B_NetDrink)}</td>
              </tr>
              <tr>
                <td>สินค้าอื่นๆ (Other)</td>
                <td align="right">{NumFormat(B_NetProduct)}</td>
              </tr>
            </table>
          </div>
          <hr />
          <div>
            <table>
              <tr>
                <td>ค่าบริการ {posConfigSetup.P_Service}%</td>
                <td align="right">+{NumFormat(B_ServiceAmt)}</td>
              </tr>
              <tr>
                <td>มูลค่าสินค้า/บริการ.....</td>
                <td align="right">+{NumFormat(B_NetVat - B_Vat)}</td>
              </tr>
              <tr>
                <td>Vat {posConfigSetup.P_Vat}%</td>
                <td align="right">{B_Vat}</td>
              </tr>
              <tr>
                <td>Net Total</td>
                <td align="right">{NumFormat(B_NetTotal)}</td>
              </tr>
              <tr>
                <td>ค่ามัดจำ</td>
                <td align="right">{NumFormat(B_Earnest || 0)}</td>
              </tr>
              <tr>
                <td>ค่า Entertain</td>
                <td align="right">{NumFormat(B_Entertain || 0)}</td>
              </tr>
            </table>
          </div>
          {tCreditList && tCreditList.length > 0 && (
            <div>ชำระด้วยบัตรเครดิต</div>
          )}
          {tCreditList &&
            tCreditList.map((item) => (
              <div>
                <table>
                  <tr>
                    <td>{item.CrCode}</td>
                    <td>{formatBindCredit(item.CardNo)}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>CR-Charge {NumFormat(item.CrCharge)}%</td>
                    <td>({NumFormat(item.CrChargeAmount)})</td>
                    <td>{NumFormat(item.CrAmt)}</td>
                  </tr>
                </table>
              </div>
            ))}
          <table>
            <tr>
              <td>เงินสด</td>
              <td>{NumFormat(B_Cash || 0)}</td>
            </tr>
            <tr>
              <td>เงินทอน</td>
              <td>{NumFormat(B_Ton || 0)}</td>
            </tr>
          </table>
        </div>
        <hr style={{ marginTop: "10px" }} />
        <div align="center">{posConfigSetup.P_PrintRecpMessage}</div>
        {footers && footers.map((footer) => <div align="center">{footer}</div>)}
      </div>
    </div>
  )
}

export const ReceiptPrint = (billNoProps = {}) => {
  const { billNo: billNoParam } = useParams()
  const billNo = billNoParam ? billNoParam : billNoProps

  const { appData } = useContext(POSContext)
  const { empCode, macno, userLogin } = appData

  const [billInfo, setBillInfo] = useState("")
  const [orderList, setOrderList] = useState([])
  const [tCreditList, setTCreditList] = useState([])
  const [poshwSetup, setPosHwSetup] = useState({})
  const [posConfigSetup, setPOSConfigSetup] = useState({})

  const handleLoadBillInfo = useCallback(() => {
    apiClient
      .get(`/api/billno/${billNo}`)
      .then((response) => {
        if (response.status === 200) {
          setBillInfo(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const initLoadOrderTSale = useCallback(() => {
    apiClient
      .get(`/api/tsale/${billNo}`)
      .then((response) => {
        if (response.status === 200) {
          const dataList = response.data.data
          setOrderList(dataList)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const loadPosHwSetup = useCallback(() => {
    apiClient
      .get(`/api/poshwsetup/${macno}`)
      .then((response) => {
        if (response.status === 200) {
          setPosHwSetup(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const loadPosConfigSetup = useCallback(() => {
    apiClient
      .get(`/api/posconfigsetup`)
      .then((response) => {
        if (response.status === 200) {
          setPOSConfigSetup(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  const loadTCreditList = useCallback(() => {
    apiClient
      .get(`/api/creditfile/tcredit/${billNo}`)
      .then((response) => {
        if (response.status === 200) {
          setTCreditList(response.data.data)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  useEffect(() => {
    handleLoadBillInfo()
    initLoadOrderTSale()
    loadPosHwSetup()
    loadPosConfigSetup()
    loadTCreditList()
  }, [
    handleLoadBillInfo,
    initLoadOrderTSale,
    loadPosHwSetup,
    loadPosConfigSetup
  ])

  return (
    <PaperToPrint
      billInfo={billInfo}
      orderList={orderList}
      poshwSetup={poshwSetup}
      posConfigSetup={posConfigSetup}
      empCode={empCode}
      userLogin={userLogin}
      tCreditList={tCreditList}
    />
  )
  // return (
  //   <>
  //     <div align="center">
  //       <img src="file:com_logo.jpg" width="100" height="100" />
  //     </div>
  //     <div align="center">
  //       <table>
  //         <tr>
  //           <td>
  //             <font face="Angsana New" size="4">
  //               [E]
  //             </font>
  //           </td>
  //           <td>
  //             <font face="Angsana New" size="4">
  //               กะเพราหมูสับ + ไข่ดาวไม่สุก
  //             </font>
  //           </td>
  //           <td align="right">
  //             <font face="Angsana New" size="4">
  //               55 บาท
  //             </font>
  //           </td>
  //           <td>
  //             <font face="Angsana New" size="4">
  //               X 1
  //             </font>
  //           </td>
  //           <td align="right">
  //             <font face="Angsana New" size="4">
  //               รวม 55 บาท
  //             </font>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td>
  //             <font face="Angsana New" size="4">
  //               [E]
  //             </font>
  //           </td>
  //           <td>
  //             <font face="Angsana New" size="4">
  //               หมูจุ่มชุดใหญ่ + ไข่ดาวไม่สุก
  //             </font>
  //           </td>
  //           <td align="right">
  //             <font face="Angsana New" size="4">
  //               199 บาท
  //             </font>
  //           </td>
  //           <td>
  //             <font face="Angsana New" size="4">
  //               X 1
  //             </font>
  //           </td>
  //           <td align="right">
  //             <font face="Angsana New" size="4">
  //               รวม 155 บาท
  //             </font>
  //           </td>
  //         </tr>
  //         <tr>
  //           <td colspan="4"></td>
  //           <td align="right">
  //             <font face="Angsana New" size="4">
  //               210 บาท
  //             </font>
  //           </td>
  //         </tr>
  //       </table>
  //     </div>
  //     <hr />
  //   </>
  // )
}

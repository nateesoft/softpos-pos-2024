const { getPOSConfigSetupByTerminal } = require("./POSConfigSetupService")
const { getDataByMacno } = require("./PosHwSetup")

const companyLogo = `com_logo.jpg`
const fontFamily = `Angsana New`
const Divider = `
<div align="center">
  <font face="${fontFamily}" size="1">----------------------------------------------------------------------------------------------------</font>
</div>`
const footer = `
    ${Divider}
    <div align="center">
      <font face="${fontFamily}" size="4"> (VAT INCLUDED)</font>
    </div>
    <div align="center">
      <font face="${fontFamily}" size="4">E-mail GM@.com</font>
    </div>
    <div align="center">
      <font face="${fontFamily}" size="4">Facebook Restaurant</font>
    </div>
    <div align="center">
      <font face="${fontFamily}" size="4">มีอะไรก็ติดต่อมาได้ตลอด / Feedback</font>
    </div>`

const printReceiptHtml = async ({ macno, billInfo, tSaleInfo }) => {
  const posConfigSetup = await getPOSConfigSetupByTerminal(macno)
  const poshwSetup = await getDataByMacno(macno)
  let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
  headers = headers.filter(h => h !== "")

  let header = `
    <div align="center">
      <div>
        <font face="${fontFamily}" size="4">*** ใบเสร็จรับเงิน ***</font>
      </div>
    </div>
    <div align="center">`;
    headers.forEach(item => {
      header += `
        <div>
          <font face="${fontFamily}" size="4">${item}</font>
        </div>`
    })
    header += `</div>
    <div align="center"><img src="file:${companyLogo}" width="100" height="100"></div>
    <div align="center">
      <div>
        <font face="${fontFamily}" size="4">Receipt No: ${billInfo.B_Refno}</font>
      </div>
      <div>
        <font face="${fontFamily}" size="4">Date: ${billInfo.B_OnDate} ${billInfo.B_CashTime}</font>
      </div>
      <div>
        <font face="${fontFamily}" size="4"> Customer: ${billInfo.B_Cust} Cashier: ${billInfo.B_Cashier} Mac:${billInfo.B_MacNo} </font>
      </div>
    </div>`
  let billTable = `
    <div align="center">
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <th align="center">
            <font face="${fontFamily}" size="4">ETD</font>
          </th>
          <th align="left">
            <font face="${fontFamily}" size="4">Name</font>
          </th>
          <th align="right">
            <font face="${fontFamily}" size="4">Qty</font>
          </th>
          <th align="right">
            <font face="${fontFamily}" size="4">Amount</font>
          </th>
        </tr>`
    tSaleInfo.forEach(tSale => {
      billTable += `
        <tr>
          <td align="center">
            <font face="${fontFamily}" size="4">${tSale.R_ETD}</font>
          </td>
          <td style="max-width: 100px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
            <font face="${fontFamily}" size="4">${tSale.R_PName}</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tSale.R_Quan}</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tSale.R_Total}</font>
          </td>
        </tr>`
    })
    
    billTable += `</table></div>`

  const subTotalItems = tSaleInfo.filter(item => item.R_Void !== 'V').length
  
  let htmlContent = `
  <div style="padding: 2px;">
      ${header}
      ${billTable}
      <div align="center">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <font face="${fontFamily}" size="4">Sub-TOTAL....(Item ${subTotalItems})</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_Total}</font>
            </td>
          </tr>
        </table>
      </div>
      ${Divider}
      <div align="center" style="margin-left: 10px;">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <font face="${fontFamily}" size="4">อาหาร (Food)</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetFood}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">เครื่องดื่ม (Drink)</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetDrink}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">สินค้าอื่นๆ (Other)</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetProduct}</font>
            </td>
          </tr>
        </table>
      </div>
      ${Divider}
      <div align="center">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <font face="${fontFamily}" size="4">ค่าบริการ ${billInfo.B_Service}%</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_ServiceAmt}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">มูลค่าสินค้า/บริการ.....</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${(billInfo.B_NetVat - billInfo.B_Vat)}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">Vat ${posConfigSetup.P_Vat}%</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_Vat}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">Net Total</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetTotal}</font>
            </td>
          </tr>
        </table>
      </div>
      <div align="center">
          <table width="100%" cellPadding="0" cellSpacing="0">
            <tr>
              <td>
                <font face="${fontFamily}" size="4">เงินสด</font>
              </td>
              <td align="right">
                <font face="${fontFamily}" size="4">${billInfo.B_Cash}</font>
              </td>
            </tr>
          </table>
        </div>
      </div>
      ${footer}
  </div>`

  return htmlContent
}

const printReceiptCopyHtml = async ({ macno, billInfo, tSaleInfo }) => {
  const receiptHtmlContent = await printReceiptHtml({ macno, billInfo, tSaleInfo })
  const htmlContent = `
    <div align="right">
      <font face="${fontFamily}" size="4">Bill Copy (${billInfo.B_BillCopy})</font>
    </div>
    ${receiptHtmlContent}
  `

  return htmlContent
}

const printReviewReceiptHtml = async ({ macno, tableInfo, balanceInfo }) => {
  const posConfigSetup = await getPOSConfigSetupByTerminal(macno)
  const poshwSetup = await getDataByMacno(macno)
  let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
  headers = headers.filter(h => h !== "")

  let header = `
    <div align="center">
      <div>
        <font face="${fontFamily}" size="4">*** ( ใบตรวจสอบรายการ ไม่ใช่ใบเสร็จรับเงิน ) ***</font>
      </div>
    </div>
    <div align="center">`
    headers.forEach(item => {
      header += `
        <div>
          <font face="${fontFamily}" size="4">${item}</font>
        </div>
      `
    })
    header += `</div>
    <div align="center"><img src="file:${companyLogo}" width="100" height="100"></div>
    <div align="center">
      <div>
        <font face="${fontFamily}" size="4">Table: T9</font>
      </div>
      <div>
        <font face="${fontFamily}" size="4">Date: 19/02/2025 19:04:18</font>
      </div>
      <div>
        <font face="${fontFamily}" size="4"> Customer: 1 Cashier: 1001 Mac:001 </font>
      </div>
    </div>`
  let billTable = `
    <div align="center">
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <th align="center">
            <font face="${fontFamily}" size="4">ETD</font>
          </th>
          <th align="left">
            <font face="${fontFamily}" size="4">Name</font>
          </th>
          <th align="right">
            <font face="${fontFamily}" size="4">Qty</font>
          </th>
          <th align="right">
            <font face="${fontFamily}" size="4">Amount</font>
          </th>
        </tr>`
        balanceInfo && balanceInfo.forEach(balance => {
          billTable += `
            <tr>
              <td align="center">
                <font face="${fontFamily}" size="4">${balance.R_ETD}</font>
              </td>
              <td style="left">
                <font face="${fontFamily}" size="4">${balance.R_PName}</font>
              </td>
              <td align="right">
                <font face="${fontFamily}" size="4">${balance.R_Quan}</font>
              </td>
              <td align="right">
                <font face="${fontFamily}" size="4">${balance.R_Total}</font>
              </td>
            </tr>`
        })
      billTable += `</table></div>`

  const subTotalItems = balanceInfo.filter(item => item.R_Void !== 'V').length

  const htmlContent = `
  <div style="padding: 2px;">
    ${header}
    ${billTable}
    <div align="center">
      <table width="100%">
        <tr>
          <td>
            <font face="${fontFamily}" size="4">Sub-TOTAL....(Item ${subTotalItems})</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.NetTotal}</font>
          </td>
        </tr>
      </table>
    </div>
    ${Divider}
    <div style="margin-left: '10px'">
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td>
            <font face="${fontFamily}" size="4">อาหาร (Food)</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.Food}</font>
          </td>
        </tr>
        <tr>
          <td>
            <font face="${fontFamily}" size="4">เครื่องดื่ม (Drink)</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.Drink}</font>
          </td>
        </tr>
        <tr>
          <td>
            <font face="${fontFamily}" size="4">สินค้าอื่นๆ (Other)</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.Product}</font>
          </td>
        </tr>
      </table>
    </div>
    ${Divider}
    <div align="center">
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td>
            <font face="${fontFamily}" size="4">ค่าบริการ ${tableInfo.Service}%</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.ServiceAmt}</font>
          </td>
        </tr>
        <tr>
          <td>
            <font face="${fontFamily}" size="4">มูลค่าสินค้า/บริการ.....</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.TAmount}</font>
          </td>
        </tr>
        <tr>
          <td>
            <font face="${fontFamily}" size="4">Vat ${posConfigSetup.P_Vat}%</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.TAmount * posConfigSetup.P_Vat / 100}</font>
          </td>
        </tr>
        <tr>
          <td>
            <font face="${fontFamily}" size="4">Net Total</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tableInfo.NetTotal}</font>
          </td>
        </tr>
      </table>
    </div>
    <div align="center" style="margin: 5px">
      <font face="${fontFamily}" size="4">Tips ……………………………</font>
    </div>
  </div>
  ${footer}
  </div>`

  return htmlContent
}

const printRefundBillHtml = async ({ macno, billInfo, tSaleInfo }) => {
  const posConfigSetup = await getPOSConfigSetupByTerminal(macno)
  const poshwSetup = await getDataByMacno(macno)
  let headers = [poshwSetup.Heading1, poshwSetup.Heading2, poshwSetup.Heading3, poshwSetup.Heading4]
  headers = headers.filter(h => h !== "")

  let header = `
    <div align="center">
      <div>
        <font face="${fontFamily}" size="4">*** บิลยกเลิกรายการขาย ***</font>
      </div>
      <div>
        <font face="${fontFamily}" size="4">*** (Refund) ***</font>
      </div>
    </div>
    <div align="center">`
    headers.forEach(item => {
      header += `
        <div>
          <font face="${fontFamily}" size="4">${item}</font>
        </div>`
    })
    header += `</div>
    <div align="center"><img src="file:${companyLogo}" width="100" height="100"></div>
    <div align="center">
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <td align="left">
            <font face="${fontFamily}" size="4">อ้างถึงใบเสร็จรับเงินเลขที่:</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4"> ${billInfo.B_Refno}</font>
          </td>
        </tr>
        <tr>
          <td align="right">
            <font face="${fontFamily}" size="4">REG ID:</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4"> ${billInfo.B_MacNo}</font>
          </td>
        </tr>
        <tr>
          <td align="right">
            <font face="${fontFamily}" size="4">Void User:</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${billInfo.B_VoidUser}</font>
          </td>
        </tr>
        <tr>
          <td align="right">
            <font face="${fontFamily}" size="4">Void Time:</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${billInfo.B_VoidTime}</font>
          </td>
        </tr>
      </table>
    </div>`
  let billTable = `
    <div align="center">
      <table width="100%" cellPadding="0" cellSpacing="0">
        <tr>
          <th align="center">
            <font face="${fontFamily}" size="4">ETD</font>
          </th>
          <th align="left">
            <font face="${fontFamily}" size="4">Name</font>
          </th>
          <th align="right">
            <font face="${fontFamily}" size="4">Qty</font>
          </th>
          <th align="right">
            <font face="${fontFamily}" size="4">Amount</font>
          </th>
        </tr>`
      tSaleInfo.forEach(tSale => {
        billTable += `
        <tr>
          <td align="center">
            <font face="${fontFamily}" size="4">${tSale.R_ETD}</font>
          </td>
          <td style="max-width: 100px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">
            <font face="${fontFamily}" size="4">${tSale.R_PName}</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tSale.R_Quan}</font>
          </td>
          <td align="right">
            <font face="${fontFamily}" size="4">${tSale.R_Total}</font>
          </td>
        </tr>`
      })
      billTable += `</table></div>`

  const htmlContent = `
    <div style="padding: 2px;">
      ${header}
      ${billTable}
      <div align="center">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <font face="${fontFamily}" size="4">Sub-TOTAL....(Item ${tSaleInfo.length})</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_Total}</font>
            </td>
          </tr>
        </table>
      </div>
      ${Divider}
      <div align="center" style="margin-left: 10px;">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
              <font face="${fontFamily}" size="4">อาหาร (Food)</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetFood}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">เครื่องดื่ม (Drink)</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetDrink}</font>
            </td>
          </tr>
          <tr>
            <td>
              <font face="${fontFamily}" size="4">สินค้าอื่นๆ (Other)</font>
            </td>
            <td align="right">
              <font face="${fontFamily}" size="4">${billInfo.B_NetProduct}</font>
            </td>
          </tr>
        </table>
      </div>
      ${Divider}
      <div align="center">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td>
                <font face="${fontFamily}" size="4">ค่าบริการ ${billInfo.B_Service}%</font>
            </td>
            <td align="right">
                <font face="${fontFamily}" size="4">${billInfo.B_ServiceAmt}</font>
            </td>
          </tr>
          <tr>
            <td>
                <font face="${fontFamily}" size="4">มูลค่าสินค้า/บริการ.....</font>
            </td>
            <td align="right">
                <font face="${fontFamily}" size="4">${(billInfo.B_NetVat - billInfo.B_Vat)}</font>
            </td>
          </tr>
          <tr>
            <td>
                <font face="${fontFamily}" size="4">Vat ${posConfigSetup.P_Vat}%</font>
            </td>
            <td align="right">
                <font face="${fontFamily}" size="4">${billInfo.B_Vat}</font>
            </td>
          </tr>
          <tr>
            <td>
                <font face="${fontFamily}" size="4">Net Total</font>
            </td>
            <td align="right">
                <font face="${fontFamily}" size="4">${billInfo.B_NetTotal}</font>
            </td>
          </tr>
        </table>
      </div>
      <div align="center">
          <table width="100%" cellPadding="0" cellSpacing="0">
            <tr>
              <td>
                <font face="${fontFamily}" size="4">เงินสด</font>
              </td>
              <td align="right">
                <font face="${fontFamily}" size="4">${billInfo.B_Cash}</font>
              </td>
            </tr>
          </table>
      </div>
    </div>
    ${footer}
  </div>`

  return htmlContent
}

module.exports = {
  printReceiptHtml,
  printReviewReceiptHtml,
  printRefundBillHtml,
  printReceiptCopyHtml
}

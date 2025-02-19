package ics.client.printer.service;

import ics.client.database.model.DatabaseConfigBean;
import ics.client.printer.controller.Balance;
import ics.client.printer.controller.BillNo;
import ics.client.printer.controller.POSConfigSetup;
import ics.client.printer.controller.POSHWSetup;
import ics.client.printer.controller.TSale;
import ics.client.printer.controller.TableFile;
import ics.client.printer.model.BalanceBean;
import ics.client.printer.model.BillNoBean;
import ics.client.printer.model.POSConfigSetupBean;
import ics.client.printer.model.POSHWSetupBean;
import ics.client.printer.model.TSaleBean;
import ics.client.printer.model.TableFileBean;
import java.text.NumberFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

/**
 *
 * @author nateesun
 */
public class PaperPrint {
    
    private final DatabaseConfigBean dbConfig;
    
    private POSHWSetup poshwSetupControl = null;
    private POSConfigSetup posConfigSetup = null;
    private TSale tSaleControl = null;
    private BillNo billNoControl = null;
    private Balance balanceControl = null;
    private TableFile tableFileControl = null;
    
    public PaperPrint(DatabaseConfigBean dbConfig) {
        this.dbConfig = dbConfig;
        
        poshwSetupControl = new POSHWSetup(this.dbConfig);
        posConfigSetup = new POSConfigSetup(this.dbConfig);
        tSaleControl = new TSale(this.dbConfig);
        billNoControl = new BillNo(this.dbConfig);
        balanceControl = new Balance(this.dbConfig);
        tableFileControl = new TableFile(this.dbConfig);
    }
    
    public String getMoneyFormat(double number) {
        NumberFormat decimalFormat = NumberFormat.getNumberInstance();
        decimalFormat.setMaximumFractionDigits(2);
        decimalFormat.setMinimumFractionDigits(2);

        return decimalFormat.format(number);
    }

    public String cutTextLength(String data) {
        if (data == null || data.length() <= 20) {
            return data;
        } else {
            return data.substring(0, 20);
        }
    }

    public String getReviewBill(String title, String terminal, String tableNo) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String formattedDateTime = now.format(formatter);

        POSHWSetupBean posHwSetup = poshwSetupControl.getData(terminal);
        POSConfigSetupBean posConfig = posConfigSetup.getData(terminal);

        List<BalanceBean> listBalance = balanceControl.getListData(tableNo);
        List<BalanceBean> listBalanceWithoutVoid = listBalance.stream().filter(balance -> !balance.getR_Void().equals('V')).collect(Collectors.toList());
        TableFileBean tableFile = tableFileControl.getData(tableNo);

        String[] headers = new String[]{posHwSetup.getHeading1(), posHwSetup.getHeading2(), posHwSetup.getHeading3(), posHwSetup.getHeading4()};
        String[] footers = new String[]{posHwSetup.getFootting1(), posHwSetup.getFootting2(), posHwSetup.getFootting3()};

        // vat amount
        double vatAmount = 0.00;
        if ("I".equals(posConfig.getP_VatType())) {
            vatAmount = tableFile.getNetTotal() * posConfig.getP_Vat() / (100 + posConfig.getP_Vat());
        } else if ("E".equals(posConfig.getP_VatType())) {
            vatAmount = tableFile.getNetTotal() * posConfig.getP_Vat() / 100;
        }

        String html = "<div style=\"padding: 2px;\">"
                + "    <div align=\"center\">"
                + "        <div><font face=\"Angsana New\" size=\"4\">*** ( " + title + " ) ***</font></div>"
                + "    </div>"
                + "    <div align=\"center\">";
        for (String header : headers) {
            if (header != null && !header.equals("")) {
                html += "<div><font face=\"Angsana New\" size=\"4\">" + header + "</font></div>";
            }
        }
        html += "    </div>"
                + "    <div align=\"center\"><img src=\"file:com_logo.jpg\" width=\"100\" height=\"100\"></div>"
                + "    <div align=\"center\">"
                + "        <div><font face=\"Angsana New\" size=\"4\">Table: " + tableNo + "</font></div>"
                + "        <div><font face=\"Angsana New\" size=\"4\">Date: " + formattedDateTime + "</font></div>"
                + "        <div>"
                + "             <font face=\"Angsana New\" size=\"4\">"
                + "                 Customer: " + tableFile.getTCustomer() + " Cashier: " + tableFile.getCashier() + " Mac:" + tableFile.getMacNo() + ""
                + "             </font>"
                + "         </div>"
                + "    </div>"
                + "    <div align=\"center\">"
                + "        <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">"
                + "            <tr>"
                + "                <th align=\"center\"><font face=\"Angsana New\" size=\"4\">ETD</font></th>"
                + "                <th align=\"left\"><font face=\"Angsana New\" size=\"4\">Name</font></th>"
                + "                <th align=\"right\"><font face=\"Angsana New\" size=\"4\">Qty</font></th>"
                + "                <th align=\"right\"><font face=\"Angsana New\" size=\"4\">Amount</font></th>"
                + "            </tr>";
        for (BalanceBean balance : listBalance) {
            html += "            <tr>"
                    + "                <td align=\"center\"><font face=\"Angsana New\" size=\"4\">" + balance.getR_ETD() + "</font></td>"
                    + "                <td style=\"left\"><font face=\"Angsana New\" size=\"4\">" + cutTextLength(balance.getR_PName()) + "</font></td>"
                    + "                <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + balance.getR_Quan() + "</font></td>"
                    + "                <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(balance.getR_Total()) + "</font></td>"
                    + "            </tr>";
        }
        html += "        </table>"
                + "    </div>"
                + "    <div align=\"center\">"
                + "            <table width=\"100%\">"
                + "                <tr>"
                + "                    <td><font face=\"Angsana New\" size=\"4\">Sub-TOTAL....(Item " + listBalanceWithoutVoid.size() + ")</font></td>"
                + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getTAmount()) + "</font></td>"
                + "                </tr>"
                + "            </table></div>";
        html += "<div align=\"center\"><font face=\"Angsana New\" size=\"1\">----------------------------------------------------------------------------------------------------</font></div>";
        html += "<div style=\"margin-left: '10px'\"><table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">";
        if (tableFile.getFood() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">อาหาร (Food)</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getFood()) + "</font></td>"
                    + "                </tr>";
        }
        if (tableFile.getDrink() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">เครื่องดื่ม (Drink)</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getDrink()) + "</font></td>"
                    + "                </tr>";
        }
        if (tableFile.getProduct() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">สินค้าอื่นๆ (Other)</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getProduct()) + "</font></td>"
                    + "                </tr>";
        }
        html += "            </table>"
                + "        </div>";
        html += "<div align=\"center\"><font face=\"Angsana New\" size=\"1\">----------------------------------------------------------------------------------------------------</font></div>"
                + "        <div align=\"center\">"
                + "            <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">";
        if (tableFile.getServiceAmt() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">ค่าบริการ " + getMoneyFormat(tableFile.getService()) + "%</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getServiceAmt()) + "</font></td>"
                    + "                </tr>";
        }
        if (tableFile.getTAmount() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">มูลค่าสินค้า/บริการ.....</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getTAmount()) + "</font></td>"
                    + "                </tr>";
        }
        if (vatAmount > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">Vat " + getMoneyFormat(posConfig.getP_Vat()) + "%</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(vatAmount) + "</font></td>"
                    + "                </tr>";
        }
        if (tableFile.getNetTotal() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">Net Total</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tableFile.getNetTotal()) + "</font></td>"
                    + "                </tr>";
        }
        html += "            </table>"
                + "        </div>"
                + "        <div align=\"center\" style=\"margin: 5px\"><font face=\"Angsana New\" size=\"4\">Tips ……………………………</font></div>"
                + "    </div>"
                + "    <div align=\"center\"><font face=\"Angsana New\" size=\"1\">----------------------------------------------------------------------------------------------------</font></div>";
        html += "    <div align=\"center\"><font face=\"Angsana New\" size=\"4\">" + posConfig.getP_PrintRecpMessage() + "</font></div>";
        for (String footer : footers) {
            if (footer != null && !footer.equals("")) {
                html += "<div align=\"center\"><font face=\"Angsana New\" size=\"4\">" + footer + "</font></div>";
            }
        }
        html += "</div>";

        return html;
    }

    public String getReceiptPrint(String title, String terminal, String B_Refno, String billType) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        String formattedDateTime = now.format(formatter);

        POSHWSetupBean posHwSetup = poshwSetupControl.getData(terminal);
        POSConfigSetupBean posConfig = posConfigSetup.getData(terminal);

        List<TSaleBean> listTSale = tSaleControl.getListData(B_Refno);
        List<TSaleBean> listTSaleWithoutVoid = listTSale.stream().filter(tsale -> !tsale.getR_Void().equals('V')).collect(Collectors.toList());
        BillNoBean billNo = billNoControl.getData(B_Refno);

        String[] headers = new String[]{posHwSetup.getHeading1(), posHwSetup.getHeading2(), posHwSetup.getHeading3(), posHwSetup.getHeading4()};
        String[] footers = new String[]{posHwSetup.getFootting1(), posHwSetup.getFootting2(), posHwSetup.getFootting3()};

        String html = "<div style=\"padding: 2px;\">";
        if (billType.equals("copy")) {
            html += "    <div align=\"right\"><font face=\"Angsana New\" size=\"4\">Bill Copy (" + billNo.getB_BillCopy() + ")</font></div>";
        }
        if (billType.equals("refund")) {
            html += "    <div align=\"center\">"
                    + "        <div><font face=\"Angsana New\" size=\"4\">*** " + title + " ***</font></div>"
                    + "        <div><font face=\"Angsana New\" size=\"4\">*** (Refund) ***</font></div>"
                    + "    </div>";
        } else {
            html += "    <div align=\"center\">"
                    + "        <div><font face=\"Angsana New\" size=\"4\">*** " + title + " ***</font></div>"
                    + "    </div>";
        }

        html += "    <div align=\"center\">";
        for (String header : headers) {
            if (header != null && !header.equals("")) {
                html += "<div><font face=\"Angsana New\" size=\"4\">" + header + "</font></div>";
            }
        }
        html += "    </div>"
                + "    <div align=\"center\"><img src=\"file:com_logo.jpg\" width=\"100\" height=\"100\"></div>";

        if (billType.equals("refund")) {
            html += "    <div align=\"center\">"
                    + "     <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">"
                    + "         <tr>"
                    + "             <td align=\"left\"><font face=\"Angsana New\" size=\"4\">อ้างถึงใบเสร็จรับเงินเลขที่:</font></td>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\"> " + billNo.getB_Refno() + "</font></td>"
                    + "         </tr>"
                    + "         <tr>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\">REG ID:</font></td>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\"> " + billNo.getB_MacNo() + "</font></td>"
                    + "         </tr>"
                    + "         <tr>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\">Void User:</font></td>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + billNo.getB_VoidUser() + "</font></td>"
                    + "         </tr>"
                    + "         <tr>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\">Void Time:</font></td>"
                    + "             <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + billNo.getB_VoidTime() + "</font></td>"
                    + "         </tr>"
                    + "     </table>"
                    + "    </div>";
        } else {
            html += "    <div align=\"center\">"
                    + "        <div><font face=\"Angsana New\" size=\"4\">Receipt No: " + B_Refno + "</font></div>"
                    + "        <div><font face=\"Angsana New\" size=\"4\">Date: " + formattedDateTime + "</font></div>"
                    + "        <div>"
                    + "             <font face=\"Angsana New\" size=\"4\">"
                    + "                 Customer: " + billNo.getB_Cust() + " Cashier: " + billNo.getB_Cashier() + " Mac:" + billNo.getB_MacNo() + ""
                    + "             </font>"
                    + "         </div>"
                    + "    </div>";
        }
        html += "    <div align=\"center\">"
                + "        <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">"
                + "            <tr>"
                + "                <th align=\"center\"><font face=\"Angsana New\" size=\"4\">ETD</font></th>"
                + "                <th align=\"left\"><font face=\"Angsana New\" size=\"4\">Name</font></th>"
                + "                <th align=\"right\"><font face=\"Angsana New\" size=\"4\">Qty</font></th>"
                + "                <th align=\"right\"><font face=\"Angsana New\" size=\"4\">Amount</font></th>"
                + "            </tr>";
        for (TSaleBean tSale : listTSale) {
            html += "            <tr>"
                    + "                <td align=\"center\"><font face=\"Angsana New\" size=\"4\">" + tSale.getR_ETD() + "</font></td>"
                    + "                <td style=\"max-width: 100px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\"><font face=\"Angsana New\" size=\"4\">" + cutTextLength(tSale.getR_PName()) + "</font></td>"
                    + "                <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + tSale.getR_Quan() + "</font></td>"
                    + "                <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(tSale.getR_Total()) + "</font></td>"
                    + "            </tr>";
        }
        html += "        </table>"
                + "    </div>"
                + "        <div align=\"center\">"
                + "            <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">"
                + "                <tr>"
                + "                    <td><font face=\"Angsana New\" size=\"4\">Sub-TOTAL....(Item " + listTSaleWithoutVoid.size() + ")</font></td>"
                + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Total()) + "</font></td>"
                + "                </tr>"
                + "            </table>"
                + "        </div>";
        html += "<div align=\"center\"><font face=\"Angsana New\" size=\"1\">----------------------------------------------------------------------------------------------------</font></div>";
        html += "<div align=\"center\" style=\"margin-left: 10px;\">"
                + "            <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">";
        if (billNo.getB_Food() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">อาหาร (Food)</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Food()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_Drink() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">เครื่องดื่ม (Drink)</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Drink()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_Product() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">สินค้าอื่นๆ (Other)</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Product()) + "</font></td>"
                    + "                </tr>";
        }
        html += "            </table>"
                + "        </div>";
        html += "<div align=\"center\"><font face=\"Angsana New\" size=\"1\">----------------------------------------------------------------------------------------------------</font></div>"
                + "        <div align=\"center\">"
                + "            <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">";
        if (billNo.getB_ServiceAmt() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">ค่าบริการ " + getMoneyFormat(billNo.getB_Service()) + "%</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_ServiceAmt()) + "</font></td>"
                    + "                </tr>";
        }
        if ((billNo.getB_NetVat() - billNo.getB_Vat()) > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">มูลค่าสินค้า/บริการ.....</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_NetVat() - billNo.getB_Vat()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_Vat() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">Vat " + getMoneyFormat(posConfig.getP_Vat()) + "%</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Vat()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_NetTotal() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">Net Total</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_NetTotal()) + "</font></td>"
                    + "                </tr>";
        }
        html += "            </table>"
                + "        </div>"
                + "        <div align=\"center\">"
                + "            <table width=\"100%\" cellPadding=\"0\" cellSpacing=\"0\">";
        if (billNo.getB_Earnest() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">ค่ามัดจำ</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Earnest()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_Entertain() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">ค่า Entertain</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Entertain()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_Cash() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">เงินสด</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Cash()) + "</font></td>"
                    + "                </tr>";
        }
        if (billNo.getB_Ton() > 0) {
            html += "                <tr>"
                    + "                    <td><font face=\"Angsana New\" size=\"4\">เงินทอน</font></td>"
                    + "                    <td align=\"right\"><font face=\"Angsana New\" size=\"4\">" + getMoneyFormat(billNo.getB_Ton()) + "</font></td>"
                    + "                </tr>";
        }
        html += "            </table>"
                + "        </div>"
                + "    </div>"
                + "    <div align=\"center\"><font face=\"Angsana New\" size=\"1\">----------------------------------------------------------------------------------------------------</font></div>";
        html += "    <div align=\"center\"><font face=\"Angsana New\" size=\"4\">" + posConfig.getP_PrintRecpMessage() + "</font></div>";
        for (String footer : footers) {
            if (footer != null && !footer.equals("")) {
                html += "<div align=\"center\"><font face=\"Angsana New\" size=\"4\">" + footer + "</font></div>";
            }
        }
        html += "</div>";

        return html;
    }
    
    public String getQrCodePrint() {
        String html = ""
                + "<div align=\"center\">"
                + "     <img src=\"file:qrcode.png\" width=\"100\" height=\"100\">"
                + "</div>";
        return html;
    }

    public String exampleReceiptPrint() {
        return "<div style=\"padding: 5px;\">"
                + "    <div align=\"center\">"
                + "        <div>*** ใบเสร็จรับเงิน ***</div>"
                + "    </div>"
                + "    <div align=\"center\">"
                + "        <div>HENG GETSU</div>"
                + "        <div>Tax Invoice (ABB.)_Tax ID xxxxxxxxxx</div>"
                + "        <div>Table: T1</div>"
                + "    </div>"
                + "    <div align=\"center\"><img src=\"file:com_logo.jpg\" width=\"100\" height=\"100\"></div>"
                + "    <div align=\"center\">"
                + "        <div>Receipt No: 0000454</div>"
                + "        <div>Date: 28/01/2025 11:11:40</div>"
                + "        <div>Customer: 1</div>"
                + "        <div>Cashier: 1001 Employ: Mac:001</div>"
                + "    </div>"
                + "    <hr>"
                + "    <div align=\"center\">"
                + "        <table>"
                + "            <tr>"
                + "                <th align=\"left\">ETD</th>"
                + "                <th align=\"left\">Description</th>"
                + "                <th align=\"left\"></th>"
                + "                <th align=\"right\">Amount</th>"
                + "            </tr>"
                + "            <tr>"
                + "                <td align=\"center\">E</td>"
                + "                <td style=\"max-width: 150px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">Luna"
                + "                    Course </td>"
                + "                <td align=\"right\">1X</td>"
                + "                <td align=\"right\">3,800.00</td>"
                + "            </tr>"
                + "            <tr>"
                + "                <td align=\"center\">E</td>"
                + "                <td style=\"max-width: 150px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">Luna"
                + "                    Course </td>"
                + "                <td align=\"right\">1X</td>"
                + "                <td align=\"right\">3,800.00</td>"
                + "            </tr>"
                + "            <tr>"
                + "                <td align=\"center\">E</td>"
                + "                <td style=\"max-width: 150px; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;\">Luna"
                + "                    Course </td>"
                + "                <td align=\"right\">1X</td>"
                + "                <td align=\"right\">3,800.00</td>"
                + "            </tr>"
                + "        </table>"
                + "    </div>"
                + "    <hr>"
                + "    <div align=\"center\">"
                + "        <div align=\"center\">"
                + "            <table>"
                + "                <tr>"
                + "                    <td>Sub-TOTAL....(Item 3)</td>"
                + "                    <td align=\"right\">11,400.00</td>"
                + "                </tr>"
                + "            </table>"
                + "        </div>"
                + "        <div align=\"center\" style=\"margin-left: 10px;\">"
                + "            <table>"
                + "                <tr>"
                + "                    <td>อาหาร (Food)</td>"
                + "                    <td align=\"right\">11,400.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>เครื่องดื่ม (Drink)</td>"
                + "                    <td align=\"right\">0.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>สินค้าอื่นๆ (Other)</td>"
                + "                    <td align=\"right\">0.00</td>"
                + "                </tr>"
                + "            </table>"
                + "        </div>"
                + "        <hr>"
                + "        <div align=\"center\">"
                + "            <table>"
                + "                <tr>"
                + "                    <td>ค่าบริการ 10%</td>"
                + "                    <td align=\"right\">+1,140.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>มูลค่าสินค้า/บริการ.....</td>"
                + "                    <td align=\"right\">+11,719.63</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>Vat 7%</td>"
                + "                    <td align=\"right\">820.37</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>Net Total</td>"
                + "                    <td align=\"right\">12,540.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>ค่ามัดจำ</td>"
                + "                    <td align=\"right\">0.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>ค่า Entertain</td>"
                + "                    <td align=\"right\">0.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>เงินสด</td>"
                + "                    <td align=\"right\">12,540.00</td>"
                + "                </tr>"
                + "                <tr>"
                + "                    <td>เงินทอน</td>"
                + "                    <td align=\"right\">0.00</td>"
                + "                </tr>"
                + "            </table>"
                + "        </div>"
                + "    </div>"
                + "    <hr style=\"margin-top: 10px;\">"
                + "    <div align=\"center\"> (VAT INCLUDED)</div>"
                + "    <div align=\"center\">E-mail GM@.com</div>"
                + "    <div align=\"center\">Facebook Restaurant</div>"
                + "    <div align=\"center\">มีอะไรก็ติดต่อมาได้ตลอด / Feedback</div>"
                + "</div>";
    }
}

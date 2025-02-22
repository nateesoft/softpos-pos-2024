package ics.client.printer.service;

import java.text.NumberFormat;

/**
 *
 * @author nateesun
 */
public class PaperPrint {
    
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

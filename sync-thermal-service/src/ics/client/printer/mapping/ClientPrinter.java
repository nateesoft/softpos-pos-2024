package ics.client.printer.mapping;

/**
 *
 * @author nateesun
 */
public class ClientPrinter {

    private int id = 0;
    private String printerName = "";
    private String printerType = ""; // receipt or kitchen
    private String message = "";
    private String terminal = "";
    private String tableNo = "";
    private String billNo = "";
    private String title = "";
    private String billType = "";
    private String sendTokic = "N";
    private String qrCode = "";
    private String database = "";

    public String getDatabase() {
        return database;
    }

    public void setDatabase(String database) {
        this.database = database;
    }

    public String getQrCode() {
        return qrCode;
    }

    public void setQrCode(String qrCode) {
        this.qrCode = qrCode;
    }

    public String getSendTokic() {
        return sendTokic;
    }

    public void setSendTokic(String sendTokic) {
        this.sendTokic = sendTokic;
    }

    public String getBillType() {
        return billType;
    }

    public void setBillType(String billType) {
        this.billType = billType;
    }

    public String getTableNo() {
        return tableNo;
    }

    public void setTableNo(String tableNo) {
        this.tableNo = tableNo;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTerminal() {
        return terminal;
    }

    public void setTerminal(String terminal) {
        this.terminal = terminal;
    }

    public String getBillNo() {
        return billNo;
    }

    public void setBillNo(String billNo) {
        this.billNo = billNo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPrinterName() {
        return printerName;
    }

    public void setPrinterName(String printerName) {
        this.printerName = printerName;
    }

    public String getPrinterType() {
        return printerType;
    }

    public void setPrinterType(String printerType) {
        this.printerType = printerType;
    }

    @Override
    public String toString() {
        return "ClientPrinter{" + "id=" + id + ", printerName=" + printerName + ", printerType=" + printerType + ", message=" + message + ", terminal=" + terminal + ", tableNo=" + tableNo + ", billNo=" + billNo + ", title=" + title + ", billType=" + billType + '}';
    }

}

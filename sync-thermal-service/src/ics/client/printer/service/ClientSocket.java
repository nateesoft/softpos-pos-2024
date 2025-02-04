package ics.client.printer.service;

import ics.client.printer.mapping.ClientPrinter;
import com.google.gson.Gson;
import ics.utils.QRCodeGenerator;
import io.socket.client.IO;
import io.socket.client.Socket;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.util.Properties;

/**
 *
 * @author nateesun
 */
public class ClientSocket {

    private static final PrinterControlService printerService = new PrinterControlService();
    private static String printerHost;

    // cashier printer
    private static String printerName;
    private static int printerWidth = 75;
    private static int printerHeight = 72;

    // kitchen printer
    private static String kicPrinterName;
    private static int kicPrinterWidth = 75;
    private static int kicPrinterHeight = 72;

    static {
        try (InputStream fis = new FileInputStream("cashier_config.properties")) {
            Properties properties = new Properties();
            properties.load(fis);

            printerHost = properties.getProperty("printer.host").replaceAll("\"", "");

            printerName = properties.getProperty("printer.name").replaceAll("\"", "");
            printerWidth = Integer.parseInt(properties.getProperty("printer.width"));
            printerHeight = Integer.parseInt(properties.getProperty("printer.height"));
        } catch (Exception e) {
            System.err.println("Error loading database configuration: " + e.getMessage());
        }

        try (InputStream fis = new FileInputStream("kitchen_config.properties")) {
            Properties properties = new Properties();
            properties.load(fis);

            kicPrinterName = properties.getProperty("printer.name").replaceAll("\"", "");
            kicPrinterWidth = Integer.parseInt(properties.getProperty("printer.width"));
            kicPrinterHeight = Integer.parseInt(properties.getProperty("printer.height"));
        } catch (Exception e) {
            System.err.println("Error loading database configuration: " + e.getMessage());
        }
    }

    public static ClientPrinter mappingObject(String json) {
        Gson gson = new Gson();
        ClientPrinter printerMessage = gson.fromJson(json, ClientPrinter.class);
        return printerMessage;
    }

    public static void connection() {
        try {
            // เชื่อมต่อกับเซิร์ฟเวอร์
            Socket socket = IO.socket(printerHost);

            // Event เมื่อเชื่อมต่อสำเร็จ
            socket.on(Socket.EVENT_CONNECT, (Object... args1) -> {
                // ส่งข้อความไปยังเซิร์ฟเวอร์
                socket.emit("message", "Printer service connected.");
            });

            // Event เมื่อเซิร์ฟเวอร์ตอบกลับ
            socket.on("reply", (Object... args1) -> {
                System.out.println("Server reply: " + args1[0]);
            });
            
            socket.on("createQRCode", (Object... args1) -> {
                System.out.println("Create qr code: " + args1[0]);
                QRCodeGenerator.CreateQRCode(args1[0].toString());
            });

            socket.on("printerMessage", (Object... args1) -> {
                ClientPrinter printerMessage = mappingObject(args1[0].toString());
                System.out.println(printerMessage);

                String prtName = printerName;
                int prtWidth = printerWidth;
                int prtHeight = printerHeight;

                if ("Y".equals(printerMessage.getSendTokic())) {
                    prtName = kicPrinterName;
                    prtWidth = kicPrinterWidth;
                    prtHeight = kicPrinterHeight;
                }

                PaperPrint paperPrint = new PaperPrint();
                switch (printerMessage.getPrinterType()) {
                    case "receipt": {
                        String htmlContent = paperPrint.getReceiptPrint(printerMessage.getTitle(), printerMessage.getTerminal(), printerMessage.getBillNo(), printerMessage.getBillType());
                        printerService.printMessage(prtName, htmlContent, prtWidth, prtHeight);
                        break;
                    }
                    case "review-bill": {
                        String htmlContent = paperPrint.getReviewBill(printerMessage.getTitle(), printerMessage.getTerminal(), printerMessage.getTableNo());
                        printerService.printMessage(prtName, htmlContent, prtWidth, prtHeight);
                        break;
                    }
                    default:
                        System.out.println(printerMessage.getMessage());
                        printerService.printMessage(prtName, printerMessage.getMessage(), prtWidth, prtHeight);
                        break;
                }
            });

            // Event เมื่อการเชื่อมต่อถูกตัด
            socket.on(Socket.EVENT_DISCONNECT, (Object... args1) -> {
                System.out.println("Disconnected from server");
            });

            // เริ่มการเชื่อมต่อ
            socket.connect();

        } catch (URISyntaxException e) {
            System.err.println(e.getMessage());
        }
    }
}

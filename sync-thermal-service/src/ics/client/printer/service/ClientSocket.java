package ics.client.printer.service;

import ics.client.printer.mapping.ClientPrinter;
import com.google.gson.Gson;
import ics.client.printer.model.PrinterConfigBean;
import ics.utils.QRCodeGenerator;
import io.socket.client.IO;
import io.socket.client.Socket;
import java.awt.TrayIcon;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.util.Properties;

/**
 *
 * @author nateesun
 */
public class ClientSocket {

    private static final PrinterControlService printerService = new PrinterControlService();
    private static String SOCKET_HOT;

    static {
        try (InputStream fis = new FileInputStream("socket_config.properties")) {
            Properties properties = new Properties();
            properties.load(fis);

            String host = properties.getProperty("socket.host").replaceAll("\"", "");
            String port = properties.getProperty("socket.port");
            SOCKET_HOT = host + ":" + port;
        } catch (Exception e) {
            System.err.println("Error loading database configuration: " + e.getMessage());
        }
    }

    public static ClientPrinter mappingObject(String json) {
        Gson gson = new Gson();
        ClientPrinter printerMessage = gson.fromJson(json, ClientPrinter.class);
        return printerMessage;
    }

    private static PrinterConfigBean loadPrinterConfig(String printerName) {
        PrinterConfigBean printerConfig = new PrinterConfigBean();
        if (null == printerName || printerName.equals("")) {
            return printerConfig;
        }
        Properties properties = new Properties();
        try (InputStream input = new FileInputStream(printerName + ".properties")) {
            properties.load(input);
            String pName = properties.getProperty("printer.name").replaceAll("\"", "");
            int width = Integer.parseInt(properties.getProperty("printer.width"));
            int height = Integer.parseInt(properties.getProperty("printer.height"));

            printerConfig.setPrinterName(pName);
            printerConfig.setWidth(width);
            printerConfig.setHeight(height);
        } catch (IOException ex) {
            System.err.println(ex.getMessage());
        }

        return printerConfig;
    }

    public static void connection(TrayIcon trayIcon) {
        try {
            // เชื่อมต่อกับเซิร์ฟเวอร์
            Socket socket = IO.socket(SOCKET_HOT);

            // Event เมื่อเชื่อมต่อสำเร็จ
            socket.on(Socket.EVENT_CONNECT, (Object... args1) -> {
                // ส่งข้อความไปยังเซิร์ฟเวอร์
                trayIcon.displayMessage("Service Connnected.", "ระบบ Printer Service กำลังเชื่อมต่อ", TrayIcon.MessageType.INFO);
                socket.emit("message", "Printer service connected.");
            });

            // Event เมื่อเซิร์ฟเวอร์ตอบกลับ
            socket.on("reply", (Object... args1) -> {
                System.out.println("Server reply: " + args1[0]);
            });

            socket.on("createQRCode", (Object... args1) -> {
                ClientPrinter printerMessage = mappingObject(args1[0].toString());
                QRCodeGenerator.CreateQRCode(args1[0].toString());
                
                // load database config
                PaperPrint paperPrint = new PaperPrint();
                String htmlContent = paperPrint.getQrCodePrint();

                //  load printer config
                PrinterConfigBean printerConfigBean = loadPrinterConfig(printerMessage.getPrinterName());
                String prtName = printerConfigBean.getPrinterName();
                String prtType = printerMessage.getPrinterType();
                int prtWidth = printerConfigBean.getWidth();
                int prtHeight = printerConfigBean.getHeight();

                // send to printer
                printerService.printMessage(prtName, htmlContent, prtWidth, prtHeight, prtType);
            });

            socket.on("printerMessage", (Object... args1) -> {
                ClientPrinter printerMessage = mappingObject(args1[0].toString());

                //  load printer config
                PrinterConfigBean bean = loadPrinterConfig(printerMessage.getPrinterName());
                String prtName = bean.getPrinterName();
                String prtType= printerMessage.getPrinterType();
                int prtWidth = bean.getWidth();
                int prtHeight = bean.getHeight();
                
                printerService.printMessage(prtName, printerMessage.getMessage(), prtWidth, prtHeight, prtType);
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

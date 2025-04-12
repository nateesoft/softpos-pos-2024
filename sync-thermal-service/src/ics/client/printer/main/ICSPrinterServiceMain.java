package ics.client.printer.main;

import ics.client.printer.service.ClientSocket;
import ics.client.printer.service.PrinterConfig;
import ics.client.printer.service.SocketConfig;
import ics.client.printer.service.SyncUpdateApplication;
import java.awt.AWTException;
import java.awt.Image;
import java.awt.MenuItem;
import java.awt.PopupMenu;
import java.awt.SystemTray;
import java.awt.Toolkit;
import java.awt.TrayIcon;
import java.awt.event.ActionEvent;

/**
 *
 * @author nateesun
 */
public class ICSPrinterServiceMain {

    public static void main(String[] args) {
        // ตรวจสอบว่าระบบรองรับ SystemTray หรือไม่
        if (!SystemTray.isSupported()) {
            System.out.println("SystemTray ไม่รองรับบนระบบนี้");
            return;
        }

        // สร้าง SystemTray instance
        SystemTray systemTray = SystemTray.getSystemTray();

        // สร้างไอคอนสำหรับ SystemTray
        Image trayIconImage = Toolkit.getDefaultToolkit().getImage("printer.png"); // ใส่ path ไฟล์รูปภาพ
        TrayIcon trayIcon = new TrayIcon(trayIconImage, "ICS Service");
        trayIcon.setImageAutoSize(true);

        // สร้าง PopupMenu สำหรับ SystemTray
        PopupMenu popupMenu = new PopupMenu();
         MenuItem SocketItem = new MenuItem("Socket Settings...");
        SocketItem.addActionListener((ActionEvent e) -> {
            SocketConfig socketConfig = new SocketConfig(null, true);
            socketConfig.setVisible(true);
        });
        popupMenu.add(SocketItem);
        MenuItem testPrinterItem = new MenuItem("Printer Settings...");
        testPrinterItem.addActionListener((ActionEvent e) -> {
            PrinterConfig mc = new PrinterConfig(null, true);
            mc.setVisible(true);
        });
        popupMenu.add(testPrinterItem);
        popupMenu.addSeparator();
        
        MenuItem updateAppItem = new MenuItem("Sync Update");
        updateAppItem.addActionListener((ActionEvent e) -> {
            SyncUpdateApplication syncUpdateApp = new SyncUpdateApplication(null, true);
            syncUpdateApp.setVisible(true);
        });
        popupMenu.add(updateAppItem);
        popupMenu.addSeparator();

        // เพิ่มเมนู "ออกจากโปรแกรม"
        MenuItem exitItem = new MenuItem("Exit");
        exitItem.addActionListener((ActionEvent e) -> {
            System.exit(0);
        });
        popupMenu.add(exitItem);

        // ตั้งค่า PopupMenu ให้กับ TrayIcon
        trayIcon.setPopupMenu(popupMenu);

        // เพิ่ม TrayIcon ลงใน SystemTray
        try {
            systemTray.add(trayIcon);
            ClientSocket.connection(trayIcon);
        } catch (AWTException e) {
            System.out.println("ไม่สามารถเพิ่ม TrayIcon: " + e.getMessage());
        }
    }
}

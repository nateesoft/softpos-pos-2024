package ics.utils;

/**
 *
 * @author nateesun
 */
import java.awt.Desktop;
import java.io.File;
import java.io.IOException;

public class OpenHTML {
    public static void open(String filePath) {
        try {
            // ตรวจสอบว่า Desktop API รองรับหรือไม่
            if (Desktop.isDesktopSupported()) {
                Desktop desktop = Desktop.getDesktop();

                // เปิดไฟล์ HTML ที่อยู่ในเครื่อง
                File htmlFile = new File(filePath);
                desktop.browse(htmlFile.toURI());
                
                // หรือเปิด URL ในเบราว์เซอร์
                // desktop.browse(new URI("http://example.com"));
            } else {
                System.out.println("Desktop API ไม่รองรับบนระบบนี้");
            }
        } catch (IOException e) {
            System.err.println(e.getMessage());
        }
    }
}

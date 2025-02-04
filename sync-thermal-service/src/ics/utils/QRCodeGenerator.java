package ics.utils;

/**
 *
 * @author nateesun
 */
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.WriterException;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import java.util.HashMap;
import java.util.Map;

public class QRCodeGenerator {

    public static void CreateQRCode(String data) {
        String filePath = "qrcode.png";
        int width = 300;
        int height = 300;

        try {
            // ตั้งค่าการเข้ารหัส
            Map<EncodeHintType, Object> hints = new HashMap<>();
            hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");

            // สร้าง BitMatrix สำหรับ QR Code
            BitMatrix bitMatrix = new MultiFormatWriter().encode(data, BarcodeFormat.QR_CODE, width, height, hints);

            // แปลง BitMatrix เป็นภาพ
            BufferedImage qrImage = MatrixToImageWriter.toBufferedImage(bitMatrix);

            // บันทึกภาพเป็นไฟล์
            ImageIO.write(qrImage, "png", new File(filePath));

            System.out.println("QR Code ถูกสร้างและบันทึกที่: " + filePath);
        } catch (WriterException | IOException e) {
        }
    }
}

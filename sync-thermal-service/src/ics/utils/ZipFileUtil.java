package ics.utils;

import java.io.*;
import java.util.zip.*;

/**
 *
 * @author nateesun
 */
public class ZipFileUtil {
    public static void zipFile(String sourceFile, String zipFileName) {
        try (FileOutputStream fos = new FileOutputStream(zipFileName);
             ZipOutputStream zos = new ZipOutputStream(fos);
             FileInputStream fis = new FileInputStream(sourceFile)) {

            ZipEntry zipEntry = new ZipEntry(new File(sourceFile).getName());
            zos.putNextEntry(zipEntry);

            byte[] buffer = new byte[1024];
            int length;
            while ((length = fis.read(buffer)) >= 0) {
                zos.write(buffer, 0, length);
            }
            zos.closeEntry();

            System.out.println("Successfully zipped: " + zipFileName);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        zipFile("example.txt", "example.zip");
    }
}

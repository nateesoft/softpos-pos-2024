package ics.utils;

import java.io.*;
import java.net.*;
/**
 *
 * @author nateesun
 */
public class FileDownloader {
    public static void downloadFile(String fileURL, String saveDir) {
        try (BufferedInputStream in = new BufferedInputStream(new URL(fileURL).openStream());
             FileOutputStream fileOutputStream = new FileOutputStream(saveDir)) {

            byte[] dataBuffer = new byte[1024];
            int bytesRead;
            while ((bytesRead = in.read(dataBuffer, 0, 1024)) != -1) {
                fileOutputStream.write(dataBuffer, 0, bytesRead);
            }

            System.out.println("File downloaded to: " + saveDir);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        downloadFile("https://example.com/file.zip", "downloaded.zip");
    }
}

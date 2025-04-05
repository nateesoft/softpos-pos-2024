package ics.utils;

import org.apache.commons.net.ftp.FTP;
import org.apache.commons.net.ftp.FTPClient;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 *
 * @author nateesun
 */
public class FTPUtils {

    private static final String ftpHost;
    private static final String ftpUser;
    private static final String ftpPassword;
    private static final int ftpPort;
    
    static {
        ftpHost = "softerp.homeip.net";
        ftpUser = "borftp";
        ftpPassword = "borftp";
        ftpPort = 21;
    }

    public static FTPClient ftpConnect() {
        FTPClient ftpClient = new FTPClient();
        try {
            ftpClient.connect(ftpHost, ftpPort);
            ftpClient.login(ftpUser, ftpPassword);
            ftpClient.enterLocalPassiveMode();
            ftpClient.setFileType(FTP.BINARY_FILE_TYPE);
        } catch (IOException e) {
            e.printStackTrace();
        }

        return ftpClient;
    }

    public static boolean uploadFile(String localFilePath, String remoteFilePath) {
        FTPClient ftpClient = null;
        boolean isUploadDone = false;

        try {
            ftpClient = ftpConnect();
            
            try (FileInputStream inputStream = new FileInputStream(localFilePath)) {
                boolean done = ftpClient.storeFile(remoteFilePath, inputStream);
                if (done) {
                    System.out.println("File uploaded successfully.");
                    isUploadDone = true;
                } else {
                    System.out.println("Failed to upload.");
                }
            }

            ftpClient.logout();
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (ftpClient != null) {
                try {
                    ftpClient.disconnect();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        }

        return isUploadDone;
    }

    public static boolean downloadFile(String remoteFile, String downloadPath) {
        FTPClient ftpClient = null;
        boolean isUploadDone = false;

        try {
            ftpClient = ftpConnect();
            
            try (FileOutputStream outputStream = new FileOutputStream(downloadPath)) {
                boolean success = ftpClient.retrieveFile(remoteFile, outputStream);
                if (success) {
                    System.out.println("File downloaded successfully.");
                    isUploadDone = true;
                } else {
                    System.out.println("Download failed.");
                }
            }

            ftpClient.logout();
        } catch (IOException ex) {
            ex.printStackTrace();
        } finally {
            if (ftpClient != null) {
                try {
                    ftpClient.disconnect();
                } catch (IOException ex) {
                    ex.printStackTrace();
                }
            }
        }

        return isUploadDone;
    }
    
    public static void main(String[] args) {
        String localFilePath = "/Users/nateesun/Documents/ics-project/GTP-186_Android_ESC_V2.00.00.zip";
        FTPUtils.uploadFile(localFilePath, "temp");
        
        String downloadPath = "/Users/nateesun/Documents/ics-project/Downloads";
        FTPUtils.downloadFile("temp/GTP-186_Android_ESC_V2.00.00.zip", downloadPath);
    }
}

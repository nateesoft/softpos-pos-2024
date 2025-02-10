package ics.utils;

import ics.client.database.model.DatabaseConfigBean;
import ics.client.printer.service.DatabaseConfig;
import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.Properties;

/**
 *
 * @author nateesun
 */
public class MySQLConnect {

    private static String dbVersion;
    private static String dbName;
    private static String dbHost;
    private static String dbUser;
    private static String dbPass;
    private static String dbPort;
    
    private static final MultiMySQLConnection msyqlVersion = new MultiMySQLConnection();

    // โหลดการตั้งค่าจาก properties ไฟล์
    private static void loadConfig(String databaseName) {
        try (InputStream fis = new FileInputStream(databaseName + ".properties")) {
            Properties properties = new Properties();
            properties.load(fis);

            dbVersion = properties.getProperty("db.version");
            dbHost = properties.getProperty("db.host");
            dbUser = properties.getProperty("db.user");
            dbPort = properties.getProperty("db.port");
            dbName = properties.getProperty("db.name").replaceAll("\"", "");
            String getPassword = properties.getProperty("db.pass");

            dbPass = AESSecret.decrypt(getPassword, AESSecret.CHECK_PASS);
        } catch (Exception e) {
            System.err.println("Error loading database configuration: " + e.getMessage());
        }
    }

    public static Connection getConnection(String dbVersion, String dbHost, String dbPort, String dbUser, String dbPass, String dbName) throws ClassNotFoundException, SQLException {
        return msyqlVersion.getMySQLVersion(dbVersion, dbHost, dbPort, dbUser, dbPass, dbName).getConnection();
    }
    
    public static Connection getConnectionLegacy(DatabaseConfigBean dbConfig) throws ClassNotFoundException, SQLException {
        return msyqlVersion.getMySQLVersion(dbConfig.getLegacyDbVersion(), dbConfig.getLegacyDbHost(), dbConfig.getLegacyDbPort(), dbConfig.getLegacyDbUser(), dbConfig.getLegacyDbPass(), dbConfig.getLegacyDbName()).getConnection();
    }
    
    public static Connection getConnectionNew(DatabaseConfigBean dbConfig) throws ClassNotFoundException, SQLException {
        return msyqlVersion.getMySQLVersion(dbConfig.getNewDbVersion(), dbConfig.getNewDbHost(), dbConfig.getNewDbPort(), dbConfig.getNewDbUser(), dbConfig.getNewDbPass(), dbConfig.getNewDbName()).getConnection();
    }
    
    public static Connection getConnectionCrm(DatabaseConfigBean dbConfig) throws ClassNotFoundException, SQLException {
        return msyqlVersion.getMySQLVersion(dbConfig.getCrmDbVersion(), dbConfig.getCrmDbHost(), dbConfig.getCrmDbPort(), dbConfig.getCrmDbUser(), dbConfig.getCrmDbPass(), dbConfig.getCrmDbName()).getConnection();
    }

    // ฟังก์ชันสำหรับสร้าง Connection
    public static Connection getConnection(String databaseName) throws SQLException {
        loadConfig(databaseName);
        return msyqlVersion.getMySQLVersion(dbVersion, dbHost, dbPort, dbUser, dbPass, dbName).getConnection();
    }

    // ฟังก์ชันสำหรับปิด Connection (กรณีไม่ได้ใช้ try-with-resources)
    public static void closeConnection(Connection connection) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                System.err.println("Error closing connection: " + e.getMessage());
            }
        }
    }
}

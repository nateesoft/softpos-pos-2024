package ics.utils;

/**
 *
 * @author nateesun
 */
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class MultiMySQLConnection {

    public HikariDataSource getMySQLVersion(String mysqlVersion, String host, String port, String user, String password, String dbName) {
        String concatDbName = "";
        if (dbName != null) {
            concatDbName = "/" + dbName;
        }
        if (mysqlVersion.equals("5")) {
            // สร้าง DataSource สำหรับ MySQL 5
            return createDataSource("com.mysql.jdbc.Driver",
                    "jdbc:mysql://" + host + ":" + port + concatDbName, user, password);
        } else {
            // สร้าง DataSource สำหรับ MySQL 8
            return createDataSource(
                    "com.mysql.cj.jdbc.Driver",
                    "jdbc:mysql://" + host + ":" + port + concatDbName, user, password);
        }
    }

    private static HikariDataSource createDataSource(String driver, String url, String user, String password) {
        HikariConfig config = new HikariConfig();
        config.setDriverClassName(driver);
        config.setJdbcUrl(url);
        config.setUsername(user);
        config.setPassword(password);
//        config.setMaximumPoolSize(5);
//        config.setMinimumIdle(1);
//        config.setIdleTimeout(10000);
        return new HikariDataSource(config);
    }

    private static void testQuery(HikariDataSource dataSource, String query) {
        try (Connection conn = dataSource.getConnection(); Statement stmt = conn.createStatement(); ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                System.out.println("Data: " + rs.getString(1)); // ปรับให้ตรงกับ schema
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

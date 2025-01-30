package ics.utils;

import ics.client.printer.controller.POSConfigSetup;

/**
 *
 * @author nateesun
 */
public class TestMySQLConnect {
    
    public static void main(String[] args) {
        POSConfigSetup p = new POSConfigSetup();
        p.getData("001");
//        try (Connection connection = MySQLConnectionUtil.getConnection(); Statement statement = connection.createStatement()) {
//
//            // ตัวอย่างการ Query
//            String query = "SELECT P_Terminal,P_Vat,P_Service "
//                    + "FROM posconfigsetup ";
//            try (ResultSet rs = statement.executeQuery(query)) {
//                while (rs.next()) {
//                    System.out.println(rs.getString(1));
//                }
//            }
//        } catch (Exception e) {
//            System.err.println("Database operation failed: " + e.getMessage());
//        }
    }
}

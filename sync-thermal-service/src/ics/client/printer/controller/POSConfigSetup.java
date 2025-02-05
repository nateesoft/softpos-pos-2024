package ics.client.printer.controller;

import ics.client.printer.model.POSConfigSetupBean;
import ics.utils.ErrorDialog;
import ics.utils.MySQLConnect;
import ics.utils.ThaiUtil;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author nateesun
 */
public class POSConfigSetup {
    
    private final String dbName;
    
    public POSConfigSetup(String dbName) {
        this.dbName = dbName;
    }

    public POSConfigSetupBean getData(String Terminal) {
        POSConfigSetupBean bean = new POSConfigSetupBean();
        try (Connection connection = MySQLConnect.getConnection(this.dbName); Statement statement = connection.createStatement()) {

            // ตัวอย่างการ Query
            String query = "SELECT P_Terminal,P_Vat,P_VatType,P_Service,P_PrintRecpMessage "
                    + "FROM posconfigsetup "
                    + "where P_Terminal='" + Terminal + "'";
            try (ResultSet rs = statement.executeQuery(query)) {
                while (rs.next()) {
                    bean.setP_Terminal(rs.getString("P_Terminal"));
                    bean.setP_Vat(rs.getDouble("P_Vat"));
                    bean.setP_Service(rs.getDouble("P_Service"));
                    bean.setP_PrintRecpMessage(ThaiUtil.AsciiToThai(rs.getString("P_PrintRecpMessage")));
                    bean.setP_VatType(rs.getString("P_VatType"));
                }
            }
        } catch (Exception e) {
            new ErrorDialog(null, true, e.getMessage()).setVisible(true);
        }

        return bean;
    }
}

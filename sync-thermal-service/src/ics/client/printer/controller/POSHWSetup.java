package ics.client.printer.controller;

import ics.client.database.model.DatabaseConfigBean;
import ics.client.printer.model.POSHWSetupBean;
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
public class POSHWSetup {
    
    private final DatabaseConfigBean dbConfig;
    
    public POSHWSetup(DatabaseConfigBean dbConfig) {
        this.dbConfig = dbConfig;
    }

    public POSHWSetupBean getData(String Terminal) {
        POSHWSetupBean bean = new POSHWSetupBean();
        try (Connection connection = MySQLConnect.getConnectionLegacy(this.dbConfig); Statement statement = connection.createStatement()) {

            // ตัวอย่างการ Query
            String query = "SELECT Terminal, Heading1, Heading2, Heading3, Heading4, Footting1, Footting2, Footting3 "
                    + "FROM poshwsetup "
                    + "where Terminal='" + Terminal + "'";
            try (ResultSet rs = statement.executeQuery(query)) {
                while (rs.next()) {
                    bean.setTerminal(rs.getString("Terminal"));
                    bean.setHeading1(rs.getString("Heading1"));
                    bean.setHeading2(rs.getString("Heading2"));
                    bean.setHeading3(rs.getString("Heading3"));
                    bean.setHeading4(rs.getString("Heading4"));
                    bean.setFootting1(ThaiUtil.AsciiToThai(rs.getString("Footting1")));
                    bean.setFootting2(ThaiUtil.AsciiToThai(rs.getString("Footting2")));
                    bean.setFootting3(ThaiUtil.AsciiToThai(rs.getString("Footting3")));
                }
            }
        } catch (Exception e) {
            new ErrorDialog(null, true, e.getMessage()).setVisible(true);
        }

        return bean;
    }
}

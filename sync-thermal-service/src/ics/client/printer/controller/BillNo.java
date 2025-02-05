package ics.client.printer.controller;

import ics.client.printer.model.BillNoBean;
import ics.utils.ErrorDialog;
import ics.utils.MySQLConnect;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author nateesun
 */
public class BillNo {
    
    private final String dbName;
    
    public BillNo(String dbName) {
        this.dbName = dbName;
    }

    public BillNoBean getData(String B_Refno) {
        BillNoBean bean = new BillNoBean();
        try (Connection connection = MySQLConnect.getConnection(this.dbName); Statement statement = connection.createStatement()) {

            // ตัวอย่างการ Query
            String query = "SELECT * FROM billno "
                    + "where B_Refno='" + B_Refno + "'";
            try (ResultSet rs = statement.executeQuery(query)) {
                while (rs.next()) {
                    bean.setB_Refno(rs.getString("B_Refno"));
                    bean.setB_Cashier(rs.getString("B_Cashier"));
                    bean.setB_Cust(rs.getInt("B_Cust"));
                    bean.setB_Ton(rs.getDouble("B_Ton"));
                    bean.setB_Total(rs.getDouble("B_Total"));
                    bean.setB_Food(rs.getDouble("B_Food"));
                    bean.setB_Drink(rs.getDouble("B_Drink"));
                    bean.setB_Product(rs.getDouble("B_Product"));
                    bean.setB_Service(rs.getDouble("B_Service"));
                    bean.setB_ServiceAmt(rs.getDouble("B_ServiceAmt"));
                    bean.setB_NetTotal(rs.getDouble("B_NetTotal"));
                    bean.setB_NetFood(rs.getDouble("B_NetFood"));
                    bean.setB_NetProduct(rs.getDouble("B_NetProduct"));
                    bean.setB_NetVat(rs.getDouble("B_NetVat"));
                    bean.setB_NetNonVat(rs.getDouble("B_NetNonVat"));
                    bean.setB_Vat(rs.getDouble("B_Vat"));
                    bean.setB_PayAmt(rs.getDouble("B_PayAmt"));
                    bean.setB_Cash(rs.getDouble("B_Cash"));
                    bean.setB_MacNo(rs.getString("B_MacNo"));
                    bean.setB_BillCopy(rs.getInt("B_BillCopy"));
                    bean.setB_Void(rs.getString("B_Void"));
                    bean.setB_VoidTime(rs.getString("B_VoidTime"));
                    bean.setB_VoidUser(rs.getString("B_VoidUser"));
                    bean.setB_Entertain(rs.getDouble("B_Entertain"));
                }
            }
        } catch (Exception e) {
            new ErrorDialog(null, true, e.getMessage()).setVisible(true);
        }

        return bean;
    }
}

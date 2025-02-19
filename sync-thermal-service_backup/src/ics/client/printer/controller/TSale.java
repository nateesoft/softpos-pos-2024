package ics.client.printer.controller;

import ics.client.database.model.DatabaseConfigBean;
import ics.client.printer.model.TSaleBean;
import ics.utils.ErrorDialog;
import ics.utils.MySQLConnect;
import ics.utils.ThaiUtil;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author nateesun
 */
public class TSale {
    
    private final DatabaseConfigBean dbConfig;
    
    public TSale(DatabaseConfigBean dbConfig) {
        this.dbConfig = dbConfig;
    }

    public List<TSaleBean> getListData(String R_Refno) {
        List<TSaleBean> tSaleListBean = new ArrayList<>();
        try (Connection connection = MySQLConnect.getConnectionLegacy(this.dbConfig); Statement statement = connection.createStatement()) {
            String sql = "SELECT "
                    + "    R_PluCode, "
                    + "    R_PName, "
                    + "    MAX(R_Void) AS R_Void,"
                    + "    MAX(R_ETD) AS R_ETD, "
                    + "    SUM(R_Quan) AS R_Quan, "
                    + "    AVG(R_Price) AS R_Price, "
                    + "    SUM(R_Total) AS R_Total "
                    + "FROM t_sale ts "
                    + "WHERE R_Refno = '"+R_Refno+"' "
                    + "GROUP BY R_PluCode, R_PName";
            try (ResultSet rs = statement.executeQuery(sql)) {
                while (rs.next()) {
                    TSaleBean bean = new TSaleBean();
                    bean.setR_ETD(rs.getString("R_ETD"));
                    bean.setR_Quan(rs.getInt("R_Quan"));
                    bean.setR_Price(rs.getDouble("R_Price"));
                    bean.setR_Total(rs.getDouble("R_Total"));
                    bean.setR_PluCode(rs.getString("R_PluCode"));
                    bean.setR_PName(ThaiUtil.AsciiToThai(rs.getString("R_PName")));
                    bean.setR_Void(rs.getString("R_Void"));

                    tSaleListBean.add(bean);
                }
            }
        } catch (Exception e) {
            new ErrorDialog(null, true, e.getMessage()).setVisible(true);
        }

        return tSaleListBean;
    }

}

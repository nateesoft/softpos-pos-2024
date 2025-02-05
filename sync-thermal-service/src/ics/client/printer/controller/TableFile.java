package ics.client.printer.controller;

import ics.client.printer.model.TableFileBean;
import ics.utils.ErrorDialog;
import ics.utils.MySQLConnect;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author nateesun
 */
public class TableFile {
    
    private final String dbName;
    
    public TableFile(String dbName) {
        this.dbName = dbName;
    }
    
    public TableFileBean getData(String tableNo) {
        TableFileBean bean = new TableFileBean();
        try (Connection connection = MySQLConnect.getConnection(this.dbName); Statement statement = connection.createStatement()) {

            // ตัวอย่างการ Query
            String query = "SELECT * FROM tablefile where Tcode='" + tableNo + "'";
            try (ResultSet rs = statement.executeQuery(query)) {
                while (rs.next()) {
                    bean.setTcode(rs.getString("Tcode"));
                    bean.setSoneCode(rs.getString("SoneCode"));
                    bean.setMacNo(rs.getString("MacNo"));
                    bean.setCashier(rs.getString("Cashier"));
                    bean.setTLoginTime(rs.getString("TLoginTime"));
                    bean.setTCurTime(rs.getString("TCurTime"));
                    bean.setTCustomer(rs.getInt("TCustomer"));
                    bean.setTItem(rs.getInt("TItem"));
                    bean.setTAmount(rs.getFloat("TAmount"));
                    bean.setTOnAct(rs.getString("TOnAct"));
                    bean.setService(rs.getFloat("Service"));
                    bean.setServiceAmt(rs.getFloat("ServiceAmt"));
                    bean.setEmpDisc(rs.getString("EmpDisc"));
                    bean.setEmpDiscAmt(rs.getFloat("EmpDiscAmt"));
                    bean.setFastDisc(rs.getString("FastDisc"));
                    bean.setFastDiscAmt(rs.getFloat("FastDiscAmt"));
                    bean.setTrainDisc(rs.getString("TrainDisc"));
                    bean.setTrainDiscAmt(rs.getFloat("TrainDiscAmt"));
                    bean.setMemDisc(rs.getString("MemDisc"));
                    bean.setMemDiscAmt(rs.getFloat("MemDiscAmt"));
                    bean.setSubDisc(rs.getString("SubDisc"));
                    bean.setSubDiscAmt(rs.getFloat("SubDiscAmt"));
                    bean.setDiscBath(rs.getFloat("DiscBath"));
                    bean.setProDiscAmt(rs.getFloat("ProDiscAmt"));
                    bean.setSpaDiscAmt(rs.getFloat("SpaDiscAmt"));
                    bean.setCuponDiscAmt(rs.getFloat("CuponDiscAmt"));
                    bean.setItemDiscAmt(rs.getFloat("ItemDiscAmt"));
                    bean.setMemCode(rs.getString("MemCode"));
                    bean.setMemCurAmt(rs.getFloat("MemCurAmt"));
                    bean.setMemName(rs.getString("MemName"));
                    bean.setFood(rs.getFloat("Food"));
                    bean.setDrink(rs.getFloat("Drink"));
                    bean.setProduct(rs.getFloat("Product"));
                    bean.setNetTotal(rs.getFloat("NetTotal"));
                    bean.setPrintTotal(rs.getFloat("PrintTotal"));
                    bean.setPrintChkBill(rs.getString("PrintChkBill"));
                    bean.setPrintCnt(rs.getInt("PrintCnt"));
                    bean.setPrintTime1(rs.getString("PrintTime1"));
                    bean.setPrintTime2(rs.getString("PrintTime2"));
                    bean.setChkBill(rs.getString("ChkBill"));
                    bean.setChkBillTime(rs.getString("ChkBillTime"));
                    bean.setStkCode1(rs.getString("StkCode1"));
                    bean.setStkCode2(rs.getString("StkCode2"));
                    bean.setTDesk(rs.getInt("TDesk"));
                    bean.setTUser(rs.getString("TUser"));
                    bean.setTPause(rs.getString("TPause"));
                }
            }
        } catch (Exception e) {
            new ErrorDialog(null, true, e.getMessage()).setVisible(true);
        }

        return bean;
    }
}

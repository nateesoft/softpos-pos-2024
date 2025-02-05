package ics.client.printer.service;

import ics.utils.AESSecret;
import ics.utils.MultiMySQLConnection;
import java.io.FileOutputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Properties;
import javax.swing.JComboBox;

/**
 *
 * @author nateesunIs
 */
public class DatabaseConfig extends javax.swing.JDialog {

    public DatabaseConfig(java.awt.Frame parent, boolean modal) {
        super(parent, modal);
        initComponents();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel2 = new javax.swing.JPanel();
        txtDbPort = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        btnSaveNewConfig = new javax.swing.JButton();
        txtDbUser = new javax.swing.JTextField();
        txtDbPass = new javax.swing.JPasswordField();
        jLabel10 = new javax.swing.JLabel();
        btnTestConnection = new javax.swing.JButton();
        txtDbHost = new javax.swing.JTextField();
        cbDatabaseNameList = new javax.swing.JComboBox<>();
        cbMysqlVersionList = new javax.swing.JComboBox<>();
        jLabel5 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Database Configuration");

        txtDbPort.setText("3306");

        jLabel6.setText("Database Name:");

        jLabel7.setText("Password:");

        jLabel8.setText("Database Server:");

        btnSaveNewConfig.setBackground(new java.awt.Color(153, 255, 204));
        btnSaveNewConfig.setText("Add Database Config");
        btnSaveNewConfig.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSaveNewConfigActionPerformed(evt);
            }
        });

        txtDbUser.setText("root");

        txtDbPass.setText("jPasswordField1");

        jLabel10.setText("Username:");

        btnTestConnection.setText("Test Connection");
        btnTestConnection.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnTestConnectionActionPerformed(evt);
            }
        });

        txtDbHost.setText("localhost");

        cbMysqlVersionList.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "5", "8" }));

        jLabel5.setText("Mysql Version:");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                        .addComponent(btnSaveNewConfig)
                        .addGroup(jPanel2Layout.createSequentialGroup()
                            .addComponent(jLabel6)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                            .addComponent(cbDatabaseNameList, javax.swing.GroupLayout.PREFERRED_SIZE, 209, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jLabel8)
                            .addComponent(jLabel7)
                            .addComponent(jLabel10)
                            .addComponent(jLabel5))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(cbMysqlVersionList, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnTestConnection)
                            .addComponent(txtDbHost)
                            .addComponent(txtDbUser)
                            .addComponent(txtDbPass, javax.swing.GroupLayout.DEFAULT_SIZE, 206, Short.MAX_VALUE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtDbPort, javax.swing.GroupLayout.PREFERRED_SIZE, 99, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbMysqlVersionList, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel5))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel8)
                    .addComponent(txtDbHost, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(txtDbPort, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtDbUser, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel10))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel7)
                    .addComponent(txtDbPass, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnTestConnection)
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbDatabaseNameList, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel6))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnSaveNewConfig)
                .addContainerGap())
        );

        jTabbedPane1.addTab("Database Configuration", jPanel2);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTabbedPane1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTabbedPane1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void btnSaveNewConfigActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSaveNewConfigActionPerformed
        saveConfig();
    }//GEN-LAST:event_btnSaveNewConfigActionPerformed

    private void btnTestConnectionActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnTestConnectionActionPerformed
        String version = cbMysqlVersionList.getSelectedItem().toString();
        testDbConnection(version, txtDbHost.getText(), txtDbPort.getText(), txtDbUser.getText(), new String(txtDbPass.getPassword()), cbDatabaseNameList);
    }//GEN-LAST:event_btnTestConnectionActionPerformed

    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(DatabaseConfig.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(DatabaseConfig.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(DatabaseConfig.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(DatabaseConfig.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the dialog */
        java.awt.EventQueue.invokeLater(() -> {
            DatabaseConfig dialog = new DatabaseConfig(new javax.swing.JFrame(), true);
            dialog.addWindowListener(new java.awt.event.WindowAdapter() {
                @Override
                public void windowClosing(java.awt.event.WindowEvent e) {
                    System.exit(0);
                }
            });
            dialog.setVisible(true);
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnSaveNewConfig;
    private javax.swing.JButton btnTestConnection;
    private javax.swing.JComboBox<String> cbDatabaseNameList;
    private javax.swing.JComboBox<String> cbMysqlVersionList;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTextField txtDbHost;
    private javax.swing.JPasswordField txtDbPass;
    private javax.swing.JTextField txtDbPort;
    private javax.swing.JTextField txtDbUser;
    // End of variables declaration//GEN-END:variables

    private void testDbConnection(String version, String dbHost, String dbPort, String dbUser, String dbPass, JComboBox cbList) {
        cbList.removeAllItems();

        MultiMySQLConnection mysqlVersion = new MultiMySQLConnection();
        // เชื่อมต่อฐานข้อมูล
        try (Connection connection = mysqlVersion.getMySQLVersion(version, dbHost, dbPort, dbUser, dbPass, null).getConnection()) {
            // ตัวอย่างการสร้างคำสั่ง SQL
            String query = "show databases";
            try (Statement statement = connection.createStatement(); ResultSet resultSet = statement.executeQuery(query)) {

                // วนลูปเพื่ออ่านข้อมูลจากผลลัพธ์
                while (resultSet.next()) {
                    String databaseName = resultSet.getString(1);
                    if (!databaseName.equals("sys") && !databaseName.equals("information_schema") && !databaseName.equals("performance_schema")) {
                        cbList.addItem(databaseName);
                    }
                }
            }
        } catch (Exception e) {
            System.err.println("เกิดข้อผิดพลาด: " + e.getMessage());
        }
    }

    private void saveConfig() {
        try {
            // สร้างออบเจ็กต์ Properties
            Properties properties = new Properties();

            // กำหนดค่าคอนฟิก
            properties.setProperty("db.version", cbMysqlVersionList.getSelectedItem().toString());
            properties.setProperty("db.host", txtDbHost.getText());
            properties.setProperty("db.user", txtDbUser.getText());
            properties.setProperty("db.pass", AESSecret.encrypt(new String(txtDbPass.getPassword()), AESSecret.CHECK_PASS));
            properties.setProperty("db.port", txtDbPort.getText());
            properties.setProperty("db.name", "\"" + cbDatabaseNameList.getSelectedItem() + "\"");

            try (FileOutputStream outputStream = new FileOutputStream(cbDatabaseNameList.getSelectedItem().toString()+".properties")) {
                // เขียนค่าลงในไฟล์
                properties.store(outputStream, "Database Configuration");
                System.out.println("Config file written successfully!");
            } catch (IOException e) {
                System.err.println("Error writing config file: " + e.getMessage());
            }
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
    }

}

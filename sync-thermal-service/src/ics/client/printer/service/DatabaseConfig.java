package ics.client.printer.service;

import ics.utils.AESSecret;
import ics.utils.MultiMySQLConnection;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
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

    private static final String MYSQL_LECACY_FILE = "db_legacy_config.properties";
    private static final String MYSQL_NEW_FILE = "db_new_config.properties";

    public DatabaseConfig(java.awt.Frame parent, boolean modal) {
        super(parent, modal);
        initComponents();

        loadInitConfigLegacy();
        loadInitConfigNew();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel2 = new javax.swing.JPanel();
        txtDbPort1 = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        btnSaveNewConfig = new javax.swing.JButton();
        txtDbUser1 = new javax.swing.JTextField();
        txtDbPass1 = new javax.swing.JPasswordField();
        jLabel10 = new javax.swing.JLabel();
        btnTestConnection1 = new javax.swing.JButton();
        txtDbHost1 = new javax.swing.JTextField();
        cbDatabaseNameList1 = new javax.swing.JComboBox<>();
        cbMysqlVersionList1 = new javax.swing.JComboBox<>();
        jLabel5 = new javax.swing.JLabel();
        jPanel1 = new javax.swing.JPanel();
        txtDbPort = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();
        btnSaveLegacyConfig = new javax.swing.JButton();
        txtDbUser = new javax.swing.JTextField();
        txtDbPass = new javax.swing.JPasswordField();
        jLabel4 = new javax.swing.JLabel();
        btnTestConnection = new javax.swing.JButton();
        txtDbHost = new javax.swing.JTextField();
        cbDatabaseNameList = new javax.swing.JComboBox<>();
        cbMysqlVersionList = new javax.swing.JComboBox<>();
        jLabel9 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Database Configuration");

        txtDbPort1.setText("3306");

        jLabel6.setText("Database Name:");

        jLabel7.setText("Password:");

        jLabel8.setText("Database Server:");

        btnSaveNewConfig.setBackground(new java.awt.Color(153, 255, 204));
        btnSaveNewConfig.setText("Save Database Config");
        btnSaveNewConfig.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSaveNewConfigActionPerformed(evt);
            }
        });

        txtDbUser1.setText("root");

        txtDbPass1.setText("jPasswordField1");

        jLabel10.setText("Username:");

        btnTestConnection1.setText("Test Connection");
        btnTestConnection1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnTestConnection1ActionPerformed(evt);
            }
        });

        txtDbHost1.setText("localhost");

        cbMysqlVersionList1.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "5", "8" }));

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
                            .addComponent(cbDatabaseNameList1, javax.swing.GroupLayout.PREFERRED_SIZE, 209, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jLabel8)
                            .addComponent(jLabel7)
                            .addComponent(jLabel10)
                            .addComponent(jLabel5))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(cbMysqlVersionList1, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnTestConnection1)
                            .addComponent(txtDbHost1)
                            .addComponent(txtDbUser1)
                            .addComponent(txtDbPass1, javax.swing.GroupLayout.DEFAULT_SIZE, 206, Short.MAX_VALUE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtDbPort1, javax.swing.GroupLayout.PREFERRED_SIZE, 99, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbMysqlVersionList1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel5))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel8)
                    .addComponent(txtDbHost1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(txtDbPort1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtDbUser1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel10))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel7)
                    .addComponent(txtDbPass1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnTestConnection1)
                .addGap(18, 18, 18)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbDatabaseNameList1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel6))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnSaveNewConfig)
                .addContainerGap())
        );

        jTabbedPane1.addTab("New POS Db", jPanel2);

        txtDbPort.setText("3306");

        jLabel2.setText("Database Name:");

        jLabel3.setText("Password:");

        jLabel1.setText("Database Server:");

        btnSaveLegacyConfig.setBackground(new java.awt.Color(255, 153, 153));
        btnSaveLegacyConfig.setText("Save Database Config");
        btnSaveLegacyConfig.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSaveLegacyConfigActionPerformed(evt);
            }
        });

        txtDbUser.setText("root");

        txtDbPass.setText("jPasswordField1");

        jLabel4.setText("Username:");

        btnTestConnection.setText("Test Connection");
        btnTestConnection.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnTestConnectionActionPerformed(evt);
            }
        });

        txtDbHost.setText("localhost");

        cbMysqlVersionList.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "5", "8" }));

        jLabel9.setText("Mysql Version:");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jLabel1)
                            .addComponent(jLabel3)
                            .addComponent(jLabel4)
                            .addComponent(jLabel9))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(btnTestConnection)
                            .addComponent(txtDbHost)
                            .addComponent(txtDbUser)
                            .addComponent(txtDbPass, javax.swing.GroupLayout.DEFAULT_SIZE, 206, Short.MAX_VALUE)
                            .addComponent(cbMysqlVersionList, javax.swing.GroupLayout.Alignment.TRAILING, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(txtDbPort, javax.swing.GroupLayout.PREFERRED_SIZE, 99, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                        .addComponent(btnSaveLegacyConfig)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                            .addComponent(jLabel2)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                            .addComponent(cbDatabaseNameList, javax.swing.GroupLayout.PREFERRED_SIZE, 209, javax.swing.GroupLayout.PREFERRED_SIZE))))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbMysqlVersionList, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel9))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1)
                    .addComponent(txtDbHost, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(txtDbPort, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtDbUser, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel4))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(txtDbPass, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnTestConnection)
                .addGap(18, 18, 18)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbDatabaseNameList, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(btnSaveLegacyConfig)
                .addContainerGap())
        );

        jTabbedPane1.addTab("Legacy POS Db", jPanel1);

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

    private void btnTestConnectionActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnTestConnectionActionPerformed
        String version = cbMysqlVersionList.getSelectedItem().toString();
        testDbConnection(version, txtDbHost.getText(), txtDbPort.getText(), txtDbUser.getText(), new String(txtDbPass.getPassword()), cbDatabaseNameList);
    }//GEN-LAST:event_btnTestConnectionActionPerformed

    private void btnSaveLegacyConfigActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSaveLegacyConfigActionPerformed
        saveConfigLegacy();
    }//GEN-LAST:event_btnSaveLegacyConfigActionPerformed

    private void btnSaveNewConfigActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSaveNewConfigActionPerformed
        saveConfigNew();
    }//GEN-LAST:event_btnSaveNewConfigActionPerformed

    private void btnTestConnection1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnTestConnection1ActionPerformed
        String version = cbMysqlVersionList1.getSelectedItem().toString();
        testDbConnection(version, txtDbHost1.getText(), txtDbPort1.getText(), txtDbUser1.getText(), new String(txtDbPass1.getPassword()), cbDatabaseNameList1);
    }//GEN-LAST:event_btnTestConnection1ActionPerformed

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
    private javax.swing.JButton btnSaveLegacyConfig;
    private javax.swing.JButton btnSaveNewConfig;
    private javax.swing.JButton btnTestConnection;
    private javax.swing.JButton btnTestConnection1;
    private javax.swing.JComboBox<String> cbDatabaseNameList;
    private javax.swing.JComboBox<String> cbDatabaseNameList1;
    private javax.swing.JComboBox<String> cbMysqlVersionList;
    private javax.swing.JComboBox<String> cbMysqlVersionList1;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel10;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JLabel jLabel9;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTextField txtDbHost;
    private javax.swing.JTextField txtDbHost1;
    private javax.swing.JPasswordField txtDbPass;
    private javax.swing.JPasswordField txtDbPass1;
    private javax.swing.JTextField txtDbPort;
    private javax.swing.JTextField txtDbPort1;
    private javax.swing.JTextField txtDbUser;
    private javax.swing.JTextField txtDbUser1;
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

    private void saveConfigNew() {
        try {
            // สร้างออบเจ็กต์ Properties
            Properties properties = new Properties();

            // กำหนดค่าคอนฟิก
            properties.setProperty("db.version", cbMysqlVersionList1.getSelectedItem().toString());
            properties.setProperty("db.host", txtDbHost1.getText());
            properties.setProperty("db.user", txtDbUser1.getText());
            properties.setProperty("db.pass", AESSecret.encrypt(new String(txtDbPass.getPassword()), AESSecret.CHECK_PASS));
            properties.setProperty("db.port", txtDbPort1.getText());
            properties.setProperty("db.name", "\"" + cbDatabaseNameList1.getSelectedItem() + "\"");

            try (FileOutputStream outputStream = new FileOutputStream(MYSQL_NEW_FILE)) {
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

    private void saveConfigLegacy() {
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

            try (FileOutputStream outputStream = new FileOutputStream(MYSQL_LECACY_FILE)) {
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

    private void loadInitConfigLegacy() {
        Properties properties = new Properties();
        try (InputStream input = new FileInputStream(MYSQL_LECACY_FILE)) {
            properties.load(input);
            String dbVersion = properties.getProperty("db.version");
            String dbHost = properties.getProperty("db.host");
            String dbUser = properties.getProperty("db.user");
            String dbPass = properties.getProperty("db.pass");
            String dbPort = properties.getProperty("db.port");
            String dbName = properties.getProperty("db.name").replace("\"", "");

            String decryptPass = AESSecret.decrypt(dbPass, AESSecret.CHECK_PASS);

            txtDbHost.setText(dbHost);
            txtDbUser.setText(dbUser);
            txtDbPass.setText(decryptPass);
            txtDbPort.setText(dbPort);

            testDbConnection(dbVersion, dbHost, dbPort, dbUser, decryptPass, cbDatabaseNameList);

            int size = cbDatabaseNameList.getItemCount();
            for (int i = 0; i < size; i++) {
                if (dbName.equals(cbDatabaseNameList.getItemAt(i))) {
                    cbDatabaseNameList.setSelectedIndex(i);
                }
            }
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        }
    }

    private void loadInitConfigNew() {
        Properties properties = new Properties();

        try (InputStream input = new FileInputStream(MYSQL_NEW_FILE)) {
            properties.load(input);
            String dbVersion = properties.getProperty("db.version");
            String dbHost = properties.getProperty("db.host");
            String dbUser = properties.getProperty("db.user");
            String dbPass = properties.getProperty("db.pass");
            String dbPort = properties.getProperty("db.port");
            String dbName = properties.getProperty("db.name").replace("\"", "");

            String decryptPass = AESSecret.decrypt(dbPass, AESSecret.CHECK_PASS);

            txtDbHost1.setText(dbHost);
            txtDbUser1.setText(dbUser);
            txtDbPass1.setText(decryptPass);
            txtDbPort1.setText(dbPort);

            testDbConnection(dbVersion, dbHost, dbPort, dbUser, decryptPass, cbDatabaseNameList1);

            int size = cbDatabaseNameList1.getItemCount();
            for (int i = 0; i < size; i++) {
                if (dbName.equals(cbDatabaseNameList1.getItemAt(i))) {
                    cbDatabaseNameList1.setSelectedIndex(i);
                }
            }
        } catch (Exception ex) {
            System.err.println(ex.getMessage());
        }
    }
}

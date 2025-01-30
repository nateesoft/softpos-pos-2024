package ics.client.printer.service;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import javax.print.PrintService;

/**
 *
 * @author nateesun
 */
public class PrinterConfig extends javax.swing.JDialog {

    private final PrinterControlService printerControlService = new PrinterControlService();

    public PrinterConfig(java.awt.Frame parent, boolean modal) {
        super(parent, modal);
        initComponents();

        initPrinterNameList();
        loadInitCashierConfig();
        loadInitKitchenConfig();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel1 = new javax.swing.JPanel();
        btnSave1 = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        btnPrintTest1 = new javax.swing.JButton();
        txtHeight1 = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        cbPrinterName1 = new javax.swing.JComboBox<>();
        txtContent1 = new javax.swing.JTextArea();
        txtWidth1 = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        txtHost1 = new javax.swing.JTextField();
        jLabel7 = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();
        btnSave2 = new javax.swing.JButton();
        jLabel4 = new javax.swing.JLabel();
        btnPrintTest2 = new javax.swing.JButton();
        txtHeight2 = new javax.swing.JTextField();
        jLabel5 = new javax.swing.JLabel();
        cbPrinterName2 = new javax.swing.JComboBox<>();
        txtContent2 = new javax.swing.JTextArea();
        txtWidth2 = new javax.swing.JTextField();
        jLabel6 = new javax.swing.JLabel();
        jLabel8 = new javax.swing.JLabel();
        txtHost2 = new javax.swing.JTextField();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Printer Configuration");
        setAlwaysOnTop(true);

        btnSave1.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        btnSave1.setText("Save Config");
        btnSave1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSave1ActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel2.setText("Printer Width:");

        btnPrintTest1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        btnPrintTest1.setText("Print Test");
        btnPrintTest1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPrintTest1ActionPerformed(evt);
            }
        });

        txtHeight1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHeight1.setText("72");

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel3.setText("Printer Height:");

        cbPrinterName1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        cbPrinterName1.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));

        txtContent1.setColumns(20);
        txtContent1.setFont(new java.awt.Font("Thonburi", 0, 13)); // NOI18N
        txtContent1.setLineWrap(true);
        txtContent1.setRows(5);
        txtContent1.setText("<div align=\"center\">\n<img src=\"file:com_logo.jpg\" width=100 height=100></img>\n</div>\n<div align=\"center\">\n<table>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">กะเพราหมูสับ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">55 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 55 บาท</font></td>\n</tr>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">หมูจุ่มชุดใหญ่ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">199 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 155 บาท</font></td>\n</tr>\n<tr>\n<td colspan=\"4\"></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">210 บาท</font></td>\n</tr>\n</table>\n</div>\n<hr />");
        txtContent1.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        txtWidth1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtWidth1.setText("75");

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel1.setText("Printer Name:");

        txtHost1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHost1.setText("http://localhost:9090");

        jLabel7.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel7.setText("Service Host:");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel3)
                            .addComponent(jLabel2)
                            .addComponent(jLabel1)
                            .addComponent(jLabel7))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(cbPrinterName1, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(txtWidth1)
                            .addComponent(txtHeight1, javax.swing.GroupLayout.PREFERRED_SIZE, 248, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(txtHost1, javax.swing.GroupLayout.PREFERRED_SIZE, 248, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(btnPrintTest1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnSave1, javax.swing.GroupLayout.DEFAULT_SIZE, 146, Short.MAX_VALUE))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(txtContent1))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnPrintTest1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel1)
                    .addComponent(cbPrinterName1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtWidth1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2)
                    .addComponent(btnSave1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtHeight1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel3))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtHost1, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel7))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(txtContent1)
                .addContainerGap())
        );

        jTabbedPane1.addTab("Cashier Printer (ปริ้นเตอร์ Cashier)", jPanel1);

        btnSave2.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        btnSave2.setText("Save Config");
        btnSave2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSave2ActionPerformed(evt);
            }
        });

        jLabel4.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel4.setText("Printer Width:");

        btnPrintTest2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        btnPrintTest2.setText("Print Test");
        btnPrintTest2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPrintTest2ActionPerformed(evt);
            }
        });

        txtHeight2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHeight2.setText("72");

        jLabel5.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel5.setText("Printer Height:");

        cbPrinterName2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        cbPrinterName2.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));

        txtContent2.setColumns(20);
        txtContent2.setFont(new java.awt.Font("Thonburi", 0, 13)); // NOI18N
        txtContent2.setLineWrap(true);
        txtContent2.setRows(5);
        txtContent2.setText("<div align=\"center\">\n<img src=\"file:com_logo.jpg\" width=100 height=100></img>\n</div>\n<div align=\"center\">\n<table>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">กะเพราหมูสับ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">55 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 55 บาท</font></td>\n</tr>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">หมูจุ่มชุดใหญ่ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">199 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 155 บาท</font></td>\n</tr>\n<tr>\n<td colspan=\"4\"></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">210 บาท</font></td>\n</tr>\n</table>\n</div>\n<hr />");
        txtContent2.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        txtWidth2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtWidth2.setText("75");

        jLabel6.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel6.setText("Printer Name:");

        jLabel8.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel8.setText("Service Host:");

        txtHost2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHost2.setText("http://localhost:9090");

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel5)
                            .addComponent(jLabel4)
                            .addComponent(jLabel6)
                            .addComponent(jLabel8))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(cbPrinterName2, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(txtWidth2)
                            .addComponent(txtHeight2, javax.swing.GroupLayout.PREFERRED_SIZE, 248, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(txtHost2, javax.swing.GroupLayout.PREFERRED_SIZE, 248, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(btnPrintTest2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(btnSave2, javax.swing.GroupLayout.DEFAULT_SIZE, 146, Short.MAX_VALUE))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(txtContent2))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnPrintTest2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel6)
                    .addComponent(cbPrinterName2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtWidth2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel4)
                    .addComponent(btnSave2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtHeight2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel5))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtHost2, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel8))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(txtContent2, javax.swing.GroupLayout.PREFERRED_SIZE, 501, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
        );

        jTabbedPane1.addTab("Kitchen Printer (ปริ้นเตอร์ครัว)", jPanel2);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTabbedPane1)
                .addContainerGap())
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

    private void btnPrintTest1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPrintTest1ActionPerformed
        int width = Integer.parseInt((txtWidth1.getText()));
        int height = Integer.parseInt((txtHeight1.getText()));
        String content = txtContent1.getText();
        String printerName = cbPrinterName1.getItemAt(cbPrinterName1.getSelectedIndex());

        printerControlService.testPrinter(printerName, content, width, height);
    }//GEN-LAST:event_btnPrintTest1ActionPerformed

    private void btnSave1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSave1ActionPerformed
        saveConfig1();
    }//GEN-LAST:event_btnSave1ActionPerformed

    private void btnSave2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSave2ActionPerformed
        saveConfig2();
    }//GEN-LAST:event_btnSave2ActionPerformed

    private void btnPrintTest2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPrintTest2ActionPerformed
        int width = Integer.parseInt((txtWidth2.getText()));
        int height = Integer.parseInt((txtHeight2.getText()));
        String content = txtContent2.getText();
        String printerName = cbPrinterName2.getItemAt(cbPrinterName2.getSelectedIndex());

        printerControlService.testPrinter(printerName, content, width, height);
    }//GEN-LAST:event_btnPrintTest2ActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnPrintTest1;
    private javax.swing.JButton btnPrintTest2;
    private javax.swing.JButton btnSave1;
    private javax.swing.JButton btnSave2;
    private javax.swing.JComboBox<String> cbPrinterName1;
    private javax.swing.JComboBox<String> cbPrinterName2;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JLabel jLabel8;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTextArea txtContent1;
    private javax.swing.JTextArea txtContent2;
    private javax.swing.JTextField txtHeight1;
    private javax.swing.JTextField txtHeight2;
    private javax.swing.JTextField txtHost1;
    private javax.swing.JTextField txtHost2;
    private javax.swing.JTextField txtWidth1;
    private javax.swing.JTextField txtWidth2;
    // End of variables declaration//GEN-END:variables

    private void initPrinterNameList() {
        cbPrinterName1.removeAllItems();
        cbPrinterName2.removeAllItems();

        PrintService[] printers = printerControlService.getAllPrinterService();
        for (PrintService printer : printers) {
            cbPrinterName1.addItem(printer.getName());
            cbPrinterName2.addItem(printer.getName());
        }
    }

    private void saveConfig1() {
        try {
            // สร้างออบเจ็กต์ Properties
            Properties properties = new Properties();

            // กำหนดค่าคอนฟิก
            properties.setProperty("printer.name", "\"" + cbPrinterName1.getSelectedItem() + "\"");
            properties.setProperty("printer.width", txtWidth1.getText());
            properties.setProperty("printer.height", txtHeight1.getText());
            properties.setProperty("printer.host", "\"" + txtHost1.getText() + "\"");

            try (FileOutputStream outputStream = new FileOutputStream("cashier_config.properties")) {
                // เขียนค่าลงในไฟล์
                properties.store(outputStream, "Cashier Printer Configuration");
                System.out.println("Config file written successfully!");
            } catch (IOException e) {
                System.err.println("Error writing config file: " + e.getMessage());
            }
        } catch (Exception e) {
        }
    }

    private void saveConfig2() {
        try {
            // สร้างออบเจ็กต์ Properties
            Properties properties = new Properties();

            // กำหนดค่าคอนฟิก
            properties.setProperty("printer.name", "\"" + cbPrinterName1.getSelectedItem() + "\"");
            properties.setProperty("printer.width", txtWidth1.getText());
            properties.setProperty("printer.height", txtHeight1.getText());
            properties.setProperty("printer.host", "\"" + txtHost1.getText() + "\"");

            try (FileOutputStream outputStream = new FileOutputStream("kitchen_config.properties")) {
                // เขียนค่าลงในไฟล์
                properties.store(outputStream, "Kitchen Printer Configuration");
                System.out.println("Config file written successfully!");
            } catch (IOException e) {
                System.err.println("Error writing config file: " + e.getMessage());
            }
        } catch (Exception e) {
        }
    }

    private void loadInitCashierConfig() {
        Properties properties = new Properties();
        String fileName = "cashier_config.properties";

        try (InputStream input = new FileInputStream(fileName)) {
            properties.load(input);
            String printerName = properties.getProperty("printer.name").replace("\"", "");
            String printerWidth = properties.getProperty("printer.width");
            String printerHeight = properties.getProperty("printer.height");
            String printerHost = properties.getProperty("printer.host").replace("\"", "");

            int size = cbPrinterName1.getItemCount();
            for (int i = 0; i < size; i++) {
                if (printerName.equals(cbPrinterName1.getItemAt(i))) {
                    cbPrinterName1.setSelectedIndex(i);
                }
            }
            txtWidth1.setText(printerWidth);
            txtHeight1.setText(printerHeight);
            txtHost1.setText(printerHost);
        } catch (IOException ex) {
        }
    }

    private void loadInitKitchenConfig() {
        Properties properties = new Properties();
        String fileName = "kitchen_config.properties";

        try (InputStream input = new FileInputStream(fileName)) {
            properties.load(input);
            String printerName = properties.getProperty("printer.name").replace("\"", "");
            String printerWidth = properties.getProperty("printer.width");
            String printerHeight = properties.getProperty("printer.height");
            String printerHost = properties.getProperty("printer.host").replace("\"", "");

            int size = cbPrinterName2.getItemCount();
            for (int i = 0; i < size; i++) {
                if (printerName.equals(cbPrinterName2.getItemAt(i))) {
                    cbPrinterName2.setSelectedIndex(i);
                }
            }
            txtWidth2.setText(printerWidth);
            txtHeight2.setText(printerHeight);
            txtHost2.setText(printerHost);
        } catch (IOException ex) {
        }
    }
}

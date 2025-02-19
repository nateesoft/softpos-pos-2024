package ics.client.printer.service;

import java.io.FileOutputStream;
import java.io.IOException;
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
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel1 = new javax.swing.JPanel();
        btnSave = new javax.swing.JButton();
        jLabel2 = new javax.swing.JLabel();
        btnPrintTest = new javax.swing.JButton();
        txtHeight = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        cbPrinterName = new javax.swing.JComboBox<>();
        txtContent1 = new javax.swing.JTextArea();
        txtWidth = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        chkCashier = new javax.swing.JRadioButton();
        chkKitchen = new javax.swing.JRadioButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Printer Configuration");
        setAlwaysOnTop(true);

        btnSave.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        btnSave.setText("Add Printer Config");
        btnSave.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSaveActionPerformed(evt);
            }
        });

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel2.setText("Printer Width:");

        btnPrintTest.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        btnPrintTest.setText("Print Test");
        btnPrintTest.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPrintTestActionPerformed(evt);
            }
        });

        txtHeight.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHeight.setText("72");

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel3.setText("Printer Height:");

        cbPrinterName.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N

        txtContent1.setColumns(20);
        txtContent1.setFont(new java.awt.Font("Thonburi", 0, 13)); // NOI18N
        txtContent1.setLineWrap(true);
        txtContent1.setRows(5);
        txtContent1.setText("<div align=\"center\">\n<img src=\"file:com_logo.jpg\" width=100 height=100></img>\n</div>\n<div align=\"center\">\n<table>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">กะเพราหมูสับ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">55 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 55 บาท</font></td>\n</tr>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">หมูจุ่มชุดใหญ่ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">199 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 155 บาท</font></td>\n</tr>\n<tr>\n<td colspan=\"4\"></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">210 บาท</font></td>\n</tr>\n</table>\n</div>\n<hr />");
        txtContent1.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));

        txtWidth.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtWidth.setText("75");

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel1.setText("Printer Name:");

        buttonGroup1.add(chkCashier);
        chkCashier.setSelected(true);
        chkCashier.setText("Cashier Printer");

        buttonGroup1.add(chkKitchen);
        chkKitchen.setText("Kitchen Printer");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(txtContent1)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel3)
                            .addComponent(jLabel2)
                            .addComponent(jLabel1))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(chkCashier)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(cbPrinterName, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(txtWidth)
                                    .addComponent(txtHeight, javax.swing.GroupLayout.PREFERRED_SIZE, 248, javax.swing.GroupLayout.PREFERRED_SIZE))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addComponent(btnPrintTest, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                    .addComponent(btnSave, javax.swing.GroupLayout.DEFAULT_SIZE, 146, Short.MAX_VALUE)))
                            .addComponent(chkKitchen))
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnPrintTest, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel1)
                    .addComponent(cbPrinterName, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtWidth, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2)
                    .addComponent(btnSave, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtHeight, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel3))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(chkCashier)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(chkKitchen)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(txtContent1, javax.swing.GroupLayout.PREFERRED_SIZE, 509, Short.MAX_VALUE)
                .addContainerGap())
        );

        jTabbedPane1.addTab("Printer Configuration", jPanel1);

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

    private void btnPrintTestActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPrintTestActionPerformed
        int width = Integer.parseInt((txtWidth.getText()));
        int height = Integer.parseInt((txtHeight.getText()));
        String content = txtContent1.getText();
        String printerName = cbPrinterName.getItemAt(cbPrinterName.getSelectedIndex());

        printerControlService.testPrinter(printerName, content, width, height);
    }//GEN-LAST:event_btnPrintTestActionPerformed

    private void btnSaveActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSaveActionPerformed
        saveConfig();
    }//GEN-LAST:event_btnSaveActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnPrintTest;
    private javax.swing.JButton btnSave;
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JComboBox<String> cbPrinterName;
    private javax.swing.JRadioButton chkCashier;
    private javax.swing.JRadioButton chkKitchen;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTextArea txtContent1;
    private javax.swing.JTextField txtHeight;
    private javax.swing.JTextField txtWidth;
    // End of variables declaration//GEN-END:variables

    private void initPrinterNameList() {
        cbPrinterName.removeAllItems();
        PrintService[] printers = printerControlService.getAllPrinterService();
        for (PrintService printer : printers) {
            cbPrinterName.addItem(printer.getName());
        }
    }

    private void saveConfig() {
        try {
            // สร้างออบเจ็กต์ Properties
            Properties properties = new Properties();

            // กำหนดค่าคอนฟิก
            properties.setProperty("printer.name", "\"" + cbPrinterName.getSelectedItem() + "\"");
            properties.setProperty("printer.width", txtWidth.getText());
            properties.setProperty("printer.height", txtHeight.getText());

            String printerFileName;
            boolean isCashier = chkCashier.isSelected();
            boolean isKitchen = chkKitchen.isSelected();
            if (isCashier) {
                properties.setProperty("printer.type", "cashier");
                printerFileName = "cashier";
            } else if (isKitchen) {
                properties.setProperty("printer.type", "kitchen");
                printerFileName = "kitchen";
            } else {
                properties.setProperty("printer.type", "other");
                printerFileName = "other";
            }

            try (FileOutputStream outputStream = new FileOutputStream(printerFileName + ".properties")) {
                // เขียนค่าลงในไฟล์
                properties.store(outputStream, "Cashier Printer Configuration");
                System.out.println("Config file written successfully!");
            } catch (IOException e) {
                System.err.println("Error writing config file: " + e.getMessage());
            }
        } catch (Exception e) {
        }
    }
}

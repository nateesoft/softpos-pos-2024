package ics.client.printer.service;

import ics.client.printer.model.PrinterConfigBean;
import java.awt.GraphicsEnvironment;
import java.awt.HeadlessException;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import javax.print.PrintService;
import javax.swing.JOptionPane;

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
        initLoadFonts();
        
        initLoadPrinterConfig();
    }

    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        jTabbedPane1 = new javax.swing.JTabbedPane();
        jPanel1 = new javax.swing.JPanel();
        jLabel2 = new javax.swing.JLabel();
        txtHeight = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        cbPrinterName = new javax.swing.JComboBox<>();
        txtWidth = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        cbFonts = new javax.swing.JComboBox<>();
        jLabel4 = new javax.swing.JLabel();
        btnApplyFont = new javax.swing.JButton();
        jPanel2 = new javax.swing.JPanel();
        btnSave = new javax.swing.JButton();
        chkCashier = new javax.swing.JRadioButton();
        chkKitchen = new javax.swing.JRadioButton();
        btnPrintTest = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        txtContent1 = new javax.swing.JTextArea();
        cbPrinterVer = new javax.swing.JComboBox<>();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Printer Configuration");
        setAlwaysOnTop(true);

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel2.setText("Printer Width:");

        txtHeight.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHeight.setText("72");

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel3.setText("Printer Height:");

        cbPrinterName.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N

        txtWidth.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtWidth.setText("75");

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel1.setText("Printer Name:");

        cbFonts.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        cbFonts.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "Item 1", "Item 2", "Item 3", "Item 4" }));

        jLabel4.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel4.setText("Fonts:");

        btnApplyFont.setText("Apply Font");
        btnApplyFont.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnApplyFontActionPerformed(evt);
            }
        });

        jPanel2.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(255, 204, 153)));

        btnSave.setFont(new java.awt.Font("Tahoma", 1, 12)); // NOI18N
        btnSave.setForeground(new java.awt.Color(0, 153, 255));
        btnSave.setText("Save Printer Config");
        btnSave.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSaveActionPerformed(evt);
            }
        });

        buttonGroup1.add(chkCashier);
        chkCashier.setSelected(true);
        chkCashier.setText("Cashier Printer");

        buttonGroup1.add(chkKitchen);
        chkKitchen.setText("Kitchen Printer");

        btnPrintTest.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        btnPrintTest.setText("Test Printer");
        btnPrintTest.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPrintTestActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addGap(238, 238, 238)
                        .addComponent(btnSave, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addComponent(chkCashier)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(btnPrintTest, javax.swing.GroupLayout.PREFERRED_SIZE, 146, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addComponent(chkKitchen)
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(chkCashier)
                    .addComponent(btnPrintTest, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(chkKitchen)
                    .addComponent(btnSave, javax.swing.GroupLayout.PREFERRED_SIZE, 40, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap())
        );

        txtContent1.setColumns(20);
        txtContent1.setFont(new java.awt.Font("Thonburi", 0, 13)); // NOI18N
        txtContent1.setLineWrap(true);
        txtContent1.setRows(5);
        txtContent1.setText("<div align=\"center\">\n<img src=\"file:com_logo.jpg\" width=100 height=100></img>\n</div>\n<div align=\"center\">\n<table>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">กะเพราหมูสับ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">55 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 55 บาท</font></td>\n</tr>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">หมูจุ่มชุดใหญ่ + ไข่ดาวไม่สุก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">199 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 155 บาท</font></td>\n</tr>\n<tr>\n<td colspan=\"4\"></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">210 บาท</font></td>\n</tr>\n</table>\n</div>\n<hr />");
        txtContent1.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        jScrollPane1.setViewportView(txtContent1);

        cbPrinterVer.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "1.0", "1.2" }));

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(jLabel2)
                                    .addComponent(jLabel1))
                                .addGap(9, 9, 9))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(jLabel4)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)))
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING, false)
                                .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout.createSequentialGroup()
                                    .addComponent(cbPrinterName, javax.swing.GroupLayout.PREFERRED_SIZE, 232, javax.swing.GroupLayout.PREFERRED_SIZE)
                                    .addGap(18, 18, 18)
                                    .addComponent(cbPrinterVer, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addGroup(javax.swing.GroupLayout.Alignment.LEADING, jPanel1Layout.createSequentialGroup()
                                    .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                        .addGroup(jPanel1Layout.createSequentialGroup()
                                            .addComponent(txtWidth, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                            .addComponent(jLabel3)
                                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                            .addComponent(txtHeight, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE))
                                        .addComponent(cbFonts, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                    .addGap(18, 18, 18)
                                    .addComponent(btnApplyFont, javax.swing.GroupLayout.PREFERRED_SIZE, 146, javax.swing.GroupLayout.PREFERRED_SIZE))))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addComponent(jScrollPane1))
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1)
                    .addComponent(cbPrinterName, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(cbPrinterVer, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(txtWidth, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2)
                    .addComponent(jLabel3)
                    .addComponent(txtHeight, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cbFonts, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel4)
                    .addComponent(btnApplyFont, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 437, Short.MAX_VALUE)
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
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jTabbedPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 688, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void btnPrintTestActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnPrintTestActionPerformed
        int width = Integer.parseInt((txtWidth.getText()));
        int height = Integer.parseInt((txtHeight.getText()));
        String content = txtContent1.getText();
        String printerName = cbPrinterName.getItemAt(cbPrinterName.getSelectedIndex());

        if (cbPrinterVer.getSelectedItem().toString().equals("1.0")) {
            printerControlService.testPrinter(printerName, content, width, height);
        } else if (cbPrinterVer.getSelectedItem().toString().equals("1.2")) {
            printerControlService.testPrinterV2(printerName, content, width, height);
        }
    }//GEN-LAST:event_btnPrintTestActionPerformed

    private void btnSaveActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnSaveActionPerformed
        saveConfig();
    }//GEN-LAST:event_btnSaveActionPerformed

    String tempFont = "Angsana New";
    private void btnApplyFontActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_btnApplyFontActionPerformed
        // update all font in report test
        if (cbFonts.getSelectedItem() != null) {
            String fontSelected = "" + cbFonts.getSelectedItem();
            String replace = txtContent1.getText().replace(tempFont, fontSelected);
            txtContent1.setText(replace);

            // backup tempFont
            tempFont = fontSelected;
        }
    }//GEN-LAST:event_btnApplyFontActionPerformed

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnApplyFont;
    private javax.swing.JButton btnPrintTest;
    private javax.swing.JButton btnSave;
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JComboBox<String> cbFonts;
    private javax.swing.JComboBox<String> cbPrinterName;
    private javax.swing.JComboBox<String> cbPrinterVer;
    private javax.swing.JRadioButton chkCashier;
    private javax.swing.JRadioButton chkKitchen;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JScrollPane jScrollPane1;
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
            properties.setProperty("printer.version", cbPrinterVer.getSelectedItem().toString());

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
                JOptionPane.showMessageDialog(this, "Cashier Printer Configuration Saved.");
            } catch (IOException e) {
                System.err.println("Error writing config file: " + e.getMessage());
            }
        } catch (HeadlessException e) {
        }
    }

    private void initLoadFonts() {
        cbFonts.removeAllItems();

        GraphicsEnvironment ge = GraphicsEnvironment.getLocalGraphicsEnvironment();
        String[] fonts = ge.getAvailableFontFamilyNames();

        for (String font : fonts) {
            cbFonts.addItem(font);
        }
    }

    private void initLoadPrinterConfig() {
        PrinterConfigBean printerConfig;
        
        if (chkCashier.isSelected()) {
            printerConfig = loadPrinterConfig("cashier");
        } else if(chkKitchen.isSelected()) {
            printerConfig = loadPrinterConfig("kitchen");
        } else {
            printerConfig = loadPrinterConfig("other");
        }
        
        cbPrinterName.setSelectedItem(printerConfig.getPrinterName());
        cbPrinterVer.setSelectedItem(printerConfig.getVersion());
    }

    public static PrinterConfigBean loadPrinterConfig(String printerName) {
        PrinterConfigBean printerConfig = new PrinterConfigBean();
        if (null == printerName || printerName.equals("")) {
            return printerConfig;
        }
        Properties properties = new Properties();
        try (InputStream input = new FileInputStream(printerName + ".properties")) {
            properties.load(input);
            String pName = properties.getProperty("printer.name").replaceAll("\"", "");
            String version = properties.getProperty("printer.version").replaceAll("\"", "");
            int width = Integer.parseInt(properties.getProperty("printer.width"));
            int height = Integer.parseInt(properties.getProperty("printer.height"));

            printerConfig.setPrinterName(pName);
            printerConfig.setWidth(width);
            printerConfig.setHeight(height);
            printerConfig.setVersion(version);
        } catch (IOException ex) {
            System.err.println(ex.getMessage());
        }

        return printerConfig;
    }

}

package ics.client.printer.service;

import ics.client.printer.model.PrinterConfigBean;
import java.awt.GraphicsEnvironment;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;
import javax.print.PrintService;
import javax.swing.JOptionPane;
import javax.swing.table.DefaultTableModel;

/**
 *
 * @author nateesun
 */
public class PrinterConfig extends javax.swing.JDialog {

    private final PrinterControlService printerControlService = new PrinterControlService();
    private final DefaultTableModel tbPrinterListModal;

    public PrinterConfig(java.awt.Frame parent, boolean modal) {
        super(parent, modal);
        initComponents();

        tbPrinterListModal = (DefaultTableModel) tbPrinterList.getModel();
        int size = tbPrinterListModal.getRowCount();
        for (int i = 0; i < size; i++) {
            tbPrinterListModal.removeRow(0);
        }
        
        tbPrinterList.setRowHeight(35);

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
        btnPrintTest = new javax.swing.JButton();
        jLabel5 = new javax.swing.JLabel();
        txtPrinterName = new javax.swing.JTextField();
        jScrollPane1 = new javax.swing.JScrollPane();
        txtContent1 = new javax.swing.JTextArea();
        cbPrinterVer = new javax.swing.JComboBox<>();
        jScrollPane2 = new javax.swing.JScrollPane();
        tbPrinterList = new javax.swing.JTable();

        setDefaultCloseOperation(javax.swing.WindowConstants.DISPOSE_ON_CLOSE);
        setTitle("Printer Configuration");
        setAlwaysOnTop(true);

        jLabel2.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel2.setText("Printer Width:");

        txtHeight.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtHeight.setHorizontalAlignment(javax.swing.JTextField.CENTER);
        txtHeight.setText("72");

        jLabel3.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel3.setText("Printer Height:");

        cbPrinterName.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N

        txtWidth.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        txtWidth.setHorizontalAlignment(javax.swing.JTextField.CENTER);
        txtWidth.setText("75");

        jLabel1.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel1.setText("Printer List:");

        cbFonts.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N

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
        btnSave.setText("Add Printer");
        btnSave.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnSaveActionPerformed(evt);
            }
        });

        btnPrintTest.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        btnPrintTest.setText("Test Printer");
        btnPrintTest.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                btnPrintTestActionPerformed(evt);
            }
        });

        jLabel5.setFont(new java.awt.Font("Tahoma", 0, 12)); // NOI18N
        jLabel5.setText("File Name:");

        txtPrinterName.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addComponent(txtPrinterName, javax.swing.GroupLayout.PREFERRED_SIZE, 203, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(btnSave, javax.swing.GroupLayout.PREFERRED_SIZE, 132, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel2Layout.createSequentialGroup()
                        .addComponent(jLabel5)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(btnPrintTest, javax.swing.GroupLayout.PREFERRED_SIZE, 132, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap())
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel2Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(btnPrintTest, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel5))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(btnSave, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(txtPrinterName, javax.swing.GroupLayout.PREFERRED_SIZE, 35, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap())
        );

        txtContent1.setColumns(20);
        txtContent1.setFont(new java.awt.Font("Thonburi", 0, 13)); // NOI18N
        txtContent1.setLineWrap(true);
        txtContent1.setRows(5);
        txtContent1.setText("<div align=\"center\">\n<img src=\"file:com_logo.jpg\" width=100 height=100></img>\n</div>\n<div align=\"center\">\n<table>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">คะน้าผัดน้ำมันหอย</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">55 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 55 บาท</font></td>\n</tr>\n<tr>\n<td><font face=\"Angsana New\" size=\"4\">[E]</font></td>\n<td><font face=\"Angsana New\" size=\"4\">หมูจุ่มชุดใหญ่ + ส้มตำยกครก</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">199 บาท</font></td>\n<td><font face=\"Angsana New\" size=\"4\">X 1</font></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">รวม 155 บาท</font></td>\n</tr>\n<tr>\n<td colspan=\"4\"></td>\n<td align=\"right\"><font face=\"Angsana New\" size=\"4\">210 บาท</font></td>\n</tr>\n</table>\n</div>\n<hr />");
        txtContent1.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(0, 0, 0)));
        jScrollPane1.setViewportView(txtContent1);

        cbPrinterVer.setModel(new javax.swing.DefaultComboBoxModel<>(new String[] { "1.0" }));

        tbPrinterList.setFont(new java.awt.Font("Tahoma", 0, 14)); // NOI18N
        tbPrinterList.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null},
                {null, null, null, null, null, null}
            },
            new String [] {
                "Printer", "Mapping", "Width", "Height", "Font", "Version"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false, false, false, false, false, false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        tbPrinterList.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                tbPrinterListMouseClicked(evt);
            }
        });
        jScrollPane2.setViewportView(tbPrinterList);
        if (tbPrinterList.getColumnModel().getColumnCount() > 0) {
            tbPrinterList.getColumnModel().getColumn(0).setPreferredWidth(200);
            tbPrinterList.getColumnModel().getColumn(1).setPreferredWidth(130);
            tbPrinterList.getColumnModel().getColumn(2).setPreferredWidth(80);
            tbPrinterList.getColumnModel().getColumn(3).setPreferredWidth(80);
            tbPrinterList.getColumnModel().getColumn(5).setPreferredWidth(80);
        }

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(jLabel2)
                                .addGap(9, 9, 9))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addComponent(jLabel4, javax.swing.GroupLayout.Alignment.TRAILING)
                                    .addComponent(jLabel1, javax.swing.GroupLayout.Alignment.TRAILING))
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)))
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(cbPrinterName, javax.swing.GroupLayout.PREFERRED_SIZE, 232, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(18, 18, 18)
                                .addComponent(cbPrinterVer, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(txtWidth, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                        .addComponent(jLabel3)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                        .addComponent(txtHeight, javax.swing.GroupLayout.PREFERRED_SIZE, 72, javax.swing.GroupLayout.PREFERRED_SIZE))
                                    .addComponent(cbFonts, 0, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE))
                                .addGap(18, 18, 18)
                                .addComponent(btnApplyFont, javax.swing.GroupLayout.PREFERRED_SIZE, 105, javax.swing.GroupLayout.PREFERRED_SIZE))))
                    .addComponent(jScrollPane1))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jScrollPane2)
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
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
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 442, Short.MAX_VALUE))
                    .addComponent(jScrollPane2))
                .addContainerGap())
        );

        jTabbedPane1.addTab("Printer Mapping Configuration", jPanel1);

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTabbedPane1))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap()
                .addComponent(jTabbedPane1)
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
        addPrinterConfig();
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

    private void tbPrinterListMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_tbPrinterListMouseClicked
        int rowSelect = tbPrinterList.getSelectedRow();
        if (rowSelect != -1) {
            getPrinterInfo(rowSelect);
        }
    }//GEN-LAST:event_tbPrinterListMouseClicked

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton btnApplyFont;
    private javax.swing.JButton btnPrintTest;
    private javax.swing.JButton btnSave;
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JComboBox<String> cbFonts;
    private javax.swing.JComboBox<String> cbPrinterName;
    private javax.swing.JComboBox<String> cbPrinterVer;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jScrollPane2;
    private javax.swing.JTabbedPane jTabbedPane1;
    private javax.swing.JTable tbPrinterList;
    private javax.swing.JTextArea txtContent1;
    private javax.swing.JTextField txtHeight;
    private javax.swing.JTextField txtPrinterName;
    private javax.swing.JTextField txtWidth;
    // End of variables declaration//GEN-END:variables

    private void initPrinterNameList() {
        cbPrinterName.removeAllItems();
        PrintService[] printers = printerControlService.getAllPrinterService();
        for (PrintService printer : printers) {
            cbPrinterName.addItem(printer.getName());
        }
    }

    private void addPrinterConfig() {
        // สร้างออบเจ็กต์ Properties
        Properties properties = new Properties();

        // กำหนดค่าคอนฟิก
        properties.setProperty("printer.name", "\"" + cbPrinterName.getSelectedItem() + "\"");
        properties.setProperty("printer.width", txtWidth.getText());
        properties.setProperty("printer.height", txtHeight.getText());
        properties.setProperty("printer.version", cbPrinterVer.getSelectedItem().toString());
        properties.setProperty("printer.font", cbFonts.getSelectedItem().toString());

        String printerFileName = "Printer_" + txtPrinterName.getText().trim();
        try (FileOutputStream outputStream = new FileOutputStream(printerFileName + ".properties")) {
            // เขียนค่าลงในไฟล์
            properties.store(outputStream, "Add Printer Configuration Success");

            // add to printer table list
            tbPrinterListModal.addRow(new Object[]{
                cbPrinterName.getSelectedItem().toString(),
                printerFileName,
                txtWidth.getText(),
                txtHeight.getText(),
                cbFonts.getSelectedItem().toString(),
                cbPrinterVer.getSelectedItem().toString()
            });

            JOptionPane.showMessageDialog(this, "Add Printer Success");
        } catch (IOException e) {
            JOptionPane.showMessageDialog(this, e.getMessage(), "Add printer config error!!!", JOptionPane.ERROR_MESSAGE);
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

    private void getPrinterInfo(int rowSelect) {
        String printerName = "" + tbPrinterList.getValueAt(rowSelect, 0);
        String fileName = "" + tbPrinterList.getValueAt(rowSelect, 1);
        String width = "" + tbPrinterList.getValueAt(rowSelect, 2);
        String height = "" + tbPrinterList.getValueAt(rowSelect, 3);
        String version = "" + tbPrinterList.getValueAt(rowSelect, 4);
        String fontName = "" + tbPrinterList.getValueAt(rowSelect, 5);

        cbPrinterName.setSelectedItem(printerName);
        cbPrinterVer.setSelectedItem(version);
        cbFonts.setSelectedItem(fontName);

        txtWidth.setText(width);
        txtHeight.setText(height);
        txtPrinterName.setText(fileName);
    }

    private void initLoadPrinterConfig() {
        File folder = new File(".");
        File[] listOfFiles = folder.listFiles();
        if (listOfFiles != null) {
            for (File file : listOfFiles) {
                if (file.getName().contains("Printer_") && file.getName().lastIndexOf("properties") != -1) {
                    String formatPrinterName = file.getName().replace("Printer_", "").replace(".properties", "");
                    PrinterConfigBean printerConfig = loadPrinterConfig(formatPrinterName);

                    // add to printer table list
                    tbPrinterListModal.addRow(new Object[]{
                        printerConfig.getPrinterName(),
                        formatPrinterName,
                        printerConfig.getWidth(),
                        printerConfig.getHeight(),
                        printerConfig.getFontName(),
                        printerConfig.getVersion()
                    });
                }
            }
        }
    }

    public static PrinterConfigBean loadPrinterConfig(String printerName) {
        PrinterConfigBean printerConfig = new PrinterConfigBean();
        if (null == printerName || printerName.equals("")) {
            return printerConfig;
        }

        String formatPrinterName = "Printer_" + printerName + ".properties";

        Properties properties = new Properties();
        try (InputStream input = new FileInputStream(formatPrinterName)) {
            properties.load(input);
            String pName = properties.getProperty("printer.name").replaceAll("\"", "");
            String version = properties.getProperty("printer.version").replaceAll("\"", "");
            int width = Integer.parseInt(properties.getProperty("printer.width"));
            int height = Integer.parseInt(properties.getProperty("printer.height"));
            String fontName = properties.getProperty("printer.font").replaceAll("\"", "");

            printerConfig.setPrinterName(pName);
            printerConfig.setWidth(width);
            printerConfig.setHeight(height);
            printerConfig.setFontName(fontName);
            printerConfig.setVersion(version);
        } catch (IOException ex) {
            System.err.println(ex.getMessage());
        }

        return printerConfig;
    }

}

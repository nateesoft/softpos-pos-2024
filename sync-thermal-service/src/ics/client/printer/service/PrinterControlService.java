package ics.client.printer.service;

import ics.utils.OpenHTML;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.awt.print.PageFormat;
import java.awt.print.Printable;
import java.awt.print.PrinterException;
import java.awt.print.PrinterJob;
import java.io.ByteArrayInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import javax.print.Doc;
import javax.print.DocFlavor;
import javax.print.DocPrintJob;
import javax.print.PrintException;
import javax.print.PrintService;
import javax.print.SimpleDoc;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.standard.MediaPrintableArea;
import javax.swing.JEditorPane;
import javax.swing.JOptionPane;

/**
 *
 * @author nateesun
 */
public class PrinterControlService {

    private final PrintService[] allPrinter = PrinterJob.lookupPrintServices();

    public PrintService[] getAllPrinterService() {
        return allPrinter;
    }

    private PrintService getPrinterKitchen(String printerName) {
        for (PrintService printerService : allPrinter) {
            if (printerService.getName().equals(printerName)) {
                return printerService;
            }
        }
        return null;
    }

    public void testPrinter(String printerName, String content, int width, int height) {
        try {
            JEditorPane editor = new JEditorPane();
            editor.setContentType("text/html");
            editor.setText(content);
            editor.validate();
            editor.repaint();

            HashPrintRequestAttributeSet attr = new HashPrintRequestAttributeSet();
            attr.add(new MediaPrintableArea(0f, 0f, width, height, MediaPrintableArea.INCH));

            PrintService myPrinter = getPrinterKitchen(printerName);
            if (myPrinter != null) {
                editor.print(null, null, false, myPrinter, attr, false);
            }
        } catch (PrinterException ex) {
            System.err.println(ex.getMessage());
            JOptionPane.showMessageDialog(null, "เกิดข้อผิดพลาดในการพิมพ์เอกสาร", "ข้อผิดพลาด", JOptionPane.ERROR_MESSAGE);
        }
    }

    public void testPrinterV2(String printerName, String content, int width, int height) {
        try {
            PrintService myPrinter = getPrinterKitchen(printerName);
            if (myPrinter != null) {
                // พิมพ์ภาพ
                PrinterJob job = PrinterJob.getPrinterJob();
                job.setPrintService(myPrinter);
                
                PageFormat format = job.defaultPage();
                double defaultWidth = format.getImageableWidth();   // ความกว้างพิมพ์ได้จริง
                double defaultHeight = format.getImageableHeight(); // ความสูงพิมพ์ได้จริง
                
                JEditorPane editor = new JEditorPane();
                editor.setContentType("text/html");
                editor.setText(content);
                editor.setSize((int) defaultWidth, (int) defaultHeight);
                System.out.println("defaultWidth:"+defaultWidth+","+"defaultHeight:"+defaultHeight);

                // บังคับ render ให้เสร็จ
                editor.validate();
                editor.paintImmediately(0, 0, editor.getWidth(), editor.getHeight());

                // Convert JEditorPane to image
                BufferedImage image = new BufferedImage(editor.getWidth(), editor.getHeight(), BufferedImage.TYPE_INT_ARGB);
                Graphics2D g2 = image.createGraphics();
                editor.paint(g2);
                g2.dispose();

                // กำหนด Printable ให้กับ job
                job.setPrintable((graphics, pageFormat, pageIndex) -> {
                    if (pageIndex > 0) {
                        return Printable.NO_SUCH_PAGE;
                    }
                    Graphics2D g2d = (Graphics2D) graphics;
                    g2d.translate(pageFormat.getImageableX(), pageFormat.getImageableY());
                    g2d.drawImage(image, 0, 0, null);
                    return Printable.PAGE_EXISTS;
                });

                // ไม่ต้องแสดง print dialog
                job.print();
            }
        } catch (PrinterException ex) {
            System.err.println(ex.getMessage());
            JOptionPane.showMessageDialog(null, "เกิดข้อผิดพลาดในการพิมพ์เอกสาร", "ข้อผิดพลาด", JOptionPane.ERROR_MESSAGE);
        }
    }

    // send to printer
    public void printMessage(String printerName, String content, int width, int height, String prtType) {
        if (printerName == null) {
            String filePath = createHtmlFile(content);
            OpenHTML.open(filePath);
            return;
        }
        try {
            JEditorPane editor = new JEditorPane();
            editor.setContentType("text/html");
            editor.setText(content);
            editor.validate();
            editor.repaint();

            HashPrintRequestAttributeSet attr = new HashPrintRequestAttributeSet();
            attr.add(new MediaPrintableArea(0f, 0f, width, height, MediaPrintableArea.INCH));

            PrintService myPrinter = getPrinterKitchen(printerName);
            if (myPrinter != null) {
                editor.print(null, null, false, myPrinter, attr, false);

                if (prtType.equals("receipt")) {
                    // open cashDrawer
                    openCashDrawer(myPrinter);
                }
            }
        } catch (PrinterException ex) {
            System.err.println(ex.getMessage());
            JOptionPane.showMessageDialog(null, "เกิดข้อผิดพลาดในการพิมพ์เอกสาร", "ข้อผิดพลาด", JOptionPane.ERROR_MESSAGE);
        }
    }

    // send to printer version2
    public void printMessageV2(String printerName, String content, int width, int height, String prtType) {
        if (printerName == null) {
            String filePath = createHtmlFile(content);
            OpenHTML.open(filePath);
            return;
        }
        try {
            PrintService myPrinter = getPrinterKitchen(printerName);
            if (myPrinter != null) {
                // พิมพ์ภาพ
                PrinterJob job = PrinterJob.getPrinterJob();
                job.setPrintService(myPrinter);
                
                PageFormat format = job.defaultPage();
                double defaultWidth = format.getImageableWidth();   // ความกว้างพิมพ์ได้จริง
                double defaultHeight = format.getImageableHeight(); // ความสูงพิมพ์ได้จริง
                
                System.out.println("defaultWidth:"+defaultWidth+","+"defaultHeight:"+defaultHeight);
                
                JEditorPane editor = new JEditorPane();
                editor.setContentType("text/html");
                editor.setText(content);
                editor.setSize((int) defaultWidth, (int) defaultHeight);

                // บังคับ render ให้เสร็จ
                editor.validate();
                editor.paintImmediately(0, 0, editor.getWidth(), editor.getHeight());

                // Convert JEditorPane to image
                BufferedImage image = new BufferedImage(editor.getWidth(), editor.getHeight(), BufferedImage.TYPE_INT_ARGB);
                Graphics2D g2 = image.createGraphics();
                editor.paint(g2);
                g2.dispose();

                // กำหนด Printable ให้กับ job
                job.setPrintable((graphics, pageFormat, pageIndex) -> {
                    if (pageIndex > 0) {
                        return Printable.NO_SUCH_PAGE;
                    }
                    Graphics2D g2d = (Graphics2D) graphics;
                    g2d.translate(pageFormat.getImageableX(), pageFormat.getImageableY());
                    g2d.drawImage(image, 0, 0, null);
                    return Printable.PAGE_EXISTS;
                });

                // ไม่ต้องแสดง print dialog
                job.print();

                if (prtType.equals("receipt")) {
                    // open cashDrawer
                    openCashDrawer(myPrinter);
                }
            }
        } catch (PrinterException ex) {
            System.err.println(ex.getMessage());
            JOptionPane.showMessageDialog(null, "เกิดข้อผิดพลาดในการพิมพ์เอกสาร", "ข้อผิดพลาด", JOptionPane.ERROR_MESSAGE);
        }
    }

    int printerCount = 0;

    private String createHtmlFile(String htmlContent) {
        printerCount++;
        String filePath = "printer_" + printerCount + ".html";
        try (FileWriter fileWriter = new FileWriter(filePath)) {
            fileWriter.write(htmlContent);
            System.out.println("HTML file created successfully at: " + filePath);
        } catch (IOException e) {
            System.err.println("An error occurred while writing the file: " + e.getMessage());
        }

        return filePath;
    }

    private void openCashDrawer(PrintService printService) {
        try {
            // คำสั่ง ESC/POS เปิดลิ้นชัก
            byte[] openDrawerCommand = {27, 112, 0, (byte) 25, (byte) 250};
            // กำหนดประเภทของข้อมูลที่จะพิมพ์ (application/octet-stream สำหรับ raw data)
            try (InputStream inputStream = new ByteArrayInputStream(openDrawerCommand)) {
                DocFlavor flavor = DocFlavor.INPUT_STREAM.AUTOSENSE;
                Doc doc = new SimpleDoc(inputStream, flavor, null);

                // ส่งคำสั่งไปยังเครื่องพิมพ์
                DocPrintJob job = printService.createPrintJob();
                job.print(doc, null);
            }
            System.out.println("ส่งคำสั่งเปิดลิ้นชักเรียบร้อย");
        } catch (IOException | PrintException e) {
            System.err.println(e.getMessage());
        }
    }

}

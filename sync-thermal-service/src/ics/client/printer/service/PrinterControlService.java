package ics.client.printer.service;

import java.awt.print.PrinterException;
import java.awt.print.PrinterJob;
import javax.print.PrintService;
import javax.print.attribute.HashPrintRequestAttributeSet;
import javax.print.attribute.standard.MediaPrintableArea;
import javax.swing.JEditorPane;

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

            HashPrintRequestAttributeSet attr = new HashPrintRequestAttributeSet();
            attr.add(new MediaPrintableArea(0f, 0f, width, height, MediaPrintableArea.INCH));

            PrintService myPrinter = getPrinterKitchen(printerName);
            if (myPrinter != null) {
                editor.print(null, null, false, myPrinter, attr, false);
            }
        } catch (PrinterException ex) {
            System.err.println(ex.getMessage());
        }
    }
    
    // send to printer
    public void printMessage(String printerName, String content, int width, int height) {
        try {
            JEditorPane editor = new JEditorPane();
            editor.setContentType("text/html");
            editor.setText(content);

            HashPrintRequestAttributeSet attr = new HashPrintRequestAttributeSet();
            attr.add(new MediaPrintableArea(0f, 0f, width, height, MediaPrintableArea.INCH));

            PrintService myPrinter = getPrinterKitchen(printerName);
            if (myPrinter != null) {
                editor.print(null, null, false, myPrinter, attr, false);
            }
        } catch (PrinterException ex) {
            System.err.println(ex.getMessage());
        }
    }
    
}

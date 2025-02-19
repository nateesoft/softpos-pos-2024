package ics.utils;

public class ThaiUtil {

    public static String ThaiToAscii(String unicode) {
        if (unicode == null) {
            return "";
        }
        StringBuilder ascii = new StringBuilder(unicode);
        int code;
        for (int i = 0; i < unicode.length(); i++) {
            code = (int) unicode.charAt(i);
            if ((0xE01 <= code) && (code <= 0xE5B)) {
                ascii.setCharAt(i, (char) (code - 0xD60));
            }
        }
        return ascii.toString();
    }

    public static String AsciiToThai(String ascii) {
        if (ascii == null) {
            return "";
        }
        StringBuilder unicode = new StringBuilder(ascii);
        int code;
        for (int i = 0; i < ascii.length(); i++) {
            code = (int) ascii.charAt(i);
            if ((0xA1 <= code) && (code <= 0xFB)) {
                unicode.setCharAt(i, (char) (code + 0xD60));
            }
        }
        return unicode.toString();
    }
}

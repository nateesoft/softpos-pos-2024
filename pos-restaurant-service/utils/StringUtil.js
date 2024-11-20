const Unicode2ASCII = unicode => {
    if (!unicode) return '';
    let ascii = unicode.split('');
    let code;
    for (let i = 0; i < unicode.length; i++) {
        code = unicode.charCodeAt(i);
        if (0xE01 <= code && code <= 0xE5B) {
            ascii[i] = String.fromCharCode(code - 0xD60);
        }
    }
    return ascii.join('');
}

const ASCII2Unicode = ascii => {
    if (!ascii) return '';
    let unicode = ascii.split('');
    let code;
    for (let i = 0; i < ascii.length; i++) {
        code = ascii.charCodeAt(i);
        if (0xA1 <= code && code <= 0xFB) {
            unicode[i] = String.fromCharCode(code + 0xD60);
        }
    }
    return unicode.join('');
}

module.exports = {
    Unicode2ASCII,
    ASCII2Unicode
}
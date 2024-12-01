const Unicode2ASCII = unicode => {
    if (process.env.CONVERT_LATIN_UTF === "N") {
        return unicode
    }
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
    if (process.env.CONVERT_LATIN_UTF === "N") {
        return ascii
    }
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

const PrefixFormat = (str, padString, length) => {
    while (str.length < length)
        str = padString + str;
    return str;
}

const PrefixZeroFormat = (str, length) => {
    while (("" + str).length < length)
        str = "0" + str;
    return str;
}

// console.log(ASCII2Unicode('Å´ºÒ·'))

module.exports = {
    Unicode2ASCII,
    ASCII2Unicode,
    PrefixFormat,
    PrefixZeroFormat
}
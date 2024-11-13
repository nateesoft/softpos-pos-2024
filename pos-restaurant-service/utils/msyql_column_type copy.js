const mysqlTypes = {
    MYSQL_TYPE_DECIMAL: 0,
    MYSQL_TYPE_TINY: 1,
    MYSQL_TYPE_SHORT: 2,
    MYSQL_TYPE_LONG: 3,
    MYSQL_TYPE_FLOAT: 4,
    MYSQL_TYPE_DOUBLE: 5,
    MYSQL_TYPE_NULL: 6,
    MYSQL_TYPE_TIMESTAMP: 7,
    MYSQL_TYPE_LONGLONG: 8,
    MYSQL_TYPE_INT24: 9,
    MYSQL_TYPE_DATE: 10,
    MYSQL_TYPE_TIME: 11,
    MYSQL_TYPE_DATETIME: 12,
    MYSQL_TYPE_YEAR: 13,
    MYSQL_TYPE_NEWDATE: 14 /** Internal to MySQL. Not used in protocol */,
    MYSQL_TYPE_VARCHAR: 15,
    MYSQL_TYPE_BIT: 16,
    MYSQL_TYPE_TIMESTAMP2: 17,
    MYSQL_TYPE_DATETIME2: 18 /** Internal to MySQL. Not used in protocol */,
    MYSQL_TYPE_TIME2: 19 /** Internal to MySQL. Not used in protocol */,
    MYSQL_TYPE_TYPED_ARRAY: 20 /** Used for replication only */,
    MYSQL_TYPE_VECTOR: 242,
    MYSQL_TYPE_INVALID: 243,
    MYSQL_TYPE_BOOL: 244 /** Currently just a placeholder */,
    MYSQL_TYPE_JSON: 245,
    MYSQL_TYPE_NEWDECIMAL: 246,
    MYSQL_TYPE_ENUM: 247,
    MYSQL_TYPE_SET: 248,
    MYSQL_TYPE_TINY_BLOB: 249,
    MYSQL_TYPE_MEDIUM_BLOB: 250,
    MYSQL_TYPE_LONG_BLOB: 251,
    MYSQL_TYPE_BLOB: 252,
    MYSQL_TYPE_VAR_STRING: 253,
    MYSQL_TYPE_STRING: 254,
    MYSQL_TYPE_GEOMETRY: 255
};

const byNumber = (num) => {
    switch (num) {
        case 0:
            return "MYSQL_TYPE_DECIMAL";
        case 1:
            return "MYSQL_TYPE_TINY";
        case 2:
            return "MYSQL_TYPE_SHORT";
        case 3:
            return "MYSQL_TYPE_LONG";
        case 4:
            return "MYSQL_TYPE_FLOAT";
        case 5:
            return "MYSQL_TYPE_DOUBLE";
        case 6:
            return "MYSQL_TYPE_NULL";
        case 7:
            return "MYSQL_TYPE_TIMESTAMP";
        case 8:
            return "MYSQL_TYPE_LONGLONG";
        case 9:
            return "MYSQL_TYPE_INT24";
        case 10:
            return "MYSQL_TYPE_DATE";
        case 11:
            return "MYSQL_TYPE_TIME";
        case 12:
            return "MYSQL_TYPE_DATETIME";
        case 13:
            return "MYSQL_TYPE_YEAR";
        case 14:
            return "MYSQL_TYPE_NEWDATE";
        case 15:
            return "MYSQL_TYPE_VARCHAR";
        case 16:
            return "MYSQL_TYPE_BIT";
        case 17:
            return "MYSQL_TYPE_TIMESTAMP2";
        case 18:
            return "MYSQL_TYPE_DATETIME2";
        case 19:
            return "MYSQL_TYPE_TIME2";
        case 20:
            return "MYSQL_TYPE_TYPED_ARRAY";
        case 242:
            return "MYSQL_TYPE_VECTOR";
        case 243:
            return "MYSQL_TYPE_INVALID";
        case 244:
            return "MYSQL_TYPE_BOOL";
        case 245:
            return "MYSQL_TYPE_JSON";
        case 246:
            return "MYSQL_TYPE_NEWDECIMAL";
        case 247:
            return "MYSQL_TYPE_ENUM";
        case 248:
            return "MYSQL_TYPE_SET";
        case 249:
            return "MYSQL_TYPE_TINY_BLOB";
        case 250:
            return "MYSQL_TYPE_MEDIUM_BLOB";
        case 251:
            return "MYSQL_TYPE_LONG_BLOB";
        case 252:
            return "MYSQL_TYPE_BLOB";
        case 253:
            return "MYSQL_TYPE_VAR_STRING";
        case 254:
            return "MYSQL_TYPE_STRING";
        case 255:
            return "MYSQL_TYPE_GEOMETRY";
    }
}

module.exports = {
    byNumber
}
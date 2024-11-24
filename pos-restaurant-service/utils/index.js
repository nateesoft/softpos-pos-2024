const mysql = require("mysql2")

const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "nathee2024",
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 3,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

const displayAllField = (fields) => {
    const myField = []
    fields.forEach(field => {
        myField.push(field.Field)
    })
    return myField
}

const displayQuestionMark = (fields) => {
    const myField = []
    fields.forEach(field => {
        myField.push("?")
    })
    return myField
}

const assignFieldWithQuestionMark = (fields) => {
    const myField = []
    fields.forEach(field => {
        myField.push(field.Field + " = ?")
    })
    return myField
}

const assignFieldWithDefautValue = (fields) => {
    const myField = []
    fields.forEach(field => {
        const checkFieldType = field.Type.toLowerCase()
        if (checkFieldType.includes('char')) {
            myField.push("const " + field.Field + " = \"\";")
        } else if (checkFieldType.includes('int') || checkFieldType.includes('double') || checkFieldType.includes('float')) {
            myField.push("const " + field.Field + " = 0;")
        } else if (checkFieldType.includes("datetime")) {
            myField.push("const " + field.Field + " = " + "\"now()\"")
        } else if (checkFieldType.includes("date")) {
            myField.push("const " + field.Field + " = " + "\"curdate()\"")
        } else {
            myField.push("const " + field.Field + " = \"\";")
        }
    })
    return myField
}

const tableName = 'MyRestaurantJefferSakon.tablefile'
const sqlAllTable = `desc ${tableName} `
pool.query(sqlAllTable, (err, results) => {
    if (err) throw err

    const allFields = displayAllField(results)
    const allFieldsDefault = assignFieldWithDefautValue(results)
    const getQM = displayQuestionMark(results)

    const sqlQuery = `INSERT INTO ${tableName} (${allFields}) VALUES (${getQM})`;

    console.log(tableName + "=>", allFields.join(','))
    console.log(tableName + "=>", allFieldsDefault.join('\n'))
    console.log(tableName + "=>", sqlQuery)
})

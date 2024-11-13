const mysql = require("mysql2")

const MySQLType = require('./msyql_column_type')

const pool = mysql.createPool({
    host: "localhost",
    database: "MyRestaurantJefferSakon",
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

const queryType = 4;

if (queryType == 1) {
    const sql = "select * from employ"
    pool.query(sql, (err, results) => {
        if (err) throw err

        console.log(results)
    })
}

if (queryType == 2) {
    const sqlAllTable = "show tables"
    pool.query(sqlAllTable, (err, results) => {
        if (err) throw err

        console.log(results)
    })
}

if (queryType == 3) {
    const sqlAllTable = "select * from employ"
    pool.query(sqlAllTable, (err, results, fields) => {
        if (err) throw err

        console.log(results)
        console.log(fields)
    })
}

const getAllFields = (fields) => {
    const myField = []
    fields.forEach(field => {
        const fieldName = field.name
        const fieldFlags = field.flags
        if (fieldFlags > 0) {
            myField.push(fieldName)
        }
    })
    return myField
}

const getAllFieldsQuestion = (fields) => {
    const myField = []
    fields.forEach(field => {
        const fieldFlags = field.flags
        if (fieldFlags > 0) {
            myField.push("?")
        }
    })
    return myField
}

const getAllFieldsWithQuestion = (fields) => {
    const myField = []
    fields.forEach(field => {
        const fieldName = field.name
        const fieldFlags = field.flags
        if (fieldFlags > 0) {
            myField.push(fieldName + " = ?")
        }
    })
    return myField
}

const genRequestBody = (fields) => {
    const myField = []
    fields.forEach(field => {
        const fieldName = field.name
        const fieldType = MySQLType.byNumber(field.columnType)
        const fieldFlags = field.flags
        if (fieldFlags > 0) {
            if (fieldType === "STRING" || fieldType === "VAR_STRING") {
                myField.push(JSON.stringify(fieldName) + ":" + "\"\"")
            } else if (fieldType === "FLOAT" || fieldType === "LONG") {
                myField.push(JSON.stringify(fieldName) + ":" + "0")
            } else if (fieldType === "DATE") {
                myField.push(JSON.stringify(fieldName) + ":" + "\"\"")
            } else {
                myField.push(fieldName + ":" + "\"\"")
            }
        }
    })
    return myField
}

if (queryType == 4) {
    const tableName = 'MyRestaurantJefferSakon.t_sale'
    const sqlAllTable = `select * from ${tableName}`
    pool.query(sqlAllTable, (err, results, fields) => {
        if (err) throw err

        const allFields = getAllFields(fields)
        const allFieldsDefault = getAllFieldsQuestion(fields)

        // postman request
        const strRequstBody = '{' + genRequestBody(fields).join(',') + '}'
        console.log('########## POSTMAN ########')
        console.log(strRequstBody)
        console.log('########## POSTMAN ########')
        console.log()

        console.log('########## POST INSERT ########')
        console.log()
        console.log(`router.post('/', function (req, res, next) {`)
        console.log(`   const {${allFields.join(',')}} = req.body`)
        console.log()
        console.log(`   pool.query(`)
        console.log(`       ${`\``}INSERT INTO ${tableName} (${allFields.join(',')}) 
                            VALUES (${allFieldsDefault.join(',')}${`\``}), 
                            [${allFields.join(',')}],`)
        console.log(`       (err, results) => {`)
        console.log(`           if (err) throw err`)
        console.log(`           res.status(201).json({ status: 'data inserted.' })`)
        console.log(`       }`)
        console.log(`});`)
        console.log()
        console.log('########## POST INSERT ########')
        console.log()

        const allFieldWithQuestion = getAllFieldsWithQuestion(fields)
        console.log('########## PATCH UPDATE ########')
        console.log()
        console.log(`router.patch('/:id', function (req, res, next) {`)
        console.log(`    const id = req.params.id`)
        console.log(`    const { ${allFields.join(',')} } = req.body`)
        console.log()    
        console.log(`    pool.query(`)
        console.log(`        ${`\``}UPDATE ${tableName} `)
        console.log(`        SET ${allFieldWithQuestion.join(',')} `)
        console.log(`        WHERE id = ?${`\``}, `)
        console.log(`        [ ${allFields.join(',')}, id ],`)
        console.log(`        (err, results) => {`)
        console.log(`            if (err) throw err`)
        console.log()        
        console.log(`            res.status(200).json({ status: "update success"})`)
        console.log(`        }`)
        console.log(`    )`)
        console.log(`})`)
        console.log('########## PATCH UPDATE ########')
        console.log()
    })
}

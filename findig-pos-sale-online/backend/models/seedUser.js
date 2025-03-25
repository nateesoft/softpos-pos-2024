require("dotenv").config();
const mysql = require("mysql2/promise");
const bcrypt = require("bcryptjs");

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

const createUser = async () => {
    const email = "natee.live@gmail.com";
    const password = "000000";
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);
        console.log("User created successfully!");
    } catch (error) {
        console.error("Error inserting user:", error);
    } finally {
        process.exit();
    }
};

createUser();

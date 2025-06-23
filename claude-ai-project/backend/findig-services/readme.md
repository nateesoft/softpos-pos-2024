sales-api/
├── config/
│   ├── database.js          # การตั้งค่าเชื่อมต่อฐานข้อมูล
│   └── jwt.js               # การตั้งค่า JWT
├── controllers/
│   ├── authController.js    # จัดการ Login/Logout
│   └── salesController.js   # จัดการข้อมูลการขาย CRUD
├── middleware/
│   ├── auth.js              # ตรวจสอบ JWT Token
│   └── validation.js        # ตรวจสอบข้อมูลที่ส่งเข้ามา
├── models/
│   ├── User.js              # Model สำหรับผู้ใช้
│   └── Sale.js              # Model สำหรับการขาย
├── routes/
│   ├── auth.js              # Routes สำหรับ authentication
│   └── sales.js             # Routes สำหรับการขาย
├── utils/
│   ├── bcrypt.js            # จัดการ password hashing
│   └── response.js          # จัดการ response format
├── sql/
│   └── schema.sql           # Database schema
├── .env                     # Environment variables
├── app.js                   # Express app setup
├── server.js                # Server entry point
└── package.json
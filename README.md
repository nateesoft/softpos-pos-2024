init project for softpos 2024 (pos-restaurant)

# fix bug support mysql5.0
SHOW VARIABLES LIKE 'old_passwords'

SET PASSWORD FOR 'User'@'Host'=PASSWORD('yourpassword');
FLUSH Privileges;


# check service dependencies
npm install -g madge
madge --circular .

# all reports
let MTDReportTitle = "รายงานประจำเดือน"
let menuMTDList = [
    "รายงานยอดการเงินของเครื่อง (Terminal Report)",
    "รายงานการขายตามกลุ่มสินค้า (Department/Group Report)",
    "รายงานการขายตามรหัสสินค้า (PLU Report)",
    "รายงานการขายตามช่วงเวลา (Customer per Hours Report)",
    "รายงานการพิมพ์ใบเสร็จรับเงิน (Reciept Report)",
    "รายงานการ Void(Void Report)",
    "รายงานการรับชำระเงินด้วยบัตรเครดิต(Credit Report)",
    "รายงานอันดับสินค้าขายดี(Top Sale Report)",
    --"รายงานการชำระเงินด้วยบัตรกำนัล/บัตรของขวัญ (Gift Voucher Report)",
    --"รายงานส่วนลดคูปองพิเศษ (Special Cupon Report)"
]

let DailyReportTitle = "รายงานการขายประจำวัน (Daily Report)"
let menuDailyList = [
    "รายงานโต๊ะค้างยังไม่ได้ชำระเงิน (Table On Action)", 
    "รายงานยอดการเงินของเครื่อง (Terminal Report)", 
    "รายงานการขายตามกลุ่มสินค้า (Department/Group Report)", 
    "รายงานการขายตามรหัสสินค้า (PLU Report)", 
    "รายงานการขายตามช่วงเวลา (Customer Per Hour Report)", 
    "รายงานการพิมพ์ใบเสร็จรับเงิน (Reciept Report)", 
    "รายงานการ Void  (Void Report)", 
    "รายงานการรับชำระเงินด้วยบัตรเครดิต  (Credit Report)", 
    "รายงานอันดับสินค้าขายดี  (Top Sale Report)", 
    --"รายงานการชำระเงินด้วยบัตรกำนัล/บัตรของขวัญ (Gift Voucher Report)", 
    --"รายงานส่วนลดคูปองพิเศษ (Special Cupon Report)", 
    --"รายงานส่วนลดโปรโมชั่น (Promotion Report)", 
    --"รายงานการรับชำระลูกหนี้ภายนอก(Ar Payment Report)", 
    --"รายงานอัตโนมัติเฉพาะเครื่อง(Automatic X)"
]


pm2 concept production
npm install -g pm2
pm2 start src/index.js --name my-express-app
pm2 save
pm2 startup


### NOTE ###
HRM = (Human Resource Management)
-dashboard
-กะพนักงาน
-คำนวณเงินเดือน พนักงาน

Mobile Staff (เชื่อมกับ HRM)
-พนักงานดูข้อมูลตัวเองได้

CRM = (Customer Relationship Management)
-การทำ promotions
-สะสมแต้มสมาชิก
-เชื่อมกับ LineOA
-boardcast ส่งโปรโมชั่น
-ทฤษฏี RFM แยกประเภทลูกค้าให้

Dashboard = (Realtime)
-ยอดขาย
-Profit and Lost (P&L)
-ABC Analysyst
-Promotion
-Menu Engineering Metrix (BCG)
-Inventory (Stock)
-Supply Chain
-เป้าหมายการขาย
-Cashflow
-CRM
-COGs (ต้นทุนวัตถุดบ)

-- posdb.floorplan_setup definition

CREATE TABLE `floorplan_setup` (
  `id` varchar(50) NOT NULL,
  `table_no` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `zone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `customer_size` int NOT NULL,
  `table_image` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `table_status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.floorplan_template definition

CREATE TABLE `floorplan_template` (
  `id` varchar(50) NOT NULL,
  `template` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.order_details definition

CREATE TABLE `order_details` (
  `id` varchar(255) NOT NULL,
  `order_no` varchar(10) DEFAULT NULL,
  `menu_code` varchar(30) DEFAULT NULL,
  `menu_price` decimal(10,2) DEFAULT NULL,
  `menu_qty` int DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `net_amount` decimal(10,2) DEFAULT NULL,
  `order_type` varchar(10) DEFAULT NULL,
  `employe_order` varchar(50) DEFAULT NULL,
  `print_toKic` char(1) DEFAULT NULL,
  `take_order` char(1) DEFAULT NULL,
  `take_order_time` datetime DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_by` varchar(50) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.orders definition

CREATE TABLE `orders` (
  `id` varchar(255) NOT NULL,
  `order_no` varchar(13) DEFAULT NULL,
  `table_no` varchar(250) DEFAULT NULL,
  `customer_count` varchar(250) DEFAULT NULL,
  `member_code` varchar(250) DEFAULT NULL,
  `member_name` varchar(250) DEFAULT NULL,
  `discount_amount_dinein` decimal(10,2) DEFAULT NULL,
  `discount_amount_takeaway` decimal(10,2) DEFAULT NULL,
  `discount_amount_delivery` decimal(10,2) DEFAULT NULL,
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `total_amount_dinein` decimal(10,2) DEFAULT NULL,
  `total_amount_takeaway` decimal(10,2) DEFAULT NULL,
  `total_amount_delivery` decimal(10,2) DEFAULT NULL,
  `vat_percent` decimal(5,2) DEFAULT NULL,
  `vat_amount_dinein` decimal(10,2) DEFAULT NULL,
  `vat_amount_takeaway` decimal(10,2) DEFAULT NULL,
  `vat_amount_delivery` decimal(10,2) DEFAULT NULL,
  `vat_amount` decimal(10,2) DEFAULT NULL,
  `net_total_amount_dinein` decimal(10,2) DEFAULT NULL,
  `net_total_amount_takeaway` decimal(10,2) DEFAULT NULL,
  `net_total_amount_delivery` decimal(10,2) DEFAULT NULL,
  `net_total_amount` decimal(10,2) DEFAULT NULL,
  `employee_checkin` varchar(50) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_by` varchar(50) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(50) DEFAULT NULL,
  `bill_status` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.product definition

CREATE TABLE `product` (
  `id` varchar(255) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `group` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.product_order definition

CREATE TABLE `product_order` (
  `id` varchar(255) NOT NULL,
  `name` varchar(150) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `qty` int DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `totalAmount` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
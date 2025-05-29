-- posdb.branch definition

CREATE TABLE `branch` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.company definition

CREATE TABLE `company` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


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
  `template` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.menu_setup definition

CREATE TABLE `menu_setup` (
  `id` varchar(255) NOT NULL,
  `menu_code` varchar(20) DEFAULT NULL,
  `menu_name` varchar(250) DEFAULT NULL,
  `menu_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `menu_type` varchar(50) DEFAULT NULL,
  `menu_status` varchar(50) DEFAULT NULL,
  `show_list_menu` char(1) DEFAULT NULL,
  `ref_menu` varchar(20) DEFAULT NULL,
  `auto_select` char(1) DEFAULT NULL,
  `can_change` char(1) DEFAULT NULL,
  `min_count_set` int DEFAULT NULL,
  `max_count_set` int DEFAULT NULL,
  `free` char(1) DEFAULT NULL,
  `percent_discount` double(4,2) DEFAULT NULL,
  `manual_discount` double(5,2) DEFAULT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  `tab_group` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `menu_price` double(7,2) DEFAULT NULL,
  `product_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `manual_price` char(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.menu_setup_temp definition

CREATE TABLE `menu_setup_temp` (
  `id` varchar(255) NOT NULL,
  `menu_code` varchar(20) DEFAULT NULL,
  `menu_name` varchar(250) DEFAULT NULL,
  `menu_number` varchar(5) DEFAULT NULL,
  `menu_type` varchar(50) DEFAULT NULL,
  `menu_status` varchar(50) DEFAULT NULL,
  `show_list_menu` char(1) DEFAULT NULL,
  `ref_menu` varchar(20) DEFAULT NULL,
  `auto_select` char(1) DEFAULT NULL,
  `can_change` char(1) DEFAULT NULL,
  `min_count_set` int DEFAULT NULL,
  `max_count_set` int DEFAULT NULL,
  `free` char(1) DEFAULT NULL,
  `percent_discount` double(4,2) DEFAULT NULL,
  `manual_discount` double(5,2) DEFAULT NULL,
  `image_url` varchar(250) DEFAULT NULL,
  `tab_group` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `menu_price` double(7,2) DEFAULT NULL,
  `product_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `manual_price` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.menu_tabs definition

CREATE TABLE `menu_tabs` (
  `tab_key` varchar(10) DEFAULT NULL,
  `tab_name_title` varchar(100) DEFAULT NULL,
  `tab_name_title_en` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image_url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.pos_setting definition

CREATE TABLE `pos_setting` (
  `id` varchar(100) DEFAULT NULL,
  `language_main` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `language_main_title` varchar(100) DEFAULT NULL,
  `language_use` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `language_use_title` varchar(100) DEFAULT NULL,
  `timezone_main` varchar(100) DEFAULT NULL,
  `timezone_use` varchar(100) DEFAULT NULL,
  `currency_baht_rate` float(10,4) DEFAULT NULL,
  `currency_baht` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `currency_use_rate` float(10,4) DEFAULT NULL,
  `currency_use` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `receipt_printer_ip` varchar(100) DEFAULT NULL,
  `kichen_printer_ip` varchar(100) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `user_update` varchar(50) DEFAULT NULL,
  `terminal_id` varchar(20) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.shop definition

CREATE TABLE `shop` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.table_checkin definition

CREATE TABLE `table_checkin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Tcode` varchar(10) DEFAULT '',
  `emp_code_first` varchar(20) DEFAULT '',
  `emp_code_last` varchar(20) DEFAULT '',
  `macno` varchar(5) DEFAULT '',
  `customer_count` int DEFAULT '0',
  `thai_man_count` int DEFAULT '0',
  `thai_woman_count` int DEFAULT '0',
  `thai_kid_count` int DEFAULT '0',
  `thai_old_count` int DEFAULT '0',
  `datetime_checkin` datetime DEFAULT NULL,
  `customer_name` varchar(200) DEFAULT '',
  `member_code` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT '',
  `book_no` varchar(20) DEFAULT '',
  `table_order_type_start` char(1) DEFAULT 'E',
  `active` varchar(1) DEFAULT 'Y',
  `nation_man_count` int DEFAULT '0',
  `nation_woman_count` int DEFAULT '0',
  `nation_kid_count` int DEFAULT '0',
  `nation_old_count` int DEFAULT '0',
  `nation_country` varchar(300) DEFAULT NULL,
  `customer_note` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `bill_no` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=495 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- posdb.terminal definition

CREATE TABLE `terminal` (
  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `branch_code` varchar(20) DEFAULT NULL,
  `macno` varchar(5) DEFAULT NULL,
  `receipt_printer` varchar(100) DEFAULT NULL,
  `receipt_printer_active` varchar(1) DEFAULT 'Y',
  `kitchen_printer` varchar(100) DEFAULT NULL,
  `kitchen_printer_active` varchar(1) DEFAULT 'Y',
  `kitchen_printer_use` varchar(20) DEFAULT 'product'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


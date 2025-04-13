-- MySQL dump 10.13  Distrib 8.4.0, for Linux (x86_64)
--
-- Host: localhost    Database: posdb
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `floorplan_setup`
--

DROP TABLE IF EXISTS `floorplan_setup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `floorplan_setup` (
  `id` varchar(50) NOT NULL,
  `table_no` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `zone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `customer_size` int NOT NULL,
  `table_image` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `table_status` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `floorplan_setup`
--

LOCK TABLES `floorplan_setup` WRITE;
/*!40000 ALTER TABLE `floorplan_setup` DISABLE KEYS */;
INSERT INTO `floorplan_setup` VALUES ('node_04t6mt','T8','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_18o9qy','R1','STAND_ROOM',0,'','Y'),('node_1b6g0f','T2','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_1ve5yk','R3','STAND_ROOM',0,'/images/floorplan/oval-table.png','Y'),('node_2k4l9c','T3','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_2vjl6p','R4','STAND_ROOM',0,'/images/floorplan/oval-table.png','Y'),('node_3pest4','TT','STAND_ROOM',0,'/images/floorplan/round-table.png','Y'),('node_4jdbnq','T2','STAND_ROOM',0,'','Y'),('node_67sh9b','T11','STAND_ROOM',0,'/images/floorplan/dinner-table.png','Y'),('node_8wopn0','T1','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_9i2ji5','T9','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_9r7edw','T5','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_9rl13v','T4','STAND_ROOM',0,'/images/floorplan/pos-table.png','Y'),('node_a3elc8','T1','STAND_ROOM',0,'','Y'),('node_ap0tyd','T2','STAND_ROOM',4,'/images/floorplan/rectangle-table.png','Y'),('node_c1q894','R2','STAND_ROOM',0,'/images/floorplan/oval-table.png','Y'),('node_dr1cfp','T1','STAND_ROOM',2,'/images/floorplan/rectangle-table.png','Y'),('node_ebqd4p','NoTable','STAND_ROOM',0,'/images/floorplan/pos-table.png','Y'),('node_epfhdw','T3','STAND_ROOM',0,'/images/floorplan/dinner-table.png','Y'),('node_fopw9w','T1','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_fsykss','T3','STAND_ROOM',0,'/images/floorplan/oval-table.png','Y'),('node_gbyth4','T7','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_gl0b26','R2','STAND_ROOM',0,'','Y'),('node_gl1vsp','T14','STAND_ROOM',0,'/images/floorplan/dinner-table.png','Y'),('node_gp1es5','T5','STAND_ROOM',0,'/images/floorplan/oval-table.png','Y'),('node_ihom25','T10','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_ithsa9','R1','STAND_ROOM',0,'/images/floorplan/oval-table.png','Y'),('node_iukelv','T3','STAND_ROOM',2,'/images/floorplan/pos-table.png','Y'),('node_jdof0z','T4','STAND_ROOM',4,'/images/floorplan/round-table.png','Y'),('node_julcns','T1','STAND_ROOM',2,'/images/floorplan/rectangle-table.png','Y'),('node_jwr5b4','T6','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_k6yxsc','T4','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_l5zkb6','T2','STAND_ROOM',0,'/images/floorplan/rectangle-table.png','Y'),('node_l6h34a','T1','STAND_ROOM',6,'/images/floorplan/toilet.png','Y'),('node_m8uoga','T1','STAND_ROOM',0,'/images/floorplan/cash-counter.png','Y'),('node_p2dt1k','T3','STAND_ROOM',0,'','Y'),('node_qwk4cz','T13','STAND_ROOM',8,'/images/floorplan/dinner-table.png','Y'),('node_rbg269','T1','STAND_ROOM',1,'/images/floorplan/dinner-table.png','Y'),('node_sry3gz','','STAND_ROOM',0,'/images/floorplan/chef.png','Y'),('node_ssz2fi','','STAND_ROOM',0,'','Y'),('node_vwo4gb','T12','STAND_ROOM',0,'/images/floorplan/dinner-table.png','Y'),('node_ykuj5w','T2','STAND_ROOM',2,'/images/floorplan/dinner-table.png','Y');
/*!40000 ALTER TABLE `floorplan_setup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `floorplan_template`
--

DROP TABLE IF EXISTS `floorplan_template`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `floorplan_template` (
  `id` varchar(50) NOT NULL,
  `template` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `floorplan_template`
--

LOCK TABLES `floorplan_template` WRITE;
/*!40000 ALTER TABLE `floorplan_template` DISABLE KEYS */;
INSERT INTO `floorplan_template` VALUES ('STAND_ROOM','{\"edges\": [], \"nodes\": [{\"id\": \"node_dr1cfp\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T1\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": \"2\"}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -512, \"y\": -362}, \"selected\": false}, {\"id\": \"node_vwo4gb\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1334, \"y\": -620}, \"selected\": false}, {\"id\": \"node_1b6g0f\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -282.79497058295226, \"y\": -347.6425838540655}, \"selected\": true}, {\"id\": \"node_2k4l9c\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T3\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -510, \"y\": -131}, \"selected\": false}, {\"id\": \"node_k6yxsc\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T4\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -285.6869145388325, \"y\": -129.90302662707202}, \"selected\": false}, {\"id\": \"node_9r7edw\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T5\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -515.7423278947914, \"y\": 59.2299654272292}, \"selected\": false}, {\"id\": \"node_jwr5b4\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T6\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -293.46803178279504, \"y\": 61.0193946745856}, \"selected\": false}, {\"id\": \"node_gbyth4\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T7\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -514.3488930674836, \"y\": 260.30477345777365}, \"selected\": false}, {\"id\": \"node_04t6mt\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T8\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -306.13832231483997, \"y\": 256.0609546915547}, \"selected\": false}, {\"id\": \"node_9i2ji5\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T9\", \"bgColor\": \"purple\", \"customer\": 1, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -507.9042732652315, \"y\": -598.0277066779795}, \"selected\": false}, {\"id\": \"node_ihom25\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T10\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -293.2740850369392, \"y\": -596.6150882511432}, \"selected\": false}, {\"id\": \"node_67sh9b\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T11\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1571.7367865591957, \"y\": -625.4541784438054}, \"selected\": false}, {\"id\": \"node_vwo4gb\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T12\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1334, \"y\": -620}, \"selected\": false}, {\"id\": \"node_ithsa9\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/oval-table.png\", \"label\": \"R1\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1505.5, \"y\": 230}, \"selected\": false}, {\"id\": \"node_c1q894\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/oval-table.png\", \"label\": \"R2\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 741, \"y\": -369}, \"selected\": false}, {\"id\": \"node_1ve5yk\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/oval-table.png\", \"label\": \"R3\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1029, \"y\": -371}, \"selected\": false}, {\"id\": \"node_2vjl6p\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/oval-table.png\", \"label\": \"R4\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1322, \"y\": -362}, \"selected\": false}, {\"id\": \"node_qwk4cz\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T13\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1078, \"y\": -631}, \"selected\": false}, {\"id\": \"node_gl1vsp\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T14\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1847, \"y\": -614}, \"selected\": false}, {\"id\": \"node_qwk4cz\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T13\", \"tableStatus\": \"Y\", \"customerCount\": \"8\"}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1078, \"y\": -631}, \"selected\": false}, {\"id\": \"node_iukelv\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T3\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 285, \"y\": -360}, \"selected\": false}, {\"id\": \"node_iukelv\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/pos-table.png\", \"label\": \"T3\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": \"2\"}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 285, \"y\": -360}, \"selected\": false}, {\"id\": \"node_a3elc8\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"\", \"label\": \"T1\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"tall\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -53, \"y\": -587}, \"selected\": false}, {\"id\": \"node_4jdbnq\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"tall\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -52, \"y\": -181}, \"selected\": false}, {\"id\": \"node_p2dt1k\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"\", \"label\": \"T3\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"tall\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -50, \"y\": 231}, \"selected\": false}, {\"id\": \"node_18o9qy\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"\", \"label\": \"R1\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"long\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 748, \"y\": -83}, \"selected\": false}, {\"id\": \"node_gl0b26\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"\", \"label\": \"R2\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"long\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 1151, \"y\": -83}, \"selected\": false}, {\"id\": \"node_m8uoga\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/cash-counter.png\", \"label\": \"T1\", \"bgColor\": \"green\", \"customer\": 0, \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 385, \"y\": -647}, \"selected\": false}, {\"id\": \"node_ebqd4p\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/round-table.png\", \"label\": \"WALK-IN\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 295.8777636638574, \"y\": 188.3417619676272}, \"selected\": false}, {\"id\": \"node_ebqd4p\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/pos-table.png\", \"label\": \"WALK-IN\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 295.8777636638574, \"y\": 188.3417619676272}, \"selected\": false}, {\"id\": \"node_ebqd4p\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/pos-table.png\", \"label\": \"ขายด่วน\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 295.8777636638574, \"y\": 188.3417619676272}, \"selected\": false}, {\"id\": \"node_ebqd4p\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/pos-table.png\", \"label\": \"NoTable\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"round\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": 295.8777636638574, \"y\": 188.3417619676272}, \"selected\": false}, {\"id\": \"node_1b6g0f\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/pos-restaurant/images/floorplan/oval-table.png\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -282.79497058295226, \"y\": -347.6425838540655}, \"selected\": true}, {\"id\": \"node_1b6g0f\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/pos-restaurant/images/floorplan/dinner-table.png\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -282.79497058295226, \"y\": -347.6425838540655}, \"selected\": true}, {\"id\": \"node_1b6g0f\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/dinner-table.png\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -282.79497058295226, \"y\": -347.6425838540655}, \"selected\": true}, {\"id\": \"node_1b6g0f\", \"data\": {\"zone\": \"STAND_ROOM\", \"image\": \"/images/floorplan/rectangle-table.png\", \"label\": \"T2\", \"tableStatus\": \"Y\", \"customerCount\": 0}, \"type\": \"square\", \"style\": {\"width\": 80, \"height\": 50}, \"dragging\": false, \"measured\": {\"width\": 80, \"height\": 50}, \"position\": {\"x\": -282.79497058295226, \"y\": -347.6425838540655}, \"selected\": false}], \"viewport\": {\"x\": 275.61349850093643, \"y\": 466.7392535898584, \"zoom\": 0.4320777240406519}}');
/*!40000 ALTER TABLE `floorplan_template` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_setup`
--

DROP TABLE IF EXISTS `menu_setup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_setup`
--

LOCK TABLES `menu_setup` WRITE;
/*!40000 ALTER TABLE `menu_setup` DISABLE KEYS */;
INSERT INTO `menu_setup` VALUES ('0d6ff918-2abd-405d-92ee-c994884901bc','1007','Same Karei Sushi','','optional','active','N','SET1001','N','N',0,0,'Y',0.00,0.00,'/images/product/1005.jpg','',0.00,'03','N'),('1','SET1001','Luna Course ','01','product','active','Y','','Y','N',13,13,'N',0.00,0.00,'/images/product/SET1001.jpg','A',3800.00,NULL,NULL),('10','1009','Chawanmushi','','optional','active','N','SET1001','Y','Y',13,13,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('11','1010','Toro Taku Temaki','','optional','active','N','SET1001','Y','Y',13,13,'N',0.00,0.00,'/images/product/1002.jpg','A',0.00,NULL,NULL),('12','1011','Uni Temaki','','optional','active','N','SET1001','Y','Y',13,13,'N',0.00,0.00,'/images/product/1003.jpg','A',0.00,NULL,NULL),('13','1012','Sakana Don','','optional','active','N','SET1001','Y','Y',13,13,'N',0.00,0.00,'/images/product/1004.jpg','A',0.00,NULL,NULL),('14','1013','Toro Aburi','','optional','active','N','SET1001','Y','Y',13,13,'N',0.00,0.00,'/images/product/1003.jpg','A',0.00,NULL,NULL),('15','SET2001','Akari Course 5,800++ (Served 16 Menu)','02','product','active','Y','','Y','N',16,16,'N',0.00,0.00,'/images/product/1012.jpg','A',5800.00,NULL,NULL),('16','1001','Junsai','','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('17','1002','Mehikari',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1002.jpg','A',0.00,NULL,NULL),('18','1014','Kuro Baigai',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('19','1015','Same Karei Uzukuri',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('2','1001','Junsai','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('20','1016','Ankimo Toast',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('21','1004','Shima-Aji',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1004.jpg','A',0.00,NULL,NULL),('22','1005','Kuromatsu',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1005.jpg','A',0.00,NULL,NULL),('23','1006','Sawara Sashimi',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1006.jpg','A',0.00,NULL,NULL),('24','1017','Kinmedai','  ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('25','1018','Botan Ebi',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('26','1019','Ezo Awabi',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('27','1020','Tomato',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('28','1021','Akami Suke',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('29','1022','Otoro Aburi',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9450','APT030','ผัดฉ่าธรรมดา','01','product','active','Y',NULL,NULL,NULL,0,1,'N',0.00,0.00,'/images/product/food11.png','A',69.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9451','APT031','หมูย่าง หมูปิ้ง','','optional','active','N','APT030','Y','Y',0,0,'N',0.00,0.00,'/images/product/food08.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9452','APT032','ไก่ย่างสามเกลอ แจ่วมะขามแซ่บ','','optional','active','N','APT030','N','Y',0,0,'N',0.00,0.00,'/images/product/food04.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9453','APT033','ผัดฉ่าทะเล','02','product','active','Y',NULL,NULL,NULL,0,2,'N',0.00,0.00,'/images/product/food11.png','B',399.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9454','APT034','แกงเห็ดเผาะ','','optional','active','N','APT033','N','Y',0,0,'N',0.00,0.00,'/images/product/food03.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9455','APT035','ตำชมพู่มะเหมี่ยวกะปิปลากรอบ','','optional','active','N','APT033','N','Y',0,0,'N',0.00,0.00,'/images/product/food07.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9456','APT036','หมูย่าง หมูปิ้ง','','optional','active','N','APT033','N','Y',0,0,'N',0.00,0.00,'/images/product/food08.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9457','BF001','ปลาหมึกต้มมะนาว','','optional','active','N','APT033','N','Y',0,0,'N',0.00,0.00,'/images/product/food06.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9458','BF002','ผัดฉ่าทะเล พิเศษ','03','product','active','Y',NULL,NULL,NULL,2,3,'N',0.00,0.00,'/images/product/food11.png','C',599.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9459','CB001','แกงเห็ดเผาะ','','optional','active','N','BF002','Y','N',0,0,'N',0.00,0.00,'/images/product/food03.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9460','CB002','ตำชมพู่มะเหมี่ยวกะปิปลากรอบ','','optional','active','N','BF002','N','Y',0,0,'N',0.00,0.00,'/images/product/food07.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9461','CB003','หมูย่าง หมูปิ้ง','','optional','active','N','BF002','N','Y',0,0,'N',0.00,0.00,'/images/product/food08.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9462','CF019','ปลาหมึกต้มมะนาว','','optional','active','N','BF002','Y','N',0,0,'N',0.00,0.00,'/images/product/food06.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9463','CF020','ไก่ย่าง','','optional','active','N','BF002','N','Y',0,0,'N',0.00,0.00,'/images/product/food10.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9464','CF021','ส้มตำ','','optional','active','N','BF002','N','Y',0,0,'N',0.00,0.00,'/images/product/food11.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9465','DELSET011','ตำเส้นพวงแคปหมูผักงูเขียว','04','product','active','Y',NULL,NULL,NULL,0,1,'N',0.00,0.00,'/images/product/food05.png','D',259.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9466','DELSET012','เมี่ยงปลาทอด','05','product','active','Y',NULL,NULL,NULL,3,4,'N',0.00,0.00,'/images/product/food09.png','C',300.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9467','DELSET013','แกงเห็ดเผาะ','','optional','active','N','DELSET012','Y','N',1,1,'N',0.00,0.00,'/images/product/food03.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9468','DELSET014','ไก่ย่างสามเกลอ แจ่วมะขามแซ่บ','','optional','active','N','DELSET012','N','Y',0,0,'N',0.00,0.00,'/images/product/food04.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9469','DELSET015','หมูย่าง หมูปิ้ง','','optional','active','N','DELSET012','N','Y',0,0,'N',0.00,0.00,'/images/product/food08.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9470','DELSET020','หมูปลาร้าปั้นก้อน','','optional','active','N','DELSET013','Y','Y',0,0,'Y',0.00,0.00,'/images/product/food11.png','',NULL,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9471','DELSET021','ไข่พะโล้หมูสามชั้น','06','product','active','N',NULL,NULL,NULL,0,0,'N',0.00,0.00,'/images/product/food01.png','C',100.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9472','PROSET035','ชามะนาว','07','product','active','N',NULL,'N','N',1,1,'N',0.00,0.00,'/images/product/drink-04.png','E',60.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9474','ST029','บัวลอยไข่หวาน','09','product','active','N',NULL,'N','N',1,1,'N',0.00,0.00,'/images/product/dessert-02.png','F',35.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9475','TG015','ทับทิมกรอบน้ำกะทิ','10','product','active','N',NULL,'N','N',1,1,'N',0.00,0.00,'/images/product/dessert-03.png','F',40.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9481','PROSET036','โกโก้เย็น','11','product','active','N',NULL,'N','N',1,1,'N',0.00,0.00,'/images/product/drink-02.png','E',60.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9482','PROSET037','อเมริกาโน่มะพร้าว','12','product','active','N',NULL,'N','N',1,1,'N',0.00,0.00,'/images/product/drink-03.png','E',60.00,NULL,NULL),('2c380a41-c783-41ff-80a0-911312ff9483','ST026','กล้วยบวชชี','08','product','active','N',NULL,'N','N',1,1,'N',0.00,0.00,'/images/product/dessert-01.png','F',30.00,NULL,NULL),('3','1002','Mehikari','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1002.jpg','A',0.00,NULL,NULL),('30','1023','Uni Temaki',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('31','1024','Wagyu Don',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('32','1025','Soup',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('33','1026','Desert',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1001.jpg','A',0.00,NULL,NULL),('34','1001','Jansai **Change',NULL,'optional','active','N','SET1001','N','Y',0,0,'N',0.00,0.00,'/images/product/1008.jpg','A',0.00,NULL,NULL),('4','1003','Hotate','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1003.jpg','A',0.00,NULL,NULL),('5','1004','Shima Aji','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1004.jpg','A',0.00,NULL,NULL),('519390e7-eaaa-4e89-b1eb-999889d20ccb','SET1001','SET 3,800++(Served 14 Menu)','SET1001','product','active','Y','','N','N',0,0,'N',0.00,0.00,'/images/product/1003.jpg','F',0.00,'03','N'),('6','1005','Kuromatsu','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1005.jpg','A',0.00,NULL,NULL),('6d7c2818-59c7-49eb-8084-24d3fb9f4924','1015','Same Karei Uzukuri','','optional','active','N','SET1001','N','N',0,0,'Y',0.00,0.00,'/images/product/1001.jpg','',0.00,'03','N'),('7','1006','Sawara','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1006.jpg','A',0.00,NULL,NULL),('8','1007','Same Karei','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1007.jpg','A',0.00,NULL,NULL),('9','1008','Ama Ebi','','optional','active','N','SET1001','Y','Y',16,16,'N',0.00,0.00,'/images/product/1008.jpg','A',0.00,NULL,NULL),('99','OPEN001','OPEN FOOD',' ','optional','active','N','SET2001','Y','Y',16,16,'N',0.00,0.00,'/images/product/openfood.png','A',0.00,NULL,'Y'),('A01','OPEN001','OPEN FOOD','','product','active','N','','N','N',0,0,'N',0.00,0.00,'/images/product/openfood.png','A',0.00,NULL,'Y'),('A02','TIPS','TIPS EMP','','product','active','N','','N','N',0,0,'N',0.00,0.00,'/images/product/tips.png','A',0.00,NULL,'Y');
/*!40000 ALTER TABLE `menu_setup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_setup_temp`
--

DROP TABLE IF EXISTS `menu_setup_temp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_setup_temp`
--

LOCK TABLES `menu_setup_temp` WRITE;
/*!40000 ALTER TABLE `menu_setup_temp` DISABLE KEYS */;
/*!40000 ALTER TABLE `menu_setup_temp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_tabs`
--

DROP TABLE IF EXISTS `menu_tabs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_tabs` (
  `tab_key` varchar(10) DEFAULT NULL,
  `tab_name_title` varchar(100) DEFAULT NULL,
  `tab_name_title_en` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image_url` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_tabs`
--

LOCK TABLES `menu_tabs` WRITE;
/*!40000 ALTER TABLE `menu_tabs` DISABLE KEYS */;
INSERT INTO `menu_tabs` VALUES ('A','อาหารเช้า','Breakfast',NULL),('B','ของทานเล่น','Appetizer',NULL),('C','อาหารจีน','ChineseFood',NULL),('D','อาหารอิตาเลียน','ItalianFood',NULL),('E','เมนูเครื่องดื่ม','Drink',NULL),('F','เมนูของหวาน','Desert',NULL);
/*!40000 ALTER TABLE `menu_tabs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pos_setting`
--

DROP TABLE IF EXISTS `pos_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pos_setting`
--

LOCK TABLES `pos_setting` WRITE;
/*!40000 ALTER TABLE `pos_setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `pos_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shop`
--

DROP TABLE IF EXISTS `shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shop` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shop`
--

LOCK TABLES `shop` WRITE;
/*!40000 ALTER TABLE `shop` DISABLE KEYS */;
/*!40000 ALTER TABLE `shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `table_checkin`
--

DROP TABLE IF EXISTS `table_checkin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=472 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `table_checkin`
--

LOCK TABLES `table_checkin` WRITE;
/*!40000 ALTER TABLE `table_checkin` DISABLE KEYS */;
INSERT INTO `table_checkin` VALUES (389,'T9','001','001','001',1,1,0,0,0,'2025-03-29 06:21:20','','','','E','N',0,0,0,0,'Asia','',''),(390,'T9','001','001','001',1,1,0,0,0,'2025-03-29 17:03:04','','','','E','N',0,0,0,0,'Asia','',''),(391,'T9','001','001','001',1,1,0,0,0,'2025-03-30 23:42:12','','','','E','N',0,0,0,0,'Asia','',''),(392,'T9','001','001','001',1,1,0,0,0,'2025-03-31 16:04:57','','','','E','N',0,0,0,0,'Asia','',''),(393,'T9','001','001','001',1,1,0,0,0,'2025-03-31 17:55:03','','','','E','N',0,0,0,0,'Asia','',''),(394,'T9','001','001','001',1,1,0,0,0,'2025-03-31 21:10:53','','','','E','N',0,0,0,0,'Asia','',''),(395,'T9','001','001','001',1,1,0,0,0,'2025-04-01 07:18:07','','','','E','N',0,0,0,0,'Asia','',''),(396,'T9','001','001','001',1,1,0,0,0,'2025-04-01 22:38:04','','','','E','N',0,0,0,0,'Asia','',''),(397,'T9','001','001','001',1,1,0,0,0,'2025-04-01 22:39:37','','','','E','N',0,0,0,0,'Asia','',''),(398,'T9','001','001','001',1,1,0,0,0,'2025-04-01 23:15:50','','','','E','N',0,0,0,0,'Asia','',''),(399,'T9','001','001','001',1,1,0,0,0,'2025-04-01 23:26:58','','','','E','N',0,0,0,0,'Asia','',''),(400,'T9','001','001','001',1,1,0,0,0,'2025-04-01 23:56:15','','','','E','N',0,0,0,0,'Asia','',''),(401,'T9','001','001','001',1,1,0,0,0,'2025-04-02 00:05:54','','','','E','N',0,0,0,0,'Asia','',''),(402,'T9','001','001','001',1,1,0,0,0,'2025-04-02 05:38:06','','','','E','N',0,0,0,0,'Asia','',''),(403,'T9','001','001','001',1,1,0,0,0,'2025-04-02 05:42:32','','','','E','N',0,0,0,0,'Asia','',''),(404,'T1','001','001','001',1,0,1,0,0,'2025-04-02 05:53:04','','','','E','N',0,0,0,0,'Asia','',''),(405,'T1-1','001','001','001',1,1,0,0,0,'2025-04-02 06:46:58','','','','E','N',0,0,0,0,'Asia','',''),(406,'T1-1-1','001','','001',1,1,0,0,0,'2025-04-02 06:58:02','','','','E','N',0,0,0,0,'Asia','',''),(407,'T9','001','001','001',1,1,0,0,0,'2025-04-02 10:26:06','','','','E','N',0,0,0,0,'Asia','',''),(408,'T9','001','001','001',1,1,0,0,0,'2025-04-02 10:26:40','','','','E','N',0,0,0,0,'Asia','',''),(409,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:02:11','','','','E','N',0,0,0,0,'Asia','',''),(410,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:08:36','','','','E','N',0,0,0,0,'Asia','',''),(411,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:31:15','','','','E','N',0,0,0,0,'Asia','',''),(412,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:36:57','','','','E','N',0,0,0,0,'Asia','',''),(413,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:44:28','','','','E','N',0,0,0,0,'Asia','',''),(414,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:53:23','','','','E','N',0,0,0,0,'Asia','',''),(415,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:57:08','','','','E','N',0,0,0,0,'Asia','',''),(416,'T9','001','001','001',1,1,0,0,0,'2025-04-02 11:57:51','','','','E','N',0,0,0,0,'Asia','',''),(417,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:00:15','','','','E','N',0,0,0,0,'Asia','',''),(418,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:03:08','','','','E','N',0,0,0,0,'Asia','',''),(419,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:04:04','','','','E','N',0,0,0,0,'Asia','',''),(420,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:10:28','','','','E','N',0,0,0,0,'Asia','',''),(421,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:14:19','','','','E','N',0,0,0,0,'Asia','',''),(422,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:18:25','','','','E','N',0,0,0,0,'Asia','',''),(423,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:20:17','','','','E','N',0,0,0,0,'Asia','',''),(424,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:37:13','','','','E','N',0,0,0,0,'Asia','',''),(425,'T9','001','001','001',1,1,0,0,0,'2025-04-02 12:45:00','','','','E','N',0,0,0,0,'Asia','',''),(426,'T9','001','001','001',1,1,0,0,0,'2025-04-03 11:42:55','','','','E','N',0,0,0,0,'Asia','',''),(427,'T9','001','001','001',1,1,0,0,0,'2025-04-03 11:44:23','','','','E','N',0,0,0,0,'Asia','',''),(428,'T9','001','001','001',1,1,0,0,0,'2025-04-05 07:22:26','','','','E','N',0,0,0,0,'Asia','',''),(429,'T9','001','001','001',1,1,0,0,0,'2025-04-06 05:46:12','','','','E','N',0,0,0,0,'Asia','',''),(430,'T9','001','001','001',1,1,0,0,0,'2025-04-06 18:16:13','','','','E','N',0,0,0,0,'Asia','',''),(431,'T9','001','001','001',1,1,0,0,0,'2025-04-06 18:27:30','','','','E','N',0,0,0,0,'Asia','',''),(432,'T9','001','001','001',1,1,0,0,0,'2025-04-07 06:20:35','','','','E','N',0,0,0,0,'Asia','',''),(433,'T9','001','001','001',1,1,0,0,0,'2025-04-07 06:47:37','','','','E','N',0,0,0,0,'Asia','',''),(434,'T9','001','001','001',1,1,0,0,0,'2025-04-07 06:51:43','','','','E','N',0,0,0,0,'Asia','',''),(435,'T9','001','001','001',1,1,0,0,0,'2025-04-07 06:59:45','','','','E','N',0,0,0,0,'Asia','',''),(436,'T9','001','001','001',1,1,0,0,0,'2025-04-07 07:10:13','','','','E','N',0,0,0,0,'Asia','',''),(437,'T9','001','001','001',1,1,0,0,0,'2025-04-08 05:15:58','','','','E','N',0,0,0,0,'Asia','',''),(438,'T9','001','001','001',1,1,0,0,0,'2025-04-08 05:16:36','','','','E','N',0,0,0,0,'Asia','',''),(439,'T9','001','001','001',1,1,0,0,0,'2025-04-08 05:18:42','','','','E','N',0,0,0,0,'Asia','',''),(440,'T9','001','001','001',1,1,0,0,0,'2025-04-08 05:33:53','','','','E','N',0,0,0,0,'Asia','',''),(441,'T9','001','001','001',1,1,0,0,0,'2025-04-08 05:52:16','','','','E','N',0,0,0,0,'Asia','',''),(442,'T9','001','001','001',1,1,0,0,0,'2025-04-08 05:57:45','','','','E','N',0,0,0,0,'Asia','',''),(443,'T9','001','001','001',1,1,0,0,0,'2025-04-08 06:01:52','','','','E','N',0,0,0,0,'Asia','',''),(444,'T9','001','001','001',1,1,0,0,0,'2025-04-08 06:02:56','','','','E','N',0,0,0,0,'Asia','',''),(445,'T9','001','001','001',1,1,0,0,0,'2025-04-08 06:31:14','','','','E','N',0,0,0,0,'Asia','',''),(446,'T9','001','001','001',1,1,0,0,0,'2025-04-08 07:26:03','','','','E','N',0,0,0,0,'Asia','',''),(447,'T9','001','001','001',1,1,0,0,0,'2025-04-08 07:29:18','','','','E','N',0,0,0,0,'Asia','',''),(448,'T9','001','001','001',1,1,0,0,0,'2025-04-08 07:34:14','','','','E','N',0,0,0,0,'Asia','',''),(449,'T9','001','001','001',1,1,0,0,0,'2025-04-08 17:55:32','','','','E','N',0,0,0,0,'Asia','',''),(450,'T9','001','001','001',1,1,0,0,0,'2025-04-08 17:56:25','','','','E','N',0,0,0,0,'Asia','',''),(451,'T9','001','001','001',1,1,0,0,0,'2025-04-08 17:58:37','','','','E','N',0,0,0,0,'Asia','',''),(452,'T9','001','001','001',1,1,0,0,0,'2025-04-08 18:07:49','','','','E','N',0,0,0,0,'Asia','',''),(453,'T9','001','001','001',1,1,0,0,0,'2025-04-08 18:09:41','','','','E','N',0,0,0,0,'Asia','',''),(454,'T9','001','001','001',1,1,0,0,0,'2025-04-08 18:10:40','','','','E','N',0,0,0,0,'Asia','',''),(455,'T9','001','001','001',1,1,0,0,0,'2025-04-08 18:12:47','','','','E','N',0,0,0,0,'Asia','',''),(456,'T9','001','001','001',1,1,0,0,0,'2025-04-08 18:13:38','','','','E','N',0,0,0,0,'Asia','',''),(457,'T9','001','001','001',1,1,0,0,0,'2025-04-08 18:14:52','','','','E','N',0,0,0,0,'Asia','',''),(458,'T9','001','001','001',1,1,0,0,0,'2025-04-12 07:18:46','','','','E','N',0,0,0,0,'Asia','',''),(459,'T9','001','001','001',1,1,0,0,0,'2025-04-12 09:52:13','','','','E','N',0,0,0,0,'Asia','',''),(460,'T9','001','001','001',1,1,0,0,0,'2025-04-12 14:19:31','','','','E','N',0,0,0,0,'Asia','',''),(461,'T9','001','001','001',1,1,0,0,0,'2025-04-12 14:40:59','','','','E','N',0,0,0,0,'Asia','',''),(462,'T9','001','001','001',1,1,0,0,0,'2025-04-12 19:34:51','','','','E','N',0,0,0,0,'Asia','',''),(463,'T9','001','001','001',1,1,0,0,0,'2025-04-12 19:58:59','','','','E','N',0,0,0,0,'Asia','',''),(464,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:18:23','','','','E','N',0,0,0,0,'Asia','',''),(465,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:19:48','','','','E','N',0,0,0,0,'Asia','',''),(466,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:22:11','','','','E','N',0,0,0,0,'Asia','',''),(467,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:23:30','','','','E','N',0,0,0,0,'Asia','',''),(468,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:27:34','','','','E','N',0,0,0,0,'Asia','',''),(469,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:29:43','','','','E','N',0,0,0,0,'Asia','',''),(470,'T9','001','001','001',1,1,0,0,0,'2025-04-12 21:33:38','','','','E','Y',0,0,0,0,'Asia','',''),(471,'T1','001','','001',1,0,1,0,0,'2025-04-12 21:36:07','','','','E','Y',0,0,0,0,'Asia','','');
/*!40000 ALTER TABLE `table_checkin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terminal`
--

DROP TABLE IF EXISTS `terminal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terminal` (
  `id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terminal`
--

LOCK TABLES `terminal` WRITE;
/*!40000 ALTER TABLE `terminal` DISABLE KEYS */;
/*!40000 ALTER TABLE `terminal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-13  1:13:58

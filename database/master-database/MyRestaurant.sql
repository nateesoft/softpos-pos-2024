-- MySQL dump 10.13  Distrib 8.4.0, for Linux (x86_64)
--
-- Host: localhost    Database: MyRestaurant
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
-- Table structure for table `accost`
--

DROP TABLE IF EXISTS `accost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accost` (
  `AcCostNo` varchar(10) NOT NULL DEFAULT '',
  `AcCostGroup` varchar(4) DEFAULT NULL,
  `AcCostName` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`AcCostNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accost`
--

LOCK TABLES `accost` WRITE;
/*!40000 ALTER TABLE `accost` DISABLE KEYS */;
/*!40000 ALTER TABLE `accost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accr`
--

DROP TABLE IF EXISTS `accr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accr` (
  `ArNo` varchar(15) NOT NULL DEFAULT '',
  `ArDate` date DEFAULT NULL,
  `ArCode` varchar(10) DEFAULT NULL,
  `ArTotal` float(10,2) DEFAULT NULL,
  `ArVat` float(10,2) DEFAULT NULL,
  `ArDisc` float(10,2) DEFAULT NULL,
  `ArVatMon` float(10,2) DEFAULT NULL,
  `ArAccNo` varchar(6) DEFAULT NULL,
  `ArMark` char(1) NOT NULL DEFAULT 'N',
  `ArNet` float(10,2) DEFAULT NULL,
  `ArAmount` float(10,2) DEFAULT NULL,
  `ArCr` int unsigned DEFAULT NULL,
  `arDue` date DEFAULT NULL,
  `ArSale` varchar(4) DEFAULT NULL,
  `ArRemark` varchar(50) DEFAULT NULL,
  `ArPayType` char(1) DEFAULT NULL,
  `ArDocBill` varchar(12) DEFAULT NULL,
  `ArDocPay` varchar(12) DEFAULT NULL,
  `ArBank` varchar(6) DEFAULT NULL,
  `ArChqNo` varchar(20) DEFAULT NULL,
  `ArChqDate` date DEFAULT NULL,
  `ArAmtPay` float(10,2) DEFAULT NULL,
  `ArAmtCr` float(10,2) DEFAULT NULL,
  `ArBDate` date DEFAULT NULL,
  `ArPDate` date DEFAULT NULL,
  `ArFlage` char(1) NOT NULL DEFAULT 'N',
  `ArInvNo` varchar(12) DEFAULT NULL,
  `ArBran` char(3) DEFAULT NULL,
  `ArBranPay` char(3) DEFAULT NULL,
  `ArUserPay` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accr`
--

LOCK TABLES `accr` WRITE;
/*!40000 ALTER TABLE `accr` DISABLE KEYS */;
/*!40000 ALTER TABLE `accr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adjstock`
--

DROP TABLE IF EXISTS `adjstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adjstock` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) NOT NULL DEFAULT '',
  `R_OnHand` float(10,3) NOT NULL DEFAULT '0.000',
  `R_InHand` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Adj` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Remark` varchar(30) DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Pack` int DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  `R_Sqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adjstock`
--

LOCK TABLES `adjstock` WRITE;
/*!40000 ALTER TABLE `adjstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `adjstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `adjstock_copy`
--

DROP TABLE IF EXISTS `adjstock_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adjstock_copy` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) NOT NULL DEFAULT '',
  `R_OnHand` float(10,3) NOT NULL DEFAULT '0.000',
  `R_InHand` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Adj` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Remark` varchar(30) DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Pack` int DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  `R_Sqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adjstock_copy`
--

LOCK TABLES `adjstock_copy` WRITE;
/*!40000 ALTER TABLE `adjstock_copy` DISABLE KEYS */;
/*!40000 ALTER TABLE `adjstock_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `argroup`
--

DROP TABLE IF EXISTS `argroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `argroup` (
  `UserName` char(15) NOT NULL DEFAULT '0',
  `Access0` char(1) NOT NULL DEFAULT 'N',
  `Access1` char(1) NOT NULL DEFAULT 'N',
  `Access2` char(1) NOT NULL DEFAULT 'N',
  `Access3` char(1) NOT NULL DEFAULT 'N',
  `Access4` char(1) NOT NULL DEFAULT 'N',
  `Access5` char(1) NOT NULL DEFAULT 'N',
  `Access6` char(1) NOT NULL DEFAULT 'N',
  `Access7` char(1) NOT NULL DEFAULT 'N',
  `Access8` char(1) NOT NULL DEFAULT 'N',
  `Access9` char(1) NOT NULL DEFAULT 'N',
  `Access10` char(1) NOT NULL DEFAULT 'N',
  `Access11` char(1) NOT NULL DEFAULT 'N',
  `Access12` char(1) NOT NULL DEFAULT 'N',
  `Access13` char(1) NOT NULL DEFAULT 'N',
  `Access14` char(1) NOT NULL DEFAULT 'N',
  `Access15` char(1) NOT NULL DEFAULT 'N',
  `Access16` char(1) NOT NULL DEFAULT 'N',
  `Access17` char(1) NOT NULL DEFAULT 'N',
  `Access18` char(1) NOT NULL DEFAULT 'N',
  `Access19` char(1) NOT NULL DEFAULT 'N',
  `Access20` char(1) NOT NULL DEFAULT 'N',
  `Access21` char(1) NOT NULL DEFAULT 'N',
  `Access22` char(1) NOT NULL DEFAULT 'N',
  `Access23` char(1) NOT NULL DEFAULT 'N',
  `Access24` char(1) NOT NULL DEFAULT 'N',
  `Access25` char(1) NOT NULL DEFAULT 'N',
  `Access26` char(1) NOT NULL DEFAULT 'N',
  `Access27` char(1) NOT NULL DEFAULT 'N',
  `Access28` char(1) NOT NULL DEFAULT 'N',
  `Access29` char(1) NOT NULL DEFAULT 'N',
  `Access30` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `argroup`
--

LOCK TABLES `argroup` WRITE;
/*!40000 ALTER TABLE `argroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `argroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `armenu`
--

DROP TABLE IF EXISTS `armenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armenu` (
  `MGroup` varchar(10) NOT NULL DEFAULT '0',
  `MCode` varchar(20) NOT NULL DEFAULT '',
  `MDesc` varchar(80) NOT NULL DEFAULT '',
  `OnAct` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armenu`
--

LOCK TABLES `armenu` WRITE;
/*!40000 ALTER TABLE `armenu` DISABLE KEYS */;
/*!40000 ALTER TABLE `armenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `aruser`
--

DROP TABLE IF EXISTS `aruser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `aruser` (
  `UserName` varchar(6) NOT NULL DEFAULT '0',
  `Password` varchar(20) NOT NULL DEFAULT '',
  `Name` varchar(60) DEFAULT NULL,
  `UserGroup` varchar(15) DEFAULT NULL,
  `OnACT` char(1) NOT NULL DEFAULT 'N',
  `MacNo` char(3) DEFAULT NULL,
  `Access0` char(1) NOT NULL DEFAULT 'N',
  `Access1` char(1) NOT NULL DEFAULT 'N',
  `Access2` char(1) NOT NULL DEFAULT 'N',
  `Access3` char(1) NOT NULL DEFAULT 'N',
  `Access4` char(1) NOT NULL DEFAULT 'N',
  `Access5` char(1) NOT NULL DEFAULT 'N',
  `Access6` char(1) NOT NULL DEFAULT 'N',
  `Access7` char(1) NOT NULL DEFAULT 'N',
  `Access8` char(1) NOT NULL DEFAULT 'N',
  `Access9` char(1) NOT NULL DEFAULT 'N',
  `Access10` char(1) NOT NULL DEFAULT 'N',
  `Access11` char(1) NOT NULL DEFAULT 'N',
  `Access12` char(1) NOT NULL DEFAULT 'N',
  `Access13` char(1) NOT NULL DEFAULT 'N',
  `Access14` char(1) NOT NULL DEFAULT 'N',
  `Access15` char(1) NOT NULL DEFAULT 'N',
  `Access16` char(1) NOT NULL DEFAULT 'N',
  `Access17` char(1) NOT NULL DEFAULT 'N',
  `Access18` char(1) NOT NULL DEFAULT 'N',
  `Access19` char(1) NOT NULL DEFAULT 'N',
  `Access20` char(1) NOT NULL DEFAULT 'N',
  `Access21` char(1) NOT NULL DEFAULT 'N',
  `Access22` char(1) NOT NULL DEFAULT 'N',
  `Access23` char(1) NOT NULL DEFAULT 'N',
  `Access24` char(1) NOT NULL DEFAULT 'N',
  `Access25` char(1) NOT NULL DEFAULT 'N',
  `Access26` char(1) NOT NULL DEFAULT 'N',
  `Access27` char(1) NOT NULL DEFAULT 'N',
  `Access28` char(1) NOT NULL DEFAULT 'N',
  `Access29` char(1) NOT NULL DEFAULT 'N',
  `Access30` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `aruser`
--

LOCK TABLES `aruser` WRITE;
/*!40000 ALTER TABLE `aruser` DISABLE KEYS */;
/*!40000 ALTER TABLE `aruser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balance`
--

DROP TABLE IF EXISTS `balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `balance` (
  `R_Index` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) DEFAULT NULL,
  `Cashier` varchar(50) DEFAULT NULL,
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `FieldName` tinyint unsigned DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(250) DEFAULT NULL,
  `R_Opt3` varchar(250) DEFAULT NULL,
  `R_Opt4` varchar(250) DEFAULT NULL,
  `R_Opt5` varchar(250) DEFAULT NULL,
  `R_Opt6` varchar(250) DEFAULT NULL,
  `R_Opt7` varchar(250) DEFAULT NULL,
  `R_Opt8` varchar(250) DEFAULT NULL,
  `R_Opt9` varchar(250) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_VoidQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_MovePrint` char(1) NOT NULL DEFAULT 'N',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL,
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_PrintItemBill` char(1) DEFAULT NULL,
  `R_CountTime` char(1) DEFAULT NULL,
  `SoneCode` varchar(100) DEFAULT NULL,
  `R_Earn` char(1) NOT NULL DEFAULT 'N',
  `R_EarnNo` varchar(15) DEFAULT NULL,
  `TranType` varchar(10) DEFAULT NULL,
  `PDAPrintCheck` char(1) DEFAULT NULL,
  `PDAEMP` char(15) DEFAULT NULL,
  `R_empName` varchar(50) DEFAULT NULL,
  `R_ServiceAmt` float(13,2) DEFAULT NULL,
  `R_PEName` varchar(150) DEFAULT NULL,
  `R_Indulgent` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balance`
--

LOCK TABLES `balance` WRITE;
/*!40000 ALTER TABLE `balance` DISABLE KEYS */;
/*!40000 ALTER TABLE `balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `balanceset`
--

DROP TABLE IF EXISTS `balanceset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `balanceset` (
  `R_Index` varchar(10) NOT NULL DEFAULT '0',
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(40) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `R_Opt1` varchar(30) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_VoidQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_MovePrint` char(1) NOT NULL DEFAULT 'N',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_MoveItem` char(2) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `balanceset`
--

LOCK TABLES `balanceset` WRITE;
/*!40000 ALTER TABLE `balanceset` DISABLE KEYS */;
/*!40000 ALTER TABLE `balanceset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bankfile`
--

DROP TABLE IF EXISTS `bankfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bankfile` (
  `BCode` char(3) NOT NULL DEFAULT '0',
  `BName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bankfile`
--

LOCK TABLES `bankfile` WRITE;
/*!40000 ALTER TABLE `bankfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `bankfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billar`
--

DROP TABLE IF EXISTS `billar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billar` (
  `Ref_No` varchar(15) NOT NULL DEFAULT '',
  `Ondate` date DEFAULT NULL,
  `ArCode` varchar(4) DEFAULT NULL,
  `Stotal` float(10,2) NOT NULL DEFAULT '0.00',
  `Cash` float(10,2) NOT NULL DEFAULT '0.00',
  `Cupon` float(10,2) NOT NULL DEFAULT '0.00',
  `Credit` float(10,2) NOT NULL DEFAULT '0.00',
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `Fat` char(1) NOT NULL DEFAULT '',
  `UserVoid` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billar`
--

LOCK TABLES `billar` WRITE;
/*!40000 ALTER TABLE `billar` DISABLE KEYS */;
/*!40000 ALTER TABLE `billar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billno`
--

DROP TABLE IF EXISTS `billno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billno` (
  `B_Refno` varchar(8) NOT NULL DEFAULT '0',
  `B_CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ontime` varchar(10) DEFAULT NULL,
  `B_LoginTime` varchar(10) DEFAULT NULL,
  `B_OnDate` date DEFAULT NULL,
  `B_PostDate` date DEFAULT NULL,
  `B_Table` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `B_MacNo` char(3) NOT NULL DEFAULT '',
  `B_Cashier` varchar(6) NOT NULL DEFAULT '',
  `B_Cust` int unsigned NOT NULL DEFAULT '0',
  `B_ETD` char(1) NOT NULL DEFAULT '',
  `B_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Food` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Product` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Service` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_FastDisc` varchar(8) DEFAULT NULL,
  `B_FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_EmpDisc` varchar(8) DEFAULT NULL,
  `B_EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_TrainDisc` varchar(8) DEFAULT NULL,
  `B_TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_MemDisc` varchar(8) DEFAULT NULL,
  `B_MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SubDisc` varchar(8) DEFAULT NULL,
  `B_SubDiscAmt` float(10,2) DEFAULT '0.00',
  `B_SubDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AdjAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_PreDisAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetFood` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetDrink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetProduct` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetNonVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Vat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_PayAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Cash` float(10,2) NOT NULL DEFAULT '0.00',
  `B_GiftVoucher` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Earnest` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ton` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrCode1` varchar(20) DEFAULT NULL,
  `B_CardNo1` varchar(20) DEFAULT NULL,
  `B_AppCode1` varchar(6) DEFAULT NULL,
  `B_CrCharge1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrChargeAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCode` varchar(10) DEFAULT NULL,
  `B_AccrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCr` int unsigned NOT NULL DEFAULT '0',
  `B_MemCode` varchar(20) DEFAULT NULL,
  `B_MemName` varchar(40) DEFAULT NULL,
  `B_MemBegin` date DEFAULT NULL,
  `B_MemEnd` date DEFAULT NULL,
  `B_MemCurSum` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Void` char(1) NOT NULL DEFAULT '-',
  `B_VoidUser` varchar(6) DEFAULT NULL,
  `B_VoidTime` varchar(10) DEFAULT NULL,
  `B_BillCopy` int NOT NULL DEFAULT '0',
  `B_PrnCnt` int unsigned NOT NULL DEFAULT '0',
  `B_PrnTime1` varchar(10) DEFAULT NULL,
  `B_PrnTime2` varchar(10) DEFAULT NULL,
  `B_InvNo` varchar(12) DEFAULT NULL,
  `B_InvType` char(1) DEFAULT NULL,
  `B_Bran` char(3) DEFAULT NULL,
  `B_BranName` varchar(30) DEFAULT NULL,
  `B_Tel` varchar(30) DEFAULT NULL,
  `B_RecTime` varchar(10) DEFAULT NULL,
  `MStamp` varchar(20) DEFAULT NULL,
  `MScore` varchar(20) DEFAULT NULL,
  `CurStamp` varchar(20) DEFAULT NULL,
  `StampRate` varchar(20) DEFAULT NULL,
  `B_ChkBill` char(1) NOT NULL DEFAULT 'N',
  `B_ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `B_CashTime` time NOT NULL DEFAULT '00:00:00',
  `B_WaitTime` time NOT NULL DEFAULT '00:00:00',
  `B_SumScore` float(10,0) NOT NULL DEFAULT '0',
  `B_CrBank` char(3) DEFAULT NULL,
  `B_CrCardAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrCurPoint` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrSumPoint` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Entertain` float(10,2) NOT NULL DEFAULT '0.00',
  `B_VoucherDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_VoucherOver` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetDiff` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SumSetDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_DetailFood` float(10,2) NOT NULL DEFAULT '0.00',
  `B_DetailDrink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_DetailProduct` float(10,2) NOT NULL DEFAULT '0.00',
  `B_KicQue` varchar(5) DEFAULT ' ',
  `B_ROUNDCLOSE` char(1) DEFAULT 'N',
  `R_Opt9` varchar(40) DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(40) DEFAULT NULL,
  `R_Opt3` varchar(40) DEFAULT NULL,
  `R_Opt4` varchar(40) DEFAULT NULL,
  `R_Opt5` varchar(40) DEFAULT NULL,
  `R_Opt6` varchar(40) DEFAULT NULL,
  `R_Opt7` varchar(40) DEFAULT NULL,
  `R_Opt8` varchar(40) DEFAULT NULL,
  `VoidMsg` varchar(30) DEFAULT NULL,
  `B_EarnDocNo` varchar(15) DEFAULT NULL,
  `B_UseEarnNo` varchar(15) DEFAULT NULL,
  `B_UserEntertain` varchar(10) DEFAULT NULL,
  `B_SendOnline` char(1) DEFAULT NULL,
  PRIMARY KEY (`B_MacNo`,`B_Refno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billno`
--

LOCK TABLES `billno` WRITE;
/*!40000 ALTER TABLE `billno` DISABLE KEYS */;
/*!40000 ALTER TABLE `billno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billnocredit`
--

DROP TABLE IF EXISTS `billnocredit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billnocredit` (
  `B_OnDate` date DEFAULT NULL,
  `B_RefNo` varchar(8) DEFAULT NULL,
  `B_MacNo` varchar(5) DEFAULT NULL,
  `B_Cashier` varchar(6) DEFAULT NULL,
  `CrCode` varchar(8) DEFAULT NULL,
  `CardNo` varchar(20) DEFAULT NULL,
  `CrApp` varchar(10) DEFAULT NULL,
  `CrAmt` float(10,2) DEFAULT NULL,
  `B_Void` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billnocredit`
--

LOCK TABLES `billnocredit` WRITE;
/*!40000 ALTER TABLE `billnocredit` DISABLE KEYS */;
/*!40000 ALTER TABLE `billnocredit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billret`
--

DROP TABLE IF EXISTS `billret`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billret` (
  `Ref_No` varchar(12) NOT NULL DEFAULT '',
  `OnDate` date DEFAULT NULL,
  `Stotal` float(10,2) NOT NULL DEFAULT '0.00',
  `Cash` float(10,2) NOT NULL DEFAULT '0.00',
  `Cupon` float(10,2) NOT NULL DEFAULT '0.00',
  `Credit` float(10,2) NOT NULL DEFAULT '0.00',
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `Fat` char(1) NOT NULL DEFAULT 'N',
  `UserVoid` varchar(6) DEFAULT NULL,
  `FromRefNo` varchar(15) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billret`
--

LOCK TABLES `billret` WRITE;
/*!40000 ALTER TABLE `billret` DISABLE KEYS */;
/*!40000 ALTER TABLE `billret` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branch`
--

DROP TABLE IF EXISTS `branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branch` (
  `Code` char(3) NOT NULL DEFAULT 'XXX',
  `Name` varchar(50) NOT NULL DEFAULT 'New Branch',
  `AddressNo` varchar(50) DEFAULT NULL,
  `Locality` varchar(30) DEFAULT NULL,
  `SubProvince` varchar(30) DEFAULT NULL,
  `Province` varchar(30) DEFAULT NULL,
  `Post` varchar(5) DEFAULT NULL,
  `Tel_No` varchar(30) DEFAULT NULL,
  `Fax_No` varchar(30) DEFAULT NULL,
  `E_Mail` varchar(50) DEFAULT NULL,
  `Manager` varchar(50) DEFAULT NULL,
  `Location_Area` char(2) DEFAULT NULL,
  `Ser_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Cou_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Kic_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Tot_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `Charge` float(10,2) NOT NULL DEFAULT '0.00',
  `FlageCost` char(1) NOT NULL DEFAULT 'N',
  `Gp` float(10,2) NOT NULL DEFAULT '0.00',
  `FlageGp` char(1) NOT NULL DEFAULT 'N',
  `Remark` varchar(200) DEFAULT NULL,
  `ArBillNo` float(7,0) NOT NULL DEFAULT '1',
  `EarneatBillNo` float(7,0) NOT NULL DEFAULT '1',
  `ReturnBillNo` float(7,0) NOT NULL DEFAULT '1',
  `PrintAutoSumDate` date DEFAULT NULL,
  `SaveOrder` char(1) NOT NULL DEFAULT 'N',
  `SaveOrderCopy` char(1) NOT NULL DEFAULT 'N',
  `SaveOrderChk` char(1) NOT NULL DEFAULT 'N',
  `KIC1` char(1) NOT NULL DEFAULT 'N',
  `KIC2` char(1) NOT NULL DEFAULT 'N',
  `KIC3` char(1) NOT NULL DEFAULT 'N',
  `KIC4` char(1) NOT NULL DEFAULT 'N',
  `KIC5` char(1) NOT NULL DEFAULT 'N',
  `KIC6` char(1) NOT NULL DEFAULT 'N',
  `KIC7` char(1) NOT NULL DEFAULT 'N',
  `KIC8` char(1) NOT NULL DEFAULT 'N',
  `KIC9` char(1) NOT NULL DEFAULT 'N',
  `SmartCard` char(1) NOT NULL DEFAULT 'N',
  `GetFile` varchar(30) DEFAULT NULL,
  `RetFile` varchar(30) DEFAULT NULL,
  `PointFile` varchar(30) DEFAULT NULL,
  `CntLoop` int unsigned NOT NULL DEFAULT '1',
  `InvNo` float NOT NULL DEFAULT '1',
  `InvCashNo` float NOT NULL DEFAULT '1',
  `InvCash` float NOT NULL DEFAULT '1',
  `InvActive` char(1) NOT NULL DEFAULT 'Y',
  `CreditAct` char(3) DEFAULT NULL,
  `PromotionGP` varchar(30) DEFAULT NULL,
  `LockTime` int NOT NULL DEFAULT '0',
  `KicItemNo` int NOT NULL DEFAULT '0',
  `PT1` varchar(13) DEFAULT NULL,
  `PT2` varchar(13) DEFAULT NULL,
  `PT3` varchar(13) DEFAULT NULL,
  `PT4` varchar(13) DEFAULT NULL,
  `PT5` varchar(13) DEFAULT NULL,
  `PONO` int NOT NULL DEFAULT '1',
  `PrintKicForm` char(1) NOT NULL DEFAULT '1',
  `PrintInvForm` char(1) NOT NULL DEFAULT '1',
  `PSelectStk` char(1) NOT NULL DEFAULT 'P',
  `PStkChk` char(1) NOT NULL DEFAULT 'N',
  `PMinStkChk` char(1) NOT NULL DEFAULT 'N',
  `RoundUpTime` float NOT NULL DEFAULT '0',
  `GiftStatusChk` char(1) NOT NULL DEFAULT 'N',
  `KICCopy1` char(1) NOT NULL DEFAULT '1',
  `KICCopy2` char(1) NOT NULL DEFAULT '1',
  `KICCopy3` char(1) NOT NULL DEFAULT '1',
  `KICCopy4` char(1) NOT NULL DEFAULT '1',
  `KICCopy5` char(1) NOT NULL DEFAULT '1',
  `KICCopy6` char(1) NOT NULL DEFAULT '1',
  `KICCopy7` char(1) NOT NULL DEFAULT '1',
  `KICCopy8` char(1) NOT NULL DEFAULT '1',
  `KICCopy9` char(1) NOT NULL DEFAULT '1',
  `KICChk1` char(1) NOT NULL DEFAULT 'N',
  `KICChk2` char(1) NOT NULL DEFAULT 'N',
  `KICChk3` char(1) NOT NULL DEFAULT 'N',
  `KICChk4` char(1) NOT NULL DEFAULT 'N',
  `KICChk5` char(1) NOT NULL DEFAULT 'N',
  `KICChk6` char(1) NOT NULL DEFAULT 'N',
  `KICChk7` char(1) NOT NULL DEFAULT 'N',
  `KICChk8` char(1) NOT NULL DEFAULT 'N',
  `KICChk9` char(1) NOT NULL DEFAULT 'N',
  `UpdateBranchPoint` char(1) NOT NULL DEFAULT 'Y',
  `KicName1` varchar(15) DEFAULT NULL,
  `KicName2` varchar(15) DEFAULT NULL,
  `KicName3` varchar(15) DEFAULT NULL,
  `KicName4` varchar(15) DEFAULT NULL,
  `KicName5` varchar(15) DEFAULT NULL,
  `KicName6` varchar(15) DEFAULT NULL,
  `KicName7` varchar(15) DEFAULT NULL,
  `KicName8` varchar(15) DEFAULT NULL,
  `KicName9` varchar(15) DEFAULT NULL,
  `KicPrintOnReceipt1` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt2` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt3` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt4` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt5` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt6` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt7` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt8` char(1) NOT NULL DEFAULT 'N',
  `KicPrintOnReceipt9` char(1) NOT NULL DEFAULT 'N',
  `KicQue` int unsigned NOT NULL DEFAULT '0',
  `KIC10` char(1) DEFAULT NULL,
  `KICChk10` char(1) DEFAULT NULL,
  `KicName10` varchar(15) DEFAULT NULL,
  `KicPrintOnReceipt10` char(1) DEFAULT NULL,
  `Kic11` char(1) DEFAULT NULL,
  `Kic12` char(1) DEFAULT NULL,
  `Kic13` char(1) DEFAULT NULL,
  `Kic14` char(1) DEFAULT NULL,
  `Kic15` char(1) DEFAULT NULL,
  `Kic16` char(1) DEFAULT NULL,
  `Kic17` char(1) DEFAULT NULL,
  `Kic18` char(1) DEFAULT NULL,
  `Kic19` char(1) DEFAULT NULL,
  `Kic20` char(1) DEFAULT NULL,
  `KicCopy11` char(1) DEFAULT NULL,
  `KicCopy12` char(1) DEFAULT NULL,
  `KicCopy13` char(1) DEFAULT NULL,
  `KicCopy14` char(1) DEFAULT NULL,
  `KicCopy15` char(1) DEFAULT NULL,
  `KicCopy16` char(1) DEFAULT NULL,
  `KicCopy17` char(1) DEFAULT NULL,
  `KicCopy18` char(1) DEFAULT NULL,
  `KicCopy19` char(1) DEFAULT NULL,
  `KicCopy20` char(1) DEFAULT NULL,
  `KicChk11` char(1) DEFAULT NULL,
  `KicChk12` char(1) DEFAULT NULL,
  `KicChk13` char(1) DEFAULT NULL,
  `KicChk14` char(1) DEFAULT NULL,
  `KicChk15` char(1) DEFAULT NULL,
  `KicChk16` char(1) DEFAULT NULL,
  `KicChk17` char(1) DEFAULT NULL,
  `KicChk18` char(1) DEFAULT NULL,
  `KicChk19` char(1) DEFAULT NULL,
  `KicChk20` char(1) DEFAULT NULL,
  `KicCopy10` char(1) DEFAULT NULL,
  `IMG_HOME_PATH` varchar(100) DEFAULT '/images/1.jpg',
  `INVHead` char(3) DEFAULT NULL,
  `INVCheckAuto` char(1) DEFAULT NULL,
  `AS400BranchCode` char(4) DEFAULT NULL,
  `SendLostToBor` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branch`
--

LOCK TABLES `branch` WRITE;
/*!40000 ALTER TABLE `branch` DISABLE KEYS */;
INSERT INTO `branch` VALUES ('001','HENG GETSU','','','','','','','','','','01',0.00,0.00,0.00,0.00,0.00,0.00,'N',0.00,'N',NULL,5,0,5,'2010-06-04','N','1','N','T','T','N','N','N','N','N','N','T','N',NULL,NULL,NULL,1,1,0,1,'Y',NULL,NULL,0,41,'1001','','','','',484,'4','1','P','N','N',0,'N','3','3','3','3','3','3','3','3','3','0','0','0','0','0','0','0','0','0','N',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'N','N','N','N','N','N','N','N','N',179,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'D:/NetbeansProjects/SOFTSET/img/small_avt.jpg',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `branfile`
--

DROP TABLE IF EXISTS `branfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `branfile` (
  `Code` char(3) NOT NULL DEFAULT 'XXX',
  `Name` char(50) NOT NULL DEFAULT 'New Branch',
  `AddressNo` char(50) DEFAULT NULL,
  `Locality` char(30) DEFAULT NULL,
  `SubProvince` char(30) DEFAULT NULL,
  `Province` char(30) DEFAULT NULL,
  `Post` char(5) DEFAULT NULL,
  `Tel_No` char(30) DEFAULT NULL,
  `Fax_No` char(30) DEFAULT NULL,
  `E_Mail` char(50) DEFAULT NULL,
  `Manager` char(50) DEFAULT NULL,
  `Location_Area` char(2) DEFAULT NULL,
  `Ser_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Cou_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Kic_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Tot_Area` float(10,2) NOT NULL DEFAULT '0.00',
  `Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `Charge` float(10,2) NOT NULL DEFAULT '0.00',
  `FlageCost` char(1) NOT NULL DEFAULT 'N',
  `Gp` float(10,2) NOT NULL DEFAULT '0.00',
  `FlageGp` char(1) NOT NULL DEFAULT 'N',
  `Remark` char(200) DEFAULT NULL,
  `RealIP` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `branfile`
--

LOCK TABLES `branfile` WRITE;
/*!40000 ALTER TABLE `branfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `branfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `budgetsale`
--

DROP TABLE IF EXISTS `budgetsale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `budgetsale` (
  `bg_date` date DEFAULT NULL,
  `bg_eatinamt` float(13,2) DEFAULT NULL,
  `bg_takeawayamt` float(13,2) DEFAULT NULL,
  `bg_eatinbill` int DEFAULT NULL,
  `bg_takeawaybill` int DEFAULT NULL,
  `Branch` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `budgetsale`
--

LOCK TABLES `budgetsale` WRITE;
/*!40000 ALTER TABLE `budgetsale` DISABLE KEYS */;
/*!40000 ALTER TABLE `budgetsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buy`
--

DROP TABLE IF EXISTS `buy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buy` (
  `InvNO` varchar(25) NOT NULL DEFAULT '',
  `ItemNO` int NOT NULL DEFAULT '0',
  `PCODE` varchar(13) NOT NULL DEFAULT '',
  `PSTOCK` char(3) NOT NULL DEFAULT '',
  `PPACK` int NOT NULL DEFAULT '1',
  `PUNIT` varchar(10) NOT NULL DEFAULT '',
  `PQTY` float(13,3) NOT NULL DEFAULT '0.000',
  `PFree` float(13,3) NOT NULL DEFAULT '0.000',
  `PCOST` float(13,2) NOT NULL DEFAULT '0.00',
  `PAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PTotalQty` float(13,3) NOT NULL DEFAULT '0.000',
  `PDISCOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTAMT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `PTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PLASTUPDATE` date DEFAULT NULL,
  `PUSERUPDATE` varchar(6) NOT NULL DEFAULT '',
  `PLASTTIME` varchar(8) NOT NULL DEFAULT '',
  `Post` char(1) NOT NULL DEFAULT 'N',
  `PUnitCost` float(13,4) NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`InvNO`,`ItemNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buy`
--

LOCK TABLES `buy` WRITE;
/*!40000 ALTER TABLE `buy` DISABLE KEYS */;
/*!40000 ALTER TABLE `buy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buyhead`
--

DROP TABLE IF EXISTS `buyhead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyhead` (
  `InvNO` varchar(25) NOT NULL DEFAULT '',
  `PDEPT` char(3) NOT NULL DEFAULT 'XXX',
  `PDATE` date DEFAULT NULL,
  `PONO` varchar(13) DEFAULT NULL,
  `PCREDIT` int NOT NULL DEFAULT '0',
  `PVATTYPE` char(1) NOT NULL DEFAULT 'E',
  `PVENDER` varchar(4) NOT NULL DEFAULT '',
  `PCONTACK` varchar(40) DEFAULT NULL,
  `PUSER` varchar(40) DEFAULT NULL,
  `PSUBTOTAL` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTAMT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `PTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PVAT` float(13,2) NOT NULL DEFAULT '0.00',
  `PVATAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PNETAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PREMARK1` varchar(60) DEFAULT NULL,
  `PREMARK2` varchar(100) NOT NULL DEFAULT '',
  `PLASTUPDATE` date DEFAULT NULL,
  `PLASTTIME` varchar(5) NOT NULL DEFAULT '',
  `PUSerUpdate` varchar(6) NOT NULL DEFAULT 'N',
  `POST` char(1) NOT NULL DEFAULT 'N',
  `POSTDATE` date DEFAULT NULL,
  `POSTTIME` varchar(8) DEFAULT NULL,
  `POSTUSER` varchar(6) DEFAULT NULL,
  `PexciseAmount` float(13,3) NOT NULL DEFAULT '0.000',
  `PsendErp` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`InvNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyhead`
--

LOCK TABLES `buyhead` WRITE;
/*!40000 ALTER TABLE `buyhead` DISABLE KEYS */;
/*!40000 ALTER TABLE `buyhead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cashcard`
--

DROP TABLE IF EXISTS `cashcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cashcard` (
  `CCCode` varchar(20) DEFAULT NULL,
  `CCName` varchar(200) DEFAULT NULL,
  `CCStartDate` date DEFAULT NULL,
  `CCEndDate` date DEFAULT NULL,
  `CCStartTime` time DEFAULT NULL,
  `CCEndTime` time DEFAULT NULL,
  `CCStartAmt` float(10,2) DEFAULT NULL,
  `CCBalanceAmt` float(10,2) DEFAULT NULL,
  `CCActive` char(1) DEFAULT NULL,
  `CCRefno` varchar(13) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cashcard`
--

LOCK TABLES `cashcard` WRITE;
/*!40000 ALTER TABLE `cashcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `cashcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cashier`
--

DROP TABLE IF EXISTS `cashier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cashier` (
  `S_Bran` char(3) NOT NULL DEFAULT '000',
  `T_Date` date DEFAULT NULL,
  `T_CashNo` char(6) NOT NULL DEFAULT '000',
  `DeptSum` float(14,2) NOT NULL DEFAULT '0.00',
  `DSales` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleVat` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleNon` float(14,2) NOT NULL DEFAULT '0.00',
  `SVat` float(14,2) NOT NULL DEFAULT '0.00',
  `PCust` float(6,0) NOT NULL DEFAULT '0',
  `Cust` float(6,0) NOT NULL DEFAULT '0',
  `NCash` float(6,0) NOT NULL DEFAULT '0',
  `Cash` float(14,2) NOT NULL DEFAULT '0.00',
  `NCupon` float(6,0) NOT NULL DEFAULT '0',
  `Cupon` float(14,2) NOT NULL DEFAULT '0.00',
  `NMisc` float(6,0) NOT NULL DEFAULT '0',
  `Misc` float(14,2) NOT NULL DEFAULT '0.00',
  `NEarest` float(6,0) NOT NULL DEFAULT '0',
  `Earest` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidin` float(6,0) NOT NULL DEFAULT '0',
  `Paidin` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidOut` float(6,0) NOT NULL DEFAULT '0',
  `PaidOut` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscB` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscB` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoid` float(6,0) NOT NULL DEFAULT '0',
  `Void` float(14,2) NOT NULL DEFAULT '0.00',
  `NRefund` float(6,0) NOT NULL DEFAULT '0',
  `Refund` float(14,2) NOT NULL DEFAULT '0.00',
  `NGenRefund` float(6,0) NOT NULL DEFAULT '0',
  `GenRefund` float(14,2) NOT NULL DEFAULT '0.00',
  `NItemDisc` float(6,0) NOT NULL DEFAULT '0',
  `ItemDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscY` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscY` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDisc` float(6,0) NOT NULL DEFAULT '0',
  `SubDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscS` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscS` float(14,2) NOT NULL DEFAULT '0.00',
  `NCharge` float(6,0) NOT NULL DEFAULT '0',
  `Charge` float(14,2) NOT NULL DEFAULT '0.00',
  `NService` float(6,0) NOT NULL DEFAULT '0',
  `Service` float(14,2) NOT NULL DEFAULT '0.00',
  `NoSales` float(6,0) NOT NULL DEFAULT '0',
  `T_User` char(6) DEFAULT NULL,
  `TMDate` date DEFAULT NULL,
  `NTrain` float(6,0) NOT NULL DEFAULT '0',
  `DiscTrain` float(14,2) NOT NULL DEFAULT '0.00',
  `NDiscCu` float(6,0) NOT NULL DEFAULT '0',
  `DiscCu` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscPro` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscDayEnd` float(14,2) NOT NULL DEFAULT '0.00',
  `NEatin` float(6,0) NOT NULL DEFAULT '0',
  `Eatin` float(14,2) NOT NULL DEFAULT '0.00',
  `NTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `TakeAway` float(14,2) NOT NULL DEFAULT '0.00',
  `NDelivery` float(6,0) NOT NULL DEFAULT '0',
  `Delivery` float(14,2) NOT NULL DEFAULT '0.00',
  `NPinto` float(6,0) NOT NULL DEFAULT '0',
  `Pinto` float(14,2) NOT NULL DEFAULT '0.00',
  `NWhole` float(6,0) NOT NULL DEFAULT '0',
  `Whole` float(14,2) NOT NULL DEFAULT '0.00',
  `NAr` float(6,0) NOT NULL DEFAULT '0',
  `Ar` float(14,2) NOT NULL DEFAULT '0.00',
  `CEatin` float(6,0) NOT NULL DEFAULT '0',
  `CTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `CDelivery` float(6,0) NOT NULL DEFAULT '0',
  `CPinto` float(6,0) NOT NULL DEFAULT '0',
  `CWhole` float(6,0) NOT NULL DEFAULT '0',
  `EatinNet` float(14,2) NOT NULL DEFAULT '0.00',
  `TakeAWayNet` float(14,2) NOT NULL DEFAULT '0.00',
  `DeliveryNet` float(14,2) NOT NULL DEFAULT '0.00',
  `PintoNet` float(14,2) NOT NULL DEFAULT '0.00',
  `WholeNet` float(14,2) NOT NULL DEFAULT '0.00',
  `NEntertain` float(6,0) NOT NULL DEFAULT '0',
  `Entertain` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoucher` float(6,0) NOT NULL DEFAULT '0',
  `Voucher` float(14,2) NOT NULL DEFAULT '0.00',
  `NetDiff` float(14,2) NOT NULL DEFAULT '0.00',
  `SetDiscCnt` float(6,0) NOT NULL DEFAULT '0',
  `SetDiscAmt` float(14,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cashier`
--

LOCK TABLES `cashier` WRITE;
/*!40000 ALTER TABLE `cashier` DISABLE KEYS */;
/*!40000 ALTER TABLE `cashier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cbillno`
--

DROP TABLE IF EXISTS `cbillno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cbillno` (
  `B_Refno` char(8) NOT NULL DEFAULT '0',
  `B_CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ontime` char(10) DEFAULT NULL,
  `B_OnDate` date DEFAULT NULL,
  `B_PostDate` date DEFAULT NULL,
  `B_Table` char(5) NOT NULL DEFAULT '',
  `B_MacNo` char(3) NOT NULL DEFAULT '',
  `B_Cashier` char(6) NOT NULL DEFAULT '',
  `B_Cust` int unsigned NOT NULL DEFAULT '0',
  `B_ETD` char(1) NOT NULL DEFAULT '',
  `B_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Food` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Product` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Service` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_FastDisc` char(8) DEFAULT NULL,
  `B_FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_EmpDisc` char(8) DEFAULT NULL,
  `B_EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_TrainDisc` char(8) DEFAULT NULL,
  `B_TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_MemDisc` char(8) DEFAULT NULL,
  `B_MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SubDisc` char(8) DEFAULT NULL,
  `B_SubDiscAmt` float(10,2) DEFAULT '0.00',
  `B_SubDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AdjAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetFood` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetDrink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetProduct` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetNonVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Vat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_PayAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Cash` float(10,2) NOT NULL DEFAULT '0.00',
  `B_GiftVoucher` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Earnest` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ton` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrCode1` char(20) DEFAULT NULL,
  `B_CardNo1` char(20) DEFAULT NULL,
  `B_AppCode1` char(6) DEFAULT NULL,
  `B_CrCharge1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrChargeAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCode` char(4) DEFAULT NULL,
  `B_AccrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCr` int unsigned NOT NULL DEFAULT '0',
  `B_MemCode` char(20) DEFAULT NULL,
  `B_MemName` char(40) DEFAULT NULL,
  `B_MemBegin` date DEFAULT NULL,
  `B_MemEnd` date DEFAULT NULL,
  `B_MemCurSum` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Void` char(1) NOT NULL DEFAULT '-',
  `B_VoidUser` char(6) DEFAULT NULL,
  `B_VoidTime` char(10) DEFAULT NULL,
  `B_BillCopy` int NOT NULL DEFAULT '0',
  `B_PrnCnt` int unsigned NOT NULL DEFAULT '0',
  `B_PrnTime1` char(10) DEFAULT NULL,
  `B_PrnTime2` char(10) DEFAULT NULL,
  PRIMARY KEY (`B_MacNo`,`B_Refno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cbillno`
--

LOCK TABLES `cbillno` WRITE;
/*!40000 ALTER TABLE `cbillno` DISABLE KEYS */;
/*!40000 ALTER TABLE `cbillno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `charge`
--

DROP TABLE IF EXISTS `charge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `charge` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Remark` varchar(30) DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `charge`
--

LOCK TABLES `charge` WRITE;
/*!40000 ALTER TABLE `charge` DISABLE KEYS */;
/*!40000 ALTER TABLE `charge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chargeto`
--

DROP TABLE IF EXISTS `chargeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chargeto` (
  `Charge_Code` char(3) NOT NULL DEFAULT '0',
  `Charge_Name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chargeto`
--

LOCK TABLES `chargeto` WRITE;
/*!40000 ALTER TABLE `chargeto` DISABLE KEYS */;
/*!40000 ALTER TABLE `chargeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkcard`
--

DROP TABLE IF EXISTS `checkcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkcard` (
  `CCode` varchar(16) NOT NULL DEFAULT '',
  `CDigit` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`CCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkcard`
--

LOCK TABLES `checkcard` WRITE;
/*!40000 ALTER TABLE `checkcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clrbalance`
--

DROP TABLE IF EXISTS `clrbalance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clrbalance` (
  `R_Index` varchar(10) NOT NULL DEFAULT '0',
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(40) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `R_Opt1` varchar(30) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clrbalance`
--

LOCK TABLES `clrbalance` WRITE;
/*!40000 ALTER TABLE `clrbalance` DISABLE KEYS */;
/*!40000 ALTER TABLE `clrbalance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `Code` char(4) DEFAULT NULL,
  `Name` varchar(60) NOT NULL DEFAULT '',
  `Address` varchar(50) DEFAULT NULL,
  `Subprovince` varchar(30) DEFAULT NULL,
  `Province` varchar(30) DEFAULT NULL,
  `City` varchar(30) DEFAULT NULL,
  `POST` varchar(5) DEFAULT NULL,
  `Tel` varchar(30) DEFAULT NULL,
  `Fax` varchar(30) DEFAULT NULL,
  `emailaddress` varchar(50) DEFAULT NULL,
  `Tax` varchar(20) DEFAULT NULL,
  `Accterm` date DEFAULT NULL,
  `PosStock` char(3) NOT NULL DEFAULT 'XX',
  `RecCost` char(1) NOT NULL DEFAULT '1',
  `TriCost` char(1) NOT NULL DEFAULT '1',
  `TroCost` char(1) NOT NULL DEFAULT '1',
  `LosCost` char(1) NOT NULL DEFAULT '1',
  `FreCost` char(1) NOT NULL DEFAULT '1',
  `Tri_Cost` char(1) NOT NULL DEFAULT '1',
  `AdjCost` char(1) NOT NULL DEFAULT '1',
  `RecAvgCost` char(1) NOT NULL DEFAULT 'N',
  `TriAvgCost` char(1) NOT NULL DEFAULT 'N',
  `TroAvgCost` char(1) NOT NULL DEFAULT 'N',
  `LosAvgCost` char(1) NOT NULL DEFAULT 'N',
  `FreAvgCost` char(1) NOT NULL DEFAULT 'N',
  `Tri_AvgCost` char(1) NOT NULL DEFAULT 'N',
  `AdjAvgCost` char(1) NOT NULL DEFAULT 'N',
  `UsePSetCost` char(1) NOT NULL DEFAULT 'N',
  `UsePIngredentCost` char(1) NOT NULL DEFAULT 'N',
  `Head1` varchar(20) DEFAULT NULL,
  `Head2` varchar(20) DEFAULT NULL,
  `Head3` varchar(20) DEFAULT NULL,
  `Head4` varchar(20) DEFAULT NULL,
  `pdahead1` varchar(15) DEFAULT NULL,
  `pdahead2` varchar(15) DEFAULT NULL,
  `displaytextinfo` varchar(100) DEFAULT NULL,
  `pdahead3` varchar(20) NOT NULL DEFAULT 'pdahead3',
  `pdahead4` varchar(20) NOT NULL DEFAULT 'pdahead4',
  `FloorTab1` varchar(50) DEFAULT NULL,
  `FloorTab2` varchar(50) DEFAULT NULL,
  `FloorTab3` varchar(50) DEFAULT NULL,
  `FloorTab4` varchar(50) DEFAULT NULL,
  `FloorTab5` varchar(50) DEFAULT NULL,
  `FloorTab6` varchar(50) DEFAULT NULL,
  `FloorTab7` varchar(20) DEFAULT NULL,
  `Head5` varchar(20) DEFAULT NULL,
  `Head6` varchar(20) DEFAULT NULL,
  `Head7` varchar(20) DEFAULT NULL,
  `Head8` varchar(20) DEFAULT NULL,
  `Head9` varchar(20) DEFAULT NULL,
  `BackUpPath` varchar(150) DEFAULT NULL,
  `DataPath` varchar(150) DEFAULT NULL,
  `ServerPath` varchar(150) DEFAULT NULL,
  `SendERP` char(1) NOT NULL DEFAULT 'N',
  `UserID` char(30) DEFAULT NULL,
  `Password` char(30) DEFAULT NULL,
  `DataSource` char(30) DEFAULT NULL,
  `Catalog` char(30) DEFAULT NULL,
  `OptHead1` varchar(20) DEFAULT NULL,
  `OptHead2` varchar(20) DEFAULT NULL,
  `OptHead3` varchar(20) DEFAULT NULL,
  `OptHead4` varchar(20) DEFAULT NULL,
  `OptHead5` varchar(20) DEFAULT NULL,
  `OptHead6` varchar(20) DEFAULT NULL
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
-- Table structure for table `costfile`
--

DROP TABLE IF EXISTS `costfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `costfile` (
  `BPCode` char(13) NOT NULL DEFAULT '0',
  `BAmt0` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt1` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt2` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt3` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt4` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt5` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt6` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt7` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt8` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt9` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt10` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt11` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt12` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt13` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt14` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt15` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt16` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt17` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt18` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt19` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt20` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt21` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt22` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt23` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt24` float(12,4) NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`BPCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `costfile`
--

LOCK TABLES `costfile` WRITE;
/*!40000 ALTER TABLE `costfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `costfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `costfile_copy`
--

DROP TABLE IF EXISTS `costfile_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `costfile_copy` (
  `BPCode` char(13) NOT NULL DEFAULT '0',
  `BAmt0` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt1` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt2` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt3` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt4` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt5` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt6` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt7` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt8` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt9` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt10` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt11` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt12` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt13` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt14` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt15` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt16` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt17` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt18` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt19` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt20` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt21` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt22` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt23` float(12,4) NOT NULL DEFAULT '0.0000',
  `BAmt24` float(12,4) NOT NULL DEFAULT '0.0000',
  PRIMARY KEY (`BPCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `costfile_copy`
--

LOCK TABLES `costfile_copy` WRITE;
/*!40000 ALTER TABLE `costfile_copy` DISABLE KEYS */;
/*!40000 ALTER TABLE `costfile_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creditfile`
--

DROP TABLE IF EXISTS `creditfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `creditfile` (
  `CrCode` varchar(9) NOT NULL DEFAULT '',
  `CrBank` char(3) NOT NULL DEFAULT '',
  `CrName` varchar(30) DEFAULT NULL,
  `CrGetCardNo` char(1) NOT NULL DEFAULT 'N',
  `CrCharge` float(10,2) NOT NULL DEFAULT '0.00',
  `CrRedule` float(10,2) NOT NULL DEFAULT '0.00',
  `CrList` varchar(50) DEFAULT NULL,
  `CrMemScore` float(10,0) NOT NULL DEFAULT '1',
  PRIMARY KEY (`CrCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creditfile`
--

LOCK TABLES `creditfile` WRITE;
/*!40000 ALTER TABLE `creditfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `creditfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ct_sale`
--

DROP TABLE IF EXISTS `ct_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_sale` (
  `R_Index` char(20) NOT NULL DEFAULT '0',
  `R_Refno` char(8) NOT NULL DEFAULT '',
  `R_Table` char(5) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `MacNo` char(3) NOT NULL DEFAULT '',
  `Cashier` char(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` char(13) NOT NULL DEFAULT '',
  `R_PName` char(40) DEFAULT NULL,
  `R_Unit` char(10) DEFAULT NULL,
  `R_Group` char(4) DEFAULT NULL,
  `R_Status` char(4) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,2) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Total` float(10,2) DEFAULT NULL,
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,2) DEFAULT NULL,
  `R_PrBath` float(10,2) DEFAULT NULL,
  `R_PrAmt` float(10,2) DEFAULT NULL,
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_PrCuQuan` int unsigned DEFAULT NULL,
  `R_PrCuAmt` float(10,2) DEFAULT NULL,
  `R_Redule` char(3) DEFAULT NULL,
  `R_DiscBath` float(12,6) DEFAULT NULL,
  `R_PrAdj` float(10,2) DEFAULT NULL,
  `R_NetTotal` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Refund` char(1) NOT NULL DEFAULT '-',
  `R_Void` char(1) NOT NULL DEFAULT '-',
  `R_VoidUser` char(6) DEFAULT NULL,
  `R_VoidTime` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_sale`
--

LOCK TABLES `ct_sale` WRITE;
/*!40000 ALTER TABLE `ct_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `ct_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cupon`
--

DROP TABLE IF EXISTS `cupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cupon` (
  `CuCode` char(3) NOT NULL DEFAULT '',
  `CuName` varchar(50) NOT NULL DEFAULT '',
  `CuBegin` date DEFAULT NULL,
  `CuEnd` date DEFAULT NULL,
  `CuStrDay` varchar(28) NOT NULL DEFAULT '',
  `CuType` char(1) NOT NULL DEFAULT 'C',
  `CuADisc` varchar(8) NOT NULL DEFAULT '0',
  `CuADiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `CuBDisc` varchar(8) NOT NULL DEFAULT '0',
  `CuBDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `CuPLUList` varchar(240) DEFAULT NULL,
  `CuPLU1` varchar(13) DEFAULT NULL,
  `CuPLU2` varchar(13) DEFAULT NULL,
  `CuPLU3` varchar(13) DEFAULT NULL,
  `CuPLU4` varchar(13) DEFAULT NULL,
  `CuPLU5` varchar(13) DEFAULT NULL,
  `CuPLU6` varchar(13) DEFAULT NULL,
  `CuPLU7` varchar(13) DEFAULT NULL,
  `CuPLU8` varchar(13) DEFAULT NULL,
  `CuPLU9` varchar(13) DEFAULT NULL,
  `CuPLU10` varchar(13) DEFAULT NULL,
  `CuDisc` float(10,2) NOT NULL DEFAULT '0.00',
  `CuDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `ChkMember` char(1) NOT NULL DEFAULT 'N',
  `CuDisc2` float(10,2) NOT NULL DEFAULT '0.00',
  `CuDiscBath2` float(10,2) NOT NULL DEFAULT '0.00',
  `CuDisc3` float(10,2) NOT NULL DEFAULT '0.00',
  `CuDiscBath3` float(10,2) NOT NULL DEFAULT '0.00',
  `CuDisc1` float(10,2) DEFAULT NULL,
  `CuDiscBath1` float(10,2) DEFAULT NULL,
  `CuSelectDisc` char(1) DEFAULT NULL,
  `CuEDiscount` float(10,2) DEFAULT NULL,
  `CuEPayment` float(10,2) DEFAULT NULL,
  `CuEntertainFlag` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cupon`
--

LOCK TABLES `cupon` WRITE;
/*!40000 ALTER TABLE `cupon` DISABLE KEYS */;
INSERT INTO `cupon` VALUES ('002','Entertain MD Jeffer','2016-04-12','2016-04-12',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,100.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('003','Discount Facebook Share 516-','2016-05-05','2016-05-08',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,516.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('001','Entertain MC 600-','2016-03-31','2016-04-12',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,600.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('005','Discount 10% For 400.-','2016-09-01','2016-10-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('006','Discount 10% Newbranch','2016-12-23','2016-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('007','Discount 80- NewBranch','2016-12-23','2016-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,80.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('008','Discount 100- For500 Up','2016-12-30','2017-03-15',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,100.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('009','Discount 10% For 400-Up','2016-12-30','2017-03-15',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('111','ProTrueClassic 10%','2017-03-16','2018-02-28',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('112','ProMasterCard 49 ºÒ·','2017-06-01','2017-08-15',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,49.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('114','Discount KBANK 10%','2018-01-15','2019-01-14',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('119','Cupon Top 20 ºÒ·','2019-07-10','2019-08-10',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,20.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('119','Cupon Top 20 ºÒ·','2019-07-10','2019-08-10',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,20.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('120','RBS CHINESE','2020-01-13','2020-02-15',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0.00,20.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('123','Delivery 10%','2021-06-16','2021-08-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('124','ÊèÇ¹Å´ True 10%','2021-08-11','2021-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('129','ÊèÇ¹Å´ ¾¹Ñ¡§Ò¹ 10% àÁ×èÍ·Ò¹¤Ãº 300','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('128','ÊèÇ¹Å´ ¹Ã./¹È. 10% àÁ×èÍ·Ò¹¤Ãº 200 ºÒ·','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('129','ÊèÇ¹Å´ ¾¹Ñ¡§Ò¹ 10% àÁ×èÍ·Ò¹¤Ãº 300','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('128','ÊèÇ¹Å´ ¹Ã./¹È. 10% àÁ×èÍ·Ò¹¤Ãº 200 ºÒ·','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('129','ÊèÇ¹Å´ ¾¹Ñ¡§Ò¹ 10% àÁ×èÍ·Ò¹¤Ãº 300','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('128','ÊèÇ¹Å´ ¹Ã./¹È. 10% àÁ×èÍ·Ò¹¤Ãº 200 ºÒ·','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('129','ÊèÇ¹Å´ ¾¹Ñ¡§Ò¹ 10% àÁ×èÍ·Ò¹¤Ãº 300','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('128','ÊèÇ¹Å´ ¹Ã./¹È. 10% àÁ×èÍ·Ò¹¤Ãº 200 ºÒ·','2022-08-10','2022-12-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('130','Citi Bank 10%','2022-10-01','2023-05-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('131','TMB&TBANK 10%','2022-10-01','2023-05-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('130','Citi Bank 10%','2022-10-01','2023-05-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('131','TMB&TBANK 10%','2022-10-01','2023-05-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('130','Citi Bank 10%','2022-10-01','2023-05-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('131','TMB&TBANK 10%','2022-10-01','2023-05-31',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL),('200','ÊèÇ¹Å´ True/Dtac 10%','2023-06-16','2023-11-30',',Sun,Mon,Tue,Wed,Thu,Fri,Sat','B','0',0.00,'0',0.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10.00,0.00,'N',0.00,0.00,0.00,0.00,0.00,0.00,'1',0.00,0.00,NULL);
/*!40000 ALTER TABLE `cupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuponlist`
--

DROP TABLE IF EXISTS `cuponlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuponlist` (
  `CuCode` char(3) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuponlist`
--

LOCK TABLES `cuponlist` WRITE;
/*!40000 ALTER TABLE `cuponlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuponlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuponqty`
--

DROP TABLE IF EXISTS `cuponqty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuponqty` (
  `CCode` varchar(20) NOT NULL DEFAULT '',
  `CTable` varchar(30) NOT NULL DEFAULT '',
  `CQty` int DEFAULT NULL,
  PRIMARY KEY (`CCode`,`CTable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuponqty`
--

LOCK TABLES `cuponqty` WRITE;
/*!40000 ALTER TABLE `cuponqty` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuponqty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custar_billno`
--

DROP TABLE IF EXISTS `custar_billno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custar_billno` (
  `id` int(10) unsigned zerofill DEFAULT NULL,
  `B_SPCode` varchar(20) DEFAULT NULL,
  `B_StartDate` date DEFAULT NULL,
  `B_OnDate` date DEFAULT NULL,
  `B_DueDate` date DEFAULT NULL,
  `B_PayAmt` float(13,2) DEFAULT NULL,
  `B_Interest` float(13,2) DEFAULT NULL,
  `B_USER` char(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custar_billno`
--

LOCK TABLES `custar_billno` WRITE;
/*!40000 ALTER TABLE `custar_billno` DISABLE KEYS */;
/*!40000 ALTER TABLE `custar_billno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custarrear`
--

DROP TABLE IF EXISTS `custarrear`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custarrear` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `S_SPCode` varchar(20) NOT NULL DEFAULT '',
  `S_StartDate` date DEFAULT NULL,
  `S_DueDate` date DEFAULT NULL,
  `S_CreditDay` int unsigned NOT NULL DEFAULT '0',
  `S_CreditAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `S_PayAmt` float(13,2) DEFAULT '0.00',
  `S_UnpaidAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `S_Interest` float(13,2) DEFAULT '0.00',
  `S_MarkFlag` char(1) NOT NULL DEFAULT 'N',
  `S_RefNo` varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custarrear`
--

LOCK TABLES `custarrear` WRITE;
/*!40000 ALTER TABLE `custarrear` DISABLE KEYS */;
/*!40000 ALTER TABLE `custarrear` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custcard`
--

DROP TABLE IF EXISTS `custcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custcard` (
  `SP_Code` varchar(20) NOT NULL DEFAULT '',
  `CAmt0` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt0` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt0` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt0` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt1` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt1` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt1` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt1` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt2` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt2` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt2` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt2` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt3` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt3` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt3` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt3` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt4` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt4` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt4` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt4` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt5` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt5` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt5` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt5` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt6` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt6` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt6` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt6` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt7` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt7` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt7` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt7` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt8` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt8` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt8` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt8` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt9` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt9` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt9` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt9` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt10` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt10` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt10` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt10` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt11` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt11` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt11` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt11` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt12` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt12` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt12` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt12` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt13` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt13` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt13` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt13` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt14` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt14` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt14` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt14` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt15` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt15` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt15` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt15` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt16` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt16` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt16` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt16` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt17` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt17` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt17` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt17` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt18` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt18` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt18` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt18` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt19` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt19` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt19` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt19` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt20` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt20` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt20` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt20` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt21` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt21` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt21` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt21` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt22` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt22` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt22` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt22` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt23` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt23` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt23` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt23` float(13,2) NOT NULL DEFAULT '0.00',
  `CAmt24` float(13,2) NOT NULL DEFAULT '0.00',
  `SAmt24` float(13,2) NOT NULL DEFAULT '0.00',
  `PAmt24` float(13,2) NOT NULL DEFAULT '0.00',
  `BAmt24` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custcard`
--

LOCK TABLES `custcard` WRITE;
/*!40000 ALTER TABLE `custcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `custcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custfile`
--

DROP TABLE IF EXISTS `custfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custfile` (
  `sp_code` varchar(4) NOT NULL DEFAULT '',
  `SP_Desc` varchar(80) DEFAULT NULL,
  `Sp_Desc2` varchar(80) DEFAULT NULL,
  `SP_Type` char(2) DEFAULT NULL,
  `sp_Addr1` varchar(80) DEFAULT NULL,
  `sp_Addr2` varchar(80) DEFAULT NULL,
  `SP_Zip` varchar(5) DEFAULT NULL,
  `SP_Contact` varchar(100) DEFAULT NULL,
  `SP_Tel` varchar(50) DEFAULT NULL,
  `SP_Fax` varchar(50) DEFAULT NULL,
  `SP_Remark` varchar(100) DEFAULT NULL,
  `SP_UpdateDate` date DEFAULT NULL,
  `SP_Tax` varchar(15) DEFAULT NULL,
  `SP_CreditDays` int unsigned NOT NULL DEFAULT '0',
  `SP_CrAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `lastdate` date DEFAULT NULL,
  `chqpay` float(10,2) DEFAULT NULL,
  `lastpay` date DEFAULT NULL,
  `sumamt` float(10,2) DEFAULT NULL,
  `contack` varchar(40) DEFAULT NULL,
  `tel` varchar(25) DEFAULT NULL,
  `fax` varchar(25) DEFAULT NULL,
  `remark` varchar(50) DEFAULT NULL,
  `sp_date` date DEFAULT NULL,
  `sp_cr` int unsigned DEFAULT NULL,
  `sp_cramt` float(10,2) DEFAULT NULL,
  `CustTaxID` varchar(150) DEFAULT NULL,
  `Flage` char(1) DEFAULT NULL,
  PRIMARY KEY (`sp_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custfile`
--

LOCK TABLES `custfile` WRITE;
/*!40000 ALTER TABLE `custfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `custfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custinfo`
--

DROP TABLE IF EXISTS `custinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custinfo` (
  `SP_Code` varchar(20) NOT NULL DEFAULT '',
  `SP_Index` int unsigned NOT NULL DEFAULT '0',
  `SP_Name` varchar(80) DEFAULT NULL,
  `SP_Pid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`SP_Code`,`SP_Index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custinfo`
--

LOCK TABLES `custinfo` WRITE;
/*!40000 ALTER TABLE `custinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `custinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `sp_code` varchar(10) DEFAULT NULL,
  `sp_Desc` varchar(80) DEFAULT NULL,
  `sp_Addr1` varchar(80) DEFAULT NULL,
  `sp_Addr2` varchar(150) DEFAULT NULL,
  `sp_zip` varchar(5) DEFAULT NULL,
  `tel` varchar(25) DEFAULT NULL,
  `fax` varchar(25) DEFAULT NULL,
  `Contack` varchar(40) DEFAULT NULL,
  `Remark` varchar(50) DEFAULT NULL,
  `Remark2` varchar(50) DEFAULT NULL,
  `Taxid` char(16) DEFAULT NULL,
  `CustBranch` char(40) DEFAULT NULL,
  `CustTaxID` varchar(150) DEFAULT NULL,
  `Flage` char(1) DEFAULT NULL,
  `S_Date` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer2`
--

DROP TABLE IF EXISTS `customer2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer2` (
  `Sp_Code` char(10) DEFAULT NULL,
  `sp_desc` char(80) DEFAULT NULL,
  `sp_addr1` char(80) DEFAULT NULL,
  `sp_addr2` char(80) DEFAULT NULL,
  `sp_zip` char(5) DEFAULT NULL,
  `contack` char(40) DEFAULT NULL,
  `tel` char(25) DEFAULT NULL,
  `fax` char(25) DEFAULT NULL,
  `remark` char(50) DEFAULT NULL,
  `Remark2` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer2`
--

LOCK TABLES `customer2` WRITE;
/*!40000 ALTER TABLE `customer2` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custtran`
--

DROP TABLE IF EXISTS `custtran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custtran` (
  `S_Date` date DEFAULT NULL,
  `S_Time` time NOT NULL DEFAULT '00:00:00',
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `S_SPCode` varchar(20) NOT NULL DEFAULT '',
  `S_SPIndex` int unsigned NOT NULL DEFAULT '0',
  `S_SPName` varchar(80) DEFAULT NULL,
  `S_TranType` char(4) NOT NULL DEFAULT '',
  `S_DocNo` varchar(20) NOT NULL DEFAULT '',
  `S_SaleAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `S_PayAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `S_Term` int unsigned NOT NULL DEFAULT '0',
  `S_User` varchar(10) DEFAULT NULL,
  `S_Void` char(1) NOT NULL DEFAULT '-',
  `S_VoidDate` date DEFAULT NULL,
  `S_VoidTime` time DEFAULT NULL,
  `S_VoidUser` varchar(10) DEFAULT NULL,
  `S_IntAmt` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custtran`
--

LOCK TABLES `custtran` WRITE;
/*!40000 ALTER TABLE `custtran` DISABLE KEYS */;
/*!40000 ALTER TABLE `custtran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `custtype`
--

DROP TABLE IF EXISTS `custtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `custtype` (
  `SP_Type` char(2) NOT NULL DEFAULT '',
  `SP_TypeName` varchar(80) DEFAULT NULL,
  `SP_CrAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `SP_CreditDays` int unsigned NOT NULL DEFAULT '0',
  `SP_Interest` float(10,2) DEFAULT '0.00',
  PRIMARY KEY (`SP_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `custtype`
--

LOCK TABLES `custtype` WRITE;
/*!40000 ALTER TABLE `custtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `custtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dcashcard`
--

DROP TABLE IF EXISTS `dcashcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dcashcard` (
  `S_Bran` char(3) DEFAULT NULL,
  `S_Date` date DEFAULT NULL,
  `TDate` date DEFAULT NULL,
  `TTime` time DEFAULT NULL,
  `TTable` varchar(15) DEFAULT NULL,
  `TMacNo` varchar(10) DEFAULT NULL,
  `TCCCode` varchar(20) DEFAULT NULL,
  `TCCUseAmt` float(10,2) DEFAULT NULL,
  `TCashier` varchar(10) DEFAULT NULL,
  `TRRefNo` varchar(10) DEFAULT NULL,
  `TVoid` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dcashcard`
--

LOCK TABLES `dcashcard` WRITE;
/*!40000 ALTER TABLE `dcashcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `dcashcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dconvert`
--

DROP TABLE IF EXISTS `dconvert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dconvert` (
  `DocNo` varchar(20) NOT NULL DEFAULT '',
  `OrderNo` int NOT NULL DEFAULT '0',
  `FPCode` varchar(16) NOT NULL DEFAULT '',
  `FQty` float(10,3) NOT NULL DEFAULT '0.000',
  `FUnit` varchar(30) DEFAULT NULL,
  `FCost` float(13,2) NOT NULL DEFAULT '0.00',
  `FAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `TPCode` varchar(16) NOT NULL DEFAULT '',
  `TQty` float(10,3) NOT NULL DEFAULT '0.000',
  `TUnit` varchar(30) DEFAULT NULL,
  `TCost` float(13,2) NOT NULL DEFAULT '0.00',
  `TAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `DPost` char(1) NOT NULL DEFAULT 'N',
  `DUser` varchar(20) DEFAULT NULL,
  `DTime` varchar(10) DEFAULT NULL,
  `DEntryDate` date DEFAULT NULL,
  PRIMARY KEY (`DocNo`,`OrderNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dconvert`
--

LOCK TABLES `dconvert` WRITE;
/*!40000 ALTER TABLE `dconvert` DISABLE KEYS */;
/*!40000 ALTER TABLE `dconvert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deletemodified`
--

DROP TABLE IF EXISTS `deletemodified`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `deletemodified` (
  `Date` varchar(15) DEFAULT '0',
  `Branch` varchar(50) DEFAULT '0',
  `Employ` varchar(150) DEFAULT '0',
  `Macno` varchar(20) DEFAULT '0',
  `Billno` varchar(7) DEFAULT '0',
  `TimeOpen` varchar(10) DEFAULT '0',
  `TimeModified` varchar(10) DEFAULT '0',
  `TimeClosed` varchar(10) DEFAULT '0',
  `Item` varchar(5) DEFAULT '0',
  `Price` varchar(20) DEFAULT '0',
  `PCode` varchar(20) DEFAULT '0',
  `PDesc` varchar(250) DEFAULT '0',
  `Reason` varchar(250) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deletemodified`
--

LOCK TABLES `deletemodified` WRITE;
/*!40000 ALTER TABLE `deletemodified` DISABLE KEYS */;
/*!40000 ALTER TABLE `deletemodified` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docno`
--

DROP TABLE IF EXISTS `docno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docno` (
  `FCode` varchar(4) NOT NULL DEFAULT '',
  `Prefix` varchar(4) DEFAULT NULL,
  `CLength` double(2,0) NOT NULL DEFAULT '2',
  `RunNo` double(7,0) NOT NULL DEFAULT '1',
  `DocName` varchar(100) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docno`
--

LOCK TABLES `docno` WRITE;
/*!40000 ALTER TABLE `docno` DISABLE KEYS */;
/*!40000 ALTER TABLE `docno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employ`
--

DROP TABLE IF EXISTS `employ`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employ` (
  `Code` varchar(6) NOT NULL DEFAULT '',
  `Name` varchar(40) NOT NULL DEFAULT '',
  `Salary` float(10,2) NOT NULL DEFAULT '0.00',
  `Position` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employ`
--

LOCK TABLES `employ` WRITE;
/*!40000 ALTER TABLE `employ` DISABLE KEYS */;
/*!40000 ALTER TABLE `employ` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eordering`
--

DROP TABLE IF EXISTS `eordering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eordering` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) NOT NULL DEFAULT '',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Pack` float(13,4) DEFAULT NULL,
  `R_PQty` float(13,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eordering`
--

LOCK TABLES `eordering` WRITE;
/*!40000 ALTER TABLE `eordering` DISABLE KEYS */;
/*!40000 ALTER TABLE `eordering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eorderplusetup`
--

DROP TABLE IF EXISTS `eorderplusetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eorderplusetup` (
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `R_XRecive` float(10,3) DEFAULT '0.000',
  PRIMARY KEY (`PCode`),
  UNIQUE KEY `Porduct_PCode` (`PCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eorderplusetup`
--

LOCK TABLES `eorderplusetup` WRITE;
/*!40000 ALTER TABLE `eorderplusetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `eorderplusetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `factory`
--

DROP TABLE IF EXISTS `factory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `factory` (
  `FactoryCode` char(3) NOT NULL DEFAULT '0',
  `FactoryName` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`FactoryCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `factory`
--

LOCK TABLES `factory` WRITE;
/*!40000 ALTER TABLE `factory` DISABLE KEYS */;
/*!40000 ALTER TABLE `factory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fgload`
--

DROP TABLE IF EXISTS `fgload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fgload` (
  `FGBran` char(3) DEFAULT NULL,
  `FGDocNo` varchar(20) DEFAULT NULL,
  `FGDate` date DEFAULT NULL,
  `FGQue` int DEFAULT NULL,
  `PLUCode` varchar(13) DEFAULT NULL,
  `PLUQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PLUUnit` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fgload`
--

LOCK TABLES `fgload` WRITE;
/*!40000 ALTER TABLE `fgload` DISABLE KEYS */;
/*!40000 ALTER TABLE `fgload` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giftprice`
--

DROP TABLE IF EXISTS `giftprice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giftprice` (
  `PriceCode` char(3) NOT NULL DEFAULT '',
  `PriceAmt` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giftprice`
--

LOCK TABLES `giftprice` WRITE;
/*!40000 ALTER TABLE `giftprice` DISABLE KEYS */;
/*!40000 ALTER TABLE `giftprice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `giftstatus`
--

DROP TABLE IF EXISTS `giftstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `giftstatus` (
  `GCode` varchar(21) NOT NULL DEFAULT '',
  `GNo` varchar(6) NOT NULL DEFAULT '',
  `GStatus` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `giftstatus`
--

LOCK TABLES `giftstatus` WRITE;
/*!40000 ALTER TABLE `giftstatus` DISABLE KEYS */;
/*!40000 ALTER TABLE `giftstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gifttype`
--

DROP TABLE IF EXISTS `gifttype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gifttype` (
  `GTCode` char(4) NOT NULL DEFAULT '',
  `GTName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`GTCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gifttype`
--

LOCK TABLES `gifttype` WRITE;
/*!40000 ALTER TABLE `gifttype` DISABLE KEYS */;
/*!40000 ALTER TABLE `gifttype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gpdetail`
--

DROP TABLE IF EXISTS `gpdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gpdetail` (
  `S_Date` date DEFAULT NULL,
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `P_Type` char(3) NOT NULL DEFAULT '',
  `P_Code` char(3) DEFAULT NULL,
  `P_Name` varchar(30) DEFAULT NULL,
  `P_Gross` float(12,2) NOT NULL DEFAULT '0.00',
  `P_Qty` float(12,2) NOT NULL DEFAULT '0.00',
  `P_Disc` float(12,2) NOT NULL DEFAULT '0.00',
  `P_Net` float(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gpdetail`
--

LOCK TABLES `gpdetail` WRITE;
/*!40000 ALTER TABLE `gpdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `gpdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gpheader`
--

DROP TABLE IF EXISTS `gpheader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gpheader` (
  `S_Date` date DEFAULT NULL,
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `Dept_Sum` float(12,2) NOT NULL DEFAULT '0.00',
  `Normal_Sale` float(12,2) NOT NULL DEFAULT '0.00',
  `Promotion_Sale` float(12,2) NOT NULL DEFAULT '0.00',
  `Normal_Disc` float(12,2) NOT NULL DEFAULT '0.00',
  `Promotion_Disc` float(12,2) NOT NULL DEFAULT '0.00',
  `Net_Sale` float(12,2) NOT NULL DEFAULT '0.00',
  `Normal_Net` float(12,2) NOT NULL DEFAULT '0.00',
  `Promotion_Net` float(12,2) NOT NULL DEFAULT '0.00',
  `Earnest` float(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gpheader`
--

LOCK TABLES `gpheader` WRITE;
/*!40000 ALTER TABLE `gpheader` DISABLE KEYS */;
/*!40000 ALTER TABLE `gpheader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `groupfile`
--

DROP TABLE IF EXISTS `groupfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `groupfile` (
  `GroupCode` varchar(4) NOT NULL DEFAULT '',
  `GroupName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`GroupCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `groupfile`
--

LOCK TABLES `groupfile` WRITE;
/*!40000 ALTER TABLE `groupfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `groupfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hadjstock`
--

DROP TABLE IF EXISTS `hadjstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hadjstock` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Stk` char(3) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  `R_SendBor` varchar(1) DEFAULT 'N',
  `R_SendDate` date DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hadjstock`
--

LOCK TABLES `hadjstock` WRITE;
/*!40000 ALTER TABLE `hadjstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `hadjstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hadjstock_copy`
--

DROP TABLE IF EXISTS `hadjstock_copy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hadjstock_copy` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Stk` char(3) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  `R_SendBor` varchar(1) DEFAULT 'N',
  `R_SendDate` date DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hadjstock_copy`
--

LOCK TABLES `hadjstock_copy` WRITE;
/*!40000 ALTER TABLE `hadjstock_copy` DISABLE KEYS */;
/*!40000 ALTER TABLE `hadjstock_copy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hcharge`
--

DROP TABLE IF EXISTS `hcharge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hcharge` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Bran` char(3) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `SaleCode1` varchar(9) DEFAULT NULL,
  `SaleCode2` varchar(9) DEFAULT NULL,
  `SaleCode3` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hcharge`
--

LOCK TABLES `hcharge` WRITE;
/*!40000 ALTER TABLE `hcharge` DISABLE KEYS */;
/*!40000 ALTER TABLE `hcharge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hconvert`
--

DROP TABLE IF EXISTS `hconvert`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hconvert` (
  `DocNo` varchar(20) NOT NULL DEFAULT '',
  `DocDate` date DEFAULT NULL,
  `DRemark` varchar(50) DEFAULT NULL,
  `DStk` char(2) NOT NULL DEFAULT '',
  `DUser` varchar(20) DEFAULT NULL,
  `DPost` char(1) NOT NULL DEFAULT 'N',
  `DPostUser` varchar(20) DEFAULT NULL,
  `DPostDate` date DEFAULT NULL,
  `DPostTime` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`DocNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hconvert`
--

LOCK TABLES `hconvert` WRITE;
/*!40000 ALTER TABLE `hconvert` DISABLE KEYS */;
/*!40000 ALTER TABLE `hconvert` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headmenu`
--

DROP TABLE IF EXISTS `headmenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headmenu` (
  `BTCode` char(3) DEFAULT NULL,
  `Head1` varchar(15) DEFAULT NULL,
  `Head2` varchar(15) DEFAULT NULL,
  `Head3` varchar(15) DEFAULT NULL,
  `Head4` varchar(15) DEFAULT NULL,
  `pdahead1` varchar(15) DEFAULT NULL,
  `pdahead2` varchar(15) DEFAULT NULL,
  `PosGroupCode` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headmenu`
--

LOCK TABLES `headmenu` WRITE;
/*!40000 ALTER TABLE `headmenu` DISABLE KEYS */;
/*!40000 ALTER TABLE `headmenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heordering`
--

DROP TABLE IF EXISTS `heordering`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `heordering` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_SendDate` date DEFAULT NULL,
  `R_Bran` char(3) NOT NULL DEFAULT '',
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `R_ReciveNo` varchar(15) DEFAULT NULL,
  `R_ReciveDate` date DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heordering`
--

LOCK TABLES `heordering` WRITE;
/*!40000 ALTER TABLE `heordering` DISABLE KEYS */;
/*!40000 ALTER TABLE `heordering` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hot_key`
--

DROP TABLE IF EXISTS `hot_key`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hot_key` (
  `KeyFunc` char(1) NOT NULL DEFAULT '',
  `KeyCode` varchar(13) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hot_key`
--

LOCK TABLES `hot_key` WRITE;
/*!40000 ALTER TABLE `hot_key` DISABLE KEYS */;
/*!40000 ALTER TABLE `hot_key` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hpayment`
--

DROP TABLE IF EXISTS `hpayment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hpayment` (
  `PayNo` varchar(20) NOT NULL DEFAULT '',
  `PayDate` date DEFAULT NULL,
  `CustCode` varchar(10) DEFAULT NULL,
  `Remark` varchar(50) DEFAULT NULL,
  `TotalAmt` float NOT NULL DEFAULT '0',
  `DocNo` varchar(20) DEFAULT NULL,
  `Cash` float(12,2) NOT NULL DEFAULT '0.00',
  `Credit` float(12,2) NOT NULL DEFAULT '0.00',
  `CreditCode` varchar(30) DEFAULT NULL,
  `CreditNo` varchar(20) DEFAULT NULL,
  `Deposit` float(12,2) NOT NULL DEFAULT '0.00',
  `BankDeposit` varchar(30) DEFAULT NULL,
  `AccNoDeposit` varchar(20) DEFAULT NULL,
  `DateDeposit` varchar(10) DEFAULT NULL,
  `Tax` float NOT NULL DEFAULT '0',
  `Chq` float NOT NULL DEFAULT '0',
  `ChqBank` varchar(30) DEFAULT NULL,
  `ChqNo` varchar(20) DEFAULT NULL,
  `ChqDate` varchar(10) DEFAULT NULL,
  `Dif` float NOT NULL DEFAULT '0',
  `Flage` char(1) NOT NULL DEFAULT 'N',
  `InvUser` varchar(20) DEFAULT NULL,
  `PrintOk` char(1) NOT NULL DEFAULT 'N',
  `Void` char(1) NOT NULL DEFAULT 'N',
  `UserVoid` varchar(20) DEFAULT NULL,
  `VoidDate` date DEFAULT NULL,
  `VoidMessage` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hpayment`
--

LOCK TABLES `hpayment` WRITE;
/*!40000 ALTER TABLE `hpayment` DISABLE KEYS */;
/*!40000 ALTER TABLE `hpayment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hproduce`
--

DROP TABLE IF EXISTS `hproduce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hproduce` (
  `R_No` varchar(15) DEFAULT NULL,
  `R_Date` date DEFAULT NULL,
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Bran` char(3) DEFAULT NULL,
  `R_Total` int DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) DEFAULT NULL,
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `SaleCode1` varchar(9) DEFAULT NULL,
  `SaleCode2` varchar(9) DEFAULT NULL,
  `SaleCode3` varchar(9) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hproduce`
--

LOCK TABLES `hproduce` WRITE;
/*!40000 ALTER TABLE `hproduce` DISABLE KEYS */;
/*!40000 ALTER TABLE `hproduce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hprolost`
--

DROP TABLE IF EXISTS `hprolost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hprolost` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hprolost`
--

LOCK TABLES `hprolost` WRITE;
/*!40000 ALTER TABLE `hprolost` DISABLE KEYS */;
/*!40000 ALTER TABLE `hprolost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hprolost2`
--

DROP TABLE IF EXISTS `hprolost2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hprolost2` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hprolost2`
--

LOCK TABLES `hprolost2` WRITE;
/*!40000 ALTER TABLE `hprolost2` DISABLE KEYS */;
/*!40000 ALTER TABLE `hprolost2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hprolost3`
--

DROP TABLE IF EXISTS `hprolost3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hprolost3` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hprolost3`
--

LOCK TABLES `hprolost3` WRITE;
/*!40000 ALTER TABLE `hprolost3` DISABLE KEYS */;
/*!40000 ALTER TABLE `hprolost3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hrecive`
--

DROP TABLE IF EXISTS `hrecive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hrecive` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Bran` char(3) NOT NULL DEFAULT '',
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `R_Order` varchar(15) DEFAULT NULL,
  `R_SendERP` char(1) NOT NULL DEFAULT 'N',
  `ReciveBy` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hrecive`
--

LOCK TABLES `hrecive` WRITE;
/*!40000 ALTER TABLE `hrecive` DISABLE KEYS */;
/*!40000 ALTER TABLE `hrecive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hrecive2`
--

DROP TABLE IF EXISTS `hrecive2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hrecive2` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Bran` char(3) NOT NULL DEFAULT '',
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `R_Order` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hrecive2`
--

LOCK TABLES `hrecive2` WRITE;
/*!40000 ALTER TABLE `hrecive2` DISABLE KEYS */;
/*!40000 ALTER TABLE `hrecive2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hrecive3`
--

DROP TABLE IF EXISTS `hrecive3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hrecive3` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Bran` char(3) NOT NULL DEFAULT '',
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `R_Order` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hrecive3`
--

LOCK TABLES `hrecive3` WRITE;
/*!40000 ALTER TABLE `hrecive3` DISABLE KEYS */;
/*!40000 ALTER TABLE `hrecive3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hsalecr`
--

DROP TABLE IF EXISTS `hsalecr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hsalecr` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hsalecr`
--

LOCK TABLES `hsalecr` WRITE;
/*!40000 ALTER TABLE `hsalecr` DISABLE KEYS */;
/*!40000 ALTER TABLE `hsalecr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `htranin`
--

DROP TABLE IF EXISTS `htranin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `htranin` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Bran` char(3) NOT NULL DEFAULT '',
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  `R_Loadno` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `htranin`
--

LOCK TABLES `htranin` WRITE;
/*!40000 ALTER TABLE `htranin` DISABLE KEYS */;
/*!40000 ALTER TABLE `htranin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `htranout`
--

DROP TABLE IF EXISTS `htranout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `htranout` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_Bran` char(3) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `htranout`
--

LOCK TABLES `htranout` WRITE;
/*!40000 ALTER TABLE `htranout` DISABLE KEYS */;
/*!40000 ALTER TABLE `htranout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `htranstk`
--

DROP TABLE IF EXISTS `htranstk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `htranstk` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` char(50) DEFAULT NULL,
  `R_FromStk` char(3) NOT NULL DEFAULT '',
  `R_ToStk` char(3) NOT NULL DEFAULT '',
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` char(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` char(10) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `htranstk`
--

LOCK TABLES `htranstk` WRITE;
/*!40000 ALTER TABLE `htranstk` DISABLE KEYS */;
/*!40000 ALTER TABLE `htranstk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invcashdoc`
--

DROP TABLE IF EXISTS `invcashdoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invcashdoc` (
  `InvNo` varchar(12) NOT NULL DEFAULT '0',
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `InvDate` date DEFAULT NULL,
  `ArCode` varchar(10) DEFAULT NULL,
  `CustCode` varchar(10) DEFAULT NULL,
  `CustName` varchar(80) DEFAULT NULL,
  `CustAddr1` varchar(80) DEFAULT NULL,
  `CustAddr2` varchar(80) DEFAULT NULL,
  `CustTel` varchar(25) DEFAULT NULL,
  `CustFax` varchar(25) DEFAULT NULL,
  `CustCr` int unsigned NOT NULL DEFAULT '0',
  `Contack` varchar(40) DEFAULT NULL,
  `CrCondition` varchar(30) DEFAULT NULL,
  `MacNo` char(3) NOT NULL DEFAULT '',
  `RegNo` varchar(25) DEFAULT NULL,
  `RefNo` varchar(8) NOT NULL DEFAULT '',
  `OnDate` date DEFAULT NULL,
  `DueDate` date DEFAULT NULL,
  `OnTime` varchar(10) DEFAULT NULL,
  `Cashier` varchar(6) DEFAULT NULL,
  `TotalAmt` float(12,2) NOT NULL DEFAULT '0.00',
  `Service` float(12,0) DEFAULT NULL,
  `Discount` float(12,2) NOT NULL DEFAULT '0.00',
  `Earnest` float(12,2) NOT NULL DEFAULT '0.00',
  `Subtotal` float(12,2) NOT NULL DEFAULT '0.00',
  `Vat` float(12,2) NOT NULL DEFAULT '0.00',
  `Amount` float(12,2) NOT NULL DEFAULT '0.00',
  `CashPay` float(12,2) NOT NULL DEFAULT '0.00',
  `CrPay` float(12,2) NOT NULL DEFAULT '0.00',
  `CrNo` varchar(100) NOT NULL DEFAULT '',
  `Cupon` float(12,2) NOT NULL DEFAULT '0.00',
  `CrTerm` int unsigned NOT NULL DEFAULT '0',
  `InvUser` varchar(6) DEFAULT NULL,
  `PrintOK` char(1) NOT NULL DEFAULT 'N',
  `Void` char(1) NOT NULL DEFAULT 'N',
  `UserVoid` varchar(20) DEFAULT NULL,
  `VoidDate` date DEFAULT NULL,
  `VoidMessage` varchar(30) DEFAULT NULL,
  `Remark` varchar(60) DEFAULT NULL,
  `Remark2` varchar(60) DEFAULT NULL,
  `PONO` varchar(30) DEFAULT NULL,
  `Taxid` char(16) DEFAULT NULL,
  `CustBranch` char(40) DEFAULT NULL,
  `HeadOffice` char(1) DEFAULT NULL,
  `Branch_Id` varchar(10) DEFAULT NULL,
  `LastUpDate` date DEFAULT NULL,
  `CustTaxID` varchar(150) DEFAULT NULL,
  `Flage` char(1) DEFAULT NULL,
  `PMemsum` char(1) DEFAULT NULL,
  `PVatbase` float(10,2) DEFAULT NULL,
  `PExchange` char(1) DEFAULT NULL,
  `PConvert` float(10,2) DEFAULT NULL,
  `PUnitConvert` varchar(1) DEFAULT NULL,
  `PVender2` varchar(50) DEFAULT NULL,
  `PShortDesc` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invcashdoc`
--

LOCK TABLES `invcashdoc` WRITE;
/*!40000 ALTER TABLE `invcashdoc` DISABLE KEYS */;
/*!40000 ALTER TABLE `invcashdoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `invdetail`
--

DROP TABLE IF EXISTS `invdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `invdetail` (
  `InvNo` varchar(12) NOT NULL DEFAULT '',
  `InvDate` date DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `PGroup` varchar(4) DEFAULT NULL,
  `PName` varchar(100) DEFAULT NULL,
  `Price` float(12,2) NOT NULL DEFAULT '0.00',
  `PQty` float(12,2) NOT NULL DEFAULT '0.00',
  `PAmount` float(12,2) NOT NULL DEFAULT '0.00',
  `PUnit` varchar(10) DEFAULT NULL,
  `lastupdate` date DEFAULT NULL,
  `CustTaxID` varchar(150) DEFAULT NULL,
  `Flage` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `invdetail`
--

LOCK TABLES `invdetail` WRITE;
/*!40000 ALTER TABLE `invdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `invdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `doc_no` varchar(20) DEFAULT '0',
  `post_date` date DEFAULT NULL,
  `doc_type` varchar(25) DEFAULT NULL,
  `pcode` varchar(20) DEFAULT '0',
  `pgroup` varchar(10) DEFAULT '0',
  `Endding` float(13,4) DEFAULT '0.0000',
  `Recive` float(13,4) DEFAULT '0.0000',
  `Buy` float(13,4) DEFAULT '0.0000',
  `Return1` float(13,4) DEFAULT '0.0000',
  `BranchCode` varchar(5) DEFAULT NULL,
  `InsertDate` date DEFAULT NULL,
  `PostUser` varchar(150) DEFAULT NULL,
  `Waste` float(13,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kictran`
--

DROP TABLE IF EXISTS `kictran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kictran` (
  `PItemNo` int NOT NULL DEFAULT '0',
  `PDate` date DEFAULT NULL,
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PIndex` varchar(15) DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `Cashier` varchar(6) DEFAULT NULL,
  `Emp` varchar(5) DEFAULT NULL,
  `PTable` varchar(6) DEFAULT NULL,
  `PKic` char(1) DEFAULT NULL,
  `PTimeIn` time NOT NULL DEFAULT '00:00:00',
  `PTimeOut` time NOT NULL DEFAULT '00:00:00',
  `PVoid` char(1) NOT NULL DEFAULT 'N',
  `PETD` char(1) DEFAULT NULL,
  `PQty` float(10,0) NOT NULL DEFAULT '0',
  `PFlage` char(1) NOT NULL DEFAULT 'N',
  `PServe` char(1) NOT NULL DEFAULT 'N',
  `PServeTime` time NOT NULL DEFAULT '00:00:00',
  `PWaitTime` time NOT NULL DEFAULT '00:00:00',
  `PPayment` char(1) NOT NULL DEFAULT 'N',
  `PInvNo` varchar(15) DEFAULT NULL,
  `PWaitServe` time NOT NULL DEFAULT '00:00:00',
  `PWaitTotal` time NOT NULL DEFAULT '00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kictran`
--

LOCK TABLES `kictran` WRITE;
/*!40000 ALTER TABLE `kictran` DISABLE KEYS */;
/*!40000 ALTER TABLE `kictran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logcheck`
--

DROP TABLE IF EXISTS `logcheck`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logcheck` (
  `LogStartDate` datetime DEFAULT NULL,
  `LogStartUser` char(10) DEFAULT '',
  `LogPrintDate1` datetime DEFAULT NULL,
  `LogPrintFlag1` char(1) NOT NULL DEFAULT 'N',
  `LogPrintUser1` char(10) DEFAULT '',
  `LogPrintDate2` datetime DEFAULT NULL,
  `LogPrintFlag2` char(1) NOT NULL DEFAULT 'N',
  `LogPrintUser2` char(10) DEFAULT '',
  `LogEndDate` datetime DEFAULT NULL,
  `LogEndFlag` char(1) NOT NULL DEFAULT 'N',
  `LogEndUser` char(10) DEFAULT '',
  `LogMakeZipDate` datetime DEFAULT NULL,
  `LogMakeZipFlag` char(1) NOT NULL DEFAULT 'N',
  `LogMakeZipUser` varchar(10) DEFAULT '',
  `LogSendFTPDate` datetime DEFAULT NULL,
  `LogSendFTPFlag` char(1) NOT NULL DEFAULT 'N',
  `LogSendFTPUser` varchar(10) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logcheck`
--

LOCK TABLES `logcheck` WRITE;
/*!40000 ALTER TABLE `logcheck` DISABLE KEYS */;
/*!40000 ALTER TABLE `logcheck` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mark_sendorder`
--

DROP TABLE IF EXISTS `mark_sendorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mark_sendorder` (
  `send_day` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mark_sendorder`
--

LOCK TABLES `mark_sendorder` WRITE;
/*!40000 ALTER TABLE `mark_sendorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `mark_sendorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memaddtime`
--

DROP TABLE IF EXISTS `memaddtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memaddtime` (
  `M_Code` varchar(13) NOT NULL DEFAULT '',
  `M_Date` date DEFAULT NULL,
  `M_EndDate` date DEFAULT NULL,
  `M_NewDate` date DEFAULT NULL,
  `M_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `M_User` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memaddtime`
--

LOCK TABLES `memaddtime` WRITE;
/*!40000 ALTER TABLE `memaddtime` DISABLE KEYS */;
/*!40000 ALTER TABLE `memaddtime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `memmaster`
--

DROP TABLE IF EXISTS `memmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `memmaster` (
  `M_Code` varchar(13) NOT NULL DEFAULT '',
  `M_Type` char(2) NOT NULL DEFAULT '00',
  `M_Bran` char(3) NOT NULL DEFAULT '000',
  `M_Name` varchar(50) DEFAULT NULL,
  `M_Card` varchar(50) DEFAULT NULL,
  `M_Sex` char(1) NOT NULL DEFAULT 'M',
  `M_Status` char(1) NOT NULL DEFAULT 'S',
  `M_Nation` char(2) NOT NULL DEFAULT '00',
  `M_Occu` char(1) NOT NULL DEFAULT '0',
  `M_InCom` char(1) NOT NULL DEFAULT '0',
  `M_Company` varchar(50) DEFAULT NULL,
  `M_Addr1` varchar(15) DEFAULT NULL,
  `M_Addr2` varchar(30) DEFAULT NULL,
  `M_Addr3` varchar(30) DEFAULT NULL,
  `M_Addr4` varchar(30) DEFAULT NULL,
  `M_Addr5` varchar(30) DEFAULT NULL,
  `M_Addr6` varchar(30) DEFAULT NULL,
  `M_POST` varchar(5) DEFAULT NULL,
  `M_Sone` char(1) DEFAULT NULL,
  `M_Tel` varchar(15) DEFAULT NULL,
  `M_Fax` varchar(15) DEFAULT NULL,
  `M_Email` varchar(50) DEFAULT NULL,
  `M_Brid` date DEFAULT NULL,
  `M_Begin` date DEFAULT NULL,
  `M_End` date DEFAULT NULL,
  `M_Disc` float(10,2) NOT NULL DEFAULT '0.00',
  `M_DiscRate` varchar(8) DEFAULT NULL,
  `M_Wise` varchar(40) DEFAULT NULL,
  `M_Chai` int DEFAULT NULL,
  `M_Food` varchar(50) DEFAULT NULL,
  `M_Flag` char(1) NOT NULL DEFAULT 'N',
  `M_Sum` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Clear` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Now` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Cnt` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Last` date DEFAULT NULL,
  `M_Rem1` varchar(50) DEFAULT NULL,
  `M_Rem2` varchar(50) DEFAULT NULL,
  `M_Score` float(10,0) NOT NULL DEFAULT '0',
  `M_Lsev` date DEFAULT NULL,
  PRIMARY KEY (`M_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `memmaster`
--

LOCK TABLES `memmaster` WRITE;
/*!40000 ALTER TABLE `memmaster` DISABLE KEYS */;
/*!40000 ALTER TABLE `memmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menugroup`
--

DROP TABLE IF EXISTS `menugroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menugroup` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `PCode` varchar(15) DEFAULT NULL,
  `ShortName` varchar(20) DEFAULT NULL,
  `PosGroupCode` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menugroup`
--

LOCK TABLES `menugroup` WRITE;
/*!40000 ALTER TABLE `menugroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `menugroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menugrouppda`
--

DROP TABLE IF EXISTS `menugrouppda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menugrouppda` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `PCode` varchar(16) DEFAULT NULL,
  `ShortName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menugrouppda`
--

LOCK TABLES `menugrouppda` WRITE;
/*!40000 ALTER TABLE `menugrouppda` DISABLE KEYS */;
/*!40000 ALTER TABLE `menugrouppda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menulist`
--

DROP TABLE IF EXISTS `menulist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menulist` (
  `MenuCode` varchar(15) NOT NULL DEFAULT '',
  `MenuItem` int NOT NULL DEFAULT '0',
  `PLUCode` varchar(13) NOT NULL DEFAULT '',
  `MenuActive` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menulist`
--

LOCK TABLES `menulist` WRITE;
/*!40000 ALTER TABLE `menulist` DISABLE KEYS */;
/*!40000 ALTER TABLE `menulist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menupda`
--

DROP TABLE IF EXISTS `menupda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menupda` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `Code_Type` char(1) NOT NULL DEFAULT 'P',
  `PCode` varchar(16) DEFAULT NULL,
  `ShortName` varchar(20) DEFAULT NULL,
  `PPathName` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menupda`
--

LOCK TABLES `menupda` WRITE;
/*!40000 ALTER TABLE `menupda` DISABLE KEYS */;
/*!40000 ALTER TABLE `menupda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menusetup`
--

DROP TABLE IF EXISTS `menusetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menusetup` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `Code_Type` char(1) NOT NULL DEFAULT 'P',
  `PCode` varchar(15) DEFAULT NULL,
  `ShortName` varchar(80) DEFAULT NULL,
  `PPathName` varchar(200) DEFAULT NULL,
  `PColor` varchar(50) DEFAULT NULL,
  `PosGroupCode` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menusetup`
--

LOCK TABLES `menusetup` WRITE;
/*!40000 ALTER TABLE `menusetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `menusetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mgrbuttonsetup`
--

DROP TABLE IF EXISTS `mgrbuttonsetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mgrbuttonsetup` (
  `pcode` varchar(40) DEFAULT NULL,
  `pdesc` varchar(250) DEFAULT NULL,
  `sd_pcode` varchar(40) DEFAULT NULL,
  `sd_pdesc` varchar(250) DEFAULT NULL,
  `ex_pcode` varchar(40) DEFAULT NULL,
  `ex_pdesc` varchar(250) DEFAULT NULL,
  `ex_uncode` varchar(40) DEFAULT NULL,
  `ex_undesc` varchar(250) DEFAULT NULL,
  `auto_pcode` varchar(40) DEFAULT NULL,
  `auto_pdesc` varchar(250) DEFAULT NULL,
  `Check_before` char(1) DEFAULT 'N',
  `Check_qty` char(1) DEFAULT 'N',
  `qty` int DEFAULT '0',
  `check_autoadd` char(1) DEFAULT 'N',
  `Check_Extra` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mgrbuttonsetup`
--

LOCK TABLES `mgrbuttonsetup` WRITE;
/*!40000 ALTER TABLE `mgrbuttonsetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `mgrbuttonsetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movetable`
--

DROP TABLE IF EXISTS `movetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movetable` (
  `S_Date` date DEFAULT NULL,
  `S_Time` char(10) DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `User` char(6) DEFAULT NULL,
  `FromTable` char(5) DEFAULT NULL,
  `MoveItem` int NOT NULL DEFAULT '0',
  `ToTable` char(5) NOT NULL DEFAULT '',
  `moveType` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movetable`
--

LOCK TABLES `movetable` WRITE;
/*!40000 ALTER TABLE `movetable` DISABLE KEYS */;
/*!40000 ALTER TABLE `movetable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mpointtype`
--

DROP TABLE IF EXISTS `mpointtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mpointtype` (
  `PTCode` varchar(13) NOT NULL DEFAULT '',
  `PTStrDay` varchar(30) DEFAULT NULL,
  `PTName` varchar(30) DEFAULT NULL,
  `PTStartDate` date DEFAULT NULL,
  `PTEndDate` date DEFAULT NULL,
  `PTStartTime1` varchar(8) NOT NULL DEFAULT '00:00:00',
  `PTEndTime1` varchar(8) NOT NULL DEFAULT '00:00:00',
  `PTRate1` float(5,0) NOT NULL DEFAULT '0',
  `PTStartTime2` varchar(8) NOT NULL DEFAULT '00:00:00',
  `PTEndTime2` varchar(8) NOT NULL DEFAULT '00:00:00',
  `PTRate2` float(5,0) NOT NULL DEFAULT '0',
  `PTStartTime3` varchar(8) NOT NULL DEFAULT '00:00:00',
  `PTEndTime3` varchar(8) NOT NULL DEFAULT '00:00:00',
  `PTRate3` float(5,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`PTCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mpointtype`
--

LOCK TABLES `mpointtype` WRITE;
/*!40000 ALTER TABLE `mpointtype` DISABLE KEYS */;
/*!40000 ALTER TABLE `mpointtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mtran`
--

DROP TABLE IF EXISTS `mtran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mtran` (
  `M_Date` date DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_Bran` char(3) DEFAULT NULL,
  `M_BillNo` varchar(12) DEFAULT NULL,
  `M_Type` char(1) DEFAULT NULL,
  `M_GrossAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Disc` float(13,2) NOT NULL DEFAULT '0.00',
  `M_NetAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Dept` varchar(4) DEFAULT NULL,
  `M_DeptAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_MacNo` char(3) DEFAULT NULL,
  `M_User` varchar(6) DEFAULT NULL,
  `M_Score` float(10,0) NOT NULL DEFAULT '0',
  `M_Time` varchar(8) NOT NULL DEFAULT '00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mtran`
--

LOCK TABLES `mtran` WRITE;
/*!40000 ALTER TABLE `mtran` DISABLE KEYS */;
/*!40000 ALTER TABLE `mtran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mtranplu`
--

DROP TABLE IF EXISTS `mtranplu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mtranplu` (
  `M_Date` date DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_Bran` char(3) DEFAULT NULL,
  `M_BillNo` varchar(12) DEFAULT NULL,
  `M_Type` char(1) DEFAULT NULL,
  `M_PCode` varchar(13) NOT NULL DEFAULT '',
  `M_Qty` float(12,2) NOT NULL DEFAULT '0.00',
  `M_Price` float(12,2) NOT NULL DEFAULT '0.00',
  `M_GrossAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Disc` float(13,2) NOT NULL DEFAULT '0.00',
  `M_NetAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_MacNo` char(3) DEFAULT NULL,
  `M_User` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mtranplu`
--

LOCK TABLES `mtranplu` WRITE;
/*!40000 ALTER TABLE `mtranplu` DISABLE KEYS */;
/*!40000 ALTER TABLE `mtranplu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optionfile`
--

DROP TABLE IF EXISTS `optionfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `optionfile` (
  `PGroup` varchar(4) NOT NULL DEFAULT '',
  `OptionName` varchar(30) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optionfile`
--

LOCK TABLES `optionfile` WRITE;
/*!40000 ALTER TABLE `optionfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `optionfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optionset`
--

DROP TABLE IF EXISTS `optionset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `optionset` (
  `PCode` varchar(10) DEFAULT NULL,
  `PDesc` varchar(250) DEFAULT NULL,
  `OptionCode` varchar(5) DEFAULT NULL,
  `OptionName` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optionset`
--

LOCK TABLES `optionset` WRITE;
/*!40000 ALTER TABLE `optionset` DISABLE KEYS */;
/*!40000 ALTER TABLE `optionset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ordertran`
--

DROP TABLE IF EXISTS `ordertran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ordertran` (
  `PONO` varchar(15) DEFAULT NULL,
  `F_Code` char(3) DEFAULT NULL,
  `SendDate` date DEFAULT NULL,
  `CountDate` date DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `PComment` int NOT NULL DEFAULT '0',
  `POrder` int NOT NULL DEFAULT '0',
  `OrderDate` date DEFAULT NULL,
  `UserName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ordertran`
--

LOCK TABLES `ordertran` WRITE;
/*!40000 ALTER TABLE `ordertran` DISABLE KEYS */;
/*!40000 ALTER TABLE `ordertran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `outstocklist`
--

DROP TABLE IF EXISTS `outstocklist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `outstocklist` (
  `PCode` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `outstocklist`
--

LOCK TABLES `outstocklist` WRITE;
/*!40000 ALTER TABLE `outstocklist` DISABLE KEYS */;
/*!40000 ALTER TABLE `outstocklist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paidiofile`
--

DROP TABLE IF EXISTS `paidiofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `paidiofile` (
  `Date` date DEFAULT NULL,
  `Time` varchar(8) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Flage` char(1) NOT NULL DEFAULT '',
  `PaidInAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `PaidOutAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `reson` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paidiofile`
--

LOCK TABLES `paidiofile` WRITE;
/*!40000 ALTER TABLE `paidiofile` DISABLE KEYS */;
/*!40000 ALTER TABLE `paidiofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay`
--

DROP TABLE IF EXISTS `pay`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pay` (
  `InvNO` varchar(13) NOT NULL DEFAULT '',
  `ItemNO` int NOT NULL DEFAULT '0',
  `PCODE` varchar(13) NOT NULL DEFAULT '',
  `PName` varchar(40) DEFAULT NULL,
  `PAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PLASTUPDATE` date DEFAULT NULL,
  `PUSERUPDATE` varchar(6) NOT NULL DEFAULT '',
  `PLASTTIME` varchar(10) NOT NULL DEFAULT '',
  `Post` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`InvNO`,`ItemNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay`
--

LOCK TABLES `pay` WRITE;
/*!40000 ALTER TABLE `pay` DISABLE KEYS */;
/*!40000 ALTER TABLE `pay` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payhead`
--

DROP TABLE IF EXISTS `payhead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payhead` (
  `InvNO` char(13) NOT NULL DEFAULT '',
  `PDEPT` char(3) NOT NULL DEFAULT 'XXX',
  `PDATE` date DEFAULT NULL,
  `PCREDIT` int NOT NULL DEFAULT '0',
  `PVATTYPE` char(1) NOT NULL DEFAULT 'E',
  `PVENDER` char(4) NOT NULL DEFAULT '',
  `PCONTACK` char(40) DEFAULT NULL,
  `PUSER` char(40) DEFAULT NULL,
  `PSUBTOTAL` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTAMT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `PTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PVAT` float(13,2) NOT NULL DEFAULT '0.00',
  `PVATAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PNETAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PREMARK1` char(60) NOT NULL DEFAULT '',
  `PREMARK2` char(100) NOT NULL DEFAULT '',
  `PLASTUPDATE` date DEFAULT NULL,
  `PLASTTIME` char(10) NOT NULL DEFAULT '',
  `PUSerUpdate` char(6) NOT NULL DEFAULT 'N',
  `POST` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`InvNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payhead`
--

LOCK TABLES `payhead` WRITE;
/*!40000 ALTER TABLE `payhead` DISABLE KEYS */;
/*!40000 ALTER TABLE `payhead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `PayNo` varchar(20) DEFAULT NULL,
  `InvNo` varchar(12) DEFAULT NULL,
  `ArDate` date DEFAULT NULL,
  `ArBran` char(3) DEFAULT NULL,
  `ArNo` varchar(15) DEFAULT NULL,
  `Amount` float NOT NULL DEFAULT '0',
  `Flage` char(1) NOT NULL DEFAULT 'N',
  `LastUpdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pingredent`
--

DROP TABLE IF EXISTS `pingredent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pingredent` (
  `PCode` char(13) NOT NULL DEFAULT '',
  `PingCode` char(13) NOT NULL DEFAULT '',
  `PingQty` float(13,3) NOT NULL DEFAULT '0.000',
  PRIMARY KEY (`PCode`,`PingCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pingredent`
--

LOCK TABLES `pingredent` WRITE;
/*!40000 ALTER TABLE `pingredent` DISABLE KEYS */;
/*!40000 ALTER TABLE `pingredent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pofile`
--

DROP TABLE IF EXISTS `pofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pofile` (
  `PONO` varchar(15) DEFAULT NULL,
  `F_Code` char(3) DEFAULT NULL,
  `SendDate` date DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `PComment` int NOT NULL DEFAULT '0',
  `POrder` int NOT NULL DEFAULT '0',
  `OrderDate` date DEFAULT NULL,
  `UserName` varchar(20) DEFAULT NULL,
  `InvNO` varchar(15) DEFAULT NULL,
  `PSend` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pofile`
--

LOCK TABLES `pofile` WRITE;
/*!40000 ALTER TABLE `pofile` DISABLE KEYS */;
/*!40000 ALTER TABLE `pofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poption`
--

DROP TABLE IF EXISTS `poption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poption` (
  `PCode` varchar(16) NOT NULL DEFAULT '',
  `POptCode` varchar(16) NOT NULL DEFAULT '',
  PRIMARY KEY (`PCode`,`POptCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poption`
--

LOCK TABLES `poption` WRITE;
/*!40000 ALTER TABLE `poption` DISABLE KEYS */;
/*!40000 ALTER TABLE `poption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posconfigsetup`
--

DROP TABLE IF EXISTS `posconfigsetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posconfigsetup` (
  `P_Terminal` char(3) NOT NULL DEFAULT '',
  `P_Vat` float(10,2) NOT NULL DEFAULT '0.00',
  `P_Service` float(10,2) NOT NULL DEFAULT '0.00',
  `P_ServiceType` char(1) NOT NULL DEFAULT 'N',
  `P_VatPrn` char(1) NOT NULL DEFAULT 'Y',
  `P_VatType` char(1) NOT NULL DEFAULT 'I',
  `P_BillCopy` int unsigned NOT NULL DEFAULT '0',
  `P_BillCopyOne` char(1) NOT NULL DEFAULT 'N',
  `P_DefaultSaleType` char(1) NOT NULL DEFAULT 'E',
  `P_EmpUse` char(1) NOT NULL DEFAULT 'Y',
  `P_CodePrn` char(1) NOT NULL DEFAULT 'N',
  `P_CheckBillBeforCash` char(1) NOT NULL DEFAULT 'N',
  `P_PrintDetailOnRecp` char(1) NOT NULL DEFAULT 'Y',
  `P_PrintSum` char(1) NOT NULL DEFAULT 'N',
  `P_PrintRecpMessage` varchar(40) DEFAULT NULL,
  `P_MemDisc` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_MemDiscChk` varchar(5) NOT NULL DEFAULT 'N/N/N',
  `P_MemDiscGet` char(1) NOT NULL DEFAULT 'Y',
  `P_MemDiscMax` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_FastDisc` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_FastDiscChk` varchar(5) NOT NULL DEFAULT 'N/N/N',
  `P_FastDiscGet` char(1) NOT NULL DEFAULT 'Y',
  `P_FastDiscMax` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_EmpDisc` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_EmpDiscChk` varchar(5) NOT NULL DEFAULT 'N/N/N',
  `P_EmpDiscGet` char(1) NOT NULL DEFAULT 'Y',
  `P_EmpDiscMax` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_TrainDisc` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_TrainDiscChk` varchar(5) NOT NULL DEFAULT 'N/N/N',
  `P_TrainDiscGet` char(1) NOT NULL DEFAULT 'Y',
  `P_TrainDiscMax` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_SubDisc` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_SubDiscChk` varchar(5) NOT NULL DEFAULT 'N/N/N',
  `P_SubDiscGet` char(1) NOT NULL DEFAULT 'Y',
  `P_SubDiscMax` varchar(8) NOT NULL DEFAULT '00/00/00',
  `P_DiscBathChk` char(1) NOT NULL DEFAULT 'N',
  `P_DiscBathMax` int unsigned NOT NULL DEFAULT '0',
  `P_PromotionChk` varchar(5) NOT NULL DEFAULT 'Y/Y/Y',
  `P_SpacialChk` varchar(5) NOT NULL DEFAULT 'Y/Y/Y',
  `P_DiscRound` char(1) NOT NULL DEFAULT 'F',
  `P_ServiceRound` char(1) NOT NULL DEFAULT 'F',
  `P_SerChkBySaleType` varchar(9) NOT NULL DEFAULT 'Y/Y/Y/Y/Y',
  `P_DiscChkBySaleType` varchar(9) NOT NULL DEFAULT 'Y/Y/Y/Y/Y',
  `P_MemberSystem` char(1) NOT NULL DEFAULT 'N',
  `KicSum` char(1) NOT NULL DEFAULT 'N',
  `KicCopy` char(1) NOT NULL DEFAULT '1',
  `P_PrintByItemType` char(1) NOT NULL DEFAULT 'N',
  `P_PrintTotalSumItemType` char(1) NOT NULL DEFAULT 'N',
  `P_PrintTotalSumNormalType` char(1) NOT NULL DEFAULT 'N',
  `P_PrintTotalSumGroup` char(1) NOT NULL DEFAULT 'N',
  `WTime` varchar(5) NOT NULL DEFAULT '00:04',
  `LTime` varchar(5) NOT NULL DEFAULT '00:08',
  `P_PrintProductValue` char(1) NOT NULL DEFAULT 'N',
  `P_LimitTime` int unsigned NOT NULL DEFAULT '0',
  `P_RefreshTime` int unsigned NOT NULL DEFAULT '1',
  `P_SaleDecimal` char(1) NOT NULL DEFAULT 'N',
  `P_PayBahtRound` char(1) NOT NULL DEFAULT 'F',
  `P_ShowKicQue` char(1) NOT NULL DEFAULT 'N',
  `P_BillLang` char(1) DEFAULT NULL,
  `P_KaraokeOn` char(1) NOT NULL DEFAULT 'N',
  `P_PrintAdjust` char(1) DEFAULT NULL,
  `P_PrintNetAdj` char(1) DEFAULT NULL,
  `P_ItemDiscChk` char(1) DEFAULT NULL,
  `P_ItemDiscMax` int unsigned DEFAULT NULL,
  `P_PrintDiscountService` char(1) DEFAULT NULL,
  `P_BuffetTime` float DEFAULT NULL,
  `P_BuffetOverTime` float DEFAULT NULL,
  `P_BuffetFeeAmt` float(10,2) DEFAULT NULL,
  `P_BuffetScrap` float DEFAULT NULL,
  `P_PrintEnglish` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posconfigsetup`
--

LOCK TABLES `posconfigsetup` WRITE;
/*!40000 ALTER TABLE `posconfigsetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `posconfigsetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posgroup`
--

DROP TABLE IF EXISTS `posgroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posgroup` (
  `POSGroupCode` varchar(3) DEFAULT NULL,
  `POSGroupName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posgroup`
--

LOCK TABLES `posgroup` WRITE;
/*!40000 ALTER TABLE `posgroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `posgroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `poshwsetup`
--

DROP TABLE IF EXISTS `poshwsetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `poshwsetup` (
  `Terminal` char(3) NOT NULL DEFAULT '',
  `OnAct` char(1) NOT NULL DEFAULT 'N',
  `MacNo` varchar(20) NOT NULL DEFAULT '',
  `ReceNo1` double NOT NULL DEFAULT '0',
  `SaleType` char(1) NOT NULL DEFAULT 'E',
  `TStock` char(3) NOT NULL DEFAULT '',
  `TSone` varchar(50) NOT NULL DEFAULT '',
  `Heading1` varchar(250) DEFAULT NULL,
  `Heading2` varchar(250) DEFAULT NULL,
  `Heading3` varchar(250) DEFAULT NULL,
  `Heading4` varchar(250) DEFAULT NULL,
  `Footting1` varchar(250) DEFAULT NULL,
  `Footting2` varchar(250) DEFAULT NULL,
  `DRPort` varchar(5) NOT NULL DEFAULT 'NONE',
  `DRType` char(1) NOT NULL DEFAULT '1',
  `DRCOM` varchar(30) DEFAULT NULL,
  `DISPort` varchar(5) NOT NULL DEFAULT 'NONE',
  `DISType` char(1) NOT NULL DEFAULT '1',
  `DISCOM` varchar(30) DEFAULT NULL,
  `PRNPort` varchar(5) NOT NULL DEFAULT 'NONE',
  `PRNTYPE` char(2) DEFAULT NULL,
  `PRNCOM` varchar(30) DEFAULT NULL,
  `PRNThaiLevel` char(1) NOT NULL DEFAULT 'Y',
  `KIC1Port` varchar(4) NOT NULL DEFAULT 'NONE',
  `KIC1Type` char(1) NOT NULL DEFAULT '1',
  `KIC1Com` varchar(30) DEFAULT NULL,
  `KIC1ThaiLevel` char(1) NOT NULL DEFAULT 'Y',
  `KIC2Port` varchar(4) NOT NULL DEFAULT 'NONE',
  `KIC2Type` char(1) NOT NULL DEFAULT '1',
  `KIC2Com` varchar(30) DEFAULT NULL,
  `KIC2ThaiLevel` char(1) NOT NULL DEFAULT 'Y',
  `KIC3Port` varchar(4) NOT NULL DEFAULT 'NONE',
  `KIC3Type` char(1) NOT NULL DEFAULT '1',
  `KIC3Com` varchar(30) DEFAULT NULL,
  `KIC3ThaiLevel` char(1) NOT NULL DEFAULT 'Y',
  `KIC4Port` varchar(4) NOT NULL DEFAULT 'NONE',
  `KIC4Type` char(1) NOT NULL DEFAULT '1',
  `KIC4Com` varchar(30) DEFAULT NULL,
  `KIC4ThaiLevel` char(1) NOT NULL DEFAULT 'Y',
  `EJounal` char(1) NOT NULL DEFAULT 'N',
  `EJDailyPath` varchar(100) NOT NULL DEFAULT '',
  `EJBackupPath` varchar(100) NOT NULL DEFAULT '',
  `PrnRate` int unsigned NOT NULL DEFAULT '0',
  `DrRate` int unsigned NOT NULL DEFAULT '0',
  `DisRate` int unsigned NOT NULL DEFAULT '0',
  `EDCPort` varchar(5) DEFAULT 'NONE',
  `SMPBank` char(3) DEFAULT NULL,
  `MenuItemList` char(1) NOT NULL DEFAULT 'N',
  `UseFloorPlan` char(1) NOT NULL DEFAULT 'N',
  `TakeOrderChk` char(1) NOT NULL DEFAULT 'N',
  `PosGroupCode` varchar(3) DEFAULT NULL,
  `EnableMSR` char(1) NOT NULL DEFAULT 'N',
  `Footting3` varchar(120) DEFAULT NULL,
  `CustDisplayActive` char(1) DEFAULT NULL,
  `InfoText` varchar(500) DEFAULT NULL,
  `MediaPath` varchar(150) DEFAULT NULL,
  `LogoPath` varchar(150) DEFAULT NULL,
  `MediaVolume` int unsigned DEFAULT NULL,
  PRIMARY KEY (`Terminal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `poshwsetup`
--

LOCK TABLES `poshwsetup` WRITE;
/*!40000 ALTER TABLE `poshwsetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `poshwsetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posuser`
--

DROP TABLE IF EXISTS `posuser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posuser` (
  `UserName` varchar(6) NOT NULL DEFAULT '0',
  `Password` varchar(20) NOT NULL DEFAULT '',
  `Name` varchar(40) DEFAULT NULL,
  `UserGroup` varchar(15) DEFAULT NULL,
  `OnACT` char(1) NOT NULL DEFAULT 'N',
  `MacNo` char(3) DEFAULT NULL,
  `Sale1` char(1) NOT NULL DEFAULT 'N',
  `Sale2` char(1) NOT NULL DEFAULT 'N',
  `Sale3` char(1) NOT NULL DEFAULT 'N',
  `Sale4` char(1) NOT NULL DEFAULT 'N',
  `Sale5` char(1) NOT NULL DEFAULT 'N',
  `Sale6` char(1) NOT NULL DEFAULT 'N',
  `Sale7` char(1) NOT NULL DEFAULT 'N',
  `Sale8` char(1) NOT NULL DEFAULT 'N',
  `Sale9` char(1) NOT NULL DEFAULT 'N',
  `Sale10` char(1) NOT NULL DEFAULT 'N',
  `Sale11` char(1) NOT NULL DEFAULT 'N',
  `Sale12` char(1) NOT NULL DEFAULT 'N',
  `Sale13` char(1) NOT NULL DEFAULT 'N',
  `Sale14` char(1) NOT NULL DEFAULT 'N',
  `Sale15` char(1) NOT NULL DEFAULT 'N',
  `Sale16` char(1) NOT NULL DEFAULT 'N',
  `Sale17` char(1) NOT NULL DEFAULT 'N',
  `Sale18` char(1) NOT NULL DEFAULT 'N',
  `Sale19` char(1) NOT NULL DEFAULT 'N',
  `Sale20` char(1) NOT NULL DEFAULT 'N',
  `Sale21` char(1) NOT NULL DEFAULT 'N',
  `Sale22` char(1) NOT NULL DEFAULT 'N',
  `Sale23` char(1) NOT NULL DEFAULT 'N',
  `Sale24` char(1) NOT NULL DEFAULT 'N',
  `Sale25` char(1) NOT NULL DEFAULT 'N',
  `Sale26` char(1) NOT NULL DEFAULT 'N',
  `Sale27` char(1) NOT NULL DEFAULT 'N',
  `Sale28` char(1) NOT NULL DEFAULT 'N',
  `Sale29` char(1) NOT NULL DEFAULT 'N',
  `Sale30` char(1) NOT NULL DEFAULT 'N',
  `Sale31` char(1) NOT NULL DEFAULT 'N',
  `Sale32` char(1) NOT NULL DEFAULT 'N',
  `Sale33` char(1) NOT NULL DEFAULT 'N',
  `Sale34` char(1) NOT NULL DEFAULT 'N',
  `Sale35` char(1) NOT NULL DEFAULT 'N',
  `Sale36` char(1) NOT NULL DEFAULT 'N',
  `Cont0` char(1) NOT NULL DEFAULT 'N',
  `Cont1` char(1) NOT NULL DEFAULT 'N',
  `Cont2` char(1) NOT NULL DEFAULT 'N',
  `Cont3` char(1) NOT NULL DEFAULT 'N',
  `Cont4` char(1) NOT NULL DEFAULT 'N',
  `Cont5` char(1) NOT NULL DEFAULT 'N',
  `Cont6` char(1) NOT NULL DEFAULT 'N',
  `Cont7` char(1) NOT NULL DEFAULT 'N',
  `Cont8` char(1) NOT NULL DEFAULT 'N',
  `Cont9` char(1) NOT NULL DEFAULT 'N',
  `Cont10` char(1) NOT NULL DEFAULT 'N',
  `Cont11` char(1) NOT NULL DEFAULT 'N',
  `Cont12` char(1) NOT NULL DEFAULT 'N',
  `Cont13` char(1) NOT NULL DEFAULT 'N',
  `Cont14` char(1) NOT NULL DEFAULT 'N',
  `Cont15` char(1) NOT NULL DEFAULT 'N',
  `Stock0` char(1) NOT NULL DEFAULT 'N',
  `Stock0_1` char(1) NOT NULL DEFAULT 'N',
  `Stock1` char(1) NOT NULL DEFAULT 'N',
  `Stock2` char(1) NOT NULL DEFAULT 'N',
  `Stock3` char(1) NOT NULL DEFAULT 'N',
  `Stock4` char(1) NOT NULL DEFAULT 'N',
  `Stock5` char(1) NOT NULL DEFAULT 'N',
  `Stock6` char(1) NOT NULL DEFAULT 'N',
  `Stock7` char(1) NOT NULL DEFAULT 'N',
  `Stock8` char(1) NOT NULL DEFAULT 'N',
  `Stock9` char(1) NOT NULL DEFAULT 'N',
  `Stock10` char(1) NOT NULL DEFAULT 'N',
  `Stock11` char(1) NOT NULL DEFAULT 'N',
  `Stock12` char(1) NOT NULL DEFAULT 'N',
  `Stock13` char(1) NOT NULL DEFAULT 'N',
  `Stock14` char(1) NOT NULL DEFAULT 'N',
  `Stock15` char(1) NOT NULL DEFAULT 'N',
  `Stock16` char(1) NOT NULL DEFAULT 'N',
  `Stock17` char(1) NOT NULL DEFAULT 'N',
  `Stock18` char(1) NOT NULL DEFAULT 'N',
  `Stock19` char(1) NOT NULL DEFAULT 'N',
  `Stock20` char(1) NOT NULL DEFAULT 'N',
  `Stock21` char(1) NOT NULL DEFAULT 'N',
  `Stock22` char(1) NOT NULL DEFAULT 'N',
  `Stock23` char(1) NOT NULL DEFAULT 'N',
  `Stock24` char(1) NOT NULL DEFAULT 'N',
  `Stock25` char(1) NOT NULL DEFAULT 'N',
  `Stock26` char(1) NOT NULL DEFAULT 'N',
  `Stock27` char(1) NOT NULL DEFAULT 'N',
  `Stock28` char(1) NOT NULL DEFAULT 'N',
  `Stock29` char(1) NOT NULL DEFAULT 'N',
  `Stock30` char(1) NOT NULL DEFAULT 'N',
  `Stock31` char(1) NOT NULL DEFAULT 'N',
  `Stock32` char(1) NOT NULL DEFAULT 'N',
  `Stock33` char(1) NOT NULL DEFAULT 'N',
  `Stock34` char(1) NOT NULL DEFAULT 'N',
  `Stock35` char(1) NOT NULL DEFAULT 'N',
  `Stock36` char(1) NOT NULL DEFAULT 'N',
  `Stock37` char(1) NOT NULL DEFAULT 'N',
  `Stock38` char(1) NOT NULL DEFAULT 'N',
  `Stock39` char(1) NOT NULL DEFAULT 'N',
  `Stock40` char(1) NOT NULL DEFAULT 'N',
  `Stock41` char(1) NOT NULL DEFAULT 'N',
  `Stock42` char(1) NOT NULL DEFAULT 'N',
  `Stock43` char(1) NOT NULL DEFAULT 'N',
  `Stock44` char(1) NOT NULL DEFAULT 'N',
  `Stock45` char(1) NOT NULL DEFAULT 'N',
  `Stock46` char(1) NOT NULL DEFAULT 'N',
  `Stock47` char(1) NOT NULL DEFAULT 'N',
  `Stock48` char(1) NOT NULL DEFAULT 'N',
  `Stock49` char(1) NOT NULL DEFAULT 'N',
  `Stock50` char(1) NOT NULL DEFAULT 'N',
  `Stock51` char(1) NOT NULL DEFAULT 'N',
  `Stock52` char(1) NOT NULL DEFAULT 'N',
  `Stock53` char(1) NOT NULL DEFAULT 'N',
  `Stock54` char(1) NOT NULL DEFAULT 'N',
  `Stock55` char(1) NOT NULL DEFAULT 'N',
  `Stock56` char(1) NOT NULL DEFAULT 'N',
  `Stock57` char(1) NOT NULL DEFAULT 'N',
  `Stock58` char(1) NOT NULL DEFAULT 'N',
  `Stock59` char(1) NOT NULL DEFAULT 'N',
  `Stock60` char(1) NOT NULL DEFAULT 'N',
  `Stock61` char(1) NOT NULL DEFAULT 'N',
  `Stock62` char(1) NOT NULL DEFAULT 'N',
  `Stock63` char(1) NOT NULL DEFAULT 'N',
  `Stock64` char(1) NOT NULL DEFAULT 'N',
  `Stock65` char(1) NOT NULL DEFAULT 'N',
  `Stock66` char(1) NOT NULL DEFAULT 'N',
  `Stock67` char(1) NOT NULL DEFAULT 'N',
  `Stock68` char(1) NOT NULL DEFAULT 'N',
  `Stock69` char(1) NOT NULL DEFAULT 'N',
  `Stock70` char(1) NOT NULL DEFAULT 'N',
  `Stock71` char(1) NOT NULL DEFAULT 'N',
  `Stock72` char(1) NOT NULL DEFAULT 'N',
  `Stock73` char(1) NOT NULL DEFAULT 'N',
  `Stock74` char(1) NOT NULL DEFAULT 'N',
  `Cont16` char(1) NOT NULL DEFAULT 'N',
  `Cont17` char(1) NOT NULL DEFAULT 'N',
  `Cont18` char(1) NOT NULL DEFAULT 'N',
  `Cont19` char(1) NOT NULL DEFAULT 'N',
  `Cont20` char(1) NOT NULL DEFAULT 'N',
  `Cont21` char(1) NOT NULL DEFAULT 'N',
  `Cont22` char(1) NOT NULL DEFAULT 'N',
  `Cont23` char(1) NOT NULL DEFAULT 'N',
  `Cont24` char(1) NOT NULL DEFAULT 'N',
  `Cont25` char(1) NOT NULL DEFAULT 'N',
  `Cont26` char(1) NOT NULL DEFAULT 'N',
  `Cont27` char(1) NOT NULL DEFAULT 'N',
  `Cont28` char(1) NOT NULL DEFAULT 'N',
  `Cont29` char(1) NOT NULL DEFAULT 'N',
  `Cont30` char(1) NOT NULL DEFAULT 'N',
  `Cont31` char(1) NOT NULL DEFAULT 'N',
  `Cont32` char(1) NOT NULL DEFAULT 'N',
  `Cont33` char(1) NOT NULL DEFAULT 'N',
  `Cont34` char(1) NOT NULL DEFAULT 'N',
  `Cont35` char(1) NOT NULL DEFAULT 'N',
  `Cont36` char(1) NOT NULL DEFAULT 'N',
  `Cont37` char(1) NOT NULL DEFAULT 'N',
  `Cont38` char(1) NOT NULL DEFAULT 'N',
  `Cont39` char(1) NOT NULL DEFAULT 'N',
  `Cont40` char(1) NOT NULL DEFAULT 'N',
  `Cont41` char(1) NOT NULL DEFAULT 'N',
  `Cont42` char(1) NOT NULL DEFAULT 'N',
  `Cont43` char(1) NOT NULL DEFAULT 'N',
  `Cont44` char(1) NOT NULL DEFAULT 'N',
  `Cont45` char(1) NOT NULL DEFAULT 'N',
  `Cont46` char(1) NOT NULL DEFAULT 'N',
  `Cont47` char(1) DEFAULT NULL,
  `Sale37` char(1) DEFAULT NULL,
  `Sale38` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posuser`
--

LOCK TABLES `posuser` WRITE;
/*!40000 ALTER TABLE `posuser` DISABLE KEYS */;
/*!40000 ALTER TABLE `posuser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produce`
--

DROP TABLE IF EXISTS `produce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produce` (
  `R_No` varchar(15) DEFAULT NULL,
  `R_Que` int unsigned DEFAULT NULL,
  `R_PCode` varchar(13) DEFAULT NULL,
  `R_Stock` char(3) DEFAULT NULL,
  `R_Pack` int unsigned DEFAULT NULL,
  `R_Qty` float(10,3) DEFAULT NULL,
  `R_Post` char(1) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Cost` float(10,4) DEFAULT NULL,
  `R_Amount` float(10,2) DEFAULT NULL,
  `R_TotalQty` int DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Remark` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produce`
--

LOCK TABLES `produce` WRITE;
/*!40000 ALTER TABLE `produce` DISABLE KEYS */;
/*!40000 ALTER TABLE `produce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PFix` char(1) NOT NULL DEFAULT 'F',
  `PReferent` varchar(15) DEFAULT '',
  `PAccNo` varchar(10) DEFAULT '',
  `PGroup` varchar(4) NOT NULL DEFAULT '',
  `PVender` varchar(4) NOT NULL DEFAULT '',
  `PType` char(1) NOT NULL DEFAULT '1',
  `PNormal` char(1) NOT NULL DEFAULT 'C',
  `PRemark` varchar(50) DEFAULT NULL,
  `PDiscount` char(1) NOT NULL DEFAULT 'Y',
  `PService` char(1) NOT NULL DEFAULT 'Y',
  `PStatus` char(1) NOT NULL DEFAULT 'P',
  `PStock` char(1) NOT NULL DEFAULT 'Y',
  `PSet` char(1) NOT NULL DEFAULT 'N',
  `PVat` char(1) NOT NULL DEFAULT 'V',
  `PDesc` varchar(200) DEFAULT NULL,
  `PUnit1` varchar(10) DEFAULT '',
  `PPack1` int DEFAULT '0',
  `PArea` varchar(15) DEFAULT '',
  `PKic` char(1) DEFAULT NULL,
  `PPrice11` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice12` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice13` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice14` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice15` float(13,2) NOT NULL DEFAULT '0.00',
  `PPromotion1` char(3) DEFAULT '',
  `PPromotion2` char(3) DEFAULT '',
  `PPromotion3` char(3) NOT NULL DEFAULT '',
  `PMax` float(13,4) NOT NULL DEFAULT '0.0000',
  `PMin` float(13,4) NOT NULL DEFAULT '0.0000',
  `PBUnit` varchar(10) DEFAULT '',
  `PBPack` float(13,4) DEFAULT '0.0000',
  `PLCost` float(13,4) NOT NULL DEFAULT '0.0000',
  `PSCost` float(13,4) NOT NULL DEFAULT '0.0000',
  `PACost` float(13,4) NOT NULL DEFAULT '0.0000',
  `PLink1` varchar(13) DEFAULT '',
  `PLink2` varchar(13) DEFAULT '',
  `PLastUpdate` date DEFAULT NULL,
  `PLastTime` time DEFAULT '00:00:00',
  `PUserUpdate` varchar(6) DEFAULT '',
  `PLastSale` date DEFAULT NULL,
  `PBarCode` varchar(13) DEFAULT NULL,
  `PActive` char(1) NOT NULL DEFAULT 'Y',
  `PSPVat` char(1) NOT NULL DEFAULT 'N',
  `PSPVatAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `POSStk` char(1) NOT NULL DEFAULT '0',
  `MSStk` char(3) NOT NULL DEFAULT '',
  `PTimeCharge` float(10,2) NOT NULL DEFAULT '0.00',
  `POrder` char(1) NOT NULL DEFAULT '0',
  `PFoodType` char(1) NOT NULL DEFAULT '0',
  `PChkDate` date DEFAULT NULL,
  `PPackOld` int unsigned NOT NULL DEFAULT '0',
  `PselectItem` varchar(10) DEFAULT NULL,
  `PSelectNum` float(10,3) DEFAULT NULL,
  `PSelectShow` char(1) NOT NULL DEFAULT 'N',
  `PYield` float(10,2) DEFAULT '100.00',
  `PShowOption` varchar(1) DEFAULT NULL,
  `PDesc2` varchar(200) DEFAULT NULL,
  `PSelectAllProduct` char(1) NOT NULL DEFAULT 'N',
  `PAddOptionName` char(1) NOT NULL DEFAULT 'N',
  `PAutoShowOption` char(1) NOT NULL DEFAULT 'N',
  `PPrintOption` char(1) NOT NULL DEFAULT 'N',
  `PPrintItemBill` char(1) NOT NULL DEFAULT 'Y',
  `PCountTime` char(1) NOT NULL DEFAULT 'N',
  `PCCActive` char(1) NOT NULL DEFAULT 'N',
  `PCCTopupAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `PCCActiveDay` int unsigned NOT NULL DEFAULT '0',
  `PCCStartTime` time DEFAULT '00:00:00',
  `PCCEndTime` time DEFAULT '00:00:00',
  `PCCDateSelect` int unsigned NOT NULL DEFAULT '0',
  `PCCStartDate` date DEFAULT NULL,
  `PCCEndDate` date DEFAULT NULL,
  `PEDesc` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`PCode`),
  UNIQUE KEY `Porduct_PCode` (`PCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profreeplu`
--

DROP TABLE IF EXISTS `profreeplu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profreeplu` (
  `ProCode` char(3) NOT NULL DEFAULT '',
  `ProTime` char(1) NOT NULL DEFAULT '0',
  `PCode` varchar(13) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profreeplu`
--

LOCK TABLES `profreeplu` WRITE;
/*!40000 ALTER TABLE `profreeplu` DISABLE KEYS */;
/*!40000 ALTER TABLE `profreeplu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prolost`
--

DROP TABLE IF EXISTS `prolost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prolost` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` char(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` char(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prolost`
--

LOCK TABLES `prolost` WRITE;
/*!40000 ALTER TABLE `prolost` DISABLE KEYS */;
/*!40000 ALTER TABLE `prolost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prolost2`
--

DROP TABLE IF EXISTS `prolost2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prolost2` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` char(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` char(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prolost2`
--

LOCK TABLES `prolost2` WRITE;
/*!40000 ALTER TABLE `prolost2` DISABLE KEYS */;
/*!40000 ALTER TABLE `prolost2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prolost3`
--

DROP TABLE IF EXISTS `prolost3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prolost3` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` char(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` char(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prolost3`
--

LOCK TABLES `prolost3` WRITE;
/*!40000 ALTER TABLE `prolost3` DISABLE KEYS */;
/*!40000 ALTER TABLE `prolost3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion2`
--

DROP TABLE IF EXISTS `promotion2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion2` (
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion2`
--

LOCK TABLES `promotion2` WRITE;
/*!40000 ALTER TABLE `promotion2` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion3`
--

DROP TABLE IF EXISTS `promotion3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion3` (
  `R_Index` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion3`
--

LOCK TABLES `promotion3` WRITE;
/*!40000 ALTER TABLE `promotion3` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion4`
--

DROP TABLE IF EXISTS `promotion4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion4` (
  `R_Index` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion4`
--

LOCK TABLES `promotion4` WRITE;
/*!40000 ALTER TABLE `promotion4` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion5`
--

DROP TABLE IF EXISTS `promotion5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion5` (
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion5`
--

LOCK TABLES `promotion5` WRITE;
/*!40000 ALTER TABLE `promotion5` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion5` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `promotion6`
--

DROP TABLE IF EXISTS `promotion6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `promotion6` (
  `MacNo` char(3) NOT NULL DEFAULT '',
  `TableNo` varchar(15) NOT NULL DEFAULT '',
  `ProCode` char(3) NOT NULL DEFAULT '',
  `PIndex` varchar(20) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQuan` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(13,2) NOT NULL DEFAULT '0.00',
  `PTotal` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `promotion6`
--

LOCK TABLES `promotion6` WRITE;
/*!40000 ALTER TABLE `promotion6` DISABLE KEYS */;
/*!40000 ALTER TABLE `promotion6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `protab`
--

DROP TABLE IF EXISTS `protab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `protab` (
  `ProCode` char(3) NOT NULL DEFAULT '',
  `Prodesc` varchar(30) NOT NULL DEFAULT '',
  `PDate1` date DEFAULT NULL,
  `PDate2` date DEFAULT NULL,
  `PStrDay` varchar(28) NOT NULL DEFAULT '',
  `PTime1S` varchar(5) NOT NULL DEFAULT '00:00',
  `PTime1E` varchar(5) NOT NULL DEFAULT '00:00',
  `PDisc1` int NOT NULL DEFAULT '0',
  `PSPDisc1` float(10,2) NOT NULL DEFAULT '0.00',
  `PTS1` varchar(10) NOT NULL DEFAULT '',
  `PTime2S` varchar(5) NOT NULL DEFAULT '00:00',
  `PTime2E` varchar(5) NOT NULL DEFAULT '00:00',
  `PDisc2` int NOT NULL DEFAULT '0',
  `PSPDisc2` float(10,2) NOT NULL DEFAULT '0.00',
  `PTS2` varchar(10) NOT NULL DEFAULT '',
  `PTime3S` varchar(5) NOT NULL DEFAULT '00:00',
  `PTime3E` varchar(5) NOT NULL DEFAULT '00:00',
  `PDisc3` int NOT NULL DEFAULT '0',
  `PSPDisc3` float(10,2) NOT NULL DEFAULT '0.00',
  `PTS3` varchar(10) NOT NULL DEFAULT '',
  `PType` char(1) DEFAULT NULL,
  `PSale1` int NOT NULL DEFAULT '0',
  `PFree1` int NOT NULL DEFAULT '0',
  `PSum1` int NOT NULL DEFAULT '0',
  `PDiscFree1` float(10,2) NOT NULL DEFAULT '0.00',
  `PSale2` int NOT NULL DEFAULT '0',
  `PFree2` int NOT NULL DEFAULT '0',
  `PSum2` int NOT NULL DEFAULT '0',
  `PDiscFree2` float(10,2) NOT NULL DEFAULT '0.00',
  `PSale3` int NOT NULL DEFAULT '0',
  `PFree3` int NOT NULL DEFAULT '0',
  `PSum3` int NOT NULL DEFAULT '0',
  `PDiscFree3` float(10,2) NOT NULL DEFAULT '0.00',
  `PSale41` int NOT NULL DEFAULT '0',
  `PFree41` int NOT NULL DEFAULT '0',
  `PSale42` int NOT NULL DEFAULT '0',
  `PFree42` int NOT NULL DEFAULT '0',
  `PSale43` int NOT NULL DEFAULT '0',
  `PFree43` int NOT NULL DEFAULT '0',
  `PQty11` float(10,0) NOT NULL DEFAULT '0',
  `PQty12` float(10,0) NOT NULL DEFAULT '0',
  `PQty13` float(10,0) NOT NULL DEFAULT '0',
  `PQty14` float(10,0) NOT NULL DEFAULT '0',
  `PQDisc11` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc12` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc13` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc14` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath11` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath12` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath13` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath14` float(10,2) NOT NULL DEFAULT '0.00',
  `PQty21` float(10,0) NOT NULL DEFAULT '0',
  `PQty22` float(10,0) NOT NULL DEFAULT '0',
  `PQty23` float(10,2) NOT NULL DEFAULT '0.00',
  `PQty24` float(10,0) NOT NULL DEFAULT '0',
  `PQDisc21` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc22` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc23` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc24` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath21` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath22` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath23` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath24` float(10,2) NOT NULL DEFAULT '0.00',
  `PQty31` float(10,0) NOT NULL DEFAULT '0',
  `PQty32` float(10,0) NOT NULL DEFAULT '0',
  `PQty33` float(10,0) NOT NULL DEFAULT '0',
  `PQty34` float(10,0) NOT NULL DEFAULT '0',
  `PQDisc31` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc32` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc33` float(10,2) NOT NULL DEFAULT '0.00',
  `PQDisc34` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath31` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath32` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath33` float(10,2) NOT NULL DEFAULT '0.00',
  `PQBath34` float(10,2) NOT NULL DEFAULT '0.00',
  `PCheckBran` char(1) DEFAULT NULL,
  `PBranList` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`ProCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `protab`
--

LOCK TABLES `protab` WRITE;
/*!40000 ALTER TABLE `protab` DISABLE KEYS */;
/*!40000 ALTER TABLE `protab` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pset`
--

DROP TABLE IF EXISTS `pset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pset` (
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PSubCode` varchar(13) NOT NULL DEFAULT '',
  `PSubQty` float(10,3) NOT NULL DEFAULT '1.000',
  PRIMARY KEY (`PCode`,`PSubCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pset`
--

LOCK TABLES `pset` WRITE;
/*!40000 ALTER TABLE `pset` DISABLE KEYS */;
/*!40000 ALTER TABLE `pset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purdetail`
--

DROP TABLE IF EXISTS `purdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purdetail` (
  `PONO` varchar(13) NOT NULL DEFAULT '',
  `ItemNO` int NOT NULL DEFAULT '0',
  `PCODE` varchar(13) NOT NULL DEFAULT '',
  `PSTOCK` char(3) NOT NULL DEFAULT '',
  `PPACK` int NOT NULL DEFAULT '1',
  `PUNIT` varchar(10) NOT NULL DEFAULT '',
  `PQTY` float(13,2) NOT NULL DEFAULT '0.00',
  `PCOST` float(13,2) NOT NULL DEFAULT '0.00',
  `PAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `PTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PLASTUPDATE` date DEFAULT NULL,
  `PUSERUPDATE` varchar(6) NOT NULL DEFAULT '',
  `PLASTTIME` time NOT NULL DEFAULT '00:00:00',
  `PRECEIVE` char(1) NOT NULL DEFAULT '',
  `PRECEICE` varchar(13) NOT NULL DEFAULT '',
  PRIMARY KEY (`PONO`,`ItemNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purdetail`
--

LOCK TABLES `purdetail` WRITE;
/*!40000 ALTER TABLE `purdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `purdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purhead`
--

DROP TABLE IF EXISTS `purhead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purhead` (
  `PONO` varchar(13) NOT NULL DEFAULT '',
  `PODEPT` char(3) NOT NULL DEFAULT '',
  `PODATE` date DEFAULT NULL,
  `POSENDDATE` date DEFAULT NULL,
  `POCREDIT` int NOT NULL DEFAULT '0',
  `POVATTYPE` char(1) NOT NULL DEFAULT 'E',
  `POVENDER` varchar(4) NOT NULL DEFAULT '',
  `POCONTACK` varchar(40) NOT NULL DEFAULT '',
  `POUSER` varchar(40) NOT NULL DEFAULT '',
  `POSUBTOTAL` float(13,2) NOT NULL DEFAULT '0.00',
  `PODISCOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `POTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `POVAT` float(13,2) NOT NULL DEFAULT '0.00',
  `POVATAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PONETAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `POREMARK1` varchar(60) NOT NULL DEFAULT '',
  `POREMARK2` varchar(100) NOT NULL DEFAULT '',
  `POLASTUPDATE` date DEFAULT NULL,
  `POLASTTIME` time NOT NULL DEFAULT '00:00:00',
  `PORECIVE` char(1) NOT NULL DEFAULT 'N',
  `POINVOICE` varchar(13) NOT NULL DEFAULT '',
  PRIMARY KEY (`PONO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purhead`
--

LOCK TABLES `purhead` WRITE;
/*!40000 ALTER TABLE `purhead` DISABLE KEYS */;
/*!40000 ALTER TABLE `purhead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recive`
--

DROP TABLE IF EXISTS `recive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recive` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Order` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Send` float(10,3) NOT NULL DEFAULT '0.000',
  `R_PONO` varchar(30) DEFAULT NULL,
  `R_PQty` float(13,2) DEFAULT NULL,
  `ReciveBy` char(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recive`
--

LOCK TABLES `recive` WRITE;
/*!40000 ALTER TABLE `recive` DISABLE KEYS */;
/*!40000 ALTER TABLE `recive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recive2`
--

DROP TABLE IF EXISTS `recive2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recive2` (
  `R_No` varchar(15) DEFAULT NULL,
  `R_Que` int unsigned DEFAULT NULL,
  `R_PCode` varchar(13) DEFAULT NULL,
  `R_Stock` char(3) DEFAULT NULL,
  `R_Pack` int unsigned DEFAULT NULL,
  `R_Qty` float(10,3) DEFAULT NULL,
  `R_Post` char(1) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Cost` float(10,2) DEFAULT NULL,
  `R_Amount` float(10,2) DEFAULT NULL,
  `R_TotalQty` int DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Order` float(10,3) DEFAULT NULL,
  `R_Send` float(10,3) DEFAULT NULL,
  `R_PONO` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recive2`
--

LOCK TABLES `recive2` WRITE;
/*!40000 ALTER TABLE `recive2` DISABLE KEYS */;
/*!40000 ALTER TABLE `recive2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recive3`
--

DROP TABLE IF EXISTS `recive3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recive3` (
  `R_No` varchar(15) DEFAULT NULL,
  `R_Que` int unsigned DEFAULT NULL,
  `R_PCode` varchar(13) DEFAULT NULL,
  `R_Stock` char(3) DEFAULT NULL,
  `R_Pack` int unsigned DEFAULT NULL,
  `R_Qty` float(10,3) DEFAULT NULL,
  `R_Post` char(1) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Cost` float(10,2) DEFAULT NULL,
  `R_Amount` float(10,2) DEFAULT NULL,
  `R_TotalQty` int DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Order` float(10,3) DEFAULT NULL,
  `R_Send` float(10,3) DEFAULT NULL,
  `R_PONO` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recive3`
--

LOCK TABLES `recive3` WRITE;
/*!40000 ALTER TABLE `recive3` DISABLE KEYS */;
/*!40000 ALTER TABLE `recive3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservelist`
--

DROP TABLE IF EXISTS `reservelist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservelist` (
  `RCode` varchar(10) DEFAULT NULL,
  `RDate` date DEFAULT NULL,
  `RTime` time NOT NULL DEFAULT '00:00:00',
  `CName` varchar(50) DEFAULT '',
  `CQty` int unsigned DEFAULT '0',
  `UCode` varchar(10) DEFAULT NULL,
  `TList` varchar(30) DEFAULT NULL,
  `RRemark` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservelist`
--

LOCK TABLES `reservelist` WRITE;
/*!40000 ALTER TABLE `reservelist` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservelist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `retdetail`
--

DROP TABLE IF EXISTS `retdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `retdetail` (
  `InvNO` char(13) NOT NULL DEFAULT '',
  `ItemNO` int NOT NULL DEFAULT '0',
  `PCODE` char(13) NOT NULL DEFAULT '',
  `PInvNo` char(13) DEFAULT NULL,
  `PSTOCK` char(3) NOT NULL DEFAULT '',
  `PPACK` int NOT NULL DEFAULT '1',
  `PUNIT` char(10) NOT NULL DEFAULT '',
  `PQTY` float(13,3) NOT NULL DEFAULT '0.000',
  `PFree` float(13,3) NOT NULL DEFAULT '0.000',
  `PCOST` float(13,2) NOT NULL DEFAULT '0.00',
  `PAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PTotalQty` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNT` char(15) DEFAULT NULL,
  `PDISCOUNTAMT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `PTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PLASTUPDATE` date DEFAULT NULL,
  `PSubDiscAmt` float(12,2) NOT NULL DEFAULT '0.00',
  `PUSERUPDATE` char(6) NOT NULL DEFAULT '',
  `PLASTTIME` char(8) NOT NULL DEFAULT '',
  `Post` char(1) NOT NULL DEFAULT 'N',
  `PUnitCost` float(13,4) NOT NULL DEFAULT '0.0000',
  `PNetAmt` float(12,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`InvNO`,`ItemNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `retdetail`
--

LOCK TABLES `retdetail` WRITE;
/*!40000 ALTER TABLE `retdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `retdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rethead`
--

DROP TABLE IF EXISTS `rethead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rethead` (
  `InvNO` char(13) NOT NULL DEFAULT '',
  `PDEPT` char(3) NOT NULL DEFAULT 'XXX',
  `PDATE` date DEFAULT NULL,
  `PONO` char(13) DEFAULT NULL,
  `PCREDIT` int NOT NULL DEFAULT '0',
  `PDueDate` date DEFAULT NULL,
  `PVATTYPE` char(1) NOT NULL DEFAULT 'E',
  `PVENDER` char(4) NOT NULL DEFAULT '',
  `PCONTACK` char(40) DEFAULT NULL,
  `PUSER` char(40) DEFAULT NULL,
  `PSUBTOTAL` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNT` char(15) DEFAULT NULL,
  `PDISCOUNTAMT` float(13,2) NOT NULL DEFAULT '0.00',
  `PDISCOUNTBATH` float(13,2) NOT NULL DEFAULT '0.00',
  `PTOTALAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PVAT` float(13,2) NOT NULL DEFAULT '0.00',
  `PVATAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PNETAMOUNT` float(13,2) NOT NULL DEFAULT '0.00',
  `PREMARK1` char(60) NOT NULL DEFAULT '',
  `PREMARK2` char(100) NOT NULL DEFAULT '',
  `PLASTUPDATE` date DEFAULT NULL,
  `PLASTTIME` char(5) NOT NULL DEFAULT '',
  `PUSerUpdate` char(6) NOT NULL DEFAULT 'N',
  `POST` char(1) NOT NULL DEFAULT 'N',
  `POSTDATE` date DEFAULT NULL,
  `POSTTIME` char(8) DEFAULT NULL,
  `POSTUSER` char(6) DEFAULT NULL,
  PRIMARY KEY (`InvNO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rethead`
--

LOCK TABLES `rethead` WRITE;
/*!40000 ALTER TABLE `rethead` DISABLE KEYS */;
/*!40000 ALTER TABLE `rethead` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rjfile`
--

DROP TABLE IF EXISTS `rjfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rjfile` (
  `BRCode` char(3) NOT NULL DEFAULT '0',
  `TDate` date DEFAULT NULL,
  `RJNO` char(2) NOT NULL DEFAULT '',
  `DEPT` char(2) DEFAULT NULL,
  `ACCOUNT` varchar(8) DEFAULT NULL,
  `SUB` varchar(6) DEFAULT NULL,
  `DESCNAME` varchar(30) DEFAULT NULL,
  `FIXCODE` varchar(8) DEFAULT NULL,
  `Mac1` float(10,2) NOT NULL DEFAULT '0.00',
  `Mac2` float(10,2) NOT NULL DEFAULT '0.00',
  `Mac3` float(10,2) NOT NULL DEFAULT '0.00',
  `Total` float(10,2) NOT NULL DEFAULT '0.00',
  `NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `Vat` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rjfile`
--

LOCK TABLES `rjfile` WRITE;
/*!40000 ALTER TABLE `rjfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `rjfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `salecr`
--

DROP TABLE IF EXISTS `salecr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `salecr` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` char(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` char(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `salecr`
--

LOCK TABLES `salecr` WRITE;
/*!40000 ALTER TABLE `salecr` DISABLE KEYS */;
/*!40000 ALTER TABLE `salecr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sendstock`
--

DROP TABLE IF EXISTS `sendstock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sendstock` (
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `S_Date` date DEFAULT NULL,
  `S_Month` date DEFAULT NULL,
  `S_PCode` char(13) NOT NULL DEFAULT '',
  `S_BQty` float(12,2) NOT NULL DEFAULT '0.00',
  `S_Cost` float(12,2) NOT NULL DEFAULT '0.00',
  `S_Amount` float(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sendstock`
--

LOCK TABLES `sendstock` WRITE;
/*!40000 ALTER TABLE `sendstock` DISABLE KEYS */;
/*!40000 ALTER TABLE `sendstock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sendtran`
--

DROP TABLE IF EXISTS `sendtran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sendtran` (
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `S_Date` date DEFAULT NULL,
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Bran` char(3) DEFAULT NULL,
  `R_Total` int NOT NULL DEFAULT '0',
  `R_Que` int NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) DEFAULT NULL,
  `R_Qty` float(12,2) NOT NULL DEFAULT '0.00',
  `R_Cost` float(12,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(12,2) NOT NULL DEFAULT '0.00',
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sendtran`
--

LOCK TABLES `sendtran` WRITE;
/*!40000 ALTER TABLE `sendtran` DISABLE KEYS */;
/*!40000 ALTER TABLE `sendtran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soft_balance`
--

DROP TABLE IF EXISTS `soft_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soft_balance` (
  `R_Index` varchar(10) NOT NULL DEFAULT '0',
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(40) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `R_Opt1` varchar(30) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_VoidQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_MovePrint` char(1) NOT NULL DEFAULT 'N',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soft_balance`
--

LOCK TABLES `soft_balance` WRITE;
/*!40000 ALTER TABLE `soft_balance` DISABLE KEYS */;
/*!40000 ALTER TABLE `soft_balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soft_menusetup`
--

DROP TABLE IF EXISTS `soft_menusetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soft_menusetup` (
  `MenuCode` varchar(10) NOT NULL DEFAULT '',
  `MenuType` char(1) NOT NULL DEFAULT 'P',
  `OptSet` char(1) DEFAULT 'N',
  `PSet` char(1) DEFAULT 'N',
  `PCode` varchar(15) DEFAULT NULL,
  `MenuShowText` varchar(100) DEFAULT NULL,
  `IMG` varchar(250) DEFAULT NULL,
  `FontColor` varchar(50) DEFAULT NULL,
  `BGColor` varchar(50) DEFAULT NULL,
  `Layout` int DEFAULT '1',
  `FontSize` int DEFAULT '12',
  `FontName` varchar(50) DEFAULT 'Tahoma',
  `FontAttr` varchar(2) DEFAULT 'P',
  `M_Index` int DEFAULT NULL,
  `IMG_SIZE` int DEFAULT '125',
  PRIMARY KEY (`MenuCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soft_menusetup`
--

LOCK TABLES `soft_menusetup` WRITE;
/*!40000 ALTER TABLE `soft_menusetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `soft_menusetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soft_tablefile`
--

DROP TABLE IF EXISTS `soft_tablefile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `soft_tablefile` (
  `Tcode` varchar(15) NOT NULL DEFAULT '',
  `SoneCode` char(3) NOT NULL DEFAULT '',
  `TLoginDate` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `Cashier` char(10) DEFAULT NULL,
  `TLoginTime` varchar(10) DEFAULT NULL,
  `TCurTime` varchar(10) DEFAULT '',
  `TCustomer` int unsigned NOT NULL DEFAULT '0',
  `TItem` int unsigned NOT NULL DEFAULT '0',
  `TAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `TOnAct` char(1) NOT NULL DEFAULT 'N',
  `Service` float(10,2) NOT NULL DEFAULT '0.00',
  `ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `EmpDisc` varchar(8) DEFAULT NULL,
  `EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `FastDisc` varchar(8) DEFAULT NULL,
  `FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `TrainDisc` varchar(8) DEFAULT NULL,
  `TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemDisc` varchar(8) DEFAULT '',
  `MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SubDisc` varchar(8) DEFAULT '',
  `SubDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `DiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemCode` varchar(20) DEFAULT '',
  `MemCurAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemName` varchar(40) DEFAULT '',
  `MemBegin` date DEFAULT NULL,
  `MemEnd` date DEFAULT NULL,
  `Food` float(10,2) NOT NULL DEFAULT '0.00',
  `Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `Product` float(10,2) NOT NULL DEFAULT '0.00',
  `NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintChkBill` char(1) NOT NULL DEFAULT 'N',
  `PrintCnt` int unsigned NOT NULL DEFAULT '0',
  `PrintTime1` varchar(10) DEFAULT NULL,
  `PrintTime2` varchar(10) DEFAULT '',
  `ChkBill` char(1) NOT NULL DEFAULT 'N',
  `ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `StkCode1` char(3) NOT NULL DEFAULT '',
  `StkCode2` char(3) NOT NULL DEFAULT '',
  `TDesk` int unsigned NOT NULL DEFAULT '0',
  `TUser` varchar(5) DEFAULT NULL,
  `TPause` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soft_tablefile`
--

LOCK TABLES `soft_tablefile` WRITE;
/*!40000 ALTER TABLE `soft_tablefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `soft_tablefile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sonefile`
--

DROP TABLE IF EXISTS `sonefile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sonefile` (
  `SoneCode` char(3) NOT NULL DEFAULT '',
  `SoneName` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sonefile`
--

LOCK TABLES `sonefile` WRITE;
/*!40000 ALTER TABLE `sonefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `sonefile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sp_temp_refund`
--

DROP TABLE IF EXISTS `sp_temp_refund`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sp_temp_refund` (
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_Quan` float(10,3) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sp_temp_refund`
--

LOCK TABLES `sp_temp_refund` WRITE;
/*!40000 ALTER TABLE `sp_temp_refund` DISABLE KEYS */;
/*!40000 ALTER TABLE `sp_temp_refund` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stcard`
--

DROP TABLE IF EXISTS `stcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stcard` (
  `S_Date` date DEFAULT NULL,
  `S_No` varchar(15) DEFAULT NULL,
  `S_SubNo` varchar(15) DEFAULT NULL,
  `S_Que` int unsigned NOT NULL DEFAULT '0',
  `S_PCode` varchar(13) NOT NULL DEFAULT '',
  `S_Stk` char(3) NOT NULL DEFAULT '',
  `S_In` float(10,3) NOT NULL DEFAULT '0.000',
  `S_Out` float(10,3) NOT NULL DEFAULT '0.000',
  `S_InCost` float(10,2) NOT NULL DEFAULT '0.00',
  `S_OutCost` float(10,2) NOT NULL DEFAULT '0.00',
  `S_ACost` float(10,2) NOT NULL DEFAULT '0.00',
  `S_Rem` varchar(5) NOT NULL DEFAULT '',
  `S_User` varchar(6) NOT NULL DEFAULT '',
  `S_EntryDate` date DEFAULT NULL,
  `S_EntryTime` varchar(10) NOT NULL DEFAULT '',
  `S_Link` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stcard`
--

LOCK TABLES `stcard` WRITE;
/*!40000 ALTER TABLE `stcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `stcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stdorder`
--

DROP TABLE IF EXISTS `stdorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stdorder` (
  `F_Code` char(3) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `PGroup` varchar(4) DEFAULT NULL,
  `PSun` int NOT NULL DEFAULT '0',
  `PMon` int NOT NULL DEFAULT '0',
  `PTue` int NOT NULL DEFAULT '0',
  `PWed` int NOT NULL DEFAULT '0',
  `PThu` int NOT NULL DEFAULT '0',
  `PFri` int NOT NULL DEFAULT '0',
  `PSat` int NOT NULL DEFAULT '0',
  `PASun` int NOT NULL DEFAULT '0',
  `PAMon` int NOT NULL DEFAULT '0',
  `PATue` int NOT NULL DEFAULT '0',
  `PAWed` int NOT NULL DEFAULT '0',
  `PAThu` int NOT NULL DEFAULT '0',
  `PAFri` int NOT NULL DEFAULT '0',
  `PASat` int NOT NULL DEFAULT '0',
  `PComment` int NOT NULL DEFAULT '0',
  `POnhand` int NOT NULL DEFAULT '0',
  `POrder` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stdorder`
--

LOCK TABLES `stdorder` WRITE;
/*!40000 ALTER TABLE `stdorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `stdorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stkfile`
--

DROP TABLE IF EXISTS `stkfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stkfile` (
  `BPCode` varchar(13) NOT NULL DEFAULT '0',
  `BStk` char(3) NOT NULL DEFAULT '',
  `BQty` float(12,3) NOT NULL DEFAULT '0.000',
  `BAmt` float(12,2) NOT NULL DEFAULT '0.00',
  `BTotalAmt` float(12,2) NOT NULL DEFAULT '0.00',
  `BQty0` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty1` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty2` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty3` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty4` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty5` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty6` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty7` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty8` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty9` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty10` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty11` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty12` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty13` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty14` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty15` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty16` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty17` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty18` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty19` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty20` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty21` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty22` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty23` float(12,3) NOT NULL DEFAULT '0.000',
  `BQty24` float(12,3) NOT NULL DEFAULT '0.000',
  PRIMARY KEY (`BPCode`,`BStk`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stkfile`
--

LOCK TABLES `stkfile` WRITE;
/*!40000 ALTER TABLE `stkfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `stkfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stockfile`
--

DROP TABLE IF EXISTS `stockfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stockfile` (
  `StkCode` char(3) NOT NULL DEFAULT '',
  `StkName` varchar(30) NOT NULL DEFAULT '',
  `Flage` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stockfile`
--

LOCK TABLES `stockfile` WRITE;
/*!40000 ALTER TABLE `stockfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `stockfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sumtable`
--

DROP TABLE IF EXISTS `sumtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sumtable` (
  `TList` varchar(50) DEFAULT '',
  `AtZone` varchar(20) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sumtable`
--

LOCK TABLES `sumtable` WRITE;
/*!40000 ALTER TABLE `sumtable` DISABLE KEYS */;
/*!40000 ALTER TABLE `sumtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `surtemp`
--

DROP TABLE IF EXISTS `surtemp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `surtemp` (
  `B_Refno` char(8) NOT NULL DEFAULT '0',
  `S_Date` date NOT NULL,
  `B_CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ontime` char(10) DEFAULT NULL,
  `B_OnDate` date DEFAULT NULL,
  `B_PostDate` date DEFAULT NULL,
  `B_Table` char(5) DEFAULT NULL,
  `B_MacNo` char(3) NOT NULL DEFAULT '',
  `B_Cashier` char(6) DEFAULT NULL,
  `B_Cust` int unsigned NOT NULL DEFAULT '0',
  `B_ETD` char(1) DEFAULT NULL,
  `B_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Food` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Product` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Service` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_MemDisc` char(8) DEFAULT NULL,
  `B_MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SubDisc` char(8) DEFAULT NULL,
  `B_SubDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SubDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_EmpDisc` char(8) DEFAULT NULL,
  `B_EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_EmpDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_FastDisc` char(8) DEFAULT NULL,
  `B_FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_FastDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_TrainDisc` char(8) DEFAULT NULL,
  `B_TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_TrainDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AdjAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetFood` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetDrink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetProduct` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetNonVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Vat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_PayAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Cash` float(10,2) NOT NULL DEFAULT '0.00',
  `B_GiftVoucher` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Earnest` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ton` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrCode1` char(20) DEFAULT NULL,
  `B_CardNo1` char(20) DEFAULT NULL,
  `B_AppCode1` char(6) DEFAULT NULL,
  `B_CrCharge1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrChargeAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCode` char(4) DEFAULT NULL,
  `B_AccrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCr` int unsigned NOT NULL DEFAULT '0',
  `B_MemCode` char(20) DEFAULT NULL,
  `B_MemName` char(40) DEFAULT NULL,
  `B_MemBegin` date DEFAULT NULL,
  `B_MemEnd` date DEFAULT NULL,
  `B_MemCurSum` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Void` char(1) DEFAULT NULL,
  `B_VoidUser` char(6) DEFAULT NULL,
  `B_VoidTime` char(10) DEFAULT NULL,
  `B_BillCopy` int NOT NULL DEFAULT '0',
  `B_PrnCnt` int unsigned NOT NULL DEFAULT '0',
  `B_PrnTime1` char(10) DEFAULT NULL,
  `B_PrnTime2` char(10) DEFAULT NULL,
  `B_UserEndOfDay` char(6) DEFAULT NULL,
  `B_TimeEndOfDay` char(5) DEFAULT NULL,
  `B_DateEndOfDay` date DEFAULT NULL,
  PRIMARY KEY (`S_Date`,`B_MacNo`,`B_Refno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `surtemp`
--

LOCK TABLES `surtemp` WRITE;
/*!40000 ALTER TABLE `surtemp` DISABLE KEYS */;
/*!40000 ALTER TABLE `surtemp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ar`
--

DROP TABLE IF EXISTS `t_ar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_ar` (
  `Ref_No` char(15) NOT NULL DEFAULT '',
  `ArCode` char(4) NOT NULL DEFAULT '',
  `BillNo` char(15) NOT NULL DEFAULT '',
  `BillDate` date DEFAULT NULL,
  `Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `Fat` char(1) NOT NULL DEFAULT '',
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` char(6) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ar`
--

LOCK TABLES `t_ar` WRITE;
/*!40000 ALTER TABLE `t_ar` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_ar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_cashcard`
--

DROP TABLE IF EXISTS `t_cashcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_cashcard` (
  `TDate` date DEFAULT NULL,
  `TTime` time DEFAULT NULL,
  `TTable` varchar(15) DEFAULT NULL,
  `TMacNo` varchar(10) DEFAULT NULL,
  `TCCCode` varchar(20) DEFAULT NULL,
  `TCCUseAmt` float(10,2) DEFAULT NULL,
  `TCashier` varchar(10) DEFAULT NULL,
  `TRRefNo` varchar(10) DEFAULT NULL,
  `TVoid` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_cashcard`
--

LOCK TABLES `t_cashcard` WRITE;
/*!40000 ALTER TABLE `t_cashcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_cashcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_crar`
--

DROP TABLE IF EXISTS `t_crar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_crar` (
  `Ref_No` varchar(15) NOT NULL DEFAULT '0',
  `CrCode` varchar(8) NOT NULL DEFAULT '',
  `CrCnt` int unsigned NOT NULL DEFAULT '0',
  `CrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `Fat` char(1) NOT NULL DEFAULT '',
  `CrId` varchar(20) DEFAULT NULL,
  `CrApp` varchar(8) DEFAULT NULL,
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_crar`
--

LOCK TABLES `t_crar` WRITE;
/*!40000 ALTER TABLE `t_crar` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_crar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_credit`
--

DROP TABLE IF EXISTS `t_credit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_credit` (
  `macno` char(5) DEFAULT NULL,
  `CrCode` varchar(8) DEFAULT NULL,
  `CardNo` varchar(20) DEFAULT NULL,
  `CrApp` varchar(10) DEFAULT NULL,
  `CrAmt` float(10,2) DEFAULT NULL,
  `ondate` date DEFAULT NULL,
  `refno` varchar(8) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `cashier` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '',
  `CrCharge` float(5,2) DEFAULT '0.00',
  `CrChargeAmount` float(8,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_credit`
--

LOCK TABLES `t_credit` WRITE;
/*!40000 ALTER TABLE `t_credit` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_credit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_cupon`
--

DROP TABLE IF EXISTS `t_cupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_cupon` (
  `R_Index` varchar(20) NOT NULL DEFAULT '',
  `R_Refno` varchar(8) NOT NULL DEFAULT '',
  `Terminal` char(3) DEFAULT NULL,
  `Cashier` varchar(6) DEFAULT NULL,
  `Time` varchar(5) DEFAULT NULL,
  `CuCode` char(3) DEFAULT NULL,
  `CuQuan` float(10,0) NOT NULL DEFAULT '0',
  `CuAmt` float(10,2) DEFAULT NULL,
  `Refund` char(1) DEFAULT NULL,
  `CuTextCode` varchar(250) DEFAULT NULL,
  `CuTextComment` varchar(250) DEFAULT NULL,
  `SMS_Code` varchar(25) DEFAULT NULL,
  `B_UserEntertain` float(10,2) DEFAULT NULL,
  `CuEntertainFlag` char(1) DEFAULT NULL,
  `CuEntertainUser` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_cupon`
--

LOCK TABLES `t_cupon` WRITE;
/*!40000 ALTER TABLE `t_cupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_cupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_gift`
--

DROP TABLE IF EXISTS `t_gift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_gift` (
  `ondate` date DEFAULT NULL,
  `macNo` char(3) NOT NULL DEFAULT '',
  `refno` varchar(8) NOT NULL DEFAULT '',
  `cashier` varchar(6) NOT NULL DEFAULT '',
  `giftbarcode` varchar(26) NOT NULL DEFAULT '',
  `gifttype` char(4) DEFAULT NULL,
  `giftprice` char(3) NOT NULL DEFAULT '',
  `giftmodel` char(3) NOT NULL DEFAULT '',
  `giftlot` varchar(5) NOT NULL DEFAULT '',
  `giftexp` varchar(8) NOT NULL DEFAULT '',
  `giftcode` varchar(21) NOT NULL DEFAULT '',
  `giftno` varchar(6) DEFAULT NULL,
  `giftamt` float(10,2) NOT NULL DEFAULT '0.00',
  `fat` char(1) NOT NULL DEFAULT '-'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_gift`
--

LOCK TABLES `t_gift` WRITE;
/*!40000 ALTER TABLE `t_gift` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_gift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_option`
--

DROP TABLE IF EXISTS `t_option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_option` (
  `S_Date` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `RefNo` varchar(8) DEFAULT NULL,
  `R_Table` varchar(5) DEFAULT NULL,
  `R_Index` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `OptIndex` int unsigned DEFAULT NULL,
  `OptName` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_option`
--

LOCK TABLES `t_option` WRITE;
/*!40000 ALTER TABLE `t_option` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_promotion`
--

DROP TABLE IF EXISTS `t_promotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_promotion` (
  `R_Index` varchar(20) NOT NULL DEFAULT '',
  `R_RefNo` varchar(8) NOT NULL DEFAULT '',
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `PrCode` char(3) NOT NULL DEFAULT '',
  `PrType` char(1) DEFAULT NULL,
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PDisc` float(10,2) NOT NULL DEFAULT '0.00',
  `PDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `PQty` float(10,2) NOT NULL DEFAULT '0.00',
  `PrTotalAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `Flage` char(1) NOT NULL DEFAULT '-',
  `CuQuan` float(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_promotion`
--

LOCK TABLES `t_promotion` WRITE;
/*!40000 ALTER TABLE `t_promotion` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_promotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_pset`
--

DROP TABLE IF EXISTS `t_pset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_pset` (
  `PIndex` varchar(20) NOT NULL DEFAULT '',
  `PTable` varchar(10) DEFAULT NULL,
  `RefNo` varchar(8) NOT NULL DEFAULT '',
  `MacNo` char(3) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PSubCode` varchar(13) NOT NULL DEFAULT '',
  `PSubQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PSubTotalQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PVoid` char(1) NOT NULL DEFAULT '-',
  `PStock` char(1) NOT NULL DEFAULT '',
  `PStkCode` char(3) NOT NULL DEFAULT '',
  `PSubPrice` float(13,2) NOT NULL DEFAULT '0.00',
  `PSubName` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_pset`
--

LOCK TABLES `t_pset` WRITE;
/*!40000 ALTER TABLE `t_pset` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_pset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_sale`
--

DROP TABLE IF EXISTS `t_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_sale` (
  `R_Index` varchar(20) NOT NULL DEFAULT '0',
  `R_Refno` varchar(8) NOT NULL DEFAULT '',
  `R_Table` varchar(5) DEFAULT NULL,
  `R_Date` date NOT NULL,
  `R_Time` varchar(10) NOT NULL DEFAULT '',
  `MacNo` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) NOT NULL DEFAULT '',
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` varchar(4) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Total` float(10,2) DEFAULT NULL,
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) DEFAULT NULL,
  `R_PrAmt` float(10,2) DEFAULT NULL,
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_PrCuQuan` float(10,2) DEFAULT NULL,
  `R_PrCuAmt` float(10,2) DEFAULT NULL,
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) DEFAULT NULL,
  `R_PrAdj` float(10,2) DEFAULT NULL,
  `R_PreDisAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_NetTotal` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Refund` char(1) NOT NULL DEFAULT '-',
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_Void` char(1) NOT NULL DEFAULT '-',
  `R_VoidUser` varchar(6) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_ServiceAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_PrChkType2` char(1) DEFAULT NULL,
  `R_PrQuan2` float(10,2) DEFAULT NULL,
  `R_PrType2` char(2) DEFAULT NULL,
  `R_PrCode2` char(3) DEFAULT NULL,
  `R_PrDisc2` float(10,6) DEFAULT NULL,
  `R_PrBath2` float(10,2) DEFAULT NULL,
  `R_PrAmt2` float(10,2) DEFAULT NULL,
  `R_PrAdj2` float(10,2) DEFAULT NULL,
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_SetPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `R_SetDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL,
  `R_Opt9` varchar(40) DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(40) DEFAULT NULL,
  `R_Opt3` varchar(40) DEFAULT NULL,
  `R_Opt4` varchar(40) DEFAULT NULL,
  `R_Opt5` varchar(40) DEFAULT NULL,
  `R_Opt6` varchar(40) DEFAULT NULL,
  `R_Opt7` varchar(40) DEFAULT NULL,
  `R_Opt8` varchar(40) DEFAULT NULL,
  `R_PrintItemBill` char(1) DEFAULT NULL,
  `R_CountTime` char(1) DEFAULT NULL,
  `R_Return` char(1) NOT NULL DEFAULT 'N',
  `R_Earn` char(1) NOT NULL DEFAULT 'N',
  `R_EarnNo` varchar(15) DEFAULT NULL,
  `R_NetDiff` float(10,2) DEFAULT NULL,
  `R_SendOnline` char(1) DEFAULT NULL,
  `R_BranchCode` char(10) DEFAULT NULL,
  `R_CardPay` char(1) DEFAULT NULL,
  PRIMARY KEY (`Cashier`,`MacNo`,`R_Date`,`R_Emp`,`R_Index`,`R_Time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_sale`
--

LOCK TABLES `t_sale` WRITE;
/*!40000 ALTER TABLE `t_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_saleset`
--

DROP TABLE IF EXISTS `t_saleset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_saleset` (
  `R_Index` varchar(20) NOT NULL DEFAULT '0',
  `R_Refno` varchar(8) NOT NULL DEFAULT '',
  `R_Table` varchar(5) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `MacNo` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(40) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` varchar(4) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Total` float(10,2) DEFAULT NULL,
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) DEFAULT NULL,
  `R_PrAmt` float(10,2) DEFAULT NULL,
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_PrCuQuan` float(10,2) DEFAULT NULL,
  `R_PrCuAmt` float(10,2) DEFAULT NULL,
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) DEFAULT NULL,
  `R_PrAdj` float(10,2) DEFAULT NULL,
  `R_PreDisAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_NetTotal` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Refund` char(1) NOT NULL DEFAULT '-',
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_Void` char(1) NOT NULL DEFAULT '-',
  `R_VoidUser` varchar(6) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_ServiceAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_PrChkType2` char(1) DEFAULT NULL,
  `R_PrQuan2` float(10,2) DEFAULT NULL,
  `R_PrType2` char(2) DEFAULT NULL,
  `R_PrCode2` char(3) DEFAULT NULL,
  `R_PrDisc2` float(10,6) DEFAULT NULL,
  `R_PrBath2` float(10,2) DEFAULT NULL,
  `R_PrAmt2` float(10,2) DEFAULT NULL,
  `R_PrAdj2` float(10,2) DEFAULT NULL,
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) NOT NULL DEFAULT '',
  `R_VoidPause` char(1) NOT NULL DEFAULT '',
  `R_SetPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `R_SetDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_saleset`
--

LOCK TABLES `t_saleset` WRITE;
/*!40000 ALTER TABLE `t_saleset` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_saleset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_voucher`
--

DROP TABLE IF EXISTS `t_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_voucher` (
  `MacNo` char(3) DEFAULT NULL,
  `Refno` varchar(10) DEFAULT NULL,
  `Cashier` varchar(10) DEFAULT NULL,
  `VoucherNo` varchar(20) DEFAULT NULL,
  `VoucherQty` float(10,0) NOT NULL DEFAULT '0',
  `VoucherAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `VoucherDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `VoucherOverAmt` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_voucher`
--

LOCK TABLES `t_voucher` WRITE;
/*!40000 ALTER TABLE `t_voucher` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_voucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablefile`
--

DROP TABLE IF EXISTS `tablefile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tablefile` (
  `Tcode` varchar(15) NOT NULL DEFAULT '',
  `SoneCode` char(3) NOT NULL DEFAULT 'N',
  `TLoginDate` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `Cashier` char(30) DEFAULT NULL,
  `TLoginTime` varchar(10) DEFAULT NULL,
  `TCurTime` varchar(10) DEFAULT '',
  `TCustomer` int unsigned NOT NULL DEFAULT '0',
  `TItem` int unsigned NOT NULL DEFAULT '0',
  `TAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `TOnAct` char(1) NOT NULL DEFAULT 'N',
  `Service` float(10,2) NOT NULL DEFAULT '0.00',
  `ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `EmpDisc` varchar(8) DEFAULT NULL,
  `EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `FastDisc` varchar(8) DEFAULT NULL,
  `FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `TrainDisc` varchar(8) DEFAULT NULL,
  `TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemDisc` varchar(8) DEFAULT '',
  `MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SubDisc` varchar(8) DEFAULT '',
  `SubDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `DiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemCode` varchar(20) DEFAULT '',
  `MemCurAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemName` varchar(250) DEFAULT NULL,
  `MemBegin` date DEFAULT NULL,
  `MemEnd` date DEFAULT NULL,
  `Food` float(10,2) NOT NULL DEFAULT '0.00',
  `Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `Product` float(10,2) NOT NULL DEFAULT '0.00',
  `NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintChkBill` char(1) NOT NULL DEFAULT 'N',
  `PrintCnt` int unsigned NOT NULL DEFAULT '0',
  `PrintTime1` varchar(10) DEFAULT NULL,
  `PrintTime2` varchar(10) DEFAULT '',
  `ChkBill` char(1) NOT NULL DEFAULT 'N',
  `ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `StkCode1` char(3) NOT NULL DEFAULT 'N',
  `StkCode2` char(3) NOT NULL DEFAULT 'N',
  `TDesk` int unsigned NOT NULL DEFAULT '0',
  `TUser` varchar(5) DEFAULT NULL,
  `VoidMsg` varchar(250) DEFAULT NULL,
  `TPause` char(1) DEFAULT NULL,
  `CCUseCode` varchar(20) DEFAULT NULL,
  `CCUseAmt` float(10,2) DEFAULT NULL,
  `TTableIsOn` char(1) DEFAULT NULL,
  `TActive` char(1) DEFAULT NULL,
  `TAutoClose` char(1) DEFAULT NULL,
  PRIMARY KEY (`Tcode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablefile`
--

LOCK TABLES `tablefile` WRITE;
/*!40000 ALTER TABLE `tablefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `tablefile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablesetting`
--

DROP TABLE IF EXISTS `tablesetting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tablesetting` (
  `TCode` varchar(15) DEFAULT NULL,
  `CompName` varchar(20) DEFAULT NULL,
  `TName` varchar(30) DEFAULT NULL,
  `TPoint` int unsigned DEFAULT '0',
  `TEnable` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablesetting`
--

LOCK TABLES `tablesetting` WRITE;
/*!40000 ALTER TABLE `tablesetting` DISABLE KEYS */;
/*!40000 ALTER TABLE `tablesetting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tablesetup`
--

DROP TABLE IF EXISTS `tablesetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tablesetup` (
  `Code_ID` varchar(10) DEFAULT NULL,
  `TCode` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tablesetup`
--

LOCK TABLES `tablesetup` WRITE;
/*!40000 ALTER TABLE `tablesetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `tablesetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taxvat`
--

DROP TABLE IF EXISTS `taxvat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taxvat` (
  `ItemNo` int unsigned NOT NULL DEFAULT '0',
  `TDate` date DEFAULT NULL,
  `TDocNo` varchar(25) NOT NULL DEFAULT '-',
  `TVender` varchar(4) NOT NULL DEFAULT '-',
  `TAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `TVat` float(13,2) NOT NULL DEFAULT '0.00',
  `TNat` float(13,2) NOT NULL DEFAULT '0.00',
  `Remark` varchar(5) NOT NULL DEFAULT '-',
  `TRecType` char(1) NOT NULL DEFAULT '-'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taxvat`
--

LOCK TABLES `taxvat` WRITE;
/*!40000 ALTER TABLE `taxvat` DISABLE KEYS */;
/*!40000 ALTER TABLE `taxvat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_balance`
--

DROP TABLE IF EXISTS `temp_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_balance` (
  `R_Index` varchar(10) DEFAULT NULL,
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) DEFAULT NULL,
  `Cashier` varchar(50) DEFAULT NULL,
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `FieldName` tinyint unsigned DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(250) DEFAULT NULL,
  `R_Opt3` varchar(250) DEFAULT NULL,
  `R_Opt4` varchar(250) DEFAULT NULL,
  `R_Opt5` varchar(250) DEFAULT NULL,
  `R_Opt6` varchar(250) DEFAULT NULL,
  `R_Opt7` varchar(250) DEFAULT NULL,
  `R_Opt8` varchar(250) DEFAULT NULL,
  `R_Opt9` varchar(250) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_VoidQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_MovePrint` char(1) NOT NULL DEFAULT 'N',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL,
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_PrintItemBill` char(1) DEFAULT NULL,
  `R_CountTime` char(1) DEFAULT NULL,
  `SoneCode` varchar(100) DEFAULT NULL,
  `R_Earn` char(1) NOT NULL DEFAULT 'N',
  `R_EarnNo` varchar(15) DEFAULT NULL,
  `R_SeparateFrom` char(20) NOT NULL DEFAULT '-',
  `TranType` varchar(10) DEFAULT NULL,
  `PDAPrintCheck` char(1) DEFAULT NULL,
  `PDAEMP` char(15) DEFAULT NULL,
  `R_empName` varchar(50) DEFAULT NULL,
  `R_ServiceAmt` float(13,2) DEFAULT NULL,
  `R_PEName` varchar(150) DEFAULT NULL,
  `R_Indulgent` char(1) DEFAULT NULL,
  `R_CardPay` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_balance`
--

LOCK TABLES `temp_balance` WRITE;
/*!40000 ALTER TABLE `temp_balance` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_balance1`
--

DROP TABLE IF EXISTS `temp_balance1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_balance1` (
  `R_Index` varchar(10) NOT NULL DEFAULT '0',
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) DEFAULT NULL,
  `Cashier` varchar(6) DEFAULT NULL,
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(70) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `FieldName` tinyint unsigned DEFAULT NULL,
  `R_Opt1` varchar(30) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_VoidQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_MovePrint` char(1) NOT NULL DEFAULT 'N',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL,
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_PrintItemBill` char(1) DEFAULT NULL,
  `R_CountTime` char(1) DEFAULT NULL,
  `SoneCode` varchar(100) DEFAULT NULL,
  `R_Earn` char(1) NOT NULL DEFAULT 'N',
  `R_EarnNo` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_balance1`
--

LOCK TABLES `temp_balance1` WRITE;
/*!40000 ALTER TABLE `temp_balance1` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_balance1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_billno`
--

DROP TABLE IF EXISTS `temp_billno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_billno` (
  `B_Refno` varchar(8) DEFAULT NULL,
  `B_CuponDiscAmt` float(10,2) DEFAULT NULL,
  `B_Ontime` varchar(10) DEFAULT NULL,
  `B_LoginTime` varchar(10) DEFAULT NULL,
  `B_OnDate` date DEFAULT NULL,
  `B_PostDate` date DEFAULT NULL,
  `B_Table` varchar(5) DEFAULT NULL,
  `B_MacNo` char(3) DEFAULT NULL,
  `B_Cashier` varchar(6) DEFAULT NULL,
  `B_Cust` int unsigned DEFAULT NULL,
  `B_ETD` char(1) DEFAULT NULL,
  `B_Total` float(10,2) DEFAULT NULL,
  `B_Food` float(10,2) DEFAULT NULL,
  `B_Drink` float(10,2) DEFAULT NULL,
  `B_Product` float(10,2) DEFAULT NULL,
  `B_Service` float(10,2) DEFAULT NULL,
  `B_ServiceAmt` float(10,2) DEFAULT NULL,
  `B_ItemDiscAmt` float(10,2) DEFAULT NULL,
  `B_FastDisc` varchar(8) DEFAULT NULL,
  `B_FastDiscAmt` float(10,2) DEFAULT NULL,
  `B_EmpDisc` varchar(8) DEFAULT NULL,
  `B_EmpDiscAmt` float(10,2) DEFAULT NULL,
  `B_TrainDisc` varchar(8) DEFAULT NULL,
  `B_TrainDiscAmt` float(10,2) DEFAULT NULL,
  `B_MemDisc` varchar(8) DEFAULT NULL,
  `B_MemDiscAmt` float(10,2) DEFAULT NULL,
  `B_SubDisc` varchar(8) DEFAULT NULL,
  `B_SubDiscAmt` float(10,2) DEFAULT NULL,
  `B_SubDiscBath` float(10,2) DEFAULT NULL,
  `B_ProDiscAmt` float(10,2) DEFAULT NULL,
  `B_SpaDiscAmt` float(10,2) DEFAULT NULL,
  `B_AdjAmt` float(10,2) DEFAULT NULL,
  `B_PreDisAmt` float(10,2) DEFAULT NULL,
  `B_NetTotal` float(10,2) DEFAULT NULL,
  `B_NetFood` float(10,2) DEFAULT NULL,
  `B_NetDrink` float(10,2) DEFAULT NULL,
  `B_NetProduct` float(10,2) DEFAULT NULL,
  `B_NetVat` float(10,2) DEFAULT NULL,
  `B_NetNonVat` float(10,2) DEFAULT NULL,
  `B_Vat` float(10,2) DEFAULT NULL,
  `B_PayAmt` float(10,2) DEFAULT NULL,
  `B_Cash` float(10,2) DEFAULT NULL,
  `B_GiftVoucher` float(10,2) DEFAULT NULL,
  `B_Earnest` float(10,2) DEFAULT NULL,
  `B_Ton` float(10,2) DEFAULT NULL,
  `B_CrCode1` varchar(20) DEFAULT NULL,
  `B_CardNo1` varchar(20) DEFAULT NULL,
  `B_AppCode1` varchar(6) DEFAULT NULL,
  `B_CrCharge1` float(10,2) DEFAULT NULL,
  `B_CrChargeAmt1` float(10,2) DEFAULT NULL,
  `B_CrAmt1` float(10,2) DEFAULT NULL,
  `B_AccrCode` varchar(10) DEFAULT NULL,
  `B_AccrAmt` float(10,2) DEFAULT NULL,
  `B_AccrCr` int unsigned DEFAULT NULL,
  `B_MemCode` varchar(20) DEFAULT NULL,
  `B_MemName` varchar(40) DEFAULT NULL,
  `B_MemBegin` date DEFAULT NULL,
  `B_MemEnd` date DEFAULT NULL,
  `B_MemCurSum` float(10,2) DEFAULT NULL,
  `B_Void` char(1) DEFAULT NULL,
  `B_VoidUser` varchar(6) DEFAULT NULL,
  `B_VoidTime` varchar(10) DEFAULT NULL,
  `B_BillCopy` int DEFAULT NULL,
  `B_PrnCnt` int unsigned DEFAULT NULL,
  `B_PrnTime1` varchar(10) DEFAULT NULL,
  `B_PrnTime2` varchar(10) DEFAULT NULL,
  `B_InvNo` varchar(12) DEFAULT NULL,
  `B_InvType` char(1) DEFAULT NULL,
  `B_Bran` char(3) DEFAULT NULL,
  `B_BranName` varchar(30) DEFAULT NULL,
  `B_Tel` varchar(30) DEFAULT NULL,
  `B_RecTime` varchar(10) DEFAULT NULL,
  `MStamp` varchar(20) DEFAULT NULL,
  `MScore` varchar(20) DEFAULT NULL,
  `CurStamp` varchar(20) DEFAULT NULL,
  `StampRate` varchar(20) DEFAULT NULL,
  `B_ChkBill` char(1) DEFAULT NULL,
  `B_ChkBillTime` time DEFAULT NULL,
  `B_CashTime` time DEFAULT NULL,
  `B_WaitTime` time DEFAULT NULL,
  `B_SumScore` float(10,0) DEFAULT NULL,
  `B_CrBank` char(3) DEFAULT NULL,
  `B_CrCardAmt` float(10,2) DEFAULT NULL,
  `B_CrCurPoint` float(10,2) DEFAULT NULL,
  `B_CrSumPoint` float(10,2) DEFAULT NULL,
  `B_Entertain` float(10,2) DEFAULT NULL,
  `B_VoucherDiscAmt` float(10,2) DEFAULT NULL,
  `B_VoucherOver` float(10,2) DEFAULT NULL,
  `B_NetDiff` float(10,2) DEFAULT NULL,
  `B_SumSetDiscAmt` float(10,2) DEFAULT NULL,
  `B_DetailFood` float(10,2) DEFAULT NULL,
  `B_DetailDrink` float(10,2) DEFAULT NULL,
  `B_DetailProduct` float(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_billno`
--

LOCK TABLES `temp_billno` WRITE;
/*!40000 ALTER TABLE `temp_billno` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_billno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_erplot`
--

DROP TABLE IF EXISTS `temp_erplot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_erplot` (
  `LOT_NO` char(15) DEFAULT NULL,
  `DOC_NO` char(20) DEFAULT NULL,
  `SYS_DATE` datetime DEFAULT NULL,
  `DOC_DATE` char(8) DEFAULT NULL,
  `DOC_DELIVERY` char(8) DEFAULT NULL,
  `MATERIALCODE` char(7) DEFAULT NULL,
  `QTY` double(10,2) DEFAULT NULL,
  `QTY_ADJ_TOTAL` double(10,2) DEFAULT NULL,
  `UPD_DATE_ADJ` datetime DEFAULT NULL,
  `LINE_NO` int DEFAULT NULL,
  `InsertDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_erplot`
--

LOCK TABLES `temp_erplot` WRITE;
/*!40000 ALTER TABLE `temp_erplot` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_erplot` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_ingpca`
--

DROP TABLE IF EXISTS `temp_ingpca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_ingpca` (
  `PCode` varchar(16) NOT NULL DEFAULT '',
  `S_Qty` float(14,4) DEFAULT '0.0000',
  `PingCode` varchar(16) DEFAULT '0',
  `PingQty` float(14,4) DEFAULT '0.0000',
  `IdealUnit` float(10,4) DEFAULT '0.0000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_ingpca`
--

LOCK TABLES `temp_ingpca` WRITE;
/*!40000 ALTER TABLE `temp_ingpca` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_ingpca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_inventory`
--

DROP TABLE IF EXISTS `temp_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_inventory` (
  `doc_no` varchar(20) DEFAULT '0',
  `post_date` date DEFAULT NULL,
  `doc_type` varchar(25) DEFAULT NULL,
  `pcode` varchar(20) DEFAULT '0',
  `pgroup` varchar(10) DEFAULT '0',
  `Endding` float(13,4) DEFAULT '0.0000',
  `Recive` float(13,4) DEFAULT '0.0000',
  `Buy` float(13,4) DEFAULT '0.0000',
  `Return1` float(13,4) DEFAULT '0.0000',
  `BranchCode` varchar(5) DEFAULT NULL,
  `InsertDate` date DEFAULT NULL,
  `PostUser` varchar(150) DEFAULT NULL,
  `Waste` double(19,3) DEFAULT '0.000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_inventory`
--

LOCK TABLES `temp_inventory` WRITE;
/*!40000 ALTER TABLE `temp_inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_menusetup`
--

DROP TABLE IF EXISTS `temp_menusetup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_menusetup` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `Code_Type` char(1) NOT NULL DEFAULT 'P',
  `PCode` varchar(15) DEFAULT NULL,
  `ShortName` varchar(80) DEFAULT NULL,
  `PPathName` varchar(200) DEFAULT NULL,
  `PColor` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_menusetup`
--

LOCK TABLES `temp_menusetup` WRITE;
/*!40000 ALTER TABLE `temp_menusetup` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_menusetup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_queue`
--

DROP TABLE IF EXISTS `temp_queue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_queue` (
  `queue_print` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_queue`
--

LOCK TABLES `temp_queue` WRITE;
/*!40000 ALTER TABLE `temp_queue` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_queue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_tablefile`
--

DROP TABLE IF EXISTS `temp_tablefile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_tablefile` (
  `Tcode` varchar(15) NOT NULL DEFAULT '',
  `SoneCode` char(3) NOT NULL DEFAULT 'N',
  `TLoginDate` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `Cashier` char(30) DEFAULT NULL,
  `TLoginTime` varchar(10) DEFAULT NULL,
  `TCurTime` varchar(10) DEFAULT '',
  `TCustomer` int unsigned NOT NULL DEFAULT '0',
  `TItem` int unsigned NOT NULL DEFAULT '0',
  `TAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `TOnAct` char(1) NOT NULL DEFAULT 'N',
  `Service` float(10,2) NOT NULL DEFAULT '0.00',
  `ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `EmpDisc` varchar(8) DEFAULT NULL,
  `EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `FastDisc` varchar(8) DEFAULT NULL,
  `FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `TrainDisc` varchar(8) DEFAULT NULL,
  `TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemDisc` varchar(8) DEFAULT '',
  `MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SubDisc` varchar(8) DEFAULT '',
  `SubDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `DiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemCode` varchar(20) DEFAULT '',
  `MemCurAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemName` varchar(40) DEFAULT '',
  `MemBegin` date DEFAULT NULL,
  `MemEnd` date DEFAULT NULL,
  `Food` float(10,2) NOT NULL DEFAULT '0.00',
  `Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `Product` float(10,2) NOT NULL DEFAULT '0.00',
  `NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintChkBill` char(1) NOT NULL DEFAULT 'N',
  `PrintCnt` int unsigned NOT NULL DEFAULT '0',
  `PrintTime1` varchar(10) DEFAULT NULL,
  `PrintTime2` varchar(10) DEFAULT '',
  `ChkBill` char(1) NOT NULL DEFAULT 'N',
  `ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `StkCode1` char(3) NOT NULL DEFAULT 'N',
  `StkCode2` char(3) NOT NULL DEFAULT 'N',
  `TDesk` int unsigned NOT NULL DEFAULT '0',
  `TUser` varchar(5) DEFAULT NULL,
  `VoidMsg` varchar(250) DEFAULT NULL,
  `TPause` char(1) DEFAULT NULL,
  `CCUseCode` varchar(20) DEFAULT NULL,
  `CCUseAmt` float(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_tablefile`
--

LOCK TABLES `temp_tablefile` WRITE;
/*!40000 ALTER TABLE `temp_tablefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_tablefile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp_viewinventoryafter`
--

DROP TABLE IF EXISTS `temp_viewinventoryafter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temp_viewinventoryafter` (
  `PCode` varchar(20) DEFAULT '0',
  `PDesc` varchar(150) DEFAULT NULL,
  `PGroup` varchar(20) DEFAULT NULL,
  `GroupName` varchar(200) DEFAULT NULL,
  `Unit` varchar(20) DEFAULT NULL,
  `Begin` float(10,2) DEFAULT '0.00',
  `Recive` float(10,2) DEFAULT '0.00',
  `EnddingUnit` float(10,2) DEFAULT '0.00',
  `EnddingTHB` float(10,2) DEFAULT '0.00',
  `ActualUnit` float(10,2) DEFAULT '0.00',
  `IdealUnit` float(10,2) DEFAULT '0.00',
  `VarianceUnit` float(10,2) DEFAULT '0.00',
  `ActualTHB` float(10,2) DEFAULT '0.00',
  `IdealTHB` float(10,2) DEFAULT '0.00',
  `VarianceTHB` float(10,2) DEFAULT '0.00',
  `Return1` double(19,3) DEFAULT '0.000',
  `Waste` double(19,3) DEFAULT '0.000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp_viewinventoryafter`
--

LOCK TABLES `temp_viewinventoryafter` WRITE;
/*!40000 ALTER TABLE `temp_viewinventoryafter` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp_viewinventoryafter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempaccr`
--

DROP TABLE IF EXISTS `tempaccr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempaccr` (
  `ArBran` char(3) NOT NULL DEFAULT '',
  `ArNo` char(15) NOT NULL DEFAULT '',
  `ArDate` date DEFAULT NULL,
  `ArCode` char(10) NOT NULL DEFAULT '',
  `ArTotal` float(10,2) DEFAULT NULL,
  `ArVat` float(10,2) DEFAULT NULL,
  `ArDisc` float(10,2) DEFAULT NULL,
  `ArVatMon` float(10,2) DEFAULT NULL,
  `ArAccNo` char(6) DEFAULT NULL,
  `ArMark` char(1) NOT NULL DEFAULT 'N',
  `ArNet` float(10,2) DEFAULT NULL,
  `ArAmount` float(10,2) DEFAULT NULL,
  `ArCr` int unsigned DEFAULT NULL,
  `arDue` date DEFAULT NULL,
  `ArSale` char(4) DEFAULT NULL,
  `ArRemark` char(50) DEFAULT NULL,
  `ArInvNo` char(12) DEFAULT NULL,
  `ArPayType` char(1) DEFAULT NULL,
  `ArDocBill` char(12) DEFAULT NULL,
  `ArBranPay` char(3) DEFAULT NULL,
  `ArDocPay` char(12) DEFAULT NULL,
  `ArBank` char(6) DEFAULT NULL,
  `ArChqNo` char(20) DEFAULT NULL,
  `ArChqDate` date DEFAULT NULL,
  `ArAmtPay` float(10,2) DEFAULT NULL,
  `ArAmtCr` float(10,2) DEFAULT NULL,
  `ArBDate` date DEFAULT NULL,
  `ArPDate` date DEFAULT NULL,
  `ArUserPay` char(6) DEFAULT NULL,
  `ArFlage` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempaccr`
--

LOCK TABLES `tempaccr` WRITE;
/*!40000 ALTER TABLE `tempaccr` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempaccr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempbillno`
--

DROP TABLE IF EXISTS `tempbillno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempbillno` (
  `B_Refno` varchar(8) NOT NULL DEFAULT '0',
  `B_CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ontime` varchar(10) DEFAULT NULL,
  `B_LoginTime` varchar(10) DEFAULT NULL,
  `B_OnDate` date DEFAULT NULL,
  `B_PostDate` date DEFAULT NULL,
  `B_Table` varchar(5) DEFAULT NULL,
  `B_MacNo` char(3) NOT NULL DEFAULT '',
  `B_Cashier` varchar(6) NOT NULL DEFAULT '',
  `B_Cust` int unsigned NOT NULL DEFAULT '0',
  `B_ETD` char(1) NOT NULL DEFAULT '',
  `B_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Food` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Product` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Service` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_FastDisc` varchar(8) DEFAULT NULL,
  `B_FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_EmpDisc` varchar(8) DEFAULT NULL,
  `B_EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_TrainDisc` varchar(8) DEFAULT NULL,
  `B_TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_MemDisc` varchar(8) DEFAULT NULL,
  `B_MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SubDisc` varchar(8) DEFAULT NULL,
  `B_SubDiscAmt` float(10,2) DEFAULT '0.00',
  `B_SubDiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `B_ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AdjAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_PreDisAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetFood` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetDrink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetProduct` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetNonVat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Vat` float(10,2) NOT NULL DEFAULT '0.00',
  `B_PayAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Cash` float(10,2) NOT NULL DEFAULT '0.00',
  `B_GiftVoucher` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Earnest` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Ton` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrCode1` varchar(20) DEFAULT NULL,
  `B_CardNo1` varchar(20) DEFAULT NULL,
  `B_AppCode1` varchar(6) DEFAULT NULL,
  `B_CrCharge1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrChargeAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrAmt1` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCode` varchar(10) DEFAULT NULL,
  `B_AccrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_AccrCr` int unsigned NOT NULL DEFAULT '0',
  `B_MemCode` varchar(20) DEFAULT NULL,
  `B_MemName` varchar(40) DEFAULT NULL,
  `B_MemBegin` date DEFAULT NULL,
  `B_MemEnd` date DEFAULT NULL,
  `B_MemCurSum` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Void` char(1) NOT NULL DEFAULT '-',
  `B_VoidUser` varchar(6) DEFAULT NULL,
  `B_VoidTime` varchar(10) DEFAULT NULL,
  `B_BillCopy` int NOT NULL DEFAULT '0',
  `B_PrnCnt` int unsigned NOT NULL DEFAULT '0',
  `B_PrnTime1` varchar(10) DEFAULT NULL,
  `B_PrnTime2` varchar(10) DEFAULT NULL,
  `B_InvNo` varchar(12) DEFAULT NULL,
  `B_InvType` char(1) DEFAULT NULL,
  `B_Bran` char(3) DEFAULT NULL,
  `B_BranName` varchar(30) DEFAULT NULL,
  `B_Tel` varchar(30) DEFAULT NULL,
  `B_RecTime` varchar(10) DEFAULT NULL,
  `MStamp` varchar(20) DEFAULT NULL,
  `MScore` varchar(20) DEFAULT NULL,
  `CurStamp` varchar(20) DEFAULT NULL,
  `StampRate` varchar(20) DEFAULT NULL,
  `B_ChkBill` char(1) NOT NULL DEFAULT 'N',
  `B_ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `B_CashTime` time NOT NULL DEFAULT '00:00:00',
  `B_WaitTime` time NOT NULL DEFAULT '00:00:00',
  `B_SumScore` float(10,0) NOT NULL DEFAULT '0',
  `B_CrBank` char(3) DEFAULT NULL,
  `B_CrCardAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrCurPoint` float(10,2) NOT NULL DEFAULT '0.00',
  `B_CrSumPoint` float(10,2) NOT NULL DEFAULT '0.00',
  `B_Entertain` float(10,2) NOT NULL DEFAULT '0.00',
  `B_VoucherDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_VoucherOver` float(10,2) NOT NULL DEFAULT '0.00',
  `B_NetDiff` float(10,2) NOT NULL DEFAULT '0.00',
  `B_SumSetDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `B_DetailFood` float(10,2) NOT NULL DEFAULT '0.00',
  `B_DetailDrink` float(10,2) NOT NULL DEFAULT '0.00',
  `B_DetailProduct` float(10,2) NOT NULL DEFAULT '0.00',
  `B_KicQue` varchar(5) DEFAULT ' ',
  `B_ROUNDCLOSE` char(1) DEFAULT 'N',
  `R_Opt9` varchar(40) DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(40) DEFAULT NULL,
  `R_Opt3` varchar(40) DEFAULT NULL,
  `R_Opt4` varchar(40) DEFAULT NULL,
  `R_Opt5` varchar(40) DEFAULT NULL,
  `R_Opt6` varchar(40) DEFAULT NULL,
  `R_Opt7` varchar(40) DEFAULT NULL,
  `R_Opt8` varchar(40) DEFAULT NULL,
  `VoidMsg` varchar(30) DEFAULT NULL,
  `B_EarnDocNo` varchar(15) DEFAULT NULL,
  `B_UseEarnNo` varchar(15) DEFAULT NULL,
  `B_UserEntertain` varchar(10) DEFAULT NULL,
  `B_SendOnline` char(1) DEFAULT NULL,
  PRIMARY KEY (`B_MacNo`,`B_Refno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempbillno`
--

LOCK TABLES `tempbillno` WRITE;
/*!40000 ALTER TABLE `tempbillno` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempbillno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempcashcard`
--

DROP TABLE IF EXISTS `tempcashcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempcashcard` (
  `TDate` date DEFAULT NULL,
  `TTime` time DEFAULT NULL,
  `TTable` varchar(15) DEFAULT NULL,
  `TMacNo` varchar(10) DEFAULT NULL,
  `TCCCode` varchar(20) DEFAULT NULL,
  `TCCUseAmt` float(10,2) DEFAULT NULL,
  `TCashier` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempcashcard`
--

LOCK TABLES `tempcashcard` WRITE;
/*!40000 ALTER TABLE `tempcashcard` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempcashcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempcashier`
--

DROP TABLE IF EXISTS `tempcashier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempcashier` (
  `ComputerName` varchar(50) NOT NULL DEFAULT '',
  `S_Bran` char(3) NOT NULL DEFAULT '000',
  `T_Date` date DEFAULT NULL,
  `T_CashNo` char(6) NOT NULL DEFAULT '000',
  `DeptSum` float(14,2) NOT NULL DEFAULT '0.00',
  `DSales` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleVat` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleNon` float(14,2) NOT NULL DEFAULT '0.00',
  `SVat` float(14,2) NOT NULL DEFAULT '0.00',
  `PCust` float(6,0) NOT NULL DEFAULT '0',
  `Cust` float(6,0) NOT NULL DEFAULT '0',
  `NCash` float(6,0) NOT NULL DEFAULT '0',
  `Cash` float(14,2) NOT NULL DEFAULT '0.00',
  `NCupon` float(6,0) NOT NULL DEFAULT '0',
  `Cupon` float(14,2) NOT NULL DEFAULT '0.00',
  `NMisc` float(6,0) NOT NULL DEFAULT '0',
  `Misc` float(14,2) NOT NULL DEFAULT '0.00',
  `NEarest` float(6,0) NOT NULL DEFAULT '0',
  `Earest` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidin` float(6,0) NOT NULL DEFAULT '0',
  `Paidin` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidOut` float(6,0) NOT NULL DEFAULT '0',
  `PaidOut` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscB` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscB` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoid` float(6,0) NOT NULL DEFAULT '0',
  `Void` float(14,2) NOT NULL DEFAULT '0.00',
  `NRefund` float(6,0) NOT NULL DEFAULT '0',
  `Refund` float(14,2) NOT NULL DEFAULT '0.00',
  `NGenRefund` float(6,0) NOT NULL DEFAULT '0',
  `GenRefund` float(14,2) NOT NULL DEFAULT '0.00',
  `NItemDisc` float(6,0) NOT NULL DEFAULT '0',
  `ItemDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscY` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscY` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDisc` float(6,0) NOT NULL DEFAULT '0',
  `SubDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscS` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscS` float(14,2) NOT NULL DEFAULT '0.00',
  `NCharge` float(6,0) NOT NULL DEFAULT '0',
  `Charge` float(14,2) NOT NULL DEFAULT '0.00',
  `NService` float(6,0) NOT NULL DEFAULT '0',
  `Service` float(14,2) NOT NULL DEFAULT '0.00',
  `NoSales` float(6,0) NOT NULL DEFAULT '0',
  `T_User` char(6) DEFAULT NULL,
  `TMDate` date DEFAULT NULL,
  `NTrain` float(6,0) NOT NULL DEFAULT '0',
  `DiscTrain` float(14,2) NOT NULL DEFAULT '0.00',
  `NDiscCu` float(6,0) NOT NULL DEFAULT '0',
  `DiscCu` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscPro` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscDayEnd` float(14,2) NOT NULL DEFAULT '0.00',
  `NEatin` float(6,0) NOT NULL DEFAULT '0',
  `Eatin` float(14,2) NOT NULL DEFAULT '0.00',
  `NTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `TakeAway` float(14,2) NOT NULL DEFAULT '0.00',
  `NDelivery` float(6,0) NOT NULL DEFAULT '0',
  `Delivery` float(14,2) NOT NULL DEFAULT '0.00',
  `NPinto` float(6,0) NOT NULL DEFAULT '0',
  `Pinto` float(14,2) NOT NULL DEFAULT '0.00',
  `NWhole` float(6,0) NOT NULL DEFAULT '0',
  `Whole` float(14,2) NOT NULL DEFAULT '0.00',
  `NAr` float(6,0) NOT NULL DEFAULT '0',
  `Ar` float(14,2) NOT NULL DEFAULT '0.00',
  `CEatin` float(6,0) NOT NULL DEFAULT '0',
  `CTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `CDelivery` float(6,0) NOT NULL DEFAULT '0',
  `CPinto` float(6,0) NOT NULL DEFAULT '0',
  `CWhole` float(6,0) NOT NULL DEFAULT '0',
  `EatinNet` float(14,2) NOT NULL DEFAULT '0.00',
  `TakeAWayNet` float(14,2) NOT NULL DEFAULT '0.00',
  `DeliveryNet` float(14,2) NOT NULL DEFAULT '0.00',
  `PintoNet` float(14,2) NOT NULL DEFAULT '0.00',
  `WholeNet` float(14,2) NOT NULL DEFAULT '0.00',
  `NetDiff` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoucher` float(6,0) NOT NULL DEFAULT '0',
  `Voucher` float(14,2) NOT NULL DEFAULT '0.00',
  `SetDiscCnt` float(6,0) NOT NULL DEFAULT '0',
  `SetDiscAmt` float(14,2) NOT NULL DEFAULT '0.00',
  `NEntertain` float(6,0) DEFAULT NULL,
  `Entertain` float(14,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempcashier`
--

LOCK TABLES `tempcashier` WRITE;
/*!40000 ALTER TABLE `tempcashier` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempcashier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempcredit`
--

DROP TABLE IF EXISTS `tempcredit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempcredit` (
  `Mac_No` varchar(50) DEFAULT NULL,
  `S_Date` date DEFAULT NULL,
  `Terminal` char(3) DEFAULT NULL,
  `Ref_No` varchar(15) DEFAULT NULL,
  `CrCode` varchar(8) NOT NULL DEFAULT '',
  `CrId` varchar(20) DEFAULT NULL,
  `CrApp` varchar(10) DEFAULT NULL,
  `CrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CrCharge` float(5,2) DEFAULT '0.00',
  `CrChargeAmount` float(8,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempcredit`
--

LOCK TABLES `tempcredit` WRITE;
/*!40000 ALTER TABLE `tempcredit` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempcredit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempcupon`
--

DROP TABLE IF EXISTS `tempcupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempcupon` (
  `R_Index` varchar(10) NOT NULL DEFAULT '',
  `R_Table` varchar(5) NOT NULL DEFAULT '',
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `Time` varchar(5) NOT NULL DEFAULT '',
  `CuCode` char(3) NOT NULL DEFAULT '',
  `CuQuan` int unsigned NOT NULL DEFAULT '0',
  `CuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `CuDisc` float(10,2) NOT NULL DEFAULT '0.00',
  `CuRedule` float(10,2) NOT NULL DEFAULT '0.00',
  `CuPayment` float(10,2) DEFAULT NULL,
  `CuTextCode` varchar(250) DEFAULT NULL,
  `CuTextComment` varchar(250) DEFAULT NULL,
  `CuEntertainFlag` char(1) DEFAULT NULL,
  `CuEntertainUser` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`R_Index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempcupon`
--

LOCK TABLES `tempcupon` WRITE;
/*!40000 ALTER TABLE `tempcupon` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempcupon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempcustfile`
--

DROP TABLE IF EXISTS `tempcustfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempcustfile` (
  `sp_code` varchar(10) NOT NULL DEFAULT '',
  `sp_Desc` varchar(80) DEFAULT NULL,
  `sp_Addr1` varchar(80) DEFAULT NULL,
  `sp_Addr2` varchar(80) DEFAULT NULL,
  `sp_zip` varchar(5) DEFAULT NULL,
  `Contack` varchar(40) DEFAULT NULL,
  `tel` varchar(25) DEFAULT NULL,
  `fax` varchar(25) DEFAULT NULL,
  `Remark` varchar(50) DEFAULT NULL,
  `sp_Date` date DEFAULT NULL,
  `sp_tax` varchar(15) DEFAULT NULL,
  `sp_cr` int DEFAULT NULL,
  `sp_CrAmt` float(10,2) DEFAULT NULL,
  `LastDate` date DEFAULT NULL,
  PRIMARY KEY (`sp_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempcustfile`
--

LOCK TABLES `tempcustfile` WRITE;
/*!40000 ALTER TABLE `tempcustfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempcustfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempcustrep`
--

DROP TABLE IF EXISTS `tempcustrep`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempcustrep` (
  `S_SPCode` varchar(20) NOT NULL DEFAULT '',
  `NoPayAmtOld` float(13,2) NOT NULL DEFAULT '0.00',
  `SumSaleAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `SumPayAmt` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempcustrep`
--

LOCK TABLES `tempcustrep` WRITE;
/*!40000 ALTER TABLE `tempcustrep` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempcustrep` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempdailysale`
--

DROP TABLE IF EXISTS `tempdailysale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempdailysale` (
  `TGroup` char(3) DEFAULT NULL,
  `TName` varchar(30) DEFAULT NULL,
  `TDate` date DEFAULT NULL,
  `TDay` varchar(40) DEFAULT NULL,
  `TBank` varchar(15) DEFAULT NULL,
  `TQue` int unsigned NOT NULL DEFAULT '0',
  `TCode` varchar(15) DEFAULT NULL,
  `TDept` varchar(4) DEFAULT NULL,
  `TPName` varchar(150) DEFAULT NULL,
  `TDeptName` varchar(150) DEFAULT NULL,
  `TPrice` float(12,2) NOT NULL DEFAULT '0.00',
  `TUnit` varchar(10) DEFAULT NULL,
  `Bran1` float(13,3) NOT NULL DEFAULT '0.000',
  `Bran2` float(13,4) NOT NULL DEFAULT '0.0000',
  `Bran3` float(13,3) NOT NULL DEFAULT '0.000',
  `Bran4` float(13,3) NOT NULL DEFAULT '0.000',
  `Bran5` float(13,3) NOT NULL DEFAULT '0.000',
  `Bran6` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran7` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran8` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran9` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran10` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran11` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran12` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran13` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran14` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran15` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran16` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran17` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran18` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran19` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran20` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran21` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran22` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran23` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran24` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran25` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran26` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran27` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran28` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran29` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran30` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran31` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran32` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran33` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran34` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran35` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran36` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran37` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran38` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran39` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran40` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran41` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran42` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran43` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran44` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran45` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran46` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran47` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran48` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran49` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran50` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran51` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran52` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran53` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran54` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran55` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran56` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran57` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran58` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran59` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran60` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran61` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran62` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran63` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran64` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran65` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran66` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran67` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran68` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran69` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran70` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran71` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran72` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran73` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran74` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran75` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran76` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran77` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran78` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran79` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran80` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran81` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran82` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran83` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran84` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran85` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran86` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran87` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran88` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran89` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran90` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran91` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran92` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran93` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran94` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran95` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran96` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran97` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran98` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran99` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran100` float(13,2) NOT NULL DEFAULT '0.00',
  `Bran101` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempdailysale`
--

LOCK TABLES `tempdailysale` WRITE;
/*!40000 ALTER TABLE `tempdailysale` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempdailysale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempeditqty`
--

DROP TABLE IF EXISTS `tempeditqty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempeditqty` (
  `OnDate` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Emp` varchar(50) DEFAULT NULL,
  `Pcode` varchar(18) DEFAULT NULL,
  `Pdesc` varchar(250) DEFAULT NULL,
  `OldQty` float(10,4) DEFAULT NULL,
  `OldPrice` float(10,4) DEFAULT NULL,
  `NewQty` float(10,4) DEFAULT NULL,
  `NewPrice` float(10,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempeditqty`
--

LOCK TABLES `tempeditqty` WRITE;
/*!40000 ALTER TABLE `tempeditqty` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempeditqty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempeditqtyasdf`
--

DROP TABLE IF EXISTS `tempeditqtyasdf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempeditqtyasdf` (
  `OnDate` date DEFAULT NULL,
  `Time` time DEFAULT NULL,
  `Emp` varchar(50) DEFAULT NULL,
  `Pcode` varchar(18) DEFAULT NULL,
  `Pdesc` varchar(250) DEFAULT NULL,
  `OldQty` float(10,4) DEFAULT NULL,
  `OldPrice` float(10,4) DEFAULT NULL,
  `NewQty` float(10,4) DEFAULT NULL,
  `NewPrice` float(10,4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempeditqtyasdf`
--

LOCK TABLES `tempeditqtyasdf` WRITE;
/*!40000 ALTER TABLE `tempeditqtyasdf` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempeditqtyasdf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temperp_documentdetails`
--

DROP TABLE IF EXISTS `temperp_documentdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temperp_documentdetails` (
  `DOC_TYPE` char(2) DEFAULT NULL,
  `DOC_NO` char(20) DEFAULT NULL,
  `DOC_DATE` char(8) DEFAULT NULL,
  `MAN_ID` char(6) DEFAULT NULL,
  `DOC_DELIVERY` char(8) DEFAULT NULL,
  `MATERIALCODE` char(13) DEFAULT NULL,
  `QTY` float(8,2) DEFAULT NULL,
  `Lot_No` char(15) DEFAULT NULL,
  `LINE_NO` char(10) DEFAULT NULL,
  `updatedate` varchar(50) DEFAULT NULL,
  `insertdate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temperp_documentdetails`
--

LOCK TABLES `temperp_documentdetails` WRITE;
/*!40000 ALTER TABLE `temperp_documentdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `temperp_documentdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temperp_documents`
--

DROP TABLE IF EXISTS `temperp_documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temperp_documents` (
  `DOC_TYPE` char(2) DEFAULT NULL,
  `DOC_NO` char(20) DEFAULT NULL,
  `DOC_DATE` char(8) DEFAULT NULL,
  `MAN_ID` char(6) DEFAULT NULL,
  `DOC_DELIVERY` char(8) DEFAULT NULL,
  `DOC_STATUS` char(1) DEFAULT NULL,
  `UpdateDate` varchar(150) DEFAULT NULL,
  `InsertDate` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temperp_documents`
--

LOCK TABLES `temperp_documents` WRITE;
/*!40000 ALTER TABLE `temperp_documents` DISABLE KEYS */;
/*!40000 ALTER TABLE `temperp_documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempexport`
--

DROP TABLE IF EXISTS `tempexport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempexport` (
  `shipmentno` char(8) DEFAULT NULL,
  `shipmentdate` date DEFAULT NULL,
  `InvoiceNo` char(8) DEFAULT NULL,
  `InvoiceDate` date DEFAULT NULL,
  `CustomerCode` varchar(10) DEFAULT NULL,
  `CustomerName` char(0) DEFAULT NULL,
  `PartNumber` varchar(15) DEFAULT NULL,
  `Inventory` varchar(50) DEFAULT NULL,
  `Location` varchar(10) DEFAULT NULL,
  `Unit` char(10) DEFAULT NULL,
  `Qty` float(10,2) DEFAULT NULL,
  `Price` float(10,2) DEFAULT NULL,
  `Discount` double(23,6) DEFAULT NULL,
  `Amount` float(10,2) DEFAULT NULL,
  `cashamount` float(13,2) DEFAULT NULL,
  `creditcard` float(13,2) DEFAULT NULL,
  `CreditNo` char(16) DEFAULT NULL,
  `Appcode` char(8) DEFAULT NULL,
  `GiftVoucher` float(13,2) DEFAULT NULL,
  `GiftType` char(4) DEFAULT NULL,
  `GiftNo` char(20) DEFAULT NULL,
  `AR` float(13,2) DEFAULT NULL,
  `Arcode` char(13) DEFAULT NULL,
  `UnitRate` bigint DEFAULT NULL,
  `VatType` varchar(1) DEFAULT NULL,
  `BaseVat` double(19,2) DEFAULT NULL,
  `VatRate` float(10,2) DEFAULT NULL,
  `VatAmount` float(10,2) DEFAULT NULL,
  `VatCode` varchar(33) DEFAULT NULL,
  `VatGroup` int DEFAULT NULL,
  `paymenttype` char(2) DEFAULT NULL,
  `bankcode` char(6) DEFAULT NULL,
  `bankbranchcode` char(4) DEFAULT NULL,
  `Mydescription` char(20) DEFAULT NULL,
  `itemName` char(40) DEFAULT NULL,
  `salecode` char(6) DEFAULT NULL,
  `machineno` char(3) DEFAULT NULL,
  `branchcode` char(3) DEFAULT NULL,
  `Prodvender` char(6) DEFAULT NULL,
  `prodgroup` char(4) DEFAULT NULL,
  `Pset` char(1) DEFAULT NULL,
  `pcount` int unsigned DEFAULT NULL,
  `GoodType` bigint DEFAULT NULL,
  `StockFlag` char(1) DEFAULT NULL,
  `CreditCode` char(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempexport`
--

LOCK TABLES `tempexport` WRITE;
/*!40000 ALTER TABLE `tempexport` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempexport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempforsale`
--

DROP TABLE IF EXISTS `tempforsale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempforsale` (
  `TCode` char(5) NOT NULL DEFAULT '',
  `TSale1` float(10,2) NOT NULL DEFAULT '0.00',
  `TSale2` float(10,2) NOT NULL DEFAULT '0.00',
  `TSale3` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempforsale`
--

LOCK TABLES `tempforsale` WRITE;
/*!40000 ALTER TABLE `tempforsale` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempforsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempgift`
--

DROP TABLE IF EXISTS `tempgift`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempgift` (
  `MacNo` char(3) NOT NULL DEFAULT '',
  `giftbarcode` varchar(26) NOT NULL DEFAULT '',
  `gifttype` char(4) DEFAULT NULL,
  `giftprice` char(3) NOT NULL DEFAULT '',
  `giftmodel` char(3) NOT NULL DEFAULT '',
  `giftlot` varchar(5) NOT NULL DEFAULT '',
  `giftexp` varchar(8) NOT NULL DEFAULT '',
  `giftcode` varchar(21) NOT NULL DEFAULT '',
  `giftno` varchar(6) DEFAULT NULL,
  `giftamt` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempgift`
--

LOCK TABLES `tempgift` WRITE;
/*!40000 ALTER TABLE `tempgift` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempgift` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempgift2`
--

DROP TABLE IF EXISTS `tempgift2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempgift2` (
  `S_Date` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `GiftNo` varchar(10) DEFAULT NULL,
  `GiftAmt` float(13,2) DEFAULT NULL,
  `GiftFlag` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempgift2`
--

LOCK TABLES `tempgift2` WRITE;
/*!40000 ALTER TABLE `tempgift2` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempgift2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempgpdetail`
--

DROP TABLE IF EXISTS `tempgpdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempgpdetail` (
  `S_Date` date DEFAULT NULL,
  `S_Bran` char(3) DEFAULT NULL,
  `P_Type` char(3) DEFAULT NULL,
  `P_Code` char(3) DEFAULT NULL,
  `P_Name` varchar(30) DEFAULT NULL,
  `P_Gross` float(12,2) NOT NULL DEFAULT '0.00',
  `P_Qty` float(12,2) NOT NULL DEFAULT '0.00',
  `P_Disc` float(12,2) NOT NULL DEFAULT '0.00',
  `P_Net` float(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempgpdetail`
--

LOCK TABLES `tempgpdetail` WRITE;
/*!40000 ALTER TABLE `tempgpdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempgpdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempgpheader`
--

DROP TABLE IF EXISTS `tempgpheader`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempgpheader` (
  `S_Date` date DEFAULT NULL,
  `S_Bran` char(3) DEFAULT NULL,
  `Dept_Sum` float(12,2) NOT NULL DEFAULT '0.00',
  `Normal_Sale` float(12,2) NOT NULL DEFAULT '0.00',
  `Promotion_Sale` float(12,2) NOT NULL DEFAULT '0.00',
  `Normal_Disc` float(12,2) NOT NULL DEFAULT '0.00',
  `Promotion_Disc` float(12,2) NOT NULL DEFAULT '0.00',
  `Net_Sale` float(12,2) NOT NULL DEFAULT '0.00',
  `Normal_Net` float(12,2) NOT NULL DEFAULT '0.00',
  `Promotion_Net` float(12,2) NOT NULL DEFAULT '0.00',
  `Earnest` float(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempgpheader`
--

LOCK TABLES `tempgpheader` WRITE;
/*!40000 ALTER TABLE `tempgpheader` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempgpheader` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temphourly`
--

DROP TABLE IF EXISTS `temphourly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temphourly` (
  `ComputerName` varchar(50) DEFAULT NULL,
  `TimeSone1` varchar(5) DEFAULT NULL,
  `TimeSone2` varchar(5) DEFAULT NULL,
  `BillQty` float(6,0) DEFAULT NULL,
  `CustQty` float(6,0) DEFAULT NULL,
  `SaleAmount` float(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temphourly`
--

LOCK TABLES `temphourly` WRITE;
/*!40000 ALTER TABLE `temphourly` DISABLE KEYS */;
/*!40000 ALTER TABLE `temphourly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temphourly2`
--

DROP TABLE IF EXISTS `temphourly2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temphourly2` (
  `NumIndex` int unsigned NOT NULL DEFAULT '0',
  `OnTime` varchar(30) DEFAULT NULL,
  `BillCount` varchar(20) DEFAULT NULL,
  `CustCount` varchar(20) DEFAULT NULL,
  `Amount` varchar(20) DEFAULT NULL,
  `Food` varchar(20) DEFAULT NULL,
  `Drink` varchar(20) DEFAULT NULL,
  `Other` varchar(20) DEFAULT NULL,
  `Disc` varchar(20) DEFAULT NULL,
  `Service` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temphourly2`
--

LOCK TABLES `temphourly2` WRITE;
/*!40000 ALTER TABLE `temphourly2` DISABLE KEYS */;
/*!40000 ALTER TABLE `temphourly2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempkic`
--

DROP TABLE IF EXISTS `tempkic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempkic` (
  `Macno` char(3) NOT NULL DEFAULT '',
  `R_Key` varchar(15) NOT NULL DEFAULT '',
  `R_Table` varchar(5) NOT NULL DEFAULT '',
  `R_Emp` varchar(5) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,2) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_Opt1` varchar(120) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_SPEnd` char(1) NOT NULL DEFAULT 'N',
  `R_Void` char(1) DEFAULT '',
  `R_AddItem` char(1) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempkic`
--

LOCK TABLES `tempkic` WRITE;
/*!40000 ALTER TABLE `tempkic` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempkic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempkictran`
--

DROP TABLE IF EXISTS `tempkictran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempkictran` (
  `PCode` varchar(13) DEFAULT NULL,
  `PName` varchar(120) DEFAULT NULL,
  `Rang0` int NOT NULL DEFAULT '0',
  `Rang1` int NOT NULL DEFAULT '0',
  `Rang2` int NOT NULL DEFAULT '0',
  `Rang3` int NOT NULL DEFAULT '0',
  `Rang4` int NOT NULL DEFAULT '0',
  `Rang5` int NOT NULL DEFAULT '0',
  `Rang6` int NOT NULL DEFAULT '0',
  `Rang7` int NOT NULL DEFAULT '0',
  `Rang8` int NOT NULL DEFAULT '0',
  `Rang9` int NOT NULL DEFAULT '0',
  `Rang10` int NOT NULL DEFAULT '0',
  `Rang11` int NOT NULL DEFAULT '0',
  `Rang12` int NOT NULL DEFAULT '0',
  `Rang13` int NOT NULL DEFAULT '0',
  `Rang14` int NOT NULL DEFAULT '0',
  `Rang15` int NOT NULL DEFAULT '0',
  `Rang16` int NOT NULL DEFAULT '0',
  `Rang17` int NOT NULL DEFAULT '0',
  `Rang18` int NOT NULL DEFAULT '0',
  `Rang19` int NOT NULL DEFAULT '0',
  `Rang20` int NOT NULL DEFAULT '0',
  `Rang21` int NOT NULL DEFAULT '0',
  `Rang22` int NOT NULL DEFAULT '0',
  `Rang23` int NOT NULL DEFAULT '0',
  `Rang24` int NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempkictran`
--

LOCK TABLES `tempkictran` WRITE;
/*!40000 ALTER TABLE `tempkictran` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempkictran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempkicvoid`
--

DROP TABLE IF EXISTS `tempkicvoid`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempkicvoid` (
  `Macno` char(3) NOT NULL DEFAULT '',
  `R_Key` varchar(15) NOT NULL DEFAULT '',
  `R_Table` varchar(5) NOT NULL DEFAULT '',
  `R_Emp` varchar(5) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,2) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_Opt1` varchar(30) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_SPEnd` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempkicvoid`
--

LOCK TABLES `tempkicvoid` WRITE;
/*!40000 ALTER TABLE `tempkicvoid` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempkicvoid` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templateorder`
--

DROP TABLE IF EXISTS `templateorder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `templateorder` (
  `R_Line` int unsigned DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_GroupName` varchar(200) DEFAULT NULL,
  `R_PCode` varchar(13) DEFAULT NULL,
  `R_PName` varchar(200) DEFAULT NULL,
  `R_Qty` float(10,3) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EnterDate` date DEFAULT NULL,
  `R_Pack` int DEFAULT NULL,
  `R_PQty` float(10,3) DEFAULT NULL,
  `R_XRecive` float(10,3) NOT NULL DEFAULT '0.000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templateorder`
--

LOCK TABLES `templateorder` WRITE;
/*!40000 ALTER TABLE `templateorder` DISABLE KEYS */;
/*!40000 ALTER TABLE `templateorder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempmem`
--

DROP TABLE IF EXISTS `tempmem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempmem` (
  `M_Code` char(13) NOT NULL DEFAULT '',
  `M_Type` char(2) NOT NULL DEFAULT '00',
  `M_Bran` char(3) NOT NULL DEFAULT '000',
  `M_Name` char(50) DEFAULT NULL,
  `M_Card` char(50) DEFAULT NULL,
  `M_Sex` char(1) NOT NULL DEFAULT 'M',
  `M_Status` char(1) NOT NULL DEFAULT 'S',
  `M_Nation` char(2) NOT NULL DEFAULT '00',
  `M_Occu` char(1) NOT NULL DEFAULT '0',
  `M_InCom` char(1) NOT NULL DEFAULT '0',
  `M_Company` char(50) DEFAULT NULL,
  `M_Addr1` char(15) DEFAULT NULL,
  `M_Addr2` char(30) DEFAULT NULL,
  `M_Addr3` char(30) DEFAULT NULL,
  `M_Addr4` char(30) DEFAULT NULL,
  `M_Addr5` char(30) DEFAULT NULL,
  `M_Addr6` char(30) DEFAULT NULL,
  `M_POST` char(5) DEFAULT NULL,
  `M_Sone` char(1) DEFAULT NULL,
  `M_Tel` char(15) DEFAULT NULL,
  `M_Fax` char(15) DEFAULT NULL,
  `M_Email` char(50) DEFAULT NULL,
  `M_Brid` date DEFAULT NULL,
  `M_Begin` date DEFAULT NULL,
  `M_End` date DEFAULT NULL,
  `M_Disc` float(10,2) NOT NULL DEFAULT '0.00',
  `M_DiscRate` char(8) DEFAULT NULL,
  `M_Wise` char(40) DEFAULT NULL,
  `M_Chai` int DEFAULT NULL,
  `M_Food` char(50) DEFAULT NULL,
  `M_Flag` char(1) NOT NULL DEFAULT 'N',
  `M_Sum` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Clear` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Now` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Cnt` float(10,2) NOT NULL DEFAULT '0.00',
  `M_Last` date DEFAULT NULL,
  `M_Rem1` char(50) DEFAULT NULL,
  `M_Rem2` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempmem`
--

LOCK TABLES `tempmem` WRITE;
/*!40000 ALTER TABLE `tempmem` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempmem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempmenuset`
--

DROP TABLE IF EXISTS `tempmenuset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempmenuset` (
  `PIndex` varchar(20) NOT NULL DEFAULT '',
  `PTable` varchar(5) NOT NULL DEFAULT '',
  `PCode` varchar(30) NOT NULL DEFAULT '',
  `PName` varchar(250) DEFAULT NULL,
  `PQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PStockCode` char(3) NOT NULL DEFAULT '',
  `PVoid` char(1) NOT NULL DEFAULT '-',
  `PSideFreeCode` varchar(13) DEFAULT NULL,
  `PSideFreeName` varchar(250) DEFAULT NULL,
  `PSideFreeQty` float(10,3) DEFAULT '0.000',
  `PEtraCode` varchar(13) DEFAULT NULL,
  `PExtraName` varchar(250) DEFAULT NULL,
  `PExtraQty` float(10,3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempmenuset`
--

LOCK TABLES `tempmenuset` WRITE;
/*!40000 ALTER TABLE `tempmenuset` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempmenuset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempmove`
--

DROP TABLE IF EXISTS `tempmove`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempmove` (
  `PCode` varchar(13) NOT NULL DEFAULT '0',
  `PGroup` varchar(4) NOT NULL DEFAULT '',
  `PDesc` varchar(150) NOT NULL DEFAULT '',
  `PBOM` float(12,3) NOT NULL DEFAULT '0.000',
  `PBUY` float(12,3) NOT NULL DEFAULT '0.000',
  `PREC` float(12,3) NOT NULL DEFAULT '0.000',
  `PTRI` float(12,3) NOT NULL DEFAULT '0.000',
  `PTRO` float(12,3) NOT NULL DEFAULT '0.000',
  `PLOS` float(12,3) NOT NULL DEFAULT '0.000',
  `PFRE` float(12,3) NOT NULL DEFAULT '0.000',
  `PRET` float(12,3) NOT NULL DEFAULT '0.000',
  `PSAL` float(12,3) NOT NULL DEFAULT '0.000',
  `PEOM` float(12,3) NOT NULL DEFAULT '0.000',
  `PADJ` float(12,3) NOT NULL DEFAULT '0.000',
  `PADJAMT` float(12,2) NOT NULL DEFAULT '0.00',
  `PUSER` varchar(6) DEFAULT NULL,
  `PRem` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempmove`
--

LOCK TABLES `tempmove` WRITE;
/*!40000 ALTER TABLE `tempmove` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempmove` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempmoveitem`
--

DROP TABLE IF EXISTS `tempmoveitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempmoveitem` (
  `Macno` char(3) NOT NULL DEFAULT '',
  `R_Key` varchar(15) NOT NULL DEFAULT '',
  `R_FromTable` varchar(5) NOT NULL DEFAULT '',
  `R_ToTable` varchar(5) NOT NULL DEFAULT '',
  `R_Emp` varchar(5) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(200) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,2) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_Opt1` varchar(30) DEFAULT NULL,
  `R_Opt2` varchar(30) DEFAULT NULL,
  `R_Opt3` varchar(30) DEFAULT NULL,
  `R_Opt4` varchar(30) DEFAULT NULL,
  `R_Opt5` varchar(30) DEFAULT NULL,
  `R_Opt6` varchar(30) DEFAULT NULL,
  `R_Opt7` varchar(30) DEFAULT NULL,
  `R_Opt8` varchar(30) DEFAULT NULL,
  `R_Opt9` varchar(30) DEFAULT NULL,
  `PItemNo` int unsigned NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempmoveitem`
--

LOCK TABLES `tempmoveitem` WRITE;
/*!40000 ALTER TABLE `tempmoveitem` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempmoveitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempoption`
--

DROP TABLE IF EXISTS `tempoption`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempoption` (
  `PTable` varchar(10) NOT NULL DEFAULT '',
  `PIndex` varchar(10) NOT NULL DEFAULT '',
  `Pcode` varchar(13) NOT NULL DEFAULT '',
  `PName` varchar(250) NOT NULL DEFAULT '',
  `POption` varchar(250) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempoption`
--

LOCK TABLES `tempoption` WRITE;
/*!40000 ALTER TABLE `tempoption` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempoption` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temppcareport`
--

DROP TABLE IF EXISTS `temppcareport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temppcareport` (
  `PGroup` varchar(50) NOT NULL DEFAULT '',
  `GroupName` varchar(50) NOT NULL DEFAULT '',
  `Gross_Sales` double(19,2) NOT NULL DEFAULT '0.00',
  `Gross_Sale_Mix` double(19,2) NOT NULL DEFAULT '0.00',
  `Net_Sales_THB` double(19,2) NOT NULL DEFAULT '0.00',
  `Actual_Using_THB` double(19,2) DEFAULT NULL,
  `Ideal_THB` double(19,2) DEFAULT NULL,
  `Variance_THB` double(19,2) DEFAULT NULL,
  `Actual_Usage_Per` double(19,2) NOT NULL DEFAULT '0.00',
  `Ideal_Per` double(19,2) NOT NULL DEFAULT '0.00',
  `Variance_Per` double(19,2) NOT NULL DEFAULT '0.00',
  `Waste_THB` double(19,2) DEFAULT '0.00',
  `Waste_Per` double(19,2) DEFAULT '0.00',
  `Return1_THB` double(19,2) DEFAULT '0.00',
  `Return1_Per` double(19,2) DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temppcareport`
--

LOCK TABLES `temppcareport` WRITE;
/*!40000 ALTER TABLE `temppcareport` DISABLE KEYS */;
/*!40000 ALTER TABLE `temppcareport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temppro6list`
--

DROP TABLE IF EXISTS `temppro6list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temppro6list` (
  `MacNo` char(3) NOT NULL DEFAULT '',
  `TableNo` varchar(15) NOT NULL DEFAULT '',
  `ProCode` char(3) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQuan` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temppro6list`
--

LOCK TABLES `temppro6list` WRITE;
/*!40000 ALTER TABLE `temppro6list` DISABLE KEYS */;
/*!40000 ALTER TABLE `temppro6list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temppromotion`
--

DROP TABLE IF EXISTS `temppromotion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temppromotion` (
  `TableNo` varchar(5) NOT NULL DEFAULT '',
  `PrCode` char(3) NOT NULL DEFAULT '',
  `PrType` char(3) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PrTotalAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuQuan` float(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temppromotion`
--

LOCK TABLES `temppromotion` WRITE;
/*!40000 ALTER TABLE `temppromotion` DISABLE KEYS */;
/*!40000 ALTER TABLE `temppromotion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temppset`
--

DROP TABLE IF EXISTS `temppset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temppset` (
  `PIndex` varchar(20) NOT NULL DEFAULT '',
  `PTable` varchar(5) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PSubCode` varchar(13) NOT NULL DEFAULT '',
  `TryPro` char(1) DEFAULT '-',
  `PSubQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PSubTotalQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PStock` char(1) NOT NULL DEFAULT 'N',
  `PVoid` char(1) NOT NULL DEFAULT '-',
  `PStkCode` char(3) NOT NULL DEFAULT '',
  `PSubPrice` float(13,2) NOT NULL DEFAULT '0.00',
  `PSubName` varchar(200) DEFAULT NULL,
  `POpt1` varchar(30) DEFAULT NULL,
  `POpt2` varchar(30) DEFAULT NULL,
  `POpt3` varchar(30) DEFAULT NULL,
  `POpt4` varchar(30) DEFAULT NULL,
  `POpt5` varchar(30) DEFAULT NULL,
  `POpt6` varchar(30) DEFAULT NULL,
  `POpt7` varchar(30) DEFAULT NULL,
  `POpt8` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temppset`
--

LOCK TABLES `temppset` WRITE;
/*!40000 ALTER TABLE `temppset` DISABLE KEYS */;
/*!40000 ALTER TABLE `temppset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempreserve`
--

DROP TABLE IF EXISTS `tempreserve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempreserve` (
  `CompName` varchar(30) DEFAULT '',
  `RCode` varchar(10) DEFAULT NULL,
  `RDate` date DEFAULT NULL,
  `RTime` time NOT NULL DEFAULT '00:00:00',
  `CName` varchar(50) DEFAULT '',
  `CQty` int unsigned DEFAULT '0',
  `UCode` varchar(10) DEFAULT NULL,
  `TList` varchar(30) DEFAULT NULL,
  `RRemark` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempreserve`
--

LOCK TABLES `tempreserve` WRITE;
/*!40000 ALTER TABLE `tempreserve` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempreserve` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempsaleperhour`
--

DROP TABLE IF EXISTS `tempsaleperhour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempsaleperhour` (
  `ComputerName` varchar(50) DEFAULT NULL,
  `TimeIndex` int unsigned NOT NULL DEFAULT '0',
  `TimeZone` varchar(14) DEFAULT NULL,
  `TotalE` float(10,2) NOT NULL DEFAULT '0.00',
  `TotalT` float(10,2) NOT NULL DEFAULT '0.00',
  `TotalS` float(10,2) NOT NULL DEFAULT '0.00',
  `NetE` float(10,2) NOT NULL DEFAULT '0.00',
  `NetT` float(10,2) NOT NULL DEFAULT '0.00',
  `NetS` float(10,2) NOT NULL DEFAULT '0.00',
  `BillE` float(10,2) NOT NULL DEFAULT '0.00',
  `BillT` float(10,2) NOT NULL DEFAULT '0.00',
  `BillS` float(10,2) NOT NULL DEFAULT '0.00',
  `CustE` float(10,2) NOT NULL DEFAULT '0.00',
  `CustT` float(10,2) NOT NULL DEFAULT '0.00',
  `CustS` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempsaleperhour`
--

LOCK TABLES `tempsaleperhour` WRITE;
/*!40000 ALTER TABLE `tempsaleperhour` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempsaleperhour` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempsalerep1`
--

DROP TABLE IF EXISTS `tempsalerep1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempsalerep1` (
  `S_Date` date DEFAULT NULL,
  `SumBran` char(80) NOT NULL DEFAULT '',
  `TranType` varchar(20) DEFAULT NULL,
  `TranDetail` varchar(50) DEFAULT NULL,
  `ProductDetail` varchar(80) DEFAULT NULL,
  `ProductDetail2` varchar(30) DEFAULT NULL,
  `SUMQty` float(13,2) NOT NULL DEFAULT '0.00',
  `SUMAmt` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempsalerep1`
--

LOCK TABLES `tempsalerep1` WRITE;
/*!40000 ALTER TABLE `tempsalerep1` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempsalerep1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempsalerep2`
--

DROP TABLE IF EXISTS `tempsalerep2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempsalerep2` (
  `S_Date` date DEFAULT NULL,
  `SumBran` char(80) NOT NULL DEFAULT '',
  `TranType` varchar(20) DEFAULT NULL,
  `TranDetail` varchar(80) DEFAULT NULL,
  `ProductDetail` varchar(80) DEFAULT NULL,
  `ProductDetail2` varchar(30) DEFAULT NULL,
  `SUMQty` varchar(30) NOT NULL DEFAULT '',
  `SUMAmt` varchar(30) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempsalerep2`
--

LOCK TABLES `tempsalerep2` WRITE;
/*!40000 ALTER TABLE `tempsalerep2` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempsalerep2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempsalerep2detail`
--

DROP TABLE IF EXISTS `tempsalerep2detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempsalerep2detail` (
  `SetType` int unsigned DEFAULT NULL,
  `SetCode` varchar(100) DEFAULT NULL,
  `SetName` varchar(200) DEFAULT NULL,
  `SetCount` float(10,0) DEFAULT NULL,
  `SetPrice` float(13,2) DEFAULT NULL,
  `SetAmount` float(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempsalerep2detail`
--

LOCK TABLES `tempsalerep2detail` WRITE;
/*!40000 ALTER TABLE `tempsalerep2detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempsalerep2detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempset`
--

DROP TABLE IF EXISTS `tempset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempset` (
  `PTableNo` varchar(10) NOT NULL DEFAULT '',
  `PIndex` varchar(10) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PDesc` varchar(250) NOT NULL DEFAULT '',
  `PPostStock` char(3) NOT NULL DEFAULT '',
  `PProTry` varchar(10) NOT NULL DEFAULT '',
  `POption` varchar(250) DEFAULT '-',
  `PTime` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempset`
--

LOCK TABLES `tempset` WRITE;
/*!40000 ALTER TABLE `tempset` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempspecialrep1`
--

DROP TABLE IF EXISTS `tempspecialrep1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempspecialrep1` (
  `ComName` varchar(50) NOT NULL DEFAULT '',
  `TDate` date DEFAULT NULL,
  `Group1` float(10,2) NOT NULL DEFAULT '0.00',
  `Group2` float(10,2) NOT NULL DEFAULT '0.00',
  `Group3` float(10,2) NOT NULL DEFAULT '0.00',
  `Group4` float(10,2) NOT NULL DEFAULT '0.00',
  `Group5` float(10,2) NOT NULL DEFAULT '0.00',
  `Group6` float(10,2) NOT NULL DEFAULT '0.00',
  `Other` float(10,2) NOT NULL DEFAULT '0.00',
  `Total` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempspecialrep1`
--

LOCK TABLES `tempspecialrep1` WRITE;
/*!40000 ALTER TABLE `tempspecialrep1` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempspecialrep1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempspecialrep2`
--

DROP TABLE IF EXISTS `tempspecialrep2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempspecialrep2` (
  `ComName` varchar(50) NOT NULL DEFAULT '',
  `MType` varchar(50) NOT NULL DEFAULT '',
  `PGroup` varchar(50) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PReferent` varchar(15) NOT NULL DEFAULT '',
  `PName` varchar(50) DEFAULT NULL,
  `Quan` float(10,2) NOT NULL DEFAULT '0.00',
  `Price` float(10,2) NOT NULL DEFAULT '0.00',
  `Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `TotalCost` float(10,2) NOT NULL DEFAULT '0.00',
  `Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `GPUnit` float(10,2) NOT NULL DEFAULT '0.00',
  `GPBath` float(10,2) NOT NULL DEFAULT '0.00',
  `GPPer` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempspecialrep2`
--

LOCK TABLES `tempspecialrep2` WRITE;
/*!40000 ALTER TABLE `tempspecialrep2` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempspecialrep2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempspecialrep3`
--

DROP TABLE IF EXISTS `tempspecialrep3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempspecialrep3` (
  `ComName` varchar(50) NOT NULL DEFAULT '',
  `MWeek` varchar(15) NOT NULL DEFAULT '',
  `TDate` varchar(10) NOT NULL DEFAULT '',
  `MDay` varchar(10) NOT NULL DEFAULT '',
  `MDate` varchar(20) NOT NULL DEFAULT '',
  `Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `G1Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G1Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G1Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G2Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G2Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G2Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G3Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G3Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G3Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G4Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G4Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G4Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G5Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G5Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G5Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G6Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G6Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G6Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G7Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G7Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G7Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G8Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G8Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G8Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G9Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G9Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G9Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G10Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G10Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G10Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G11Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G11Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G11Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G12Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G12Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G12Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G13Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G13Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G13Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G14Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G14Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G14Price` float(10,2) NOT NULL DEFAULT '0.00',
  `G15Qty` float(10,2) NOT NULL DEFAULT '0.00',
  `G15Amt` float(10,2) NOT NULL DEFAULT '0.00',
  `G15Price` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempspecialrep3`
--

LOCK TABLES `tempspecialrep3` WRITE;
/*!40000 ALTER TABLE `tempspecialrep3` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempspecialrep3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempt_sale`
--

DROP TABLE IF EXISTS `tempt_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempt_sale` (
  `R_Index` varchar(20) NOT NULL DEFAULT '0',
  `R_Refno` varchar(8) NOT NULL DEFAULT '',
  `R_Table` varchar(5) DEFAULT NULL,
  `R_Date` date NOT NULL,
  `R_Time` varchar(10) NOT NULL DEFAULT '',
  `MacNo` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT '',
  `R_Emp` varchar(6) NOT NULL DEFAULT '',
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` varchar(4) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_Total` float(10,2) DEFAULT NULL,
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) DEFAULT NULL,
  `R_PrAmt` float(10,2) DEFAULT NULL,
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_PrCuQuan` float(10,2) DEFAULT NULL,
  `R_PrCuAmt` float(10,2) DEFAULT NULL,
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) DEFAULT NULL,
  `R_PrAdj` float(10,2) DEFAULT NULL,
  `R_PreDisAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_NetTotal` float(10,2) DEFAULT NULL,
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Refund` char(1) NOT NULL DEFAULT '-',
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_Void` char(1) NOT NULL DEFAULT '-',
  `R_VoidUser` varchar(6) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_ServiceAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_PrChkType2` char(1) DEFAULT NULL,
  `R_PrQuan2` float(10,2) DEFAULT NULL,
  `R_PrType2` char(2) DEFAULT NULL,
  `R_PrCode2` char(3) DEFAULT NULL,
  `R_PrDisc2` float(10,6) DEFAULT NULL,
  `R_PrBath2` float(10,2) DEFAULT NULL,
  `R_PrAmt2` float(10,2) DEFAULT NULL,
  `R_PrAdj2` float(10,2) DEFAULT NULL,
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_SetPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `R_SetDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL,
  `R_Opt9` varchar(40) DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(40) DEFAULT NULL,
  `R_Opt3` varchar(40) DEFAULT NULL,
  `R_Opt4` varchar(40) DEFAULT NULL,
  `R_Opt5` varchar(40) DEFAULT NULL,
  `R_Opt6` varchar(40) DEFAULT NULL,
  `R_Opt7` varchar(40) DEFAULT NULL,
  `R_Opt8` varchar(40) DEFAULT NULL,
  `R_PrintItemBill` char(1) DEFAULT NULL,
  `R_CountTime` char(1) DEFAULT NULL,
  `R_Return` char(1) NOT NULL DEFAULT 'N',
  `R_Earn` char(1) NOT NULL DEFAULT 'N',
  `R_EarnNo` varchar(15) DEFAULT NULL,
  `R_NetDiff` float(10,2) DEFAULT NULL,
  `R_SendOnline` char(1) DEFAULT NULL,
  `R_BranchCode` char(10) DEFAULT NULL,
  `R_CardPay` char(1) DEFAULT NULL,
  PRIMARY KEY (`Cashier`,`MacNo`,`R_Date`,`R_Emp`,`R_Index`,`R_Time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempt_sale`
--

LOCK TABLES `tempt_sale` WRITE;
/*!40000 ALTER TABLE `tempt_sale` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempt_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempterminal`
--

DROP TABLE IF EXISTS `tempterminal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempterminal` (
  `ComputerName` varchar(50) NOT NULL DEFAULT '',
  `S_Bran` char(3) NOT NULL DEFAULT '000',
  `T_Date` date DEFAULT NULL,
  `T_MacNo` char(3) NOT NULL DEFAULT '000',
  `DeptSum` float(14,2) NOT NULL DEFAULT '0.00',
  `DSales` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleVat` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleNon` float(14,2) NOT NULL DEFAULT '0.00',
  `SVat` float(14,2) NOT NULL DEFAULT '0.00',
  `PCust` float(6,0) NOT NULL DEFAULT '0',
  `Cust` float(6,0) NOT NULL DEFAULT '0',
  `NCash` float(6,0) NOT NULL DEFAULT '0',
  `Cash` float(14,2) NOT NULL DEFAULT '0.00',
  `NCupon` float(6,0) NOT NULL DEFAULT '0',
  `Cupon` float(14,2) NOT NULL DEFAULT '0.00',
  `NMisc` float(6,0) NOT NULL DEFAULT '0',
  `Misc` float(14,2) NOT NULL DEFAULT '0.00',
  `NEarest` float(6,0) NOT NULL DEFAULT '0',
  `Earest` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidin` float(6,0) NOT NULL DEFAULT '0',
  `Paidin` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidOut` float(6,0) NOT NULL DEFAULT '0',
  `PaidOut` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscB` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscB` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoid` float(6,0) NOT NULL DEFAULT '0',
  `Void` float(14,2) NOT NULL DEFAULT '0.00',
  `NRefund` float(6,0) NOT NULL DEFAULT '0',
  `Refund` float(14,2) NOT NULL DEFAULT '0.00',
  `NGenRefund` float(6,0) NOT NULL DEFAULT '0',
  `GenRefund` float(14,2) NOT NULL DEFAULT '0.00',
  `NItemDisc` float(6,0) NOT NULL DEFAULT '0',
  `ItemDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscY` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscY` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDisc` float(6,0) NOT NULL DEFAULT '0',
  `SubDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscS` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscS` float(14,2) NOT NULL DEFAULT '0.00',
  `NCharge` float(6,0) NOT NULL DEFAULT '0',
  `Charge` float(14,2) NOT NULL DEFAULT '0.00',
  `NService` float(6,0) NOT NULL DEFAULT '0',
  `Service` float(14,2) NOT NULL DEFAULT '0.00',
  `NoSales` float(6,0) NOT NULL DEFAULT '0',
  `T_User` char(6) DEFAULT NULL,
  `TMDate` date DEFAULT NULL,
  `NTrain` float(6,0) NOT NULL DEFAULT '0',
  `DiscTrain` float(14,2) NOT NULL DEFAULT '0.00',
  `NDiscCu` float(6,0) NOT NULL DEFAULT '0',
  `DiscCu` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscPro` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscDayEnd` float(14,2) NOT NULL DEFAULT '0.00',
  `NEatin` float(6,0) NOT NULL DEFAULT '0',
  `Eatin` float(14,2) NOT NULL DEFAULT '0.00',
  `NTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `TakeAway` float(14,2) NOT NULL DEFAULT '0.00',
  `NDelivery` float(6,0) NOT NULL DEFAULT '0',
  `Delivery` float(14,2) NOT NULL DEFAULT '0.00',
  `NPinto` float(6,0) NOT NULL DEFAULT '0',
  `Pinto` float(14,2) NOT NULL DEFAULT '0.00',
  `NWhole` float(6,0) NOT NULL DEFAULT '0',
  `Whole` float(14,2) NOT NULL DEFAULT '0.00',
  `NAr` float(6,0) NOT NULL DEFAULT '0',
  `Ar` float(14,2) NOT NULL DEFAULT '0.00',
  `CEatin` float(6,0) NOT NULL DEFAULT '0',
  `CTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `CDelivery` float(6,0) NOT NULL DEFAULT '0',
  `CPinto` float(6,0) NOT NULL DEFAULT '0',
  `CWhole` float(6,0) NOT NULL DEFAULT '0',
  `EatinNet` float(14,2) NOT NULL DEFAULT '0.00',
  `TakeAWayNet` float(14,2) NOT NULL DEFAULT '0.00',
  `DeliveryNet` float(14,2) NOT NULL DEFAULT '0.00',
  `PintoNet` float(14,2) NOT NULL DEFAULT '0.00',
  `WholeNet` float(14,2) NOT NULL DEFAULT '0.00',
  `NetDiff` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoucher` float(6,0) NOT NULL DEFAULT '0',
  `Voucher` float(14,2) NOT NULL DEFAULT '0.00',
  `SetDiscCnt` float(6,0) NOT NULL DEFAULT '0',
  `SetDiscAmt` float(14,2) NOT NULL DEFAULT '0.00',
  `NEntertain` float(6,0) DEFAULT NULL,
  `Entertain` float(14,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempterminal`
--

LOCK TABLES `tempterminal` WRITE;
/*!40000 ALTER TABLE `tempterminal` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempterminal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temptopsale`
--

DROP TABLE IF EXISTS `temptopsale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `temptopsale` (
  `ComputerName` varchar(50) NOT NULL DEFAULT '0',
  `R_Group` varchar(4) NOT NULL DEFAULT '',
  `ItemNo` int unsigned NOT NULL DEFAULT '0',
  `Terminal` varchar(10) NOT NULL DEFAULT '',
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `TTime` varchar(8) DEFAULT NULL,
  `R_PName` varchar(40) DEFAULT NULL,
  `R_Quan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_BillNo` varchar(8) DEFAULT NULL,
  `R_Table` varchar(5) DEFAULT NULL,
  `R_Emp` varchar(10) DEFAULT NULL,
  `MacNo` varchar(3) DEFAULT NULL,
  `Cashier` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temptopsale`
--

LOCK TABLES `temptopsale` WRITE;
/*!40000 ALTER TABLE `temptopsale` DISABLE KEYS */;
/*!40000 ALTER TABLE `temptopsale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tempvoucher`
--

DROP TABLE IF EXISTS `tempvoucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tempvoucher` (
  `MacNo` char(3) DEFAULT NULL,
  `TTable` varchar(10) DEFAULT NULL,
  `Cashier` varchar(10) DEFAULT NULL,
  `VoucherNo` varchar(20) DEFAULT NULL,
  `VoucherQty` float(10,0) NOT NULL DEFAULT '0',
  `VoucherAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `VoucherDiscAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `VoucherOverAmt` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tempvoucher`
--

LOCK TABLES `tempvoucher` WRITE;
/*!40000 ALTER TABLE `tempvoucher` DISABLE KEYS */;
/*!40000 ALTER TABLE `tempvoucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terminal`
--

DROP TABLE IF EXISTS `terminal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terminal` (
  `S_Bran` char(3) NOT NULL DEFAULT '000',
  `T_Date` date DEFAULT NULL,
  `T_MacNo` char(3) NOT NULL DEFAULT '000',
  `DeptSum` float(14,2) NOT NULL DEFAULT '0.00',
  `DSales` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleVat` float(14,2) NOT NULL DEFAULT '0.00',
  `SaleNon` float(14,2) NOT NULL DEFAULT '0.00',
  `SVat` float(14,2) NOT NULL DEFAULT '0.00',
  `PCust` float(6,0) NOT NULL DEFAULT '0',
  `Cust` float(6,0) NOT NULL DEFAULT '0',
  `NCash` float(6,0) NOT NULL DEFAULT '0',
  `Cash` float(14,2) NOT NULL DEFAULT '0.00',
  `NCupon` float(6,0) NOT NULL DEFAULT '0',
  `Cupon` float(14,2) NOT NULL DEFAULT '0.00',
  `NMisc` float(6,0) NOT NULL DEFAULT '0',
  `Misc` float(14,2) NOT NULL DEFAULT '0.00',
  `NEarest` float(6,0) NOT NULL DEFAULT '0',
  `Earest` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidin` float(6,0) NOT NULL DEFAULT '0',
  `Paidin` float(14,2) NOT NULL DEFAULT '0.00',
  `NPaidOut` float(6,0) NOT NULL DEFAULT '0',
  `PaidOut` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscB` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscB` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoid` float(6,0) NOT NULL DEFAULT '0',
  `Void` float(14,2) NOT NULL DEFAULT '0.00',
  `NRefund` float(6,0) NOT NULL DEFAULT '0',
  `Refund` float(14,2) NOT NULL DEFAULT '0.00',
  `NGenRefund` float(6,0) NOT NULL DEFAULT '0',
  `GenRefund` float(14,2) NOT NULL DEFAULT '0.00',
  `NItemDisc` float(6,0) NOT NULL DEFAULT '0',
  `ItemDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscY` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscY` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDisc` float(6,0) NOT NULL DEFAULT '0',
  `SubDisc` float(14,2) NOT NULL DEFAULT '0.00',
  `NSubDiscS` float(6,0) NOT NULL DEFAULT '0',
  `SubDiscS` float(14,2) NOT NULL DEFAULT '0.00',
  `NCharge` float(6,0) NOT NULL DEFAULT '0',
  `Charge` float(14,2) NOT NULL DEFAULT '0.00',
  `NService` float(6,0) NOT NULL DEFAULT '0',
  `Service` float(14,2) NOT NULL DEFAULT '0.00',
  `NoSales` float(6,0) NOT NULL DEFAULT '0',
  `T_User` char(6) DEFAULT NULL,
  `TMDate` date DEFAULT NULL,
  `NTrain` float(6,0) NOT NULL DEFAULT '0',
  `DiscTrain` float(14,2) NOT NULL DEFAULT '0.00',
  `NDiscCu` float(6,0) NOT NULL DEFAULT '0',
  `DiscCu` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscPro` float(14,2) NOT NULL DEFAULT '0.00',
  `DiscDayEnd` float(14,2) NOT NULL DEFAULT '0.00',
  `NEatin` float(6,0) NOT NULL DEFAULT '0',
  `Eatin` float(14,2) NOT NULL DEFAULT '0.00',
  `NTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `TakeAway` float(14,2) NOT NULL DEFAULT '0.00',
  `NDelivery` float(6,0) NOT NULL DEFAULT '0',
  `Delivery` float(14,2) NOT NULL DEFAULT '0.00',
  `NPinto` float(6,0) NOT NULL DEFAULT '0',
  `Pinto` float(14,2) NOT NULL DEFAULT '0.00',
  `NWhole` float(6,0) NOT NULL DEFAULT '0',
  `Whole` float(14,2) NOT NULL DEFAULT '0.00',
  `NAr` float(6,0) NOT NULL DEFAULT '0',
  `Ar` float(14,2) NOT NULL DEFAULT '0.00',
  `CEatin` float(6,0) NOT NULL DEFAULT '0',
  `CTakeAway` float(6,0) NOT NULL DEFAULT '0',
  `CDelivery` float(6,0) NOT NULL DEFAULT '0',
  `CPinto` float(6,0) NOT NULL DEFAULT '0',
  `CWhole` float(6,0) NOT NULL DEFAULT '0',
  `EatinNet` float(14,2) NOT NULL DEFAULT '0.00',
  `TakeAWayNet` float(14,2) NOT NULL DEFAULT '0.00',
  `DeliveryNet` float(14,2) NOT NULL DEFAULT '0.00',
  `PintoNet` float(14,2) NOT NULL DEFAULT '0.00',
  `WholeNet` float(14,2) NOT NULL DEFAULT '0.00',
  `NEntertain` float(6,0) NOT NULL DEFAULT '0',
  `Entertain` float(14,2) NOT NULL DEFAULT '0.00',
  `NVoucher` float(6,0) NOT NULL DEFAULT '0',
  `Voucher` float(14,2) NOT NULL DEFAULT '0.00',
  `NetDiff` float(14,2) NOT NULL DEFAULT '0.00',
  `SetDiscCnt` float(6,0) NOT NULL DEFAULT '0',
  `SetDiscAmt` float(14,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terminal`
--

LOCK TABLES `terminal` WRITE;
/*!40000 ALTER TABLE `terminal` DISABLE KEYS */;
/*!40000 ALTER TABLE `terminal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `Code` varchar(15) DEFAULT '0',
  `Name` varchar(50) DEFAULT NULL,
  `Position` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test2`
--

DROP TABLE IF EXISTS `test2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test2` (
  `Code` varchar(15) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Position` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test2`
--

LOCK TABLES `test2` WRITE;
/*!40000 ALTER TABLE `test2` DISABLE KEYS */;
/*!40000 ALTER TABLE `test2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test_table`
--

DROP TABLE IF EXISTS `test_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test_table` (
  `Code` char(15) DEFAULT '0',
  `Name` char(50) DEFAULT NULL,
  `Position` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test_table`
--

LOCK TABLES `test_table` WRITE;
/*!40000 ALTER TABLE `test_table` DISABLE KEYS */;
/*!40000 ALTER TABLE `test_table` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tmp_balance`
--

DROP TABLE IF EXISTS `tmp_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_balance` (
  `R_Index` varchar(10) DEFAULT NULL,
  `R_Table` varchar(15) NOT NULL DEFAULT '',
  `R_Date` date DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `Macno` char(3) DEFAULT NULL,
  `Cashier` varchar(50) DEFAULT NULL,
  `R_Emp` varchar(6) DEFAULT NULL,
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_PName` varchar(120) DEFAULT NULL,
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Group` varchar(4) DEFAULT NULL,
  `R_Status` char(1) DEFAULT NULL,
  `R_Normal` char(1) DEFAULT NULL,
  `R_Discount` char(1) DEFAULT NULL,
  `R_Service` char(1) DEFAULT NULL,
  `R_Stock` char(1) DEFAULT NULL,
  `R_Set` char(1) DEFAULT NULL,
  `R_Vat` char(1) DEFAULT NULL,
  `R_Type` char(1) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL,
  `R_Quan` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Price` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Total` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrType` char(2) DEFAULT NULL,
  `R_PrCode` char(3) DEFAULT NULL,
  `R_PrDisc` float(10,6) DEFAULT NULL,
  `R_PrBath` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_DiscBath` float(12,6) NOT NULL DEFAULT '0.000000',
  `R_PrCuType` char(2) DEFAULT NULL,
  `R_PrCuQuan` float(10,0) NOT NULL DEFAULT '0',
  `R_PrCuAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Redule` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Kic` char(1) DEFAULT NULL,
  `R_KicPrint` char(1) DEFAULT NULL,
  `R_Void` char(1) DEFAULT NULL,
  `R_VoidUser` varchar(10) DEFAULT NULL,
  `R_VoidTime` varchar(10) DEFAULT NULL,
  `FieldName` tinyint unsigned DEFAULT NULL,
  `R_Opt1` varchar(250) DEFAULT NULL,
  `R_Opt2` varchar(250) DEFAULT NULL,
  `R_Opt3` varchar(250) DEFAULT NULL,
  `R_Opt4` varchar(250) DEFAULT NULL,
  `R_Opt5` varchar(250) DEFAULT NULL,
  `R_Opt6` varchar(250) DEFAULT NULL,
  `R_Opt7` varchar(250) DEFAULT NULL,
  `R_Opt8` varchar(250) DEFAULT NULL,
  `R_Opt9` varchar(250) DEFAULT NULL,
  `R_PrCuCode` char(3) DEFAULT NULL,
  `R_Serve` char(1) NOT NULL DEFAULT 'N',
  `R_PrintOK` char(1) NOT NULL DEFAULT 'N',
  `R_KicOK` char(1) NOT NULL DEFAULT 'N',
  `StkCode` char(3) NOT NULL DEFAULT '',
  `PosStk` char(1) NOT NULL DEFAULT 'Y',
  `R_PrChkType` char(1) DEFAULT NULL,
  `R_PrQuan` float(10,2) DEFAULT NULL,
  `R_PrSubType` char(2) DEFAULT NULL,
  `R_PrSubCode` char(3) DEFAULT NULL,
  `R_PrSubQuan` float(10,2) DEFAULT NULL,
  `R_PrSubDisc` float(10,6) DEFAULT NULL,
  `R_PrSubBath` float(10,2) DEFAULT NULL,
  `R_PrSubAmt` float(10,2) DEFAULT NULL,
  `R_PrSubAdj` float(10,2) DEFAULT NULL,
  `R_PrCuDisc` float(10,6) DEFAULT NULL,
  `R_PrCuBath` float(10,2) DEFAULT NULL,
  `R_PrCuAdj` float(10,2) DEFAULT NULL,
  `R_QuanCanDisc` float(10,2) DEFAULT NULL,
  `R_Order` char(1) NOT NULL DEFAULT '0',
  `R_PItemNo` int unsigned NOT NULL DEFAULT '0',
  `R_PKicQue` int unsigned NOT NULL DEFAULT '0',
  `R_MemSum` char(1) NOT NULL DEFAULT 'N',
  `R_PrVcType` varchar(2) DEFAULT NULL,
  `R_PrVcCode` varchar(20) DEFAULT NULL,
  `R_PrVcAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `R_PrVcAdj` float(10,4) NOT NULL DEFAULT '0.0000',
  `R_VoidQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `R_MoveFlag` char(1) NOT NULL DEFAULT '0',
  `R_MovePrint` char(1) NOT NULL DEFAULT 'N',
  `R_Pause` char(1) NOT NULL DEFAULT '',
  `R_SPIndex` varchar(16) NOT NULL DEFAULT '',
  `R_LinkIndex` varchar(16) DEFAULT NULL,
  `R_VoidPause` char(1) DEFAULT NULL,
  `R_MoveItem` char(1) DEFAULT NULL,
  `R_MoveFrom` varchar(20) DEFAULT NULL,
  `R_MoveUser` varchar(10) DEFAULT NULL,
  `VoidMsg` varchar(30) DEFAULT NULL,
  `R_PrintItemBill` char(1) DEFAULT NULL,
  `R_CountTime` char(1) DEFAULT NULL,
  `SoneCode` varchar(100) DEFAULT NULL,
  `R_Earn` char(1) NOT NULL DEFAULT 'N',
  `R_EarnNo` varchar(15) DEFAULT NULL,
  `R_SeparateFrom` char(20) NOT NULL DEFAULT '-',
  `TranType` varchar(10) DEFAULT NULL,
  `PDAPrintCheck` char(1) DEFAULT NULL,
  `PDAEMP` char(15) DEFAULT NULL,
  `R_empName` varchar(50) DEFAULT NULL,
  `R_ServiceAmt` float(13,2) DEFAULT NULL,
  `R_PEName` varchar(150) DEFAULT NULL,
  `R_Indulgent` char(1) DEFAULT NULL,
  `R_CardPay` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tmp_balance`
--

LOCK TABLES `tmp_balance` WRITE;
/*!40000 ALTER TABLE `tmp_balance` DISABLE KEYS */;
/*!40000 ALTER TABLE `tmp_balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tmp_invcashdoc`
--

DROP TABLE IF EXISTS `tmp_invcashdoc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_invcashdoc` (
  `InvNo` varchar(13) DEFAULT NULL,
  `S_Bran` char(3) DEFAULT NULL,
  `InvDate` date DEFAULT NULL,
  `ArCode` varchar(10) DEFAULT NULL,
  `CustCode` varchar(10) DEFAULT NULL,
  `CustName` varchar(80) DEFAULT NULL,
  `CustAddr1` varchar(80) DEFAULT NULL,
  `CustAddr2` varchar(80) DEFAULT NULL,
  `CustTel` varchar(25) DEFAULT NULL,
  `CustFax` varchar(25) DEFAULT NULL,
  `CustCr` int unsigned DEFAULT NULL,
  `Contack` varchar(40) DEFAULT NULL,
  `CrCondition` varchar(30) DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `RegNo` varchar(25) DEFAULT NULL,
  `RefNo` varchar(8) DEFAULT NULL,
  `OnDate` date DEFAULT NULL,
  `DueDate` date DEFAULT NULL,
  `OnTime` varchar(10) DEFAULT NULL,
  `Cashier` varchar(6) DEFAULT NULL,
  `TotalAmt` float(12,2) DEFAULT NULL,
  `Service` float(12,2) DEFAULT NULL,
  `Discount` float(12,2) DEFAULT NULL,
  `Earnest` float(12,2) DEFAULT NULL,
  `Subtotal` float(12,2) DEFAULT NULL,
  `Vat` float(12,2) DEFAULT NULL,
  `Amount` float(12,2) DEFAULT NULL,
  `CashPay` float(12,2) DEFAULT NULL,
  `CrPay` float(12,2) DEFAULT NULL,
  `CrNo` varchar(30) DEFAULT NULL,
  `Cupon` float(12,2) DEFAULT NULL,
  `CrTerm` int unsigned DEFAULT NULL,
  `InvUser` varchar(6) DEFAULT NULL,
  `PrintOK` char(1) DEFAULT NULL,
  `Void` char(1) DEFAULT NULL,
  `UserVoid` varchar(20) DEFAULT NULL,
  `VoidDate` date DEFAULT NULL,
  `VoidMessage` varchar(30) DEFAULT NULL,
  `Remark` varchar(60) DEFAULT NULL,
  `Remark2` varchar(60) DEFAULT NULL,
  `PONO` varchar(30) DEFAULT NULL,
  `Taxid` char(16) DEFAULT NULL,
  `CustBranch` char(40) DEFAULT NULL,
  `DataDate` date DEFAULT NULL,
  `DocType` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tmp_invcashdoc`
--

LOCK TABLES `tmp_invcashdoc` WRITE;
/*!40000 ALTER TABLE `tmp_invcashdoc` DISABLE KEYS */;
/*!40000 ALTER TABLE `tmp_invcashdoc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tmp_invdetail`
--

DROP TABLE IF EXISTS `tmp_invdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_invdetail` (
  `InvNo` varchar(13) DEFAULT NULL,
  `InvDate` date DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `PGroup` varchar(4) DEFAULT NULL,
  `PName` varchar(40) DEFAULT NULL,
  `Price` float(12,2) DEFAULT NULL,
  `PQty` float(12,2) DEFAULT NULL,
  `PAmount` float(12,2) DEFAULT NULL,
  `PUnit` varchar(10) DEFAULT NULL,
  `DataDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tmp_invdetail`
--

LOCK TABLES `tmp_invdetail` WRITE;
/*!40000 ALTER TABLE `tmp_invdetail` DISABLE KEYS */;
/*!40000 ALTER TABLE `tmp_invdetail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tmp_t_crar`
--

DROP TABLE IF EXISTS `tmp_t_crar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_t_crar` (
  `Ref_No` varchar(15) NOT NULL DEFAULT '0',
  `CrCode` varchar(8) NOT NULL DEFAULT '',
  `CrCnt` int unsigned NOT NULL DEFAULT '0',
  `CrAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `Fat` char(1) NOT NULL DEFAULT '',
  `CrId` varchar(20) DEFAULT NULL,
  `CrApp` varchar(8) DEFAULT NULL,
  `Terminal` char(3) NOT NULL DEFAULT '',
  `Cashier` varchar(6) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tmp_t_crar`
--

LOCK TABLES `tmp_t_crar` WRITE;
/*!40000 ALTER TABLE `tmp_t_crar` DISABLE KEYS */;
/*!40000 ALTER TABLE `tmp_t_crar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tmp_tablefile`
--

DROP TABLE IF EXISTS `tmp_tablefile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tmp_tablefile` (
  `Tcode` varchar(15) NOT NULL DEFAULT '',
  `SoneCode` char(3) NOT NULL DEFAULT 'N',
  `TLoginDate` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `Cashier` char(30) DEFAULT NULL,
  `TLoginTime` varchar(10) DEFAULT NULL,
  `TCurTime` varchar(10) DEFAULT '',
  `TCustomer` int unsigned NOT NULL DEFAULT '0',
  `TItem` int unsigned NOT NULL DEFAULT '0',
  `TAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `TOnAct` char(1) NOT NULL DEFAULT 'N',
  `Service` float(10,2) NOT NULL DEFAULT '0.00',
  `ServiceAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `EmpDisc` varchar(8) DEFAULT NULL,
  `EmpDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `FastDisc` varchar(8) DEFAULT NULL,
  `FastDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `TrainDisc` varchar(8) DEFAULT NULL,
  `TrainDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemDisc` varchar(8) DEFAULT '',
  `MemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SubDisc` varchar(8) DEFAULT '',
  `SubDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `DiscBath` float(10,2) NOT NULL DEFAULT '0.00',
  `ProDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `SpaDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `CuponDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `ItemDiscAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemCode` varchar(20) DEFAULT '',
  `MemCurAmt` float(10,2) NOT NULL DEFAULT '0.00',
  `MemName` varchar(250) DEFAULT NULL,
  `MemBegin` date DEFAULT NULL,
  `MemEnd` date DEFAULT NULL,
  `Food` float(10,2) NOT NULL DEFAULT '0.00',
  `Drink` float(10,2) NOT NULL DEFAULT '0.00',
  `Product` float(10,2) NOT NULL DEFAULT '0.00',
  `NetTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintTotal` float(10,2) NOT NULL DEFAULT '0.00',
  `PrintChkBill` char(1) NOT NULL DEFAULT 'N',
  `PrintCnt` int unsigned NOT NULL DEFAULT '0',
  `PrintTime1` varchar(10) DEFAULT NULL,
  `PrintTime2` varchar(10) DEFAULT '',
  `ChkBill` char(1) NOT NULL DEFAULT 'N',
  `ChkBillTime` time NOT NULL DEFAULT '00:00:00',
  `StkCode1` char(3) NOT NULL DEFAULT 'N',
  `StkCode2` char(3) NOT NULL DEFAULT 'N',
  `TDesk` int unsigned NOT NULL DEFAULT '0',
  `TUser` varchar(5) DEFAULT NULL,
  `VoidMsg` varchar(250) DEFAULT NULL,
  `TPause` char(1) DEFAULT NULL,
  `CCUseCode` varchar(20) DEFAULT NULL,
  `CCUseAmt` float(10,2) DEFAULT NULL,
  `TTableIsOn` char(1) DEFAULT NULL,
  `TActive` char(1) DEFAULT NULL,
  `TAutoClose` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tmp_tablefile`
--

LOCK TABLES `tmp_tablefile` WRITE;
/*!40000 ALTER TABLE `tmp_tablefile` DISABLE KEYS */;
/*!40000 ALTER TABLE `tmp_tablefile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpromotion2`
--

DROP TABLE IF EXISTS `tpromotion2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tpromotion2` (
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpromotion2`
--

LOCK TABLES `tpromotion2` WRITE;
/*!40000 ALTER TABLE `tpromotion2` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpromotion2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpromotion3`
--

DROP TABLE IF EXISTS `tpromotion3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tpromotion3` (
  `R_Index` varchar(20) DEFAULT NULL,
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpromotion3`
--

LOCK TABLES `tpromotion3` WRITE;
/*!40000 ALTER TABLE `tpromotion3` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpromotion3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpromotion4`
--

DROP TABLE IF EXISTS `tpromotion4`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tpromotion4` (
  `R_Index` varchar(20) DEFAULT NULL,
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpromotion4`
--

LOCK TABLES `tpromotion4` WRITE;
/*!40000 ALTER TABLE `tpromotion4` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpromotion4` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpromotion5`
--

DROP TABLE IF EXISTS `tpromotion5`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tpromotion5` (
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpromotion5`
--

LOCK TABLES `tpromotion5` WRITE;
/*!40000 ALTER TABLE `tpromotion5` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpromotion5` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tpromotion6`
--

DROP TABLE IF EXISTS `tpromotion6`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tpromotion6` (
  `MacNo` char(3) NOT NULL DEFAULT '',
  `TableNo` varchar(15) NOT NULL DEFAULT '',
  `ProCode` char(3) NOT NULL DEFAULT '',
  `PIndex` varchar(20) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQuan` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(13,2) NOT NULL DEFAULT '0.00',
  `PTotal` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tpromotion6`
--

LOCK TABLES `tpromotion6` WRITE;
/*!40000 ALTER TABLE `tpromotion6` DISABLE KEYS */;
/*!40000 ALTER TABLE `tpromotion6` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tranconfig`
--

DROP TABLE IF EXISTS `tranconfig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tranconfig` (
  `BType` char(2) DEFAULT NULL,
  `HostName` varchar(30) DEFAULT NULL,
  `UserName` varchar(30) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `Port` int NOT NULL DEFAULT '21',
  `SaleDataPath` varchar(50) DEFAULT NULL,
  `StockDataPath` varchar(50) DEFAULT NULL,
  `BorDataPath` varchar(50) DEFAULT NULL,
  `ReceivePath` varchar(50) DEFAULT NULL,
  `BorToBranPath` varchar(50) DEFAULT NULL,
  `SendSCardPath` varchar(50) DEFAULT NULL,
  `BorSCardPath` varchar(50) DEFAULT NULL,
  `ReceiveSCardPath` varchar(50) DEFAULT NULL,
  `BorRCardPath` varchar(50) DEFAULT NULL,
  `BorEjPath` varchar(50) DEFAULT NULL,
  `MemHostName` varchar(30) DEFAULT NULL,
  `MemUserName` varchar(30) DEFAULT NULL,
  `MemPassword` varchar(50) DEFAULT NULL,
  `MemPort` int NOT NULL DEFAULT '21',
  `MemRecivePath` varchar(50) DEFAULT NULL,
  `MemBorToBranPath` varchar(50) DEFAULT NULL,
  `GiftHostName` varchar(30) DEFAULT NULL,
  `GiftUserName` varchar(30) DEFAULT NULL,
  `GiftPassword` varchar(50) DEFAULT NULL,
  `GiftPort` int NOT NULL DEFAULT '21',
  `GiftRecivePath` varchar(50) DEFAULT NULL,
  `GiftBorToBranPath` varchar(50) DEFAULT NULL,
  `RecHostName` varchar(30) DEFAULT NULL,
  `RecUserName` varchar(30) DEFAULT NULL,
  `RecPassword` varchar(50) DEFAULT NULL,
  `RecPort` int NOT NULL DEFAULT '21',
  `RecRecivePath` varchar(50) DEFAULT NULL,
  `RecBorToBranPath` varchar(50) DEFAULT NULL,
  `APLocalPath` varchar(80) DEFAULT NULL,
  `APBORPath` varchar(80) DEFAULT NULL,
  `MapAPLocalPath` varchar(80) DEFAULT NULL,
  `MapAPBORPath` varchar(80) DEFAULT NULL,
  `ChkFTPActive` char(1) NOT NULL DEFAULT 'N',
  `ChkSendTran` char(1) NOT NULL DEFAULT 'N',
  `ChkSendInhand` char(1) NOT NULL DEFAULT 'N',
  `ChkSendCSV` char(1) NOT NULL DEFAULT 'N',
  `LogFilePath` varchar(150) DEFAULT NULL,
  `SelectSendType` int unsigned DEFAULT NULL,
  `MapSaleSend` varchar(80) DEFAULT NULL,
  `MapMonthStock` varchar(80) DEFAULT NULL,
  `MapBorData` varchar(80) DEFAULT NULL,
  `MapBorEJ` varchar(80) DEFAULT NULL,
  `MapReceiveData` varchar(80) DEFAULT NULL,
  `MapBorToBranch` varchar(80) DEFAULT NULL,
  `MapSCardSend` varchar(80) DEFAULT NULL,
  `MapBorSCardData` varchar(80) DEFAULT NULL,
  `MapSCardReceive` varchar(80) DEFAULT NULL,
  `MapBorSCardToBranch` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tranconfig`
--

LOCK TABLES `tranconfig` WRITE;
/*!40000 ALTER TABLE `tranconfig` DISABLE KEYS */;
/*!40000 ALTER TABLE `tranconfig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tranin`
--

DROP TABLE IF EXISTS `tranin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tranin` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` char(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` char(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tranin`
--

LOCK TABLES `tranin` WRITE;
/*!40000 ALTER TABLE `tranin` DISABLE KEYS */;
/*!40000 ALTER TABLE `tranin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tranout`
--

DROP TABLE IF EXISTS `tranout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tranout` (
  `R_No` varchar(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(13) NOT NULL DEFAULT '',
  `R_Stock` char(3) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` varchar(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Time` varchar(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Remark` varchar(30) DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tranout`
--

LOCK TABLES `tranout` WRITE;
/*!40000 ALTER TABLE `tranout` DISABLE KEYS */;
/*!40000 ALTER TABLE `tranout` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transtk`
--

DROP TABLE IF EXISTS `transtk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transtk` (
  `R_No` char(15) NOT NULL DEFAULT '',
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` char(13) NOT NULL DEFAULT '',
  `R_Pack` int unsigned NOT NULL DEFAULT '1',
  `R_Qty` float(10,3) NOT NULL DEFAULT '0.000',
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_Unit` char(10) DEFAULT NULL,
  `R_Cost` float(10,2) NOT NULL DEFAULT '0.00',
  `R_Amount` float(10,2) NOT NULL DEFAULT '0.00',
  `R_TotalQty` int NOT NULL DEFAULT '0',
  `R_User` char(6) DEFAULT NULL,
  `R_Time` char(10) DEFAULT NULL,
  `R_EntryDate` date DEFAULT NULL,
  `R_Pqty` float(10,3) DEFAULT NULL,
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transtk`
--

LOCK TABLES `transtk` WRITE;
/*!40000 ALTER TABLE `transtk` DISABLE KEYS */;
/*!40000 ALTER TABLE `transtk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unitfile`
--

DROP TABLE IF EXISTS `unitfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unitfile` (
  `UnitName` varchar(10) NOT NULL DEFAULT '',
  `UnitCode` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`UnitName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unitfile`
--

LOCK TABLES `unitfile` WRITE;
/*!40000 ALTER TABLE `unitfile` DISABLE KEYS */;
/*!40000 ALTER TABLE `unitfile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usergroup`
--

DROP TABLE IF EXISTS `usergroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usergroup` (
  `UserName` char(15) NOT NULL DEFAULT '0',
  `Password` char(20) NOT NULL DEFAULT '',
  `Name` char(40) DEFAULT NULL,
  `OnACT` char(1) NOT NULL DEFAULT 'N',
  `MacNo` char(3) DEFAULT NULL,
  `Sale1` char(1) NOT NULL DEFAULT 'N',
  `Sale2` char(1) NOT NULL DEFAULT 'N',
  `Sale3` char(1) NOT NULL DEFAULT 'N',
  `Sale4` char(1) NOT NULL DEFAULT 'N',
  `Sale5` char(1) NOT NULL DEFAULT 'N',
  `Sale6` char(1) NOT NULL DEFAULT 'N',
  `Sale7` char(1) NOT NULL DEFAULT 'N',
  `Sale8` char(1) NOT NULL DEFAULT 'N',
  `Sale9` char(1) NOT NULL DEFAULT 'N',
  `Sale10` char(1) NOT NULL DEFAULT 'N',
  `Sale11` char(1) NOT NULL DEFAULT 'N',
  `Sale12` char(1) NOT NULL DEFAULT 'N',
  `Sale13` char(1) NOT NULL DEFAULT 'N',
  `Sale14` char(1) NOT NULL DEFAULT 'N',
  `Sale15` char(1) NOT NULL DEFAULT 'N',
  `Sale16` char(1) NOT NULL DEFAULT 'N',
  `Sale17` char(1) NOT NULL DEFAULT 'N',
  `Sale18` char(1) NOT NULL DEFAULT 'N',
  `Sale19` char(1) NOT NULL DEFAULT 'N',
  `Sale20` char(1) NOT NULL DEFAULT 'N',
  `Sale21` char(1) NOT NULL DEFAULT 'N',
  `Sale22` char(1) NOT NULL DEFAULT 'N',
  `Sale23` char(1) NOT NULL DEFAULT 'N',
  `Sale24` char(1) NOT NULL DEFAULT 'N',
  `Sale25` char(1) NOT NULL DEFAULT 'N',
  `Sale26` char(1) NOT NULL DEFAULT 'N',
  `Sale27` char(1) NOT NULL DEFAULT 'N',
  `Sale28` char(1) NOT NULL DEFAULT 'N',
  `Sale29` char(1) NOT NULL DEFAULT 'N',
  `Sale30` char(1) NOT NULL DEFAULT 'N',
  `Sale31` char(1) NOT NULL DEFAULT 'N',
  `Sale32` char(1) NOT NULL DEFAULT 'N',
  `Sale33` char(1) NOT NULL DEFAULT 'N',
  `Sale34` char(1) NOT NULL DEFAULT 'N',
  `Sale35` char(1) NOT NULL DEFAULT 'N',
  `Sale36` char(1) NOT NULL DEFAULT 'N',
  `Cont0` char(1) NOT NULL DEFAULT 'N',
  `Cont1` char(1) NOT NULL DEFAULT 'N',
  `Cont2` char(1) NOT NULL DEFAULT 'N',
  `Cont3` char(1) NOT NULL DEFAULT 'N',
  `Cont4` char(1) NOT NULL DEFAULT 'N',
  `Cont5` char(1) NOT NULL DEFAULT 'N',
  `Cont6` char(1) NOT NULL DEFAULT 'N',
  `Cont7` char(1) NOT NULL DEFAULT 'N',
  `Cont8` char(1) NOT NULL DEFAULT 'N',
  `Cont9` char(1) NOT NULL DEFAULT 'N',
  `Cont10` char(1) NOT NULL DEFAULT 'N',
  `Cont11` char(1) NOT NULL DEFAULT 'N',
  `Cont12` char(1) NOT NULL DEFAULT 'N',
  `Cont13` char(1) NOT NULL DEFAULT 'N',
  `Cont14` char(1) NOT NULL DEFAULT 'N',
  `Cont15` char(1) NOT NULL DEFAULT 'N',
  `Stock0` char(1) NOT NULL DEFAULT 'N',
  `Stock0_1` char(1) NOT NULL DEFAULT 'N',
  `Stock1` char(1) NOT NULL DEFAULT 'N',
  `Stock2` char(1) NOT NULL DEFAULT 'N',
  `Stock3` char(1) NOT NULL DEFAULT 'N',
  `Stock4` char(1) NOT NULL DEFAULT 'N',
  `Stock5` char(1) NOT NULL DEFAULT 'N',
  `Stock6` char(1) NOT NULL DEFAULT 'N',
  `Stock7` char(1) NOT NULL DEFAULT 'N',
  `Stock8` char(1) NOT NULL DEFAULT 'N',
  `Stock9` char(1) NOT NULL DEFAULT 'N',
  `Stock10` char(1) NOT NULL DEFAULT 'N',
  `Stock11` char(1) NOT NULL DEFAULT 'N',
  `Stock12` char(1) NOT NULL DEFAULT 'N',
  `Stock13` char(1) NOT NULL DEFAULT 'N',
  `Stock14` char(1) NOT NULL DEFAULT 'N',
  `Stock15` char(1) NOT NULL DEFAULT 'N',
  `Stock16` char(1) NOT NULL DEFAULT 'N',
  `Stock17` char(1) NOT NULL DEFAULT 'N',
  `Stock18` char(1) NOT NULL DEFAULT 'N',
  `Stock19` char(1) NOT NULL DEFAULT 'N',
  `Stock20` char(1) NOT NULL DEFAULT 'N',
  `Stock21` char(1) NOT NULL DEFAULT 'N',
  `Stock22` char(1) NOT NULL DEFAULT 'N',
  `Stock23` char(1) NOT NULL DEFAULT 'N',
  `Stock24` char(1) NOT NULL DEFAULT 'N',
  `Stock25` char(1) NOT NULL DEFAULT 'N',
  `Stock26` char(1) NOT NULL DEFAULT 'N',
  `Stock27` char(1) NOT NULL DEFAULT 'N',
  `Stock28` char(1) NOT NULL DEFAULT 'N',
  `Stock29` char(1) NOT NULL DEFAULT 'N',
  `Stock30` char(1) NOT NULL DEFAULT 'N',
  `Stock31` char(1) NOT NULL DEFAULT 'N',
  `Stock32` char(1) NOT NULL DEFAULT 'N',
  `Stock33` char(1) NOT NULL DEFAULT 'N',
  `Stock34` char(1) NOT NULL DEFAULT 'N',
  `Stock35` char(1) NOT NULL DEFAULT 'N',
  `Stock36` char(1) NOT NULL DEFAULT 'N',
  `Stock37` char(1) NOT NULL DEFAULT 'N',
  `Stock38` char(1) NOT NULL DEFAULT 'N',
  `Stock39` char(1) NOT NULL DEFAULT 'N',
  `Stock40` char(1) NOT NULL DEFAULT 'N',
  `Stock41` char(1) NOT NULL DEFAULT 'N',
  `Stock42` char(1) NOT NULL DEFAULT 'N',
  `Stock43` char(1) NOT NULL DEFAULT 'N',
  `Stock44` char(1) NOT NULL DEFAULT 'N',
  `Stock45` char(1) NOT NULL DEFAULT 'N',
  `Stock46` char(1) NOT NULL DEFAULT 'N',
  `Stock47` char(1) NOT NULL DEFAULT 'N',
  `Stock48` char(1) NOT NULL DEFAULT 'N',
  `Stock49` char(1) NOT NULL DEFAULT 'N',
  `Stock50` char(1) NOT NULL DEFAULT 'N',
  `Stock51` char(1) NOT NULL DEFAULT 'N',
  `Stock52` char(1) NOT NULL DEFAULT 'N',
  `Stock53` char(1) NOT NULL DEFAULT 'N',
  `Stock54` char(1) NOT NULL DEFAULT 'N',
  `Stock55` char(1) NOT NULL DEFAULT 'N',
  `Stock56` char(1) NOT NULL DEFAULT 'N',
  `Stock57` char(1) NOT NULL DEFAULT 'N',
  `Stock58` char(1) NOT NULL DEFAULT 'N',
  `Stock59` char(1) NOT NULL DEFAULT 'N',
  `Stock60` char(1) NOT NULL DEFAULT 'N',
  `Stock61` char(1) NOT NULL DEFAULT 'N',
  `Stock62` char(1) NOT NULL DEFAULT 'N',
  `Stock63` char(1) NOT NULL DEFAULT 'N',
  `Stock64` char(1) NOT NULL DEFAULT 'N',
  `Stock65` char(1) NOT NULL DEFAULT 'N',
  `Stock66` char(1) NOT NULL DEFAULT 'N',
  `Stock67` char(1) NOT NULL DEFAULT 'N',
  `Stock68` char(1) NOT NULL DEFAULT 'N',
  `Stock69` char(1) NOT NULL DEFAULT 'N',
  `Stock70` char(1) NOT NULL DEFAULT 'N',
  `Stock71` char(1) NOT NULL DEFAULT 'N',
  `Stock72` char(1) NOT NULL DEFAULT 'N',
  `Stock73` char(1) NOT NULL DEFAULT 'N',
  `Stock74` char(1) NOT NULL DEFAULT 'N',
  `Cont16` char(1) NOT NULL DEFAULT 'N',
  `Cont17` char(1) NOT NULL DEFAULT 'N',
  `Cont18` char(1) NOT NULL DEFAULT 'N',
  `Cont19` char(1) NOT NULL DEFAULT 'N',
  `Cont20` char(1) NOT NULL DEFAULT 'N',
  `Cont21` char(1) NOT NULL DEFAULT 'N',
  `Cont22` char(1) NOT NULL DEFAULT 'N',
  `Cont23` char(1) NOT NULL DEFAULT 'N',
  `Cont24` char(1) NOT NULL DEFAULT 'N',
  `Cont25` char(1) NOT NULL DEFAULT 'N',
  `Cont26` char(1) NOT NULL DEFAULT 'N',
  `Cont27` char(1) NOT NULL DEFAULT 'N',
  `Cont28` char(1) NOT NULL DEFAULT 'N',
  `Cont29` char(1) NOT NULL DEFAULT 'N',
  `Cont30` char(1) NOT NULL DEFAULT 'N',
  `Cont31` char(1) NOT NULL DEFAULT 'N',
  `Cont32` char(1) NOT NULL DEFAULT 'N',
  `Cont33` char(1) NOT NULL DEFAULT 'N',
  `Cont34` char(1) NOT NULL DEFAULT 'N',
  `Cont35` char(1) NOT NULL DEFAULT 'N',
  `Cont36` char(1) NOT NULL DEFAULT 'N',
  `Cont37` char(1) NOT NULL DEFAULT 'N',
  `Cont38` char(1) NOT NULL DEFAULT 'N',
  `Cont39` char(1) NOT NULL DEFAULT 'N',
  `Cont40` char(1) NOT NULL DEFAULT 'N',
  `Cont41` char(1) NOT NULL DEFAULT 'N',
  `Cont42` char(1) NOT NULL DEFAULT 'N',
  `Cont43` char(1) NOT NULL DEFAULT 'N',
  `Cont44` char(1) NOT NULL DEFAULT 'N',
  `Cont45` char(1) NOT NULL DEFAULT 'N',
  `Cont46` char(1) NOT NULL DEFAULT 'N',
  `Cont47` char(1) DEFAULT NULL,
  `Sale37` char(1) DEFAULT NULL,
  `Sale38` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usergroup`
--

LOCK TABLES `usergroup` WRITE;
/*!40000 ALTER TABLE `usergroup` DISABLE KEYS */;
/*!40000 ALTER TABLE `usergroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usermenu`
--

DROP TABLE IF EXISTS `usermenu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usermenu` (
  `MGroup` varchar(10) NOT NULL DEFAULT '0',
  `MCode` varchar(20) NOT NULL DEFAULT '',
  `MDesc` varchar(50) NOT NULL DEFAULT '',
  `OnAct` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usermenu`
--

LOCK TABLES `usermenu` WRITE;
/*!40000 ALTER TABLE `usermenu` DISABLE KEYS */;
/*!40000 ALTER TABLE `usermenu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vender`
--

DROP TABLE IF EXISTS `vender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vender` (
  `Vname` varchar(60) DEFAULT '',
  `Vaddress` varchar(50) DEFAULT '',
  `VCity` varchar(30) DEFAULT NULL,
  `VSubProvince` varchar(30) DEFAULT '',
  `VProvince` varchar(30) DEFAULT '',
  `VPost` varchar(5) DEFAULT '',
  `VTel` varchar(30) DEFAULT NULL,
  `VFax` varchar(30) DEFAULT NULL,
  `VEmail` varchar(50) DEFAULT '',
  `VContack` varchar(50) DEFAULT '',
  `VDept` varchar(50) DEFAULT '',
  `VSendTime` int NOT NULL DEFAULT '0',
  `VConPur` varchar(50) DEFAULT '',
  `VTran` varchar(50) DEFAULT '',
  `VBusType` varchar(50) DEFAULT '',
  `VBusAssi` float(13,2) NOT NULL DEFAULT '0.00',
  `VBusBegin` date DEFAULT NULL,
  `VBusNo` varchar(20) DEFAULT '',
  `VTaxNo` varchar(20) DEFAULT '',
  `VVatNo` varchar(20) DEFAULT '',
  `VCrTerm` int NOT NULL DEFAULT '0',
  `VCrAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `VPayType` varchar(50) DEFAULT '',
  `VBankAcc` varchar(20) DEFAULT '',
  `VDiscount` varchar(50) DEFAULT '',
  `VCharge` varchar(50) DEFAULT '',
  `VRemark` varchar(50) DEFAULT '',
  `VCode` varchar(4) NOT NULL DEFAULT '',
  `VAccNo` varchar(10) DEFAULT '',
  PRIMARY KEY (`VCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vender`
--

LOCK TABLES `vender` WRITE;
/*!40000 ALTER TABLE `vender` DISABLE KEYS */;
/*!40000 ALTER TABLE `vender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendernav`
--

DROP TABLE IF EXISTS `vendernav`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vendernav` (
  `VCode` varchar(20) NOT NULL DEFAULT '',
  `VName` varchar(250) DEFAULT '0',
  PRIMARY KEY (`VCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendernav`
--

LOCK TABLES `vendernav` WRITE;
/*!40000 ALTER TABLE `vendernav` DISABLE KEYS */;
/*!40000 ALTER TABLE `vendernav` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voidmsg`
--

DROP TABLE IF EXISTS `voidmsg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voidmsg` (
  `VCode` char(2) NOT NULL DEFAULT '',
  `VName` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voidmsg`
--

LOCK TABLES `voidmsg` WRITE;
/*!40000 ALTER TABLE `voidmsg` DISABLE KEYS */;
/*!40000 ALTER TABLE `voidmsg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `voucherdisc`
--

DROP TABLE IF EXISTS `voucherdisc`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `voucherdisc` (
  `VDCode` varchar(20) NOT NULL DEFAULT ' ',
  `VTCode` char(3) NOT NULL DEFAULT '000',
  `VDBegin` date DEFAULT NULL,
  `VDEnd` date DEFAULT NULL,
  `VDActive` char(1) NOT NULL DEFAULT 'Y',
  `VDUsed` char(1) NOT NULL DEFAULT 'N',
  `VDUsedDate` date DEFAULT NULL,
  PRIMARY KEY (`VDCode`,`VTCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `voucherdisc`
--

LOCK TABLES `voucherdisc` WRITE;
/*!40000 ALTER TABLE `voucherdisc` DISABLE KEYS */;
/*!40000 ALTER TABLE `voucherdisc` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vouchertype`
--

DROP TABLE IF EXISTS `vouchertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vouchertype` (
  `VTCode` char(3) NOT NULL DEFAULT '000',
  `VTName` varchar(30) DEFAULT NULL,
  `VTType` int unsigned NOT NULL DEFAULT '0',
  `VTAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `VTLimitQty` int unsigned NOT NULL DEFAULT '1',
  `VTStrDay` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`VTCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vouchertype`
--

LOCK TABLES `vouchertype` WRITE;
/*!40000 ALTER TABLE `vouchertype` DISABLE KEYS */;
/*!40000 ALTER TABLE `vouchertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zone`
--

DROP TABLE IF EXISTS `zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zone` (
  `CompName` varchar(20) NOT NULL DEFAULT '',
  `ZoneName` varchar(30) DEFAULT '',
  `ZoneIndex` int unsigned NOT NULL DEFAULT '0',
  `ZonePicturePath` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CompName`,`ZoneIndex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zone`
--

LOCK TABLES `zone` WRITE;
/*!40000 ALTER TABLE `zone` DISABLE KEYS */;
/*!40000 ALTER TABLE `zone` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-13  1:13:40

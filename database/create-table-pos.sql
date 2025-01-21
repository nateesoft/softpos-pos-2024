-- MyRestaurantJefferSakon.accost definition

CREATE TABLE `accost` (
  `AcCostNo` varchar(10) NOT NULL DEFAULT '',
  `AcCostGroup` varchar(4) DEFAULT NULL,
  `AcCostName` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`AcCostNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.accr definition

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


-- MyRestaurantJefferSakon.adjstock definition

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


-- MyRestaurantJefferSakon.adjstock_copy definition

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


-- MyRestaurantJefferSakon.argroup definition

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


-- MyRestaurantJefferSakon.armenu definition

CREATE TABLE `armenu` (
  `MGroup` varchar(10) NOT NULL DEFAULT '0',
  `MCode` varchar(20) NOT NULL DEFAULT '',
  `MDesc` varchar(80) NOT NULL DEFAULT '',
  `OnAct` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.aruser definition

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


-- MyRestaurantJefferSakon.balance definition

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


-- MyRestaurantJefferSakon.balanceset definition

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


-- MyRestaurantJefferSakon.bankfile definition

CREATE TABLE `bankfile` (
  `BCode` char(3) NOT NULL DEFAULT '0',
  `BName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.billar definition

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


-- MyRestaurantJefferSakon.billno definition

CREATE TABLE `billno` (
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


-- MyRestaurantJefferSakon.billnocredit definition

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


-- MyRestaurantJefferSakon.billret definition

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


-- MyRestaurantJefferSakon.branch definition

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


-- MyRestaurantJefferSakon.branfile definition

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


-- MyRestaurantJefferSakon.budgetsale definition

CREATE TABLE `budgetsale` (
  `bg_date` date DEFAULT NULL,
  `bg_eatinamt` float(13,2) DEFAULT NULL,
  `bg_takeawayamt` float(13,2) DEFAULT NULL,
  `bg_eatinbill` int DEFAULT NULL,
  `bg_takeawaybill` int DEFAULT NULL,
  `Branch` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.buy definition

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


-- MyRestaurantJefferSakon.buyhead definition

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


-- MyRestaurantJefferSakon.cashcard definition

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


-- MyRestaurantJefferSakon.cashier definition

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


-- MyRestaurantJefferSakon.cbillno definition

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


-- MyRestaurantJefferSakon.charge definition

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


-- MyRestaurantJefferSakon.chargeto definition

CREATE TABLE `chargeto` (
  `Charge_Code` char(3) NOT NULL DEFAULT '0',
  `Charge_Name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.checkcard definition

CREATE TABLE `checkcard` (
  `CCode` varchar(16) NOT NULL DEFAULT '',
  `CDigit` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`CCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.clrbalance definition

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


-- MyRestaurantJefferSakon.company definition

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


-- MyRestaurantJefferSakon.costfile definition

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


-- MyRestaurantJefferSakon.costfile_copy definition

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


-- MyRestaurantJefferSakon.creditfile definition

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


-- MyRestaurantJefferSakon.ct_sale definition

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


-- MyRestaurantJefferSakon.cupon definition

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


-- MyRestaurantJefferSakon.cuponlist definition

CREATE TABLE `cuponlist` (
  `CuCode` char(3) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.cuponqty definition

CREATE TABLE `cuponqty` (
  `CCode` varchar(20) NOT NULL DEFAULT '',
  `CTable` varchar(30) NOT NULL DEFAULT '',
  `CQty` int DEFAULT NULL,
  PRIMARY KEY (`CCode`,`CTable`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.custar_billno definition

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


-- MyRestaurantJefferSakon.custarrear definition

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


-- MyRestaurantJefferSakon.custcard definition

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


-- MyRestaurantJefferSakon.custfile definition

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


-- MyRestaurantJefferSakon.custinfo definition

CREATE TABLE `custinfo` (
  `SP_Code` varchar(20) NOT NULL DEFAULT '',
  `SP_Index` int unsigned NOT NULL DEFAULT '0',
  `SP_Name` varchar(80) DEFAULT NULL,
  `SP_Pid` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`SP_Code`,`SP_Index`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.customer definition

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


-- MyRestaurantJefferSakon.customer2 definition

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


-- MyRestaurantJefferSakon.custtran definition

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


-- MyRestaurantJefferSakon.custtype definition

CREATE TABLE `custtype` (
  `SP_Type` char(2) NOT NULL DEFAULT '',
  `SP_TypeName` varchar(80) DEFAULT NULL,
  `SP_CrAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `SP_CreditDays` int unsigned NOT NULL DEFAULT '0',
  `SP_Interest` float(10,2) DEFAULT '0.00',
  PRIMARY KEY (`SP_Type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.dcashcard definition

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


-- MyRestaurantJefferSakon.dconvert definition

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


-- MyRestaurantJefferSakon.deletemodified definition

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


-- MyRestaurantJefferSakon.docno definition

CREATE TABLE `docno` (
  `FCode` varchar(4) NOT NULL DEFAULT '',
  `Prefix` varchar(4) DEFAULT NULL,
  `CLength` double(2,0) NOT NULL DEFAULT '2',
  `RunNo` double(7,0) NOT NULL DEFAULT '1',
  `DocName` varchar(100) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.employ definition

CREATE TABLE `employ` (
  `Code` varchar(6) NOT NULL DEFAULT '',
  `Name` varchar(40) NOT NULL DEFAULT '',
  `Salary` float(10,2) NOT NULL DEFAULT '0.00',
  `Position` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.eordering definition

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


-- MyRestaurantJefferSakon.eorderplusetup definition

CREATE TABLE `eorderplusetup` (
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `R_XRecive` float(10,3) DEFAULT '0.000',
  PRIMARY KEY (`PCode`),
  UNIQUE KEY `Porduct_PCode` (`PCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.factory definition

CREATE TABLE `factory` (
  `FactoryCode` char(3) NOT NULL DEFAULT '0',
  `FactoryName` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`FactoryCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.fgload definition

CREATE TABLE `fgload` (
  `FGBran` char(3) DEFAULT NULL,
  `FGDocNo` varchar(20) DEFAULT NULL,
  `FGDate` date DEFAULT NULL,
  `FGQue` int DEFAULT NULL,
  `PLUCode` varchar(13) DEFAULT NULL,
  `PLUQty` float(10,3) NOT NULL DEFAULT '0.000',
  `PLUUnit` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.giftprice definition

CREATE TABLE `giftprice` (
  `PriceCode` char(3) NOT NULL DEFAULT '',
  `PriceAmt` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.giftstatus definition

CREATE TABLE `giftstatus` (
  `GCode` varchar(21) NOT NULL DEFAULT '',
  `GNo` varchar(6) NOT NULL DEFAULT '',
  `GStatus` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.gifttype definition

CREATE TABLE `gifttype` (
  `GTCode` char(4) NOT NULL DEFAULT '',
  `GTName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`GTCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.gpdetail definition

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


-- MyRestaurantJefferSakon.gpheader definition

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


-- MyRestaurantJefferSakon.groupfile definition

CREATE TABLE `groupfile` (
  `GroupCode` varchar(4) NOT NULL DEFAULT '',
  `GroupName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`GroupCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.hadjstock definition

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


-- MyRestaurantJefferSakon.hadjstock_copy definition

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


-- MyRestaurantJefferSakon.hcharge definition

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


-- MyRestaurantJefferSakon.hconvert definition

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


-- MyRestaurantJefferSakon.headmenu definition

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


-- MyRestaurantJefferSakon.heordering definition

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


-- MyRestaurantJefferSakon.hot_key definition

CREATE TABLE `hot_key` (
  `KeyFunc` char(1) NOT NULL DEFAULT '',
  `KeyCode` varchar(13) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.hpayment definition

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


-- MyRestaurantJefferSakon.hproduce definition

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


-- MyRestaurantJefferSakon.hprolost definition

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


-- MyRestaurantJefferSakon.hprolost2 definition

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


-- MyRestaurantJefferSakon.hprolost3 definition

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


-- MyRestaurantJefferSakon.hrecive definition

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


-- MyRestaurantJefferSakon.hrecive2 definition

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


-- MyRestaurantJefferSakon.hrecive3 definition

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


-- MyRestaurantJefferSakon.hsalecr definition

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


-- MyRestaurantJefferSakon.htranin definition

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


-- MyRestaurantJefferSakon.htranout definition

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


-- MyRestaurantJefferSakon.htranstk definition

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


-- MyRestaurantJefferSakon.invcashdoc definition

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


-- MyRestaurantJefferSakon.invdetail definition

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


-- MyRestaurantJefferSakon.inventory definition

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


-- MyRestaurantJefferSakon.kictran definition

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


-- MyRestaurantJefferSakon.logcheck definition

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


-- MyRestaurantJefferSakon.mark_sendorder definition

CREATE TABLE `mark_sendorder` (
  `send_day` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.memaddtime definition

CREATE TABLE `memaddtime` (
  `M_Code` varchar(13) NOT NULL DEFAULT '',
  `M_Date` date DEFAULT NULL,
  `M_EndDate` date DEFAULT NULL,
  `M_NewDate` date DEFAULT NULL,
  `M_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `M_User` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.memmaster definition

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


-- MyRestaurantJefferSakon.menugroup definition

CREATE TABLE `menugroup` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `PCode` varchar(15) DEFAULT NULL,
  `ShortName` varchar(20) DEFAULT NULL,
  `PosGroupCode` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.menugrouppda definition

CREATE TABLE `menugrouppda` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `PCode` varchar(16) DEFAULT NULL,
  `ShortName` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.menulist definition

CREATE TABLE `menulist` (
  `MenuCode` varchar(15) NOT NULL DEFAULT '',
  `MenuItem` int NOT NULL DEFAULT '0',
  `PLUCode` varchar(13) NOT NULL DEFAULT '',
  `MenuActive` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.menupda definition

CREATE TABLE `menupda` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `Code_Type` char(1) NOT NULL DEFAULT 'P',
  `PCode` varchar(16) DEFAULT NULL,
  `ShortName` varchar(20) DEFAULT NULL,
  `PPathName` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.menusetup definition

CREATE TABLE `menusetup` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `Code_Type` char(1) NOT NULL DEFAULT 'P',
  `PCode` varchar(15) DEFAULT NULL,
  `ShortName` varchar(80) DEFAULT NULL,
  `PPathName` varchar(200) DEFAULT NULL,
  `PColor` varchar(50) DEFAULT NULL,
  `PosGroupCode` varchar(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.mgrbuttonsetup definition

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


-- MyRestaurantJefferSakon.movetable definition

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


-- MyRestaurantJefferSakon.mpointtype definition

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


-- MyRestaurantJefferSakon.mtran definition

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


-- MyRestaurantJefferSakon.mtranplu definition

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


-- MyRestaurantJefferSakon.optionfile definition

CREATE TABLE `optionfile` (
  `PGroup` varchar(4) NOT NULL DEFAULT '',
  `OptionName` varchar(30) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.optionset definition

CREATE TABLE `optionset` (
  `PCode` varchar(10) DEFAULT NULL,
  `PDesc` varchar(250) DEFAULT NULL,
  `OptionCode` varchar(5) DEFAULT NULL,
  `OptionName` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.ordertran definition

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


-- MyRestaurantJefferSakon.outstocklist definition

CREATE TABLE `outstocklist` (
  `PCode` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.paidiofile definition

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


-- MyRestaurantJefferSakon.pay definition

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


-- MyRestaurantJefferSakon.payhead definition

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


-- MyRestaurantJefferSakon.payment definition

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


-- MyRestaurantJefferSakon.pingredent definition

CREATE TABLE `pingredent` (
  `PCode` char(13) NOT NULL DEFAULT '',
  `PingCode` char(13) NOT NULL DEFAULT '',
  `PingQty` float(13,3) NOT NULL DEFAULT '0.000',
  PRIMARY KEY (`PCode`,`PingCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.pofile definition

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


-- MyRestaurantJefferSakon.poption definition

CREATE TABLE `poption` (
  `PCode` varchar(16) NOT NULL DEFAULT '',
  `POptCode` varchar(16) NOT NULL DEFAULT '',
  PRIMARY KEY (`PCode`,`POptCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.posconfigsetup definition

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


-- MyRestaurantJefferSakon.posgroup definition

CREATE TABLE `posgroup` (
  `POSGroupCode` varchar(3) DEFAULT NULL,
  `POSGroupName` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.poshwsetup definition

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


-- MyRestaurantJefferSakon.posuser definition

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


-- MyRestaurantJefferSakon.produce definition

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


-- MyRestaurantJefferSakon.product definition

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


-- MyRestaurantJefferSakon.profreeplu definition

CREATE TABLE `profreeplu` (
  `ProCode` char(3) NOT NULL DEFAULT '',
  `ProTime` char(1) NOT NULL DEFAULT '0',
  `PCode` varchar(13) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.prolost definition

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


-- MyRestaurantJefferSakon.prolost2 definition

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


-- MyRestaurantJefferSakon.prolost3 definition

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


-- MyRestaurantJefferSakon.promotion2 definition

CREATE TABLE `promotion2` (
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.promotion3 definition

CREATE TABLE `promotion3` (
  `R_Index` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.promotion4 definition

CREATE TABLE `promotion4` (
  `R_Index` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.promotion5 definition

CREATE TABLE `promotion5` (
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.promotion6 definition

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


-- MyRestaurantJefferSakon.protab definition

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


-- MyRestaurantJefferSakon.pset definition

CREATE TABLE `pset` (
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PSubCode` varchar(13) NOT NULL DEFAULT '',
  `PSubQty` float(10,3) NOT NULL DEFAULT '1.000',
  PRIMARY KEY (`PCode`,`PSubCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.purdetail definition

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


-- MyRestaurantJefferSakon.purhead definition

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


-- MyRestaurantJefferSakon.recive definition

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


-- MyRestaurantJefferSakon.recive2 definition

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


-- MyRestaurantJefferSakon.recive3 definition

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


-- MyRestaurantJefferSakon.reservelist definition

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


-- MyRestaurantJefferSakon.retdetail definition

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


-- MyRestaurantJefferSakon.rethead definition

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


-- MyRestaurantJefferSakon.rjfile definition

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


-- MyRestaurantJefferSakon.salecr definition

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


-- MyRestaurantJefferSakon.sendstock definition

CREATE TABLE `sendstock` (
  `S_Bran` char(3) NOT NULL DEFAULT '',
  `S_Date` date DEFAULT NULL,
  `S_Month` date DEFAULT NULL,
  `S_PCode` char(13) NOT NULL DEFAULT '',
  `S_BQty` float(12,2) NOT NULL DEFAULT '0.00',
  `S_Cost` float(12,2) NOT NULL DEFAULT '0.00',
  `S_Amount` float(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.sendtran definition

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


-- MyRestaurantJefferSakon.soft_balance definition

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


-- MyRestaurantJefferSakon.soft_menusetup definition

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


-- MyRestaurantJefferSakon.soft_tablefile definition

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


-- MyRestaurantJefferSakon.sonefile definition

CREATE TABLE `sonefile` (
  `SoneCode` char(3) NOT NULL DEFAULT '',
  `SoneName` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.sp_temp_refund definition

CREATE TABLE `sp_temp_refund` (
  `R_PluCode` varchar(13) NOT NULL DEFAULT '',
  `R_Quan` float(10,3) DEFAULT NULL,
  `R_Price` float(10,2) DEFAULT NULL,
  `R_ETD` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.stcard definition

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


-- MyRestaurantJefferSakon.stdorder definition

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


-- MyRestaurantJefferSakon.stkfile definition

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


-- MyRestaurantJefferSakon.stockfile definition

CREATE TABLE `stockfile` (
  `StkCode` char(3) NOT NULL DEFAULT '',
  `StkName` varchar(30) NOT NULL DEFAULT '',
  `Flage` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.sumtable definition

CREATE TABLE `sumtable` (
  `TList` varchar(50) DEFAULT '',
  `AtZone` varchar(20) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.surtemp definition

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


-- MyRestaurantJefferSakon.t_ar definition

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


-- MyRestaurantJefferSakon.t_cashcard definition

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


-- MyRestaurantJefferSakon.t_crar definition

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


-- MyRestaurantJefferSakon.t_credit definition

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


-- MyRestaurantJefferSakon.t_cupon definition

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


-- MyRestaurantJefferSakon.t_gift definition

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


-- MyRestaurantJefferSakon.t_option definition

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


-- MyRestaurantJefferSakon.t_promotion definition

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


-- MyRestaurantJefferSakon.t_pset definition

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


-- MyRestaurantJefferSakon.t_sale definition

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


-- MyRestaurantJefferSakon.t_saleset definition

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


-- MyRestaurantJefferSakon.t_voucher definition

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


-- MyRestaurantJefferSakon.tablefile definition

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


-- MyRestaurantJefferSakon.tablesetting definition

CREATE TABLE `tablesetting` (
  `TCode` varchar(15) DEFAULT NULL,
  `CompName` varchar(20) DEFAULT NULL,
  `TName` varchar(30) DEFAULT NULL,
  `TPoint` int unsigned DEFAULT '0',
  `TEnable` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tablesetup definition

CREATE TABLE `tablesetup` (
  `Code_ID` varchar(10) DEFAULT NULL,
  `TCode` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.taxvat definition

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


-- MyRestaurantJefferSakon.temp_balance definition

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


-- MyRestaurantJefferSakon.temp_balance1 definition

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


-- MyRestaurantJefferSakon.temp_billno definition

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


-- MyRestaurantJefferSakon.temp_erplot definition

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


-- MyRestaurantJefferSakon.temp_ingpca definition

CREATE TABLE `temp_ingpca` (
  `PCode` varchar(16) NOT NULL DEFAULT '',
  `S_Qty` float(14,4) DEFAULT '0.0000',
  `PingCode` varchar(16) DEFAULT '0',
  `PingQty` float(14,4) DEFAULT '0.0000',
  `IdealUnit` float(10,4) DEFAULT '0.0000'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.temp_inventory definition

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


-- MyRestaurantJefferSakon.temp_menusetup definition

CREATE TABLE `temp_menusetup` (
  `Code_ID` varchar(10) NOT NULL DEFAULT '',
  `Code_Type` char(1) NOT NULL DEFAULT 'P',
  `PCode` varchar(15) DEFAULT NULL,
  `ShortName` varchar(80) DEFAULT NULL,
  `PPathName` varchar(200) DEFAULT NULL,
  `PColor` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.temp_queue definition

CREATE TABLE `temp_queue` (
  `queue_print` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.temp_tablefile definition

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


-- MyRestaurantJefferSakon.temp_viewinventoryafter definition

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


-- MyRestaurantJefferSakon.tempaccr definition

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


-- MyRestaurantJefferSakon.tempbillno definition

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


-- MyRestaurantJefferSakon.tempcashcard definition

CREATE TABLE `tempcashcard` (
  `TDate` date DEFAULT NULL,
  `TTime` time DEFAULT NULL,
  `TTable` varchar(15) DEFAULT NULL,
  `TMacNo` varchar(10) DEFAULT NULL,
  `TCCCode` varchar(20) DEFAULT NULL,
  `TCCUseAmt` float(10,2) DEFAULT NULL,
  `TCashier` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tempcashier definition

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


-- MyRestaurantJefferSakon.tempcredit definition

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


-- MyRestaurantJefferSakon.tempcupon definition

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


-- MyRestaurantJefferSakon.tempcustfile definition

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


-- MyRestaurantJefferSakon.tempcustrep definition

CREATE TABLE `tempcustrep` (
  `S_SPCode` varchar(20) NOT NULL DEFAULT '',
  `NoPayAmtOld` float(13,2) NOT NULL DEFAULT '0.00',
  `SumSaleAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `SumPayAmt` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tempdailysale definition

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


-- MyRestaurantJefferSakon.tempeditqty definition

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


-- MyRestaurantJefferSakon.tempeditqtyasdf definition

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


-- MyRestaurantJefferSakon.temperp_documentdetails definition

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


-- MyRestaurantJefferSakon.temperp_documents definition

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


-- MyRestaurantJefferSakon.tempexport definition

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


-- MyRestaurantJefferSakon.tempforsale definition

CREATE TABLE `tempforsale` (
  `TCode` char(5) NOT NULL DEFAULT '',
  `TSale1` float(10,2) NOT NULL DEFAULT '0.00',
  `TSale2` float(10,2) NOT NULL DEFAULT '0.00',
  `TSale3` float(10,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tempgift definition

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


-- MyRestaurantJefferSakon.tempgift2 definition

CREATE TABLE `tempgift2` (
  `S_Date` date DEFAULT NULL,
  `MacNo` char(3) DEFAULT NULL,
  `GiftNo` varchar(10) DEFAULT NULL,
  `GiftAmt` float(13,2) DEFAULT NULL,
  `GiftFlag` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tempgpdetail definition

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


-- MyRestaurantJefferSakon.tempgpheader definition

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


-- MyRestaurantJefferSakon.temphourly definition

CREATE TABLE `temphourly` (
  `ComputerName` varchar(50) DEFAULT NULL,
  `TimeSone1` varchar(5) DEFAULT NULL,
  `TimeSone2` varchar(5) DEFAULT NULL,
  `BillQty` float(6,0) DEFAULT NULL,
  `CustQty` float(6,0) DEFAULT NULL,
  `SaleAmount` float(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.temphourly2 definition

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


-- MyRestaurantJefferSakon.tempkic definition

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


-- MyRestaurantJefferSakon.tempkictran definition

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


-- MyRestaurantJefferSakon.tempkicvoid definition

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


-- MyRestaurantJefferSakon.templateorder definition

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


-- MyRestaurantJefferSakon.tempmem definition

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


-- MyRestaurantJefferSakon.tempmenuset definition

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


-- MyRestaurantJefferSakon.tempmove definition

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


-- MyRestaurantJefferSakon.tempmoveitem definition

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


-- MyRestaurantJefferSakon.tempoption definition

CREATE TABLE `tempoption` (
  `PTable` varchar(10) NOT NULL DEFAULT '',
  `PIndex` varchar(10) NOT NULL DEFAULT '',
  `Pcode` varchar(13) NOT NULL DEFAULT '',
  `PName` varchar(250) NOT NULL DEFAULT '',
  `POption` varchar(250) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.temppcareport definition

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


-- MyRestaurantJefferSakon.temppro6list definition

CREATE TABLE `temppro6list` (
  `MacNo` char(3) NOT NULL DEFAULT '',
  `TableNo` varchar(15) NOT NULL DEFAULT '',
  `ProCode` char(3) NOT NULL DEFAULT '',
  `PCode` varchar(13) NOT NULL DEFAULT '',
  `PQuan` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.temppromotion definition

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


-- MyRestaurantJefferSakon.temppset definition

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


-- MyRestaurantJefferSakon.tempreserve definition

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


-- MyRestaurantJefferSakon.tempsaleperhour definition

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


-- MyRestaurantJefferSakon.tempsalerep1 definition

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


-- MyRestaurantJefferSakon.tempsalerep2 definition

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


-- MyRestaurantJefferSakon.tempsalerep2detail definition

CREATE TABLE `tempsalerep2detail` (
  `SetType` int unsigned DEFAULT NULL,
  `SetCode` varchar(100) DEFAULT NULL,
  `SetName` varchar(200) DEFAULT NULL,
  `SetCount` float(10,0) DEFAULT NULL,
  `SetPrice` float(13,2) DEFAULT NULL,
  `SetAmount` float(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tempset definition

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


-- MyRestaurantJefferSakon.tempspecialrep1 definition

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


-- MyRestaurantJefferSakon.tempspecialrep2 definition

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


-- MyRestaurantJefferSakon.tempspecialrep3 definition

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


-- MyRestaurantJefferSakon.tempt_sale definition

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


-- MyRestaurantJefferSakon.tempterminal definition

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


-- MyRestaurantJefferSakon.temptopsale definition

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


-- MyRestaurantJefferSakon.tempvoucher definition

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


-- MyRestaurantJefferSakon.terminal definition

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


-- MyRestaurantJefferSakon.test definition

CREATE TABLE `test` (
  `Code` varchar(15) DEFAULT '0',
  `Name` varchar(50) DEFAULT NULL,
  `Position` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.test2 definition

CREATE TABLE `test2` (
  `Code` varchar(15) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `Position` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.test_table definition

CREATE TABLE `test_table` (
  `Code` char(15) DEFAULT '0',
  `Name` char(50) DEFAULT NULL,
  `Position` char(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tmp_balance definition

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


-- MyRestaurantJefferSakon.tmp_invcashdoc definition

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


-- MyRestaurantJefferSakon.tmp_invdetail definition

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


-- MyRestaurantJefferSakon.tmp_t_crar definition

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


-- MyRestaurantJefferSakon.tmp_tablefile definition

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


-- MyRestaurantJefferSakon.tpromotion2 definition

CREATE TABLE `tpromotion2` (
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tpromotion3 definition

CREATE TABLE `tpromotion3` (
  `R_Index` varchar(20) DEFAULT NULL,
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tpromotion4 definition

CREATE TABLE `tpromotion4` (
  `R_Index` varchar(20) DEFAULT NULL,
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tpromotion5 definition

CREATE TABLE `tpromotion5` (
  `TCode` varchar(20) DEFAULT NULL,
  `PCode` varchar(13) DEFAULT NULL,
  `ProCode` char(3) DEFAULT NULL,
  `PQuan` float(10,2) NOT NULL DEFAULT '0.00',
  `PPrice` float(10,2) NOT NULL DEFAULT '0.00',
  `MacNo` char(3) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.tpromotion6 definition

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


-- MyRestaurantJefferSakon.tranconfig definition

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


-- MyRestaurantJefferSakon.tranin definition

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


-- MyRestaurantJefferSakon.tranout definition

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


-- MyRestaurantJefferSakon.transtk definition

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


-- MyRestaurantJefferSakon.unitfile definition

CREATE TABLE `unitfile` (
  `UnitName` varchar(10) NOT NULL DEFAULT '',
  `UnitCode` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`UnitName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.usergroup definition

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


-- MyRestaurantJefferSakon.usermenu definition

CREATE TABLE `usermenu` (
  `MGroup` varchar(10) NOT NULL DEFAULT '0',
  `MCode` varchar(20) NOT NULL DEFAULT '',
  `MDesc` varchar(50) NOT NULL DEFAULT '',
  `OnAct` char(1) NOT NULL DEFAULT 'Y'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.vender definition

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


-- MyRestaurantJefferSakon.vendernav definition

CREATE TABLE `vendernav` (
  `VCode` varchar(20) NOT NULL DEFAULT '',
  `VName` varchar(250) DEFAULT '0',
  PRIMARY KEY (`VCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.voidmsg definition

CREATE TABLE `voidmsg` (
  `VCode` char(2) NOT NULL DEFAULT '',
  `VName` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.voucherdisc definition

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


-- MyRestaurantJefferSakon.vouchertype definition

CREATE TABLE `vouchertype` (
  `VTCode` char(3) NOT NULL DEFAULT '000',
  `VTName` varchar(30) DEFAULT NULL,
  `VTType` int unsigned NOT NULL DEFAULT '0',
  `VTAmount` float(10,2) NOT NULL DEFAULT '0.00',
  `VTLimitQty` int unsigned NOT NULL DEFAULT '1',
  `VTStrDay` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`VTCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- MyRestaurantJefferSakon.`zone` definition

CREATE TABLE `zone` (
  `CompName` varchar(20) NOT NULL DEFAULT '',
  `ZoneName` varchar(30) DEFAULT '',
  `ZoneIndex` int unsigned NOT NULL DEFAULT '0',
  `ZonePicturePath` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`CompName`,`ZoneIndex`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
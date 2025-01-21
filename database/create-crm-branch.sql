-- mycrmbranch.activities definition

CREATE TABLE `activities` (
  `Activities_Code` varchar(6) NOT NULL DEFAULT '',
  `Activities_Name` varchar(50) DEFAULT NULL,
  `Activities_StartDate` date DEFAULT NULL,
  `Activities_FinishDate` date DEFAULT NULL,
  PRIMARY KEY (`Activities_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.actmem definition

CREATE TABLE `actmem` (
  `Activities_Code` varchar(6) NOT NULL DEFAULT '',
  `Member_Code` varchar(13) NOT NULL DEFAULT '',
  `Service_Date` date DEFAULT NULL,
  `Employee_Code` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.area definition

CREATE TABLE `area` (
  `Area_Code` char(2) NOT NULL DEFAULT '00',
  `Area_Name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Area_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.autopostoption definition

CREATE TABLE `autopostoption` (
  `PostTime1` time NOT NULL DEFAULT '00:00:00',
  `PostTime2` time NOT NULL DEFAULT '00:00:00',
  `PostTime3` time NOT NULL DEFAULT '00:00:00',
  `ShowPostScreen` char(1) DEFAULT 'N',
  `SendTime1` time NOT NULL DEFAULT '00:00:00',
  `SendTime2` time NOT NULL DEFAULT '00:00:00',
  `SendTime3` time NOT NULL DEFAULT '00:00:00',
  `BackUpPath` varchar(100) DEFAULT '',
  `DataPath` varchar(100) DEFAULT '',
  `ServerPath` varchar(100) DEFAULT '',
  `SendRepeat` int unsigned DEFAULT '1',
  `RepeatTime` int DEFAULT '1',
  `KeepLogDay` int DEFAULT '30',
  `ServerLogPath` varchar(100) DEFAULT '',
  `ClientLogPath` varchar(100) DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.bmplu definition

CREATE TABLE `bmplu` (
  `Service_Date` date DEFAULT NULL,
  `Member_Code` char(13) DEFAULT NULL,
  `Branch_Code` char(3) DEFAULT NULL,
  `Receipt_No` char(12) DEFAULT NULL,
  `PLU_Code` char(13) DEFAULT NULL,
  `PLU_Amount` float(13,2) DEFAULT NULL,
  `PLU_Quantity` float(10,0) DEFAULT NULL,
  `PLU_Price` float(13,2) DEFAULT NULL,
  `TranferFlag` char(1) DEFAULT NULL,
  `Tran_No` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.bmtran definition

CREATE TABLE `bmtran` (
  `Service_Date` date DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Branch_Code` char(3) DEFAULT NULL,
  `Receipt_No` varchar(12) DEFAULT NULL,
  `Payment_Type` char(1) DEFAULT NULL,
  `GrossAmount` float(13,2) DEFAULT NULL,
  `DiscountAmount` float(13,2) DEFAULT NULL,
  `NetAmount` float(13,2) DEFAULT NULL,
  `Department_Code` varchar(4) DEFAULT NULL,
  `Department_Amount` float(13,2) DEFAULT NULL,
  `Mechine_Code` char(3) DEFAULT NULL,
  `Employee_Code` varchar(6) DEFAULT NULL,
  `Service_Time` varchar(8) DEFAULT NULL,
  `Score` float(14,0) DEFAULT NULL,
  `TranferFlag` char(1) DEFAULT NULL,
  `Coupon_Code` varchar(8) DEFAULT NULL,
  `Tran_No` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.branchgroup definition

CREATE TABLE `branchgroup` (
  `Branch_GroupCode` char(3) NOT NULL DEFAULT '',
  `Branch_GroupName` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Branch_GroupCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.branfile definition

CREATE TABLE `branfile` (
  `Branch_Code` char(3) NOT NULL DEFAULT 'XXX',
  `Branch_Name` varchar(50) NOT NULL DEFAULT 'New Branch',
  `Branch_Type_Code` char(2) NOT NULL DEFAULT '00',
  `Branch_Area_Code` char(2) DEFAULT NULL,
  `Branch_Size_Code` char(2) DEFAULT NULL,
  `Branch_Plane_Code` char(2) DEFAULT NULL,
  `Branch_Store_Code` char(2) DEFAULT NULL,
  `Branch_AddressNo` varchar(50) DEFAULT NULL,
  `Branch_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Branch_AddressDistrict` varchar(30) DEFAULT NULL,
  `Branch_Province` varchar(30) DEFAULT NULL,
  `Branch_PostalCode` varchar(5) DEFAULT NULL,
  `Branch_Telephone` varchar(30) DEFAULT NULL,
  `Branch_Fax` varchar(30) DEFAULT NULL,
  `Branch_Email` varchar(50) DEFAULT NULL,
  `Branch_Manager` varchar(50) DEFAULT NULL,
  `Branch_ServiceArea` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_ConfectArea` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_KitchenArea` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_TotalArea` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_Rent` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_ServiceCharge` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_FlagRent` char(1) NOT NULL DEFAULT 'N',
  `Branch_GP` float(10,2) NOT NULL DEFAULT '0.00',
  `Branch_FlagGP` char(1) NOT NULL DEFAULT 'N',
  `Branch_Remark` text,
  `Branch_Group_Code` char(3) DEFAULT NULL,
  `PointCode_Active` char(1) NOT NULL DEFAULT 'N',
  `PointCode_Type1` varchar(13) DEFAULT NULL,
  `PointCode_Type2` varchar(13) DEFAULT NULL,
  `PointCode_Type3` varchar(13) DEFAULT NULL,
  `PointCode_Type4` varchar(13) DEFAULT NULL,
  `PointCode_Type5` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`Branch_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.btype definition

CREATE TABLE `btype` (
  `BranchType_Code` char(2) NOT NULL DEFAULT '00',
  `BranchType_Name` varchar(50) NOT NULL DEFAULT 'Branch Type',
  `BranchP_Level` char(1) NOT NULL DEFAULT '1',
  `BranchPro_Level` char(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`BranchType_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.campaign definition

CREATE TABLE `campaign` (
  `Campaign_Code` varchar(10) DEFAULT NULL,
  `Campaign_Name` varchar(50) DEFAULT NULL,
  `Campaign_Type` int unsigned DEFAULT NULL,
  `Campaign_Coupon` char(3) DEFAULT NULL,
  `Campaign_SMSMessage` varchar(50) DEFAULT NULL,
  `Campaign_StartDate` date DEFAULT NULL,
  `Campaign_StopDate` date DEFAULT NULL,
  `Campaign_Remark` varchar(200) DEFAULT NULL,
  `UserCreate` varchar(30) DEFAULT NULL,
  `CreateDate` datetime DEFAULT NULL,
  `UserUpdate` varchar(30) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.cardpro definition

CREATE TABLE `cardpro` (
  `Card_Code` char(3) NOT NULL DEFAULT '',
  `Card_Name` varchar(30) DEFAULT ' ',
  `Card_Point` float(14,0) NOT NULL DEFAULT '0',
  `Card_StartDate` date DEFAULT NULL,
  `Card_EndDate` date DEFAULT NULL,
  PRIMARY KEY (`Card_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.changehobbyset definition

CREATE TABLE `changehobbyset` (
  `Hobby_SetCode` int unsigned DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Hobby_Code` int unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.changemem definition

CREATE TABLE `changemem` (
  `Member_Code` varchar(13) DEFAULT NULL,
  `Member_TypeCode` char(2) DEFAULT NULL,
  `Member_BranchCode` char(3) DEFAULT NULL,
  `Member_NameThai` varchar(50) DEFAULT NULL,
  `Member_NameEng` varchar(50) DEFAULT NULL,
  `Member_Gender` char(1) DEFAULT NULL,
  `Member_Status` char(2) DEFAULT NULL,
  `Member_NationCode` char(2) DEFAULT NULL,
  `Member_OccupationCode` char(1) DEFAULT NULL,
  `Member_IncomeCode` char(1) DEFAULT NULL,
  `Member_EducationCode` char(3) DEFAULT NULL,
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(15) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT NULL,
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(15) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT NULL,
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) DEFAULT NULL,
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(15) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) DEFAULT NULL,
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) DEFAULT NULL,
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) DEFAULT NULL,
  `Member_TitleNameThai` varchar(20) DEFAULT NULL,
  `Member_SurnameThai` varchar(50) DEFAULT NULL,
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(15) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) DEFAULT NULL,
  `Member_UsedTitle` char(1) DEFAULT NULL,
  `Member_MailTo` char(1) DEFAULT NULL,
  `Member_PrintLabel` char(1) DEFAULT NULL,
  `Member_UnknowBirth` char(1) DEFAULT NULL,
  `Employee_CodeCreate` varchar(20) DEFAULT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time DEFAULT NULL,
  `Employee_CodeModify` varchar(20) DEFAULT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time DEFAULT NULL,
  `UpdateFlag` char(1) DEFAULT NULL,
  `Change_Brithday` char(1) DEFAULT NULL,
  `Change_CardData` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.chkpost definition

CREATE TABLE `chkpost` (
  `Transaction_Date` date NOT NULL,
  `Branch_Code` char(3) NOT NULL DEFAULT '',
  `Branch_Name` varchar(50) DEFAULT NULL,
  `Check_Data_Import` char(1) NOT NULL DEFAULT '-',
  `Employee_Code` varchar(6) DEFAULT NULL,
  `Transfer_Date` date NOT NULL,
  `Check_Data_Zip` char(1) DEFAULT NULL,
  PRIMARY KEY (`Branch_Code`,`Transaction_Date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.clientcompany definition

CREATE TABLE `clientcompany` (
  `ClientCompany_Code` char(3) DEFAULT NULL,
  `ClientCompany_Name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.clonetable definition

CREATE TABLE `clonetable` (
  `Tran_No` varchar(20) DEFAULT NULL,
  `Tran_Date` date DEFAULT NULL,
  `Member_OldCode` varchar(13) DEFAULT NULL,
  `Member_NewCode` varchar(13) DEFAULT NULL,
  `Tran_User` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.company definition

CREATE TABLE `company` (
  `Company_Code` char(3) NOT NULL DEFAULT '',
  `Company_Name` varchar(60) NOT NULL DEFAULT '',
  `Company_AddressNo` varchar(50) DEFAULT NULL,
  `Company_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Company_AddressDistrict` varchar(30) DEFAULT NULL,
  `Company_Province` varchar(30) DEFAULT NULL,
  `Company_PostalCode` varchar(5) DEFAULT NULL,
  `Company_Telephone` varchar(30) DEFAULT NULL,
  `Company_Fax` varchar(30) DEFAULT NULL,
  `Company_Email` varchar(50) DEFAULT NULL,
  `Company_Tax` varchar(20) DEFAULT NULL,
  `Company_AccountTerm` date DEFAULT NULL,
  `Company_BackUpPath` varchar(30) NOT NULL DEFAULT '',
  `Company_DataPath` varchar(30) NOT NULL DEFAULT '',
  `Company_OnlineSystem` char(1) DEFAULT 'N',
  `Company_ServerPath` varchar(50) DEFAULT NULL,
  `Company_DefaultExpDate` date DEFAULT NULL,
  `Label_Type` int unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`Company_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.cupon definition

CREATE TABLE `cupon` (
  `CuCode` char(3) DEFAULT NULL,
  `CuName` varchar(30) DEFAULT NULL,
  `CuBegin` date DEFAULT NULL,
  `CuEnd` date DEFAULT NULL,
  `CuStrDay` varchar(28) DEFAULT NULL,
  `CuType` char(1) DEFAULT NULL,
  `CuADisc` varchar(8) DEFAULT NULL,
  `CuADiscBath` float(10,2) DEFAULT NULL,
  `CuBDisc` varchar(8) DEFAULT NULL,
  `CuBDiscBath` float(10,2) DEFAULT NULL,
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
  `CuDisc` float(10,2) DEFAULT NULL,
  `CuDiscBath` float(10,2) DEFAULT NULL,
  `ChkMember` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.defaultpromotionperiod definition

CREATE TABLE `defaultpromotionperiod` (
  `BeginDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `BuyAmountForPoint` float(13,2) NOT NULL DEFAULT '0.00',
  `MultiplePoint` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.dreservegift definition

CREATE TABLE `dreservegift` (
  `Reciept_No` varchar(16) NOT NULL DEFAULT '0',
  `Reward_Code` varchar(13) NOT NULL DEFAULT '',
  `Reserve_Quantity` float(10,0) NOT NULL DEFAULT '0',
  `Receive_Quantity` float(10,0) NOT NULL DEFAULT '0',
  `Reserve_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `Reserve_Flag` char(1) NOT NULL DEFAULT 'N',
  `Reserve_Check` char(1) NOT NULL DEFAULT 'N',
  `Reserve_Score` float(10,0) DEFAULT '0',
  PRIMARY KEY (`Reciept_No`,`Reward_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.dsendgift definition

CREATE TABLE `dsendgift` (
  `Reciept_No` varchar(16) NOT NULL DEFAULT '0',
  `Reward_Code` varchar(13) NOT NULL DEFAULT '',
  `Send_Quantity` float(10,0) NOT NULL DEFAULT '0',
  `Send_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `Send_Post` char(1) NOT NULL DEFAULT 'N',
  `Send_Score` float(10,0) NOT NULL DEFAULT '0',
  PRIMARY KEY (`Reciept_No`,`Reward_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.education definition

CREATE TABLE `education` (
  `Education_Code` char(3) NOT NULL DEFAULT '',
  `Education_Name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Education_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.gift definition

CREATE TABLE `gift` (
  `Reward_Code` varchar(13) NOT NULL DEFAULT '0',
  `Reward_Name` varchar(30) DEFAULT NULL,
  `Reward_Score` float(10,0) NOT NULL DEFAULT '0',
  `Reward_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `Reward_Unit` varchar(20) DEFAULT NULL,
  `Reward_StartDate` date DEFAULT NULL,
  `Reward_FinishDate` date DEFAULT NULL,
  PRIMARY KEY (`Reward_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.groupfile definition

CREATE TABLE `groupfile` (
  `Product_GroupCode` varchar(4) NOT NULL DEFAULT '',
  `Product_GroupName` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Product_GroupCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.hobby definition

CREATE TABLE `hobby` (
  `Hobby_Code` int unsigned NOT NULL AUTO_INCREMENT,
  `Hobby_Name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`Hobby_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.hobbyset definition

CREATE TABLE `hobbyset` (
  `Hobby_SetCode` int unsigned NOT NULL,
  `Member_Code` varchar(13) NOT NULL DEFAULT '0',
  `Hobby_Code` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`Hobby_Code`,`Member_Code`,`Hobby_SetCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.hobbyset_bak definition

CREATE TABLE `hobbyset_bak` (
  `Hobby_SetCode` int unsigned DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Hobby_Code` int unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.hotmenu definition

CREATE TABLE `hotmenu` (
  `HotMenu_Code` int unsigned NOT NULL DEFAULT '0',
  `HotMenu_Name` varchar(20) DEFAULT NULL,
  `HotMenu_IconIndex` int unsigned DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.hreservegift definition

CREATE TABLE `hreservegift` (
  `Reciept_No` varchar(16) NOT NULL DEFAULT '0',
  `Reserve_StartDate` date DEFAULT NULL,
  `Member_Code` varchar(13) NOT NULL DEFAULT '0',
  `Reserve_FinishDate` date DEFAULT NULL,
  `Reserve_Type` int NOT NULL DEFAULT '0',
  `Branch_Code` char(3) DEFAULT NULL,
  `Reserve_TotalAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `Stock_Code` char(2) NOT NULL DEFAULT '',
  `Reserve_Active` char(1) NOT NULL DEFAULT 'N',
  `Reserve_TotalScore` float(13,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`Reciept_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.hsendgift definition

CREATE TABLE `hsendgift` (
  `Reciept_No` varchar(16) NOT NULL DEFAULT '0',
  `Send_StartDate` date DEFAULT NULL,
  `Reserve_Reciept_No` varchar(16) DEFAULT '0',
  `Member_Code` varchar(13) NOT NULL DEFAULT '0',
  `Send_FinishDate` date DEFAULT NULL,
  `Send_Type` int unsigned NOT NULL DEFAULT '0',
  `Branch_Code` char(3) DEFAULT NULL,
  `Send_TotalAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `Send_Post` char(1) NOT NULL DEFAULT 'N',
  `Employee_Code` varchar(6) DEFAULT NULL,
  `Service_Time` varchar(8) DEFAULT '00:00:00',
  `Service_Date` date DEFAULT NULL,
  `Stock_Code` char(2) NOT NULL,
  `Send_TotalScore` float(13,2) NOT NULL,
  PRIMARY KEY (`Reciept_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.htranin definition

CREATE TABLE `htranin` (
  `R_No` varchar(15) NOT NULL,
  `R_Date` date DEFAULT NULL,
  `R_Remark` varchar(50) DEFAULT NULL,
  `R_Type` char(1) NOT NULL DEFAULT '0',
  `R_Total` int NOT NULL DEFAULT '0',
  `R_User` varchar(6) DEFAULT NULL,
  `R_Post` char(1) NOT NULL DEFAULT 'N',
  `R_UserPost` varchar(6) DEFAULT NULL,
  `R_PostDate` date DEFAULT NULL,
  `R_PostTime` varchar(10) DEFAULT NULL,
  `R_Info` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`R_No`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.importlist definition

CREATE TABLE `importlist` (
  `Import_Code` varchar(10) DEFAULT NULL,
  `Import_Date` date DEFAULT NULL,
  `Import_Client` char(3) DEFAULT NULL,
  `Import_Qty` float(10,0) DEFAULT NULL,
  `Import_KeyStart` date DEFAULT NULL,
  `Import_KeyStop` date DEFAULT NULL,
  `Import_KeyDate` float(10,0) DEFAULT NULL,
  `Employee_Code` char(6) DEFAULT NULL,
  `Import_View` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.income definition

CREATE TABLE `income` (
  `Income_Code` char(1) NOT NULL,
  `Income_Name` char(20) DEFAULT NULL,
  PRIMARY KEY (`Income_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.logfile definition

CREATE TABLE `logfile` (
  `LogDate` date DEFAULT NULL,
  `LogTime` time NOT NULL,
  `LogType` varchar(30) DEFAULT ' ',
  `LogCategory` varchar(30) DEFAULT ' ',
  `LogEvent` varchar(100) DEFAULT ' ',
  `LogUser` varchar(30) DEFAULT ' ',
  `LogComputer` varchar(30) DEFAULT ' '
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.mdept definition

CREATE TABLE `mdept` (
  `Service_Date` date NOT NULL,
  `Member_Code` char(13) NOT NULL,
  `Branch_Code` char(3) NOT NULL,
  `Receipt_No` char(12) NOT NULL,
  `Department_Code` char(4) NOT NULL,
  `Department_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`Member_Code`,`Service_Date`,`Branch_Code`,`Receipt_No`,`Department_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memaddtime definition

CREATE TABLE `memaddtime` (
  `Member_Code` varchar(13) NOT NULL,
  `Service_Date` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_NewAppliedDate` date DEFAULT NULL,
  `Service_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `Employee_Code` varchar(20) DEFAULT NULL,
  `Branch_Code` char(3) DEFAULT NULL,
  `Service_InputDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memberpricebyplu definition

CREATE TABLE `memberpricebyplu` (
  `Member_Code` varchar(16) NOT NULL DEFAULT '0',
  `Member_PCode` varchar(20) NOT NULL DEFAULT '0',
  `Member_SpecPrice` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.membertype definition

CREATE TABLE `membertype` (
  `Member_TypeCode` char(3) NOT NULL DEFAULT 'XXX',
  `Member_TypeName` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`Member_TypeCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster definition

CREATE TABLE `memmaster` (
  `Member_Code` varchar(13) NOT NULL,
  `Member_TypeCode` char(2) NOT NULL DEFAULT '00',
  `Member_BranchCode` char(3) NOT NULL DEFAULT '000',
  `Member_NameThai` varchar(50) DEFAULT ' ',
  `Member_NameEng` varchar(50) DEFAULT ' ',
  `Member_Gender` char(1) NOT NULL DEFAULT 'M',
  `Member_Status` char(2) NOT NULL DEFAULT 'S',
  `Member_NationCode` char(2) NOT NULL DEFAULT '00',
  `Member_OccupationCode` char(1) NOT NULL DEFAULT '0',
  `Member_IncomeCode` char(1) NOT NULL DEFAULT '0',
  `Member_EducationCode` char(3) NOT NULL DEFAULT '000',
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(40) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT ' ',
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(30) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT '00/00/00',
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) NOT NULL DEFAULT '0.00',
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(30) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) NOT NULL DEFAULT 'M',
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) NOT NULL DEFAULT '0',
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) NOT NULL DEFAULT '0',
  `Member_TitleNameThai` varchar(20) DEFAULT ' ',
  `Member_SurnameThai` varchar(50) DEFAULT ' ',
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(30) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) NOT NULL DEFAULT 'Y',
  `Member_UsedTitle` char(1) NOT NULL DEFAULT 'Y',
  `Member_MailTo` char(1) DEFAULT '0',
  `Member_PrintLabel` char(1) NOT NULL DEFAULT 'N',
  `Employee_CodeCreate` varchar(20) NOT NULL DEFAULT '000000',
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time NOT NULL DEFAULT '00:00:00',
  `Employee_CodeModify` varchar(20) NOT NULL DEFAULT '000000',
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time NOT NULL DEFAULT '00:00:00',
  `Member_TranferFlag` char(1) NOT NULL DEFAULT 'N',
  `Member_UnknowBirth` char(1) NOT NULL DEFAULT 'N',
  `Member_PriceNO` varchar(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`Member_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster2 definition

CREATE TABLE `memmaster2` (
  `Member_Code` varchar(13) DEFAULT NULL,
  `Member_TypeCode` char(2) DEFAULT NULL,
  `Member_BranchCode` char(3) DEFAULT NULL,
  `Member_NameThai` varchar(50) DEFAULT NULL,
  `Member_NameEng` varchar(50) DEFAULT NULL,
  `Member_Gender` char(1) DEFAULT NULL,
  `Member_Status` char(2) DEFAULT NULL,
  `Member_NationCode` char(2) DEFAULT NULL,
  `Member_OccupationCode` char(1) DEFAULT NULL,
  `Member_IncomeCode` char(1) DEFAULT NULL,
  `Member_EducationCode` char(3) DEFAULT NULL,
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(15) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT NULL,
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(15) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT NULL,
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) DEFAULT NULL,
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(15) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) DEFAULT NULL,
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) DEFAULT NULL,
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) DEFAULT NULL,
  `Member_TitleNameThai` varchar(20) DEFAULT NULL,
  `Member_SurnameThai` varchar(50) DEFAULT NULL,
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(15) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) DEFAULT NULL,
  `Member_UsedTitle` char(1) DEFAULT NULL,
  `Member_MailTo` char(1) DEFAULT NULL,
  `Member_PrintLabel` char(1) DEFAULT NULL,
  `Employee_CodeCreate` varchar(20) DEFAULT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time DEFAULT NULL,
  `Employee_CodeModify` varchar(20) DEFAULT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time DEFAULT NULL,
  `CardPro_Code` char(3) DEFAULT NULL,
  `Member_SMSBirthdayCheck` char(1) DEFAULT NULL,
  `Member_SMSPromotionCheck` char(1) DEFAULT NULL,
  `Member_SMSActivityCheck` char(1) DEFAULT NULL,
  `Member_SMSBranchCheck` int unsigned DEFAULT NULL,
  `Member_BranchNearHourse` char(3) DEFAULT NULL,
  `Member_BranchNearOffice` char(3) DEFAULT NULL,
  `Member_BranchRegues` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster_bak definition

CREATE TABLE `memmaster_bak` (
  `Member_Code` varchar(13) DEFAULT NULL,
  `Member_TypeCode` char(2) DEFAULT NULL,
  `Member_BranchCode` char(3) DEFAULT NULL,
  `Member_NameThai` varchar(50) DEFAULT NULL,
  `Member_NameEng` varchar(50) DEFAULT NULL,
  `Member_Gender` char(1) DEFAULT NULL,
  `Member_Status` char(2) DEFAULT NULL,
  `Member_NationCode` char(2) DEFAULT NULL,
  `Member_OccupationCode` char(1) DEFAULT NULL,
  `Member_IncomeCode` char(1) DEFAULT NULL,
  `Member_EducationCode` char(3) DEFAULT NULL,
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(15) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT NULL,
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(15) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT NULL,
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) DEFAULT NULL,
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(15) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) DEFAULT NULL,
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) DEFAULT NULL,
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) DEFAULT NULL,
  `Member_TitleNameThai` varchar(20) DEFAULT NULL,
  `Member_SurnameThai` varchar(50) DEFAULT NULL,
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(15) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) DEFAULT NULL,
  `Member_UsedTitle` char(1) DEFAULT NULL,
  `Member_MailTo` char(1) DEFAULT NULL,
  `Member_PrintLabel` char(1) DEFAULT NULL,
  `Employee_CodeCreate` varchar(20) DEFAULT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time DEFAULT NULL,
  `Employee_CodeModify` varchar(20) DEFAULT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster_copy definition

CREATE TABLE `memmaster_copy` (
  `Member_Code` varchar(13) NOT NULL,
  `Member_TypeCode` char(2) NOT NULL DEFAULT '00',
  `Member_BranchCode` char(3) NOT NULL DEFAULT '000',
  `Member_NameThai` varchar(50) DEFAULT ' ',
  `Member_NameEng` varchar(50) DEFAULT ' ',
  `Member_Gender` char(1) NOT NULL DEFAULT 'M',
  `Member_Status` char(2) NOT NULL DEFAULT 'S',
  `Member_NationCode` char(2) NOT NULL DEFAULT '00',
  `Member_OccupationCode` char(1) NOT NULL DEFAULT '0',
  `Member_IncomeCode` char(1) NOT NULL DEFAULT '0',
  `Member_EducationCode` char(3) NOT NULL DEFAULT '000',
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(15) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT NULL,
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(50) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT '00/00/00',
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) NOT NULL DEFAULT '0.00',
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(30) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) NOT NULL DEFAULT 'M',
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) NOT NULL DEFAULT '0',
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) NOT NULL DEFAULT '0',
  `Member_TitleNameThai` varchar(20) DEFAULT ' ',
  `Member_SurnameThai` varchar(50) DEFAULT ' ',
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(30) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) NOT NULL DEFAULT 'Y',
  `Member_UsedTitle` char(1) NOT NULL DEFAULT 'Y',
  `Member_MailTo` char(1) DEFAULT '0',
  `Member_PrintLabel` char(1) NOT NULL DEFAULT 'N',
  `Member_UnknowBirth` char(1) NOT NULL DEFAULT 'N',
  `Employee_CodeCreate` varchar(20) DEFAULT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time NOT NULL DEFAULT '00:00:00',
  `Employee_CodeModify` varchar(20) DEFAULT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time NOT NULL DEFAULT '00:00:00',
  `CardPro_Code` char(3) NOT NULL,
  `Member_TranferFlag` char(1) DEFAULT NULL,
  `Member_PriceChk` int unsigned DEFAULT NULL,
  `PersonalID` varchar(20) DEFAULT NULL,
  `Member_AccCode` varchar(30) DEFAULT NULL,
  `Member_AccBran` varchar(30) DEFAULT NULL,
  `ShowMemSum` char(1) DEFAULT NULL,
  PRIMARY KEY (`Member_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster_ko definition

CREATE TABLE `memmaster_ko` (
  `Member_Code` varchar(13) DEFAULT NULL,
  `Member_TypeCode` char(2) DEFAULT NULL,
  `Member_BranchCode` char(3) DEFAULT NULL,
  `Member_NameThai` varchar(50) DEFAULT NULL,
  `Member_NameEng` varchar(50) DEFAULT NULL,
  `Member_Gender` char(1) DEFAULT NULL,
  `Member_Status` char(2) DEFAULT NULL,
  `Member_NationCode` char(2) DEFAULT NULL,
  `Member_OccupationCode` char(1) DEFAULT NULL,
  `Member_IncomeCode` char(1) DEFAULT NULL,
  `Member_EducationCode` char(3) DEFAULT NULL,
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(15) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT NULL,
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(50) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT NULL,
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) DEFAULT NULL,
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(30) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) DEFAULT NULL,
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) DEFAULT NULL,
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) DEFAULT NULL,
  `Member_TitleNameThai` varchar(20) DEFAULT NULL,
  `Member_SurnameThai` varchar(50) DEFAULT NULL,
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(30) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) DEFAULT NULL,
  `Member_UsedTitle` char(1) DEFAULT NULL,
  `Member_MailTo` char(1) DEFAULT NULL,
  `Member_PrintLabel` char(1) DEFAULT NULL,
  `Employee_CodeCreate` varchar(20) DEFAULT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time DEFAULT NULL,
  `Employee_CodeModify` varchar(20) DEFAULT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time DEFAULT NULL,
  `Member_TranferFlag` char(1) DEFAULT NULL,
  `Member_UnknowBirth` char(1) DEFAULT NULL,
  `Member_PriceChk` int unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster_old definition

CREATE TABLE `memmaster_old` (
  `Member_Code` varchar(13) NOT NULL,
  `Member_TypeCode` char(2) NOT NULL DEFAULT '00',
  `Member_BranchCode` char(3) NOT NULL DEFAULT '000',
  `Member_NameThai` varchar(50) DEFAULT ' ',
  `Member_NameEng` varchar(50) DEFAULT ' ',
  `Member_Gender` char(1) NOT NULL DEFAULT 'M',
  `Member_Status` char(2) NOT NULL DEFAULT 'S',
  `Member_NationCode` char(2) NOT NULL DEFAULT '00',
  `Member_OccupationCode` char(1) NOT NULL DEFAULT '0',
  `Member_IncomeCode` char(1) NOT NULL DEFAULT '0',
  `Member_EducationCode` char(3) NOT NULL DEFAULT '000',
  `Member_Company` varchar(100) DEFAULT NULL,
  `Member_AddressNo` varchar(100) DEFAULT NULL,
  `Member_Building` varchar(100) DEFAULT ' ',
  `Member_AddressSoi` varchar(100) DEFAULT NULL,
  `Member_AddressStreet` varchar(100) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(100) DEFAULT NULL,
  `Member_AddressDistrict` varchar(100) DEFAULT NULL,
  `Member_Province` varchar(100) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(100) DEFAULT NULL,
  `Member_Fax` varchar(100) DEFAULT NULL,
  `Member_Email` varchar(100) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT '00/00/00',
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) NOT NULL DEFAULT '0.00',
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(15) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) NOT NULL DEFAULT 'M',
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) NOT NULL DEFAULT '0',
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) NOT NULL DEFAULT '0',
  `Member_TitleNameThai` varchar(20) DEFAULT ' ',
  `Member_SurnameThai` varchar(50) DEFAULT ' ',
  `Member_CompanyAddressNo` varchar(100) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(100) DEFAULT NULL,
  `Member_CompanySoi` varchar(100) DEFAULT NULL,
  `Member_CompanyStreet` varchar(100) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(100) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(100) DEFAULT NULL,
  `Member_CompanyProvince` varchar(100) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(100) DEFAULT NULL,
  `Member_CompanyFax` varchar(100) DEFAULT NULL,
  `Member_Active` char(1) NOT NULL DEFAULT 'Y',
  `Member_UsedTitle` char(1) NOT NULL DEFAULT 'Y',
  `Member_MailTo` char(1) DEFAULT '0',
  `Member_PrintLabel` char(1) NOT NULL DEFAULT 'N',
  `Member_UnknowBirth` char(1) NOT NULL DEFAULT 'N',
  `Employee_CodeCreate` varchar(20) NOT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time NOT NULL DEFAULT '00:00:00',
  `Employee_CodeModify` varchar(20) NOT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time NOT NULL DEFAULT '00:00:00',
  `CardPro_Code` char(3) NOT NULL,
  PRIMARY KEY (`Member_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memmaster_test definition

CREATE TABLE `memmaster_test` (
  `Member_Code` varchar(13) DEFAULT NULL,
  `Member_TypeCode` char(2) DEFAULT NULL,
  `Member_BranchCode` char(3) DEFAULT NULL,
  `Member_NameThai` varchar(50) DEFAULT NULL,
  `Member_NameEng` varchar(50) DEFAULT NULL,
  `Member_Gender` char(1) DEFAULT NULL,
  `Member_Status` char(2) DEFAULT NULL,
  `Member_NationCode` char(2) DEFAULT NULL,
  `Member_OccupationCode` char(1) DEFAULT NULL,
  `Member_IncomeCode` char(1) DEFAULT NULL,
  `Member_EducationCode` char(3) DEFAULT NULL,
  `Member_Company` varchar(50) DEFAULT NULL,
  `Member_AddressNo` varchar(15) DEFAULT NULL,
  `Member_Building` varchar(30) DEFAULT NULL,
  `Member_AddressSoi` varchar(30) DEFAULT NULL,
  `Member_AddressStreet` varchar(30) DEFAULT NULL,
  `Member_AddressSubDistrict` varchar(30) DEFAULT NULL,
  `Member_AddressDistrict` varchar(30) DEFAULT NULL,
  `Member_Province` varchar(30) DEFAULT NULL,
  `Member_PostalCode` varchar(5) DEFAULT NULL,
  `Member_HomeTel` varchar(15) DEFAULT NULL,
  `Member_Fax` varchar(15) DEFAULT NULL,
  `Member_Email` varchar(50) DEFAULT NULL,
  `Member_Brithday` date DEFAULT NULL,
  `Member_AppliedDate` date DEFAULT NULL,
  `Member_ExpiredDate` date DEFAULT NULL,
  `Member_DiscountRate` varchar(8) DEFAULT NULL,
  `Member_SpouseName` varchar(50) DEFAULT NULL,
  `Member_Food` varchar(50) DEFAULT NULL,
  `Member_TotalPurchase` float(10,2) DEFAULT NULL,
  `Member_Remark1` varchar(50) DEFAULT NULL,
  `Member_Remark2` varchar(50) DEFAULT NULL,
  `Member_Mobile` varchar(15) DEFAULT NULL,
  `Member_ReceiveInformation` char(1) DEFAULT NULL,
  `Member_HobbySetCode` varchar(100) DEFAULT NULL,
  `Member_LastDateService` date DEFAULT NULL,
  `Member_ServiceCount` float(14,0) DEFAULT NULL,
  `Member_PointExpiredDate` date DEFAULT NULL,
  `Member_TotalScore` float(14,0) DEFAULT NULL,
  `Member_TitleNameThai` varchar(20) DEFAULT NULL,
  `Member_SurnameThai` varchar(50) DEFAULT NULL,
  `Member_CompanyAddressNo` varchar(15) DEFAULT NULL,
  `Member_CompanyBuilding` varchar(30) DEFAULT NULL,
  `Member_CompanySoi` varchar(30) DEFAULT NULL,
  `Member_CompanyStreet` varchar(30) DEFAULT NULL,
  `Member_CompanySubDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyDistrict` varchar(30) DEFAULT NULL,
  `Member_CompanyProvince` varchar(30) DEFAULT NULL,
  `Member_CompanyPostalCode` varchar(5) DEFAULT NULL,
  `Member_CompanyTel` varchar(15) DEFAULT NULL,
  `Member_CompanyFax` varchar(15) DEFAULT NULL,
  `Member_Active` char(1) DEFAULT NULL,
  `Member_UsedTitle` char(1) DEFAULT NULL,
  `Member_MailTo` char(1) DEFAULT NULL,
  `Employee_CodeCreate` varchar(20) DEFAULT NULL,
  `Employee_CreateDate` date DEFAULT NULL,
  `Employee_CreateTime` time DEFAULT NULL,
  `Employee_CodeModify` varchar(20) DEFAULT NULL,
  `Employee_ModifyDate` date DEFAULT NULL,
  `Employee_ModifyTime` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memsum definition

CREATE TABLE `memsum` (
  `M_Code` char(13) NOT NULL,
  `BillQty` int NOT NULL DEFAULT '0',
  `BuyAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `SumPoint` float(13,2) NOT NULL DEFAULT '0.00',
  `SpentPoint` float(13,2) NOT NULL DEFAULT '0.00',
  `RemainingPoint` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.memsumbyday definition

CREATE TABLE `memsumbyday` (
  `M_Code` varchar(13) NOT NULL,
  `BillQty` int NOT NULL DEFAULT '0',
  `BuyAmount` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.mgift definition

CREATE TABLE `mgift` (
  `M_RecNo` varchar(13) NOT NULL,
  `M_End` date DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_Name` varchar(40) DEFAULT NULL,
  `M_Date` date DEFAULT NULL,
  `M_Amt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Sub` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Now` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Remark` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`M_RecNo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.movetable definition

CREATE TABLE `movetable` (
  `Tran_No` varchar(20) DEFAULT NULL,
  `Tran_Date` date DEFAULT NULL,
  `Member_OldCode` varchar(13) DEFAULT NULL,
  `Member_NewCode` varchar(13) DEFAULT NULL,
  `Tran_User` varchar(20) DEFAULT NULL,
  `SumCount` float(10,0) DEFAULT NULL,
  `SumPurchase` float(10,2) DEFAULT NULL,
  `SumScore` float(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.mplu definition

CREATE TABLE `mplu` (
  `Service_Date` date DEFAULT NULL,
  `Member_Code` char(13) NOT NULL,
  `Branch_Code` char(3) NOT NULL DEFAULT '001',
  `Receipt_No` char(12) NOT NULL,
  `PLU_Group` char(4) NOT NULL,
  `Sale_Type` char(1) NOT NULL DEFAULT 'E',
  `PLU_GroupName` varchar(100) NOT NULL,
  `PLU_Code` varchar(16) NOT NULL,
  `PLU_Name` varchar(40) NOT NULL,
  `PLU_Amount` float(13,2) NOT NULL DEFAULT '0.00',
  `PLU_Quantity` float(10,3) NOT NULL DEFAULT '0.000',
  `PLU_Price` float(13,2) NOT NULL DEFAULT '0.00',
  `TranferFlag` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.mpromotion definition

CREATE TABLE `mpromotion` (
  `M_TypeCode` char(2) NOT NULL,
  `M_PCode` char(13) NOT NULL,
  `M_Disc` decimal(12,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.mtran definition

CREATE TABLE `mtran` (
  `Service_Date` date NOT NULL,
  `Member_Code` varchar(13) NOT NULL,
  `Branch_Code` char(3) NOT NULL DEFAULT '001',
  `Receipt_No` varchar(12) NOT NULL,
  `Sale_Type` char(1) DEFAULT NULL,
  `GrossAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `DiscountAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `NetAmount` float(13,2) NOT NULL DEFAULT '0.00',
  `Mechine_Code` char(3) DEFAULT NULL,
  `Employee_Code` varchar(6) DEFAULT NULL,
  `Service_Time` varchar(8) DEFAULT '00:00:00',
  `Score` float(14,0) NOT NULL DEFAULT '0',
  `TranferFlag` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`Member_Code`,`Service_Date`,`Receipt_No`,`Branch_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.nation definition

CREATE TABLE `nation` (
  `Nation_Code` char(2) NOT NULL,
  `Nation_Name` char(20) DEFAULT NULL,
  PRIMARY KEY (`Nation_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.newtempreport definition

CREATE TABLE `newtempreport` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_NetAmt` float(13,2) DEFAULT NULL,
  `M_AvgNet` float(13,2) DEFAULT NULL,
  `M_Score` float(14,0) DEFAULT NULL,
  `M_Cnt` float(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.occup definition

CREATE TABLE `occup` (
  `Occupation_Code` char(1) NOT NULL,
  `Occupation_Name` char(20) DEFAULT NULL,
  PRIMARY KEY (`Occupation_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.plane definition

CREATE TABLE `plane` (
  `Plane_Code` char(2) NOT NULL DEFAULT '00',
  `Plane_Name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Plane_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.pointtype definition

CREATE TABLE `pointtype` (
  `Point_TypeCode` varchar(13) NOT NULL,
  `Point_TypeDateService` varchar(30) DEFAULT NULL,
  `Point_StartDateService` date DEFAULT NULL,
  `Point_FinishDateService` date DEFAULT NULL,
  `Point_StartTimeService1` varchar(8) NOT NULL DEFAULT '00:00:00',
  `Point_FinishTimeService1` varchar(8) NOT NULL DEFAULT '00:00:00',
  `BahtRatePerPoint1` float(5,0) NOT NULL DEFAULT '0',
  `point1` float(10,0) NOT NULL DEFAULT '0',
  `Point_StartTimeService2` varchar(8) NOT NULL DEFAULT '00:00:00',
  `Point_FinishTimeService2` varchar(8) NOT NULL DEFAULT '00:00:00',
  `BahtRatePerPoint2` float(5,0) NOT NULL DEFAULT '0',
  `point2` float(10,0) NOT NULL DEFAULT '0',
  `Point_StartTimeService3` varchar(8) NOT NULL DEFAULT '00:00:00',
  `Point_FinishTimeService3` varchar(8) NOT NULL DEFAULT '00:00:00',
  `BahtRatePerPoint3` float(5,0) NOT NULL DEFAULT '0',
  `point3` float(10,0) NOT NULL DEFAULT '0',
  `Point_TypeName` varchar(30) DEFAULT ' ',
  PRIMARY KEY (`Point_TypeCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.posuser definition

CREATE TABLE `posuser` (
  `Employee_Code` varchar(10) NOT NULL DEFAULT '0',
  `Employee_Password` varchar(20) NOT NULL,
  `Employee_Group` varchar(15) NOT NULL,
  `Employee_Company` char(3) DEFAULT NULL,
  `Employee_Name` varchar(40) DEFAULT NULL,
  `Empoyee_Status` char(1) NOT NULL DEFAULT 'N',
  `Machine_No` char(3) DEFAULT NULL,
  `Stock0` char(1) NOT NULL DEFAULT 'N',
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
  PRIMARY KEY (`Employee_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.product definition

CREATE TABLE `product` (
  `PCode` varchar(16) NOT NULL,
  `PActive` char(1) NOT NULL DEFAULT 'Y',
  `PGroup` varchar(4) NOT NULL,
  `PVender` varchar(4) NOT NULL,
  `PType` char(1) NOT NULL DEFAULT '1',
  `PNormal` char(1) NOT NULL DEFAULT 'C',
  `PRemark` varchar(50) DEFAULT NULL,
  `PStatus` char(1) NOT NULL DEFAULT 'P',
  `PStock` char(1) NOT NULL DEFAULT 'Y',
  `PDesc` varchar(50) DEFAULT '',
  `PUnit1` varchar(10) DEFAULT '',
  `PPrice11` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice12` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice13` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice14` float(13,2) NOT NULL DEFAULT '0.00',
  `PPrice15` float(13,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`PCode`),
  UNIQUE KEY `Porduct_PCode` (`PCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.promemtype definition

CREATE TABLE `promemtype` (
  `PMCode` char(3) DEFAULT NULL,
  `PMName` varchar(30) DEFAULT NULL,
  `PMMType` char(2) DEFAULT NULL,
  `PMStartDate` date DEFAULT NULL,
  `PMEndDate` date DEFAULT NULL,
  `PMPQty` float(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.promotionperiod definition

CREATE TABLE `promotionperiod` (
  `BeginDate` date DEFAULT NULL,
  `EndDate` date DEFAULT NULL,
  `BuyAmountForPoint` float(13,2) NOT NULL DEFAULT '0.00',
  `MultiplePoint` float(13,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.province definition

CREATE TABLE `province` (
  `Province_Code` int unsigned DEFAULT NULL,
  `Province_Name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.rfid_bill definition

CREATE TABLE `rfid_bill` (
  `BILL_NO` varchar(10) NOT NULL,
  `BILL_DATE` datetime DEFAULT NULL,
  `BILL_CUST_ID` char(7) NOT NULL,
  `BILL_FREE_MONEY` double(8,2) NOT NULL DEFAULT '0.00',
  `BILL_CASH` double(8,2) DEFAULT NULL,
  `BILL_CREDIT` double(8,2) DEFAULT NULL,
  `BILL_TOTAL_SUMMARY` double(8,2) NOT NULL DEFAULT '0.00',
  `BILL_MACNO` char(3) DEFAULT NULL,
  `BILL_APPCODE` varchar(6) DEFAULT NULL,
  `DISCOUNT` double(8,2) NOT NULL DEFAULT '0.00',
  `Bill_Status` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`BILL_NO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.rfid_permission definition

CREATE TABLE `rfid_permission` (
  `USERNAME` varchar(20) NOT NULL,
  `USERGROUP` varchar(10) NOT NULL,
  `M1` char(1) DEFAULT 'Y',
  `M2` char(1) DEFAULT 'Y',
  `M3` char(1) DEFAULT 'Y',
  `M4` char(1) DEFAULT 'Y',
  `M5` char(1) DEFAULT 'Y',
  `M6` char(1) DEFAULT 'Y',
  `M7` char(1) DEFAULT 'Y',
  `M8` char(1) DEFAULT 'Y',
  `M9` char(1) DEFAULT 'Y',
  `M10` char(1) DEFAULT 'Y',
  `M11` char(1) DEFAULT 'Y',
  `M12` char(1) DEFAULT 'Y',
  `M13` char(1) NOT NULL DEFAULT 'Y',
  `M14` char(1) NOT NULL DEFAULT 'Y',
  `M15` char(1) NOT NULL DEFAULT 'Y',
  `M16` char(1) NOT NULL DEFAULT 'Y',
  `M17` char(1) NOT NULL DEFAULT 'Y',
  `M18` char(1) NOT NULL DEFAULT 'Y',
  `M19` char(1) NOT NULL DEFAULT 'Y',
  `M20` char(1) NOT NULL DEFAULT 'Y',
  `M21` char(1) NOT NULL DEFAULT 'Y',
  `M22` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`USERNAME`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.rfid_report_buy definition

CREATE TABLE `rfid_report_buy` (
  `CUST_NO` varchar(7) NOT NULL,
  `CUST_NAME` varchar(150) DEFAULT NULL,
  `CUST_SEX` char(1) DEFAULT NULL,
  `BIRTH_DATE` date DEFAULT NULL,
  `BUY_TOTAL` double(8,2) DEFAULT '0.00',
  `BUY_COUNT` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.rfid_report_money definition

CREATE TABLE `rfid_report_money` (
  `CARD_NO` varchar(15) NOT NULL,
  `CUST_NO` varchar(7) NOT NULL,
  `CUST_NAME` varchar(150) NOT NULL,
  `CARD_VALUE` double(8,2) DEFAULT '0.00',
  `CARD_ESTIMATE` double(8,2) DEFAULT '0.00',
  `CARD_TOTAL` double(8,2) DEFAULT '0.00',
  `CARD_EXPIRE` date DEFAULT NULL,
  `CARD_DAY_EXPIRE` int DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.rfid_stock definition

CREATE TABLE `rfid_stock` (
  `RFID_ID` varchar(15) NOT NULL,
  `CUST_ID` varchar(7) NOT NULL,
  `MEMBER_CODE` varchar(13) NOT NULL DEFAULT '0000',
  `RFID_LAST_ACTIVITY` varchar(50) DEFAULT NULL,
  `RFID_CREATION_DATE` datetime DEFAULT NULL,
  `RFID_EXPIRE_DATE` datetime DEFAULT NULL,
  `RFID_MONEY` double(8,2) DEFAULT NULL,
  `RFID_STATUS` char(1) DEFAULT 'N',
  `CUST_NAME` varchar(50) DEFAULT NULL,
  `CUST_Address` varchar(100) DEFAULT NULL,
  `CUST_SURNAME` varchar(100) DEFAULT NULL,
  `CUST_SEX` varchar(100) DEFAULT NULL,
  `CASHIER` varchar(50) DEFAULT NULL,
  `CUST_AGE` float(12,2) DEFAULT NULL,
  `CUST_TEL` varchar(15) DEFAULT NULL,
  `RFID_REMARK` varchar(250) DEFAULT NULL,
  `RFID_LAST_TIME` datetime DEFAULT NULL,
  `RFID_STATUS_REMARK` varchar(250) DEFAULT NULL,
  `IMG_PATH` varchar(250) DEFAULT NULL,
  `FILL_MONEY_DATE` datetime DEFAULT NULL,
  `FREE_MONEY` double(8,2) DEFAULT NULL,
  `CREDIT_NO` varchar(16) DEFAULT NULL,
  `CREDIT_MONEY` double(8,2) DEFAULT NULL,
  `CREDIT_TYPE` varchar(30) DEFAULT NULL,
  `MEMBER_TYPE` char(3) NOT NULL DEFAULT '000',
  `RT_FREE_MONEY` char(1) NOT NULL DEFAULT 'N',
  PRIMARY KEY (`RFID_ID`,`CUST_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.rfid_stock_history definition

CREATE TABLE `rfid_stock_history` (
  `RFID_ID` varchar(15) NOT NULL,
  `CUST_ID` varchar(7) NOT NULL,
  `MEMBER_CODE` varchar(13) NOT NULL DEFAULT '0000',
  `RFID_LAST_ACTIVITY` varchar(50) DEFAULT NULL,
  `RFID_CREATION_DATE` datetime DEFAULT NULL,
  `RFID_EXPIRE_DATE` datetime DEFAULT NULL,
  `RFID_MONEY` double(8,2) DEFAULT NULL,
  `RFID_STATUS` char(1) DEFAULT 'N',
  `CUST_NAME` varchar(50) DEFAULT NULL,
  `CUST_ADDRESS` varchar(100) DEFAULT NULL,
  `CUST_SURNAME` varchar(100) DEFAULT NULL,
  `CUST_SEX` varchar(100) DEFAULT NULL,
  `CUST_AGE` float(12,2) DEFAULT NULL,
  `CASHIER` varchar(50) DEFAULT NULL,
  `CUST_TEL` varchar(15) DEFAULT NULL,
  `RFID_REMARK` varchar(250) DEFAULT NULL,
  `RFID_LAST_TIME` datetime DEFAULT NULL,
  `RFID_STATUS_REMARK` varchar(250) DEFAULT NULL,
  `IMG_PATH` varchar(250) DEFAULT NULL,
  `FILL_MONEY_DATE` datetime DEFAULT NULL,
  `FREE_MONEY` double(8,2) DEFAULT NULL,
  `CREDIT_NO` varchar(16) DEFAULT NULL,
  `CREDIT_MONEY` double(8,2) DEFAULT NULL,
  `CREDIT_TYPE` varchar(30) DEFAULT NULL,
  `BILL_NO` varchar(16) NOT NULL,
  `BILL_MACNO` char(3) NOT NULL,
  `BILL_TABLE` varchar(10) NOT NULL,
  `BILL_CASHIER` varchar(10) NOT NULL,
  `BILL_PAYAMT` float(13,2) NOT NULL DEFAULT '0.00',
  `MEMBER_TYPE` char(3) NOT NULL DEFAULT '000',
  `RT_FREE_MONEY` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.`size` definition

CREATE TABLE `size` (
  `Size_Code` char(2) NOT NULL DEFAULT '00',
  `Size_Name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Size_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.smstable definition

CREATE TABLE `smstable` (
  `GenerageCode` varchar(15) DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Campaign_Code` varchar(10) DEFAULT NULL,
  `Coupon_Code` varchar(8) DEFAULT NULL,
  `Branch_Code` varchar(3) DEFAULT NULL,
  `Discount_Code` varchar(3) DEFAULT NULL,
  `Create_Date` date DEFAULT NULL,
  `Use_Status` char(1) DEFAULT NULL,
  `Action_Status` char(1) DEFAULT NULL,
  `SMS_Mobile` varchar(15) DEFAULT NULL,
  `SMS_Message` varchar(200) DEFAULT NULL,
  `SMS_InDate` date DEFAULT NULL,
  `SMS_SendDate` date DEFAULT NULL,
  `SMS_SendTime` varchar(8) DEFAULT NULL,
  `SMS_Status` char(1) DEFAULT NULL,
  `UserUpdate` varchar(20) DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `Flage` char(1) DEFAULT NULL,
  `Exp_Date` date DEFAULT NULL,
  `Birthday_Flage` char(1) DEFAULT NULL,
  `Birthday` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.status definition

CREATE TABLE `status` (
  `Status_Code` char(3) NOT NULL,
  `Status_Name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.stcard definition

CREATE TABLE `stcard` (
  `S_Date` date DEFAULT NULL,
  `S_No` varchar(15) NOT NULL,
  `S_Que` int unsigned NOT NULL DEFAULT '0',
  `S_PCode` varchar(16) NOT NULL,
  `S_Stk` char(2) NOT NULL,
  `S_In` float(10,3) NOT NULL DEFAULT '0.000',
  `S_Out` float(10,3) NOT NULL DEFAULT '0.000',
  `S_InCost` float(10,2) NOT NULL DEFAULT '0.00',
  `S_OutCost` float(10,2) NOT NULL DEFAULT '0.00',
  `S_ACost` float(10,2) NOT NULL DEFAULT '0.00',
  `S_Rem` varchar(5) NOT NULL,
  `S_User` varchar(6) NOT NULL,
  `S_EntryDate` date DEFAULT NULL,
  `S_EntryTime` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.stkfile definition

CREATE TABLE `stkfile` (
  `BPCode` varchar(16) NOT NULL DEFAULT '0',
  `BStk` char(3) NOT NULL,
  `BQty` float(12,3) NOT NULL DEFAULT '0.000',
  `BAmt` float(12,2) NOT NULL DEFAULT '0.00',
  `BTotalAmt` float(12,2) NOT NULL DEFAULT '0.00',
  `BPriceAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `BLCostAmt` float(13,2) NOT NULL DEFAULT '0.00',
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


-- mycrmbranch.stockfile definition

CREATE TABLE `stockfile` (
  `Stock_Code` char(2) NOT NULL,
  `Stock_Name` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.store definition

CREATE TABLE `store` (
  `Store_Code` char(2) NOT NULL DEFAULT '00',
  `Store_Name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Store_Code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tautoreport definition

CREATE TABLE `tautoreport` (
  `ODate` date DEFAULT NULL,
  `OType` char(3) DEFAULT 'XXX',
  `BCode` char(3) DEFAULT '',
  `SDate` date DEFAULT NULL,
  `OFlag` char(1) DEFAULT 'Y',
  `OTime` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempchkpost definition

CREATE TABLE `tempchkpost` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `TDate` date DEFAULT NULL,
  `BrCode` char(3) DEFAULT NULL,
  `BrName` varchar(50) DEFAULT NULL,
  `Plu` char(1) DEFAULT NULL,
  `Terminal` char(1) DEFAULT NULL,
  `Cashier` char(1) DEFAULT NULL,
  `Cupon` char(1) DEFAULT NULL,
  `Inv` char(1) DEFAULT NULL,
  `Hour` char(1) DEFAULT NULL,
  `Rj` char(1) DEFAULT NULL,
  `Stc` char(1) DEFAULT NULL,
  `Bg` char(1) DEFAULT NULL,
  `Ba` char(1) DEFAULT NULL,
  `Cr` char(1) DEFAULT NULL,
  `Mem` char(1) DEFAULT NULL,
  `UserPost` varchar(6) DEFAULT NULL,
  `DZip` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempchksum definition

CREATE TABLE `tempchksum` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `TDate` date DEFAULT NULL,
  `BrCode` char(3) DEFAULT NULL,
  `BrName` varchar(50) DEFAULT NULL,
  `TotalDate` int unsigned DEFAULT NULL,
  `Plu` int DEFAULT NULL,
  `Terminal` int DEFAULT NULL,
  `Cashier` int DEFAULT NULL,
  `Cupon` int DEFAULT NULL,
  `Inv` int DEFAULT NULL,
  `Hour` int DEFAULT NULL,
  `Rj` int DEFAULT NULL,
  `Stc` int DEFAULT NULL,
  `Bg` int DEFAULT NULL,
  `Ba` int DEFAULT NULL,
  `Cr` int DEFAULT NULL,
  `Mem` int DEFAULT NULL,
  `UserPost` varchar(6) DEFAULT NULL,
  `DZip` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempgift definition

CREATE TABLE `tempgift` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `T_ItemNo` int unsigned DEFAULT NULL,
  `T_MCode` varchar(13) DEFAULT NULL,
  `T_MTitle` varchar(20) DEFAULT NULL,
  `T_MName` varchar(50) DEFAULT NULL,
  `T_MSurname` varchar(50) DEFAULT NULL,
  `T_ReserveNo` varchar(16) DEFAULT NULL,
  `T_ReceiveNo` varchar(16) DEFAULT NULL,
  `T_BillSDate` date DEFAULT NULL,
  `T_BillEDate` date DEFAULT NULL,
  `T_GCode` varchar(13) DEFAULT NULL,
  `T_GName` varchar(30) DEFAULT NULL,
  `T_ReserveQty` float(10,0) DEFAULT NULL,
  `T_SendQty` float(10,0) DEFAULT NULL,
  `T_ReceiveQty` float(10,0) DEFAULT NULL,
  `T_ArrearQty` float(10,0) DEFAULT NULL,
  `T_GAmt` float(13,2) DEFAULT NULL,
  `T_GScore` float(13,2) DEFAULT NULL,
  `T_ReceiveType` int DEFAULT NULL,
  `T_MType` int DEFAULT NULL,
  `T_MSex` char(1) DEFAULT NULL,
  `T_MStatus` char(50) DEFAULT NULL,
  `T_MBrid` date DEFAULT NULL,
  `T_MEnd` date DEFAULT NULL,
  `T_MAddr1` varchar(50) DEFAULT NULL,
  `T_MAddr2` varchar(30) DEFAULT NULL,
  `T_MAddr3` varchar(30) DEFAULT NULL,
  `T_MAddr4` varchar(30) DEFAULT NULL,
  `T_MAddr5` varchar(30) DEFAULT NULL,
  `T_MAddr6` varchar(30) DEFAULT NULL,
  `T_MAddr7` varchar(30) DEFAULT NULL,
  `T_MPost` varchar(5) DEFAULT NULL,
  `T_BranCode` char(3) DEFAULT NULL,
  `T_BranName` varchar(50) DEFAULT NULL,
  `T_Post` char(1) DEFAULT NULL,
  `T_MNation` char(2) DEFAULT NULL,
  `T_MScore` float(13,2) DEFAULT NULL,
  `T_UsedTitle` char(1) DEFAULT NULL,
  `T_PrintLabel` char(1) DEFAULT NULL,
  `M_MailTo` char(1) DEFAULT NULL,
  `M_Company` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempmemsms definition

CREATE TABLE `tempmemsms` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `M_ItemNo` int unsigned DEFAULT NULL,
  `M_Date` date DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_Title` varchar(20) DEFAULT NULL,
  `M_Name` varchar(50) DEFAULT NULL,
  `M_Surname` varchar(50) DEFAULT NULL,
  `M_SumNameThai` varchar(100) DEFAULT NULL,
  `M_Bran` char(3) DEFAULT NULL,
  `M_Type` varchar(100) DEFAULT NULL,
  `M_Sex` varchar(20) DEFAULT NULL,
  `M_Status` varchar(50) DEFAULT NULL,
  `M_Brid` date DEFAULT NULL,
  `M_Age` int DEFAULT NULL,
  `M_Nation` varchar(20) DEFAULT NULL,
  `M_Education` varchar(50) DEFAULT NULL,
  `M_Occu` varchar(20) DEFAULT NULL,
  `M_InCom` varchar(20) DEFAULT NULL,
  `M_Begin` date DEFAULT NULL,
  `M_End` date DEFAULT NULL,
  `M_NetAmt` float(13,2) DEFAULT NULL,
  `M_AvgNet` float(13,2) DEFAULT NULL,
  `M_Score` float(14,0) DEFAULT NULL,
  `M_Cnt` float(13,2) DEFAULT NULL,
  `M_Addr1` varchar(100) DEFAULT NULL,
  `M_Addr2` varchar(100) DEFAULT NULL,
  `M_Addr3` varchar(100) DEFAULT NULL,
  `M_Addr4` varchar(100) DEFAULT NULL,
  `M_Addr5` varchar(100) DEFAULT NULL,
  `M_Addr6` varchar(100) DEFAULT NULL,
  `M_Addr7` varchar(100) DEFAULT NULL,
  `M_Post` varchar(5) DEFAULT NULL,
  `M_Tel` varchar(50) DEFAULT NULL,
  `M_Fax` varchar(50) DEFAULT NULL,
  `M_Mobile` varchar(15) DEFAULT NULL,
  `M_Email` varchar(50) DEFAULT NULL,
  `M_ReciveInfo` varchar(30) DEFAULT NULL,
  `M_Hobby` varchar(100) DEFAULT NULL,
  `M_Company` varchar(200) DEFAULT NULL,
  `M_ComAddr1` varchar(100) DEFAULT NULL,
  `M_ComAddr2` varchar(100) DEFAULT NULL,
  `M_ComAddr3` varchar(100) DEFAULT NULL,
  `M_ComAddr4` varchar(100) DEFAULT NULL,
  `M_ComAddr5` varchar(100) DEFAULT NULL,
  `M_ComAddr6` varchar(100) DEFAULT NULL,
  `M_ComAddr7` varchar(100) DEFAULT NULL,
  `M_ComPost` varchar(5) DEFAULT NULL,
  `M_ComTel` varchar(50) DEFAULT NULL,
  `M_ComFax` varchar(50) DEFAULT NULL,
  `M_UseTitle` char(1) DEFAULT NULL,
  `M_UserCreate` varchar(20) DEFAULT NULL,
  `M_UserModify` varchar(20) DEFAULT NULL,
  `M_Remark` varchar(200) DEFAULT NULL,
  `M_UAddr1` varchar(100) DEFAULT NULL,
  `M_UAddr2` varchar(100) DEFAULT NULL,
  `M_UAddr3` varchar(100) DEFAULT NULL,
  `M_UAddr4` varchar(100) DEFAULT NULL,
  `M_UAddr5` varchar(100) DEFAULT NULL,
  `M_UAddr6` varchar(100) DEFAULT NULL,
  `M_UAddr7` varchar(100) DEFAULT NULL,
  `M_UPost` varchar(5) DEFAULT NULL,
  `M_UTel` varchar(50) DEFAULT NULL,
  `M_UFax` varchar(50) DEFAULT NULL,
  `M_BillNo` varchar(16) DEFAULT NULL,
  `M_Time` varchar(8) DEFAULT NULL,
  `M_DisAmt` float(13,2) DEFAULT NULL,
  `M_BranName` varchar(50) DEFAULT NULL,
  `M_BGCode` char(3) DEFAULT NULL,
  `M_BGName` varchar(30) DEFAULT NULL,
  `Act_Code` varchar(6) DEFAULT NULL,
  `Act_Name` varchar(50) DEFAULT NULL,
  `Act_StartDate` date DEFAULT NULL,
  `Act_FinishDate` date DEFAULT NULL,
  `TranSumNet` float(13,2) DEFAULT NULL,
  `UsedScore` float(13,2) DEFAULT NULL,
  `TranSumScore` float(13,2) DEFAULT NULL,
  `DiffNet` float(13,2) DEFAULT NULL,
  `DiffScore` float(13,2) DEFAULT NULL,
  `M_PrintLabel` char(1) DEFAULT NULL,
  `M_MailTo` char(1) DEFAULT NULL,
  `SMSBranch` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempmemsms2 definition

CREATE TABLE `tempmemsms2` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `M_ItemNo` int unsigned DEFAULT NULL,
  `M_Date` date DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_Title` varchar(20) DEFAULT NULL,
  `M_Name` varchar(50) DEFAULT NULL,
  `M_Surname` varchar(50) DEFAULT NULL,
  `M_SumNameThai` varchar(100) DEFAULT NULL,
  `M_Bran` char(3) DEFAULT NULL,
  `M_Type` varchar(100) DEFAULT NULL,
  `M_Sex` varchar(20) DEFAULT NULL,
  `M_Status` varchar(50) DEFAULT NULL,
  `M_Brid` date DEFAULT NULL,
  `M_Age` int DEFAULT NULL,
  `M_Nation` varchar(20) DEFAULT NULL,
  `M_Education` varchar(50) DEFAULT NULL,
  `M_Occu` varchar(20) DEFAULT NULL,
  `M_InCom` varchar(20) DEFAULT NULL,
  `M_Begin` date DEFAULT NULL,
  `M_End` date DEFAULT NULL,
  `M_NetAmt` float(13,2) DEFAULT NULL,
  `M_AvgNet` float(13,2) DEFAULT NULL,
  `M_Score` float(14,0) DEFAULT NULL,
  `M_Cnt` float(13,2) DEFAULT NULL,
  `M_Addr1` varchar(100) DEFAULT NULL,
  `M_Addr2` varchar(100) DEFAULT NULL,
  `M_Addr3` varchar(100) DEFAULT NULL,
  `M_Addr4` varchar(100) DEFAULT NULL,
  `M_Addr5` varchar(100) DEFAULT NULL,
  `M_Addr6` varchar(100) DEFAULT NULL,
  `M_Addr7` varchar(100) DEFAULT NULL,
  `M_Post` varchar(5) DEFAULT NULL,
  `M_Tel` varchar(50) DEFAULT NULL,
  `M_Fax` varchar(50) DEFAULT NULL,
  `M_Mobile` varchar(15) DEFAULT NULL,
  `M_Email` varchar(50) DEFAULT NULL,
  `M_ReciveInfo` varchar(30) DEFAULT NULL,
  `M_Hobby` varchar(100) DEFAULT NULL,
  `M_Company` varchar(200) DEFAULT NULL,
  `M_ComAddr1` varchar(100) DEFAULT NULL,
  `M_ComAddr2` varchar(100) DEFAULT NULL,
  `M_ComAddr3` varchar(100) DEFAULT NULL,
  `M_ComAddr4` varchar(100) DEFAULT NULL,
  `M_ComAddr5` varchar(100) DEFAULT NULL,
  `M_ComAddr6` varchar(100) DEFAULT NULL,
  `M_ComAddr7` varchar(100) DEFAULT NULL,
  `M_ComPost` varchar(5) DEFAULT NULL,
  `M_ComTel` varchar(50) DEFAULT NULL,
  `M_ComFax` varchar(50) DEFAULT NULL,
  `M_UseTitle` char(1) DEFAULT NULL,
  `M_UserCreate` varchar(20) DEFAULT NULL,
  `M_UserModify` varchar(20) DEFAULT NULL,
  `M_Remark` varchar(200) DEFAULT NULL,
  `M_UAddr1` varchar(100) DEFAULT NULL,
  `M_UAddr2` varchar(100) DEFAULT NULL,
  `M_UAddr3` varchar(100) DEFAULT NULL,
  `M_UAddr4` varchar(100) DEFAULT NULL,
  `M_UAddr5` varchar(100) DEFAULT NULL,
  `M_UAddr6` varchar(100) DEFAULT NULL,
  `M_UAddr7` varchar(100) DEFAULT NULL,
  `M_UPost` varchar(5) DEFAULT NULL,
  `M_UTel` varchar(50) DEFAULT NULL,
  `M_UFax` varchar(50) DEFAULT NULL,
  `M_BillNo` varchar(16) DEFAULT NULL,
  `M_Time` varchar(8) DEFAULT NULL,
  `M_DisAmt` float(13,2) DEFAULT NULL,
  `M_BranName` varchar(50) DEFAULT NULL,
  `M_BGCode` char(3) DEFAULT NULL,
  `M_BGName` varchar(30) DEFAULT NULL,
  `Act_Code` varchar(6) DEFAULT NULL,
  `Act_Name` varchar(50) DEFAULT NULL,
  `Act_StartDate` date DEFAULT NULL,
  `Act_FinishDate` date DEFAULT NULL,
  `TranSumNet` float(13,2) DEFAULT NULL,
  `UsedScore` float(13,2) DEFAULT NULL,
  `TranSumScore` float(13,2) DEFAULT NULL,
  `DiffNet` float(13,2) DEFAULT NULL,
  `DiffScore` float(13,2) DEFAULT NULL,
  `M_PrintLabel` char(1) DEFAULT NULL,
  `M_MailTo` char(1) DEFAULT NULL,
  `SMSBranch` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempmemsms3 definition

CREATE TABLE `tempmemsms3` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `M_ItemNo` int unsigned DEFAULT NULL,
  `M_Date` date DEFAULT NULL,
  `M_Code` varchar(13) DEFAULT NULL,
  `M_Title` varchar(20) DEFAULT NULL,
  `M_Name` varchar(50) DEFAULT NULL,
  `M_Surname` varchar(50) DEFAULT NULL,
  `M_SumNameThai` varchar(100) DEFAULT NULL,
  `M_Bran` char(3) DEFAULT NULL,
  `M_Type` varchar(100) DEFAULT NULL,
  `M_Sex` varchar(20) DEFAULT NULL,
  `M_Status` varchar(50) DEFAULT NULL,
  `M_Brid` date DEFAULT NULL,
  `M_Age` int DEFAULT NULL,
  `M_Nation` varchar(20) DEFAULT NULL,
  `M_Education` varchar(50) DEFAULT NULL,
  `M_Occu` varchar(20) DEFAULT NULL,
  `M_InCom` varchar(20) DEFAULT NULL,
  `M_Begin` date DEFAULT NULL,
  `M_End` date DEFAULT NULL,
  `M_NetAmt` float(13,2) DEFAULT NULL,
  `M_AvgNet` float(13,2) DEFAULT NULL,
  `M_Score` float(14,0) DEFAULT NULL,
  `M_Cnt` float(13,2) DEFAULT NULL,
  `M_Addr1` varchar(100) DEFAULT NULL,
  `M_Addr2` varchar(100) DEFAULT NULL,
  `M_Addr3` varchar(100) DEFAULT NULL,
  `M_Addr4` varchar(100) DEFAULT NULL,
  `M_Addr5` varchar(100) DEFAULT NULL,
  `M_Addr6` varchar(100) DEFAULT NULL,
  `M_Addr7` varchar(100) DEFAULT NULL,
  `M_Post` varchar(5) DEFAULT NULL,
  `M_Tel` varchar(50) DEFAULT NULL,
  `M_Fax` varchar(50) DEFAULT NULL,
  `M_Mobile` varchar(15) DEFAULT NULL,
  `M_Email` varchar(50) DEFAULT NULL,
  `M_ReciveInfo` varchar(30) DEFAULT NULL,
  `M_Hobby` varchar(100) DEFAULT NULL,
  `M_Company` varchar(200) DEFAULT NULL,
  `M_ComAddr1` varchar(100) DEFAULT NULL,
  `M_ComAddr2` varchar(100) DEFAULT NULL,
  `M_ComAddr3` varchar(100) DEFAULT NULL,
  `M_ComAddr4` varchar(100) DEFAULT NULL,
  `M_ComAddr5` varchar(100) DEFAULT NULL,
  `M_ComAddr6` varchar(100) DEFAULT NULL,
  `M_ComAddr7` varchar(100) DEFAULT NULL,
  `M_ComPost` varchar(5) DEFAULT NULL,
  `M_ComTel` varchar(50) DEFAULT NULL,
  `M_ComFax` varchar(50) DEFAULT NULL,
  `M_UseTitle` char(1) DEFAULT NULL,
  `M_UserCreate` varchar(20) DEFAULT NULL,
  `M_UserModify` varchar(20) DEFAULT NULL,
  `M_Remark` varchar(200) DEFAULT NULL,
  `M_UAddr1` varchar(100) DEFAULT NULL,
  `M_UAddr2` varchar(100) DEFAULT NULL,
  `M_UAddr3` varchar(100) DEFAULT NULL,
  `M_UAddr4` varchar(100) DEFAULT NULL,
  `M_UAddr5` varchar(100) DEFAULT NULL,
  `M_UAddr6` varchar(100) DEFAULT NULL,
  `M_UAddr7` varchar(100) DEFAULT NULL,
  `M_UPost` varchar(5) DEFAULT NULL,
  `M_UTel` varchar(50) DEFAULT NULL,
  `M_UFax` varchar(50) DEFAULT NULL,
  `M_BillNo` varchar(16) DEFAULT NULL,
  `M_Time` varchar(8) DEFAULT NULL,
  `M_DisAmt` float(13,2) DEFAULT NULL,
  `M_BranName` varchar(50) DEFAULT NULL,
  `M_BGCode` char(3) DEFAULT NULL,
  `M_BGName` varchar(30) DEFAULT NULL,
  `Act_Code` varchar(6) DEFAULT NULL,
  `Act_Name` varchar(50) DEFAULT NULL,
  `Act_StartDate` date DEFAULT NULL,
  `Act_FinishDate` date DEFAULT NULL,
  `TranSumNet` float(13,2) DEFAULT NULL,
  `UsedScore` float(13,2) DEFAULT NULL,
  `TranSumScore` float(13,2) DEFAULT NULL,
  `DiffNet` float(13,2) DEFAULT NULL,
  `DiffScore` float(13,2) DEFAULT NULL,
  `M_PrintLabel` char(1) DEFAULT NULL,
  `M_MailTo` char(1) DEFAULT NULL,
  `SMSBranch` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tempmemtop definition

CREATE TABLE `tempmemtop` (
  `CompName` varchar(30) NOT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `M_ItemNo` int unsigned NOT NULL DEFAULT '0',
  `M_Date` date DEFAULT NULL,
  `M_Code` varchar(13) NOT NULL,
  `M_Title` varchar(20) DEFAULT NULL,
  `M_Name` varchar(50) NOT NULL,
  `M_Surname` varchar(50) DEFAULT NULL,
  `M_SumNameThai` varchar(100) DEFAULT NULL,
  `M_Bran` char(3) NOT NULL,
  `M_Type` varchar(100) NOT NULL,
  `M_Sex` varchar(20) NOT NULL,
  `M_Status` varchar(50) NOT NULL,
  `M_Brid` date DEFAULT NULL,
  `M_Age` int DEFAULT '0',
  `M_Nation` varchar(20) DEFAULT '00',
  `M_Education` varchar(50) DEFAULT NULL,
  `M_Occu` varchar(20) DEFAULT '0',
  `M_InCom` varchar(20) DEFAULT '0',
  `M_Begin` date DEFAULT NULL,
  `M_End` date DEFAULT NULL,
  `M_NetAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_AvgNet` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Score` float(14,0) NOT NULL DEFAULT '0',
  `M_Cnt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_Addr1` varchar(100) DEFAULT NULL,
  `M_Addr2` varchar(100) DEFAULT NULL,
  `M_Addr3` varchar(100) DEFAULT NULL,
  `M_Addr4` varchar(100) DEFAULT NULL,
  `M_Addr5` varchar(100) DEFAULT NULL,
  `M_Addr6` varchar(100) DEFAULT NULL,
  `M_Addr7` varchar(100) DEFAULT NULL,
  `M_Post` varchar(5) NOT NULL,
  `M_Tel` varchar(50) DEFAULT NULL,
  `M_Fax` varchar(50) DEFAULT NULL,
  `M_Mobile` varchar(15) DEFAULT NULL,
  `M_Email` varchar(50) DEFAULT NULL,
  `M_ReciveInfo` varchar(30) DEFAULT NULL,
  `M_Hobby` varchar(100) DEFAULT NULL,
  `M_Company` varchar(200) DEFAULT NULL,
  `M_ComAddr1` varchar(100) DEFAULT NULL,
  `M_ComAddr2` varchar(100) DEFAULT NULL,
  `M_ComAddr3` varchar(100) DEFAULT NULL,
  `M_ComAddr4` varchar(100) DEFAULT NULL,
  `M_ComAddr5` varchar(100) DEFAULT NULL,
  `M_ComAddr6` varchar(100) DEFAULT NULL,
  `M_ComAddr7` varchar(100) DEFAULT NULL,
  `M_ComPost` varchar(5) DEFAULT NULL,
  `M_ComTel` varchar(50) DEFAULT NULL,
  `M_ComFax` varchar(50) DEFAULT NULL,
  `M_UseTitle` char(1) DEFAULT 'Y',
  `M_UserCreate` varchar(20) DEFAULT NULL,
  `M_UserModify` varchar(20) DEFAULT NULL,
  `M_Remark` varchar(200) DEFAULT NULL,
  `M_UAddr1` varchar(100) DEFAULT NULL,
  `M_UAddr2` varchar(100) DEFAULT NULL,
  `M_UAddr3` varchar(100) DEFAULT NULL,
  `M_UAddr4` varchar(100) DEFAULT NULL,
  `M_UAddr5` varchar(100) DEFAULT NULL,
  `M_UAddr6` varchar(100) DEFAULT NULL,
  `M_UAddr7` varchar(100) DEFAULT NULL,
  `M_UPost` varchar(5) DEFAULT NULL,
  `M_UTel` varchar(50) DEFAULT NULL,
  `M_UFax` varchar(50) DEFAULT NULL,
  `M_BillNo` varchar(16) DEFAULT NULL,
  `M_Time` varchar(8) DEFAULT '00:00:00',
  `M_DisAmt` float(13,2) NOT NULL DEFAULT '0.00',
  `M_BranName` varchar(50) DEFAULT NULL,
  `M_BGCode` char(3) DEFAULT NULL,
  `M_BGName` varchar(30) DEFAULT NULL,
  `Act_Code` varchar(6) DEFAULT NULL,
  `Act_Name` varchar(50) DEFAULT NULL,
  `Act_StartDate` date DEFAULT NULL,
  `Act_FinishDate` date DEFAULT NULL,
  `TranSumNet` float(13,2) NOT NULL DEFAULT '0.00',
  `UsedScore` float(13,2) NOT NULL DEFAULT '0.00',
  `TranSumScore` float(13,2) NOT NULL DEFAULT '0.00',
  `DiffNet` float(13,2) NOT NULL DEFAULT '0.00',
  `DiffScore` float(13,2) NOT NULL DEFAULT '0.00',
  `M_PrintLabel` char(1) DEFAULT 'N',
  `M_MailTo` char(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.temppoint definition

CREATE TABLE `temppoint` (
  `CompName` varchar(30) DEFAULT NULL,
  `LoginDateTime` datetime DEFAULT NULL,
  `Code` char(3) DEFAULT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `BGCode` char(3) DEFAULT NULL,
  `BGName` varchar(30) DEFAULT NULL,
  `PTFlag` char(1) DEFAULT NULL,
  `PTCode` varchar(13) DEFAULT NULL,
  `PTStrDay` varchar(30) DEFAULT NULL,
  `PTStartDate` date DEFAULT NULL,
  `PTEndDate` date DEFAULT NULL,
  `PTStartTime1` varchar(8) DEFAULT NULL,
  `PTEndTime1` varchar(8) DEFAULT NULL,
  `PTRate1` float(5,0) DEFAULT NULL,
  `PTStartTime2` varchar(8) DEFAULT NULL,
  `PTEndTime2` varchar(8) DEFAULT NULL,
  `PTRate2` float(5,0) DEFAULT NULL,
  `PTStartTime3` varchar(8) DEFAULT NULL,
  `PTEndTime3` varchar(8) DEFAULT NULL,
  `PTRate3` float(5,0) DEFAULT NULL,
  `PT1` float(10,0) DEFAULT NULL,
  `PT2` float(10,0) DEFAULT NULL,
  `PT3` float(10,0) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.titlename definition

CREATE TABLE `titlename` (
  `Title_Code` int unsigned DEFAULT '0',
  `Title_Name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tr_pointhistory definition

CREATE TABLE `tr_pointhistory` (
  `Computer_Name` varchar(100) DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Point_Status` char(4) DEFAULT NULL,
  `Point_Type` char(4) DEFAULT NULL,
  `Point_Detail` varchar(100) DEFAULT NULL,
  `Point_Date` date DEFAULT NULL,
  `Point_Score` float(14,0) DEFAULT NULL,
  `Point_MarkScore` float(14,0) DEFAULT NULL,
  `Employee_Code` varchar(20) DEFAULT NULL,
  `Point_Flag` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tr_sppoint definition

CREATE TABLE `tr_sppoint` (
  `Computer_Name` varchar(100) DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Point_Code` varchar(13) DEFAULT NULL,
  `Point_Name` varchar(100) DEFAULT NULL,
  `Point_Date` date DEFAULT NULL,
  `Point_Bill` varchar(30) DEFAULT NULL,
  `Point_Score` float(14,0) DEFAULT NULL,
  `Employee_Code` varchar(20) DEFAULT NULL,
  `Point_Flag` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.trandocdetail definition

CREATE TABLE `trandocdetail` (
  `Service_Date` date DEFAULT NULL,
  `Member_Code` char(13) DEFAULT NULL,
  `Branch_Code` char(3) DEFAULT NULL,
  `Receipt_No` char(12) DEFAULT NULL,
  `PLU_Code` char(13) DEFAULT NULL,
  `PLU_Amount` float(13,2) DEFAULT NULL,
  `PLU_Quantity` float(10,0) DEFAULT NULL,
  `PLU_Price` float(13,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.trandochead definition

CREATE TABLE `trandochead` (
  `Service_Date` date DEFAULT NULL,
  `Service_Time` varchar(8) DEFAULT NULL,
  `Receipt_No` varchar(12) DEFAULT NULL,
  `Member_Code` varchar(13) DEFAULT NULL,
  `Branch_Code` char(3) DEFAULT NULL,
  `MacNo` char(6) DEFAULT NULL,
  `GrossAmount` float(13,2) DEFAULT NULL,
  `DiscountAmount` float(13,2) DEFAULT NULL,
  `NetAmount` float(13,2) DEFAULT NULL,
  `Score` float(14,0) DEFAULT NULL,
  `Service_Type` char(1) DEFAULT NULL,
  `Mechine_Code` char(3) DEFAULT NULL,
  `Employee_Code` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.tranin definition

CREATE TABLE `tranin` (
  `R_No` varchar(15) NOT NULL,
  `R_Que` int unsigned NOT NULL DEFAULT '1',
  `R_PCode` varchar(16) NOT NULL,
  `R_Stock` char(2) NOT NULL,
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
  PRIMARY KEY (`R_No`,`R_Que`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.usergroup definition

CREATE TABLE `usergroup` (
  `Employee_Group_Code` char(10) NOT NULL DEFAULT '0',
  `Stock0` char(1) NOT NULL DEFAULT 'N',
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
  `Stock57` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- mycrmbranch.usermenu definition

CREATE TABLE `usermenu` (
  `Menu_Group` varchar(10) DEFAULT '0',
  `Menu_Code` varchar(20) NOT NULL,
  `Menu_Description` varchar(45) DEFAULT NULL,
  `Menu_Status` char(1) NOT NULL DEFAULT 'N'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
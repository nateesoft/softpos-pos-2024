const express = require('express');
const router = express.Router();

const CompanyController = require('../../../controllers/companyController');

router.get('/',  CompanyController.getCompanyByOne);

module.exports = router;

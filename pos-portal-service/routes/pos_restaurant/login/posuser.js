const express = require('express');
const router = express.Router();

const PosUserController = require('../../../controllers/posUserController');

router.get('/', PosUserController.getUserByOne);
router.post('/login', PosUserController.validateLogin)
router.post('/loginAuth', PosUserController.getLoginAuthen);
router.patch('/logout', PosUserController.processLogout);
router.get('/:username', PosUserController.getDataByUserName);

module.exports = router;

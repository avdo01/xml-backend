const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');

router.get('/api', controller.sendTestApi);
router.get('/test', controller.sendTestXML);
router.get('/xml', controller.sendRealXML);

module.exports = router;
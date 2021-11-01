const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers.js');

router.get('/', controller.homeRouteApi);
router.get('/api', controller.sendTestApi);
// router.get('/test', controller.sendTestXML);
router.get('/xml1', controller.sendXML1);
router.get('/xml2', controller.sendXML2);
router.get('/xml3', controller.sendXML3);
router.get('/xml4', controller.sendXML4);
router.get('/xml5', controller.sendXML5);

module.exports = router;
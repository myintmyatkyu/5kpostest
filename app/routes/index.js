var controllers = require('../controllers/index');
var express=require('express');
var router = express.Router();

router.route("/companies")
    .get(controllers.companiesGet)
    .post(controllers.companiesPost);

router.route("/companies/:company_id")
    .get(controllers.companyGet)
    .put(controllers.companyPost)
    .delete(controllers.companyDelete);

module.exports = router;
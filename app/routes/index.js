var controllers = require('../controllers/index');
var router = express.Router();

router.route("/companies")
    .get(controllers.companiesGet(req, res))
    .post(controllers.companiesPost(req, res));

router.route("/companies/:company_id")
    .get(controllers.companyGet(req, res))
    .put(controllers.companyPost(req, res))
    .delete(controllers.companyDelete(req, res));

module.exports = router;
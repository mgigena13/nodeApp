var express = require('express');
var router = express.Router();

const usersCotroller = require("../controllers/usersControllers")
/* GET users listing. */

router.post('/', usersCotroller.create);
router.post ('/login', usersCotroller.login)

module.exports = router;

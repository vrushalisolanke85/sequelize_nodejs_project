var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/', (req, res, next)=> {
  (req.body.username=="Vrushali" && req.body.password=="123")?res.send("OK"):res.send("NOT OK")
});

module.exports = router;

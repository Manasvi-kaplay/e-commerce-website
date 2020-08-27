var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
        req.flash('info','You are successfully logged out!')
        var pagedata = { title : "Admin login", pagename : "admin_login"};
        res.render("layout",pagedata)
        req.session.destroy();	
});
module.exports=router;
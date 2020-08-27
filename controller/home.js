var express=require("express");
var router=express.Router();
var product=require("../model/product");
router.get('/home',function(req,res){
    var pagedata={"pagename":"home","title":"Home page"}
    res.render("layout",pagedata);
});
router.get('/viewSpecific',function(req,res){
    product.findWhere(function(err,result){
        
    })
})
module.exports=router;
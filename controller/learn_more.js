var express=require("express");
var router=express.Router();
var product=require("../model/product");
var Mongodb=require("mongodb")
router.get("/:id",function(req,res){
    var id=req.params.id;
    console.log("product id....",id)
    product.findWhere({_id:Mongodb.ObjectID(id)},function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            var data=result[0]
            var pagedata={"pagename":"learn_more","title":"Learn more",data:data}
            res.render("layout",pagedata)
        }
    var pagedata={"pagename":"learn_more","title":"Learn more"}
    res.render("layout",pagedata)
    })
})
module.exports=router;
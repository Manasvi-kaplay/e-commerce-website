var express=require("express");
var router=express.Router()
var contact=require("../model/contact");
var Mongodb=require("mongodb");
router.get('/view',function(req,res){
    //console.log("/view_all found!!")
    contact.find(function(err,result){
        if(err){
            res.send(console.error);   
        }
        if(result){
            var data=result;
            var pagedata={"pagename":"contact_us","title":"contact us",data:data}
            res.render("layout",pagedata);
        }
    })
})
router.get('/edit/:id',function(req,res){
    var id=req.params.id;
    contact.findWhere({_id:Mongodb.ObjectId(id)},function(err,result){
    if(err){
        console.log("error.....",err)
    }
    if(result){
        var data=result[0];
        var pagedata={ "pagename":"edit_contact","title":"edit contact",data:data}
        console.log("RRRRRRRRRR",data);
    }
    res.render("layout",pagedata);      
                                    })
})
router.post('/edit',function(req,res){
    console.log("Hey there",req.body);
    var id=req.body.id;
    contact.update({_id : Mongodb.ObjectId(id)},req.body,function(err,result1){
        if(err){
            console.log("Product could not be updated",err);
            res.send("Product could not be updated");
        }
        if(result1){
            console.log("contact us updated!")
            //console.log("Updated product:",result1);
            res.send("contact us page updated!");
        }
    })
})
module.exports=router;
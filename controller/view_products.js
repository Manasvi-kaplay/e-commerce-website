var express=require("express");
var router=express.Router();
var product=require("../model/product");
router.get('/view_all',function(req,res){
    console.log("/view_all found!!")
    product.find(function(err,result){
        if(err){
            res.send(console.error);   
        }
        if(result){
            var data=result;
            var pagedata={"pagename":"view_all","title":"view all products",data:result}
            res.render("layout",pagedata);
        }
    })
})
router.post('/view_by_filters',function(req,res){
    var type=req.body.type;
    var category=req.body.category;
    if(category && !type){
        console.log("Category......",category);
        var query= {'category': {'$regex': category,'$options': 'i'}}
        product.findWhere(query,function(err,result){
        if(err){
            console.log("error",err)
            res.status(400).json({status:0,err:"Error!"})
        }
        if(result){
            var data=result
            var pagedata={"pagename":"view_by_filters","title":"Search results",data:data}
            console.log("success......",result)
            res.render("layout",pagedata);

        }
    })
    }
    if(type && !category){
        console.log("Type......",type);
        var query= {'type': {'$regex': type,'$options': 'i'}}
     product.findWhere(query,function(err,result){
    if(err){
        console.log("error",err)
        res.status(400).json({status:0,err:"Error!"})
            }
    if(result){
        var data=result
            var pagedata={"pagename":"view_by_filters","title":"Search results",data:data}
            console.log("success......",result)
            res.render("layout",pagedata);
                }
            })
    }
    if(category && type){
        var query= {$and:[{'category': {'$regex': category,'$options': 'i'}},{'type': {'$regex': type,'$options': 'i'}}]}
        product.findWhere(query,function(err,result){
        if(err){
            console.log("error",err)
            res.status(400).json({status:0,err:"Error!"})
        }
        if(result){
            var data=result
            var pagedata={"pagename":"view_by_filters","title":"Search results",data:data}
            console.log("success......",result)
            res.render("layout",pagedata);

        }
        })
    }
})
module.exports=router;
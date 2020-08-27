var express=require("express");
var router=express.Router();
var product=require("../model/product");
router.get('/newlaptops',function(req,res){
    var query={$and:[{'category': 'Laptops'},{'type': 'New'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"New laptops",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/oldlaptops',function(req,res){
    var query={$and:[{'category': 'Laptops'},{'type': 'Old'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"Old laptops",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/newdesktops',function(req,res){
    var query={$and:[{'category': 'Desktops'},{'type': 'New'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"New desktops",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/olddesktops',function(req,res){
    var query={$and:[{'category': 'Desktops'},{'type': 'Old'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"Old desktops",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/newlcds',function(req,res){
    var query={$and:[{'category': 'LCDs'},{'type': 'New'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"New lcds",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/oldlcds',function(req,res){
    var query={$and:[{'category': 'LCDs'},{'type': 'Old'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"old lcds",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/newperi',function(req,res){
    var query={$and:[{'category': 'Other Peripherals'},{'type': 'New'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"new other peripherals",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
router.get('/oldperi',function(req,res){
    var query={$and:[{'category': 'Other Peripherals'},{'type': 'Old'}]}
    product.findWhere(query,function(err,result){
        if(result){
            var data=result;
            var pagedata={"pagename":"user_view2","title":"old other peripherals",data:data}
            console.log(result);
            res.render("layout",pagedata);
        }
    });
});
module.exports=router;
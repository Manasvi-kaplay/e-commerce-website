var express=require("express");
var router=express.Router();
var connection=require("../config/connect")
//var jwt=require("jsonwebtoken");
//var config=require("./config")
router.get('/login_admin',function(req,res){
  var pagedata={"pagename":"admin_login","title":"Admin login"}
  res.render("layout",pagedata);
})
router.post('/login_admin',function(req,res){
  var pagedata={ "pagename":"admin_panel","title":"Admin home page"}
    console.log(req.body)
  connection.init(function(err, client){
    var db = client.db('creativecomp');
    var username=req.body.username;
    var password=req.body.password;
    db.collection('admin_login').find( { username:username } ).toArray(function(err,user){
      //db.collection('userprofile').findOne({ email:email},{mobileno:mobileno}, function(err, user) {
        console.log("user[0].......",user[0])
          if(err){
            console.log("error")
            res.status(400).json({status:0,err:err})
          }
      
    if(user.length==0){
        req.flash('error','Username not found!')
        res.redirect('back')
      }
      else if(user[0]==undefined||user[0].username==''||user[0].password==''){
        req.flash('error','Enter both the details!')
        res.redirect('back')
        console.log("INvalid!!!!!!!!!!!")
      }
      else{
          var data = user[0];
          if(data.password == password)
          {
              req.session.userid = data._id;
              req.session.email = data.email;
      req.session.is_user_logged_in=true;
      console.log("Successful login!")
      res.render("layout",pagedata);
          }
          else
          {
      console.log("username or password incorrect!!")
      req.flash('error','Username or password incorrect!')
      res.redirect('back')
          }
              }
});
});                           
})
module.exports=router;

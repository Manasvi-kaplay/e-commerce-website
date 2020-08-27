var express=require("express");
var router=express.Router();
router.use("/admin_panel",require("./admin_panel"))
router.use("/products",require("./products"))
router.use("/view_products",require("./view_products"))
router.use("/logout",require("./logout"))
router.use("/contact_us",require("./contact_us"))
router.use("/home",require("./home"))
router.use("/filters",require("./filters"))
router.use("/learn_more",require("./learn_more"))
function backdoor(req, res, next)
{
	if(! req.session.is_user_logged_in)
	{
		res.redirect("/");
	}
	next();
}
module.exports=router;
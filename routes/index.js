const express = require('express'); 
const router = express.Router();
const isloggedin = require("../middlewares/isLoggedIn");
const productModel = require("../models/product.model");
const userModel = require("../models/user.model");

router.get("/",(req,res)=>{
   let error = req.flash("error");
   res.render("index",{ error , loggedin:false });
})

router.get("/shop",isloggedin, async (req,res)=>{
      let products = await productModel.find();
      let success = req.flash("success");
      res.render("shop",{products ,success});
})

router.get("/cart",isloggedin, async (req,res)=>{
      let user = await userModel
      .findOne({email:req.user.email})
      .populate("cart");
      
      console.log(user.cart);


     res.render("cart",{user});
})

router.get("/logout",isloggedin,async (req,res)=>{
      let products = await productModel.find();
      res.render("shop",{products});
})

router.get("/addtocart/:productid",isloggedin,async (req,res)=>{
  
  let user = await userModel.findOne({email:req.user.email});
  
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success","Product added to cart ");
  res.redirect("/shop");
})


module.exports = router;
const express=require("express")
const {Getuser, Deleteuser, Edituser, Getone, Register, Login } = require("../controllers/userControlles")
const { registervalidation, loginvalidation, validation } = require("../middleware/validator")
const { isAuth } = require("../middleware/isAuth")
const user = require("../models/user")
const userRoutes=express.Router()



userRoutes.post("/register",registervalidation,validation,Register)
userRoutes.post("/login",loginvalidation,validation,Login)
userRoutes.get("/current",isAuth,(req,res)=>{
    res.send({user:req.user})
})
userRoutes.get("/",Getuser)
userRoutes.delete("/:id",Deleteuser)
userRoutes.put("/edit/:id",Edituser)
userRoutes.post("/filter",Getone)



module.exports=userRoutes
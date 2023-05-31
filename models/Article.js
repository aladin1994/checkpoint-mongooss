const mongoose=require("mongoose")
const ArticleSchema=new mongoose.Schema({
    name:String,
    image:String,
    subject:String
   
})
module.exports=mongoose.model("Article",ArticleSchema)
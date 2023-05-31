const ArticleSchema=require("../models/Article")


exports.Addarticle=async(req,res)=>{
    try {
        const article=new ArticleSchema(req.body)
       await article.save()
        res.status(200).send({msg:"article added",article})
    } catch (error) {
       res.status(500).send(error) 
    }
}
exports.Getarticle=async(req,res)=>{
    try {
        const article= await ArticleSchema.find()
        res.status(200).send({msg:"list of articles",article})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.Deletearticle=async(req,res)=>{
    try {
        await ArticleSchema.findByIdAndDelete(req.params.id)
        res.status(200).send("article deleted")
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Editarticle=async(req,res)=>{
    try {
        const article=await ArticleSchema.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).send({msg:"article updated", article})
    } catch (error) {
        res.status(500).send(error) 
    }
}
exports.Getone=async(req,res)=>{
    const {name}=req.body
    try {
        const article=await ArticleSchema.find({name})
        res.status(200).send({msg:"article found", article})
    } catch (error) {
        res.status(500).send(error)   
    }
}
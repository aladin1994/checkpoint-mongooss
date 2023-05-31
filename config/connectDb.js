const mongoose = require("mongoose")
const connectDb=async()=>{
    
try {
    await mongoose.connect("mongodb+srv://imenkhelil88:imen123@cluster0.bpqz63o.mongodb.net/")
    console.log("db is connected")
} catch (error) {
    console.log("db is not connected")
    
}
}
module.exports=connectDb
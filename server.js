const express = require("express")
const connectDb = require("./config/connectDb")
const userRoutes = require("./routes/userRoutes")
const articleRoutes = require("./routes/ArticleRoutes")
const app = express()
const port=7000
app.use(express.json())

connectDb()
app.use("/api/user",userRoutes)
app.use("/api/article",articleRoutes)
app.listen(port,console.log(`app is runninng on port ${port}`))
const express = require("express")
const ejs = require("ejs")
const mongoose = require("mongoose")
const app = express()
const Inventoryroute = require("./Routes/Inventory")
const Userroute = require("./Routes/User")
const Orderroute = require("./Routes/Order")
app.use(express.json())

const port = 3007
mongoose.connect("mongodb://localhost/api_web_tech_assignment").then((data)=>{
    app.listen(port,(err)=>{
      if(!err){
         console.log(`Server is Running At ${port}... Database connection successful`)
      }else{
        console.log("Database Connection Error")
      }
    })
})


app.use("/inventory",Inventoryroute)
app.use("/user",Userroute)
app.use("/order",Orderroute)
const express = require('express')
const cors = require('cors')
const {DB,connectDB} = require('./models')
require('dotenv').config()

const User = DB.users
const Order = DB.orders
connectDB()
const app = express()
var corOption ={
    origin: 'http://localhost:3000'
}

// middlewares
app.use(cors(corOption))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// test api

app.get('/',async (req,res)=>{
    const data = await User.create({ firstName: "mantra", lastName: "chaudhary" })
    res.status(200).send(data)
})

app.get('/createorders/:id',async (req,res)=>{
    let userID = req.params.id
    console.log(userID);
    const data = await Order.create({ product_name: "logger", created_by: userID })
    res.status(200).send(data)
})

app.get('/getorders',async (req,res)=>{
    const data = await User.findAll({ include : Order, where: {user_id: 2}})
    res.status(200).send(data)
})

// starting the server
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})
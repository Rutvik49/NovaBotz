const express = require('express')
const cors = require('cors')
const db = require('./models')
require('dotenv').config()

const User = db.users

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
    const data = await User.create({ firstName: "dax", lastName: "chaudhary" })
    res.status(200).send(data)
})

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`app is running on port ${port}`);
})
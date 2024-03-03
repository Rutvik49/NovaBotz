const express = require('express')
var cookieParser = require('cookie-parser')
var cors = require('cors')

const app = express()
app.use(cookieParser())
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended :true, limit:'16kb'}))
app.use(express.static("public"))
app.use(cookieParser())

module.exports={app}
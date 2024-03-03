require('dotenv').config()
const {connectDB} = require('./models')
const { app } = require('./app.js');
const port = process.env.PORT || 4000

connectDB().then(()=>{
    app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    })
}).catch((error)=>{
    console.log('database connection failed..!',error);
})

// test api
app.get('/', (req,res)=>{
    res.status(200).send({message:'hello all'})
})
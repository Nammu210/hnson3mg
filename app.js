const express=require('express')
const dotenv=require('dotenv')
dotenv.config();
const connect=require('./config/mongooseDB')
const route=require('./routes/route')

const app=express()
app.use(express.json())
app.use('/api',route)
app.get('/',(req,res)=>{
    res.send({
        msg:"this is a default page"
    })
})

const port=process.env.PORT
app.listen(port,async()=>{
    console.log(`server is running on port ${4000}`)
    await connect();
})
  

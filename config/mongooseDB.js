const { error } = require('console')
const mongoose=require('mongoose')

const url="mongodb://127.0.0.1:27017"


const connect= async()=>{
try {
    console.log('server is trying to connect')
    await mongoose.connect(url)
    console.log("connected to db")
} catch (error) {
    console.log("something is wrong=>", error.message)
}
}
module.exports=connect;
import mongoose from "mongoose";

const dbConnection = () =>{
    mongoose.connect(process.env.MONG0_URI,{
        dbName:"PORTFOLIO"
    }).then(() =>{
        console.log("connect to mongodb")
    }).catch((error)=>{
        console.log(
            `error for connicting mongodb ${error}`
        )
    })
}

export default dbConnection;
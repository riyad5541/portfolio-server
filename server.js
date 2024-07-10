import app from "./app.js";


import cloudinary from "cloudinary"

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_APL_NAME,
    api_key:process.env.CLOUDINARY_APL_KEY,
    api_secret:process.env.CLOUDINARY_APL_SECRET


})

app.listen(process.env.PORT, ()=>{
    console.log(`server is running ${process.env.PORT}`)
})
import mongoose from "mongoose";
 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true,
        lowercase : true,
        trim : true,
        index : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true 
    },
      fullname : {
        type : String,
        required : true,
        trim : true ,

    },
     avatar : {
        type : String , // we will store the images on Cloudinary and get the Url from there.
        required : true,

     },
     coverimage : {
        type : String , // we will store the images on Cloudinary and get the Url from there.
        
     },
      watchHistory : [
        {
            type : mongoose.Schema.types.ObjectId,
            ref: "Video",
        },
    ],
        password: {
            type: String,
            required : [true, "Password is required"],
            minlength : [6,"Password must be at least 6 characters Long"],


        },
        refreshToken : {
            type : String,
            

        },



 },{

    timestamps : true,
 })
 export const User = mongoose.model("User",userSchema)
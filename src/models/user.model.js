import mongoose from "mongoose";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

 userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next();


 })
 
   userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)

   }

   userSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        userId : this.id,
        email : this.email,
        username : this.username
    } , process.env.JWT_SECRET, {expiresIn : process.env.Access_Token_Expire_Time}) 
   }
   
  userSchema.methods.generateRefreshToken = function(){
    return jwt.sign({
        userId : this.id,
    }, process.env.Refresh_Token_Secret, {expiresIn : process.env.Refresh_Token_Expire_Time})
  }
  

 export const User = mongoose.model("User",userSchema)



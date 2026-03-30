import asyncHandler from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import {User} from "../models/user.model.js"
import { uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";

// Method to generate refresh Token and Access Token

const generateAccessTokenorRefreshToken = async(userId)=>
{
 try
 {
  const user= User.findById(userId)
  const accessToken = user.generateAccessToken()
  const refreshToken = user.generateRefreshToken()

  user.refreshToken= refreshToken
  await user.save({validateBeforeSave : false})
  
  return {accessToken,refreshToken}

  
 } 
 catch (error) 
 {
  throw new ApiError(500,"Something Went Wrong While Generating the Access and Refresh Token")
 }
}


const registerUser = asyncHandler(async (req, res) => {
  // get user data from the frontend
  // validate the data
  // check if the user already exists --> Email, Username
  // check for images and check for Avatar
  // upload them to cloudinary, Avatar
  // create user object and save it to database
  // remove the password and refresh token from the response
  // check for user Creation
  // return response

  const { fullName, email, username, password } = req.body;
  console.log(fullName, email, password);

  // Validate that all fields are provided
  if ([fullName, email, username, password].some(field => !field || field.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [
      { username },
      {  email  }
    ]
  });

  if (existedUser) {
    throw new ApiError(409, "User already exists which has the same username or email");
  }

  const avatarLocalPath = req.files?.avatar[0]?.path;
 // const coverImageLocalPath = req.files?.coverImage[0]?.path;
 let coverImageLocalPath;
 if(req.files && Array.isArray(req.files.coverImage)&& req.files.coverImage.length > 0){
    coverImageLocalPath = req.files.coverImage[0].path;


 }
  
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar is required");
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if (!avatar) {
    throw new ApiError(500, "Error while uploading the avatar on cloudinary");
  }
  
  const newUser = await User.create({
    username: username.toLowerCase(),
    email,
    fullName,
    password,
    avatar: avatar.url,
    coverImage: coverImage?.url || ""
  });

  const userCreated = await User.findById(newUser._id).select("-password -refreshToken");

  if (!userCreated) {
    throw new ApiError(500, "Error while creating the user");
  }

  const response = new ApiResponse(201, userCreated, "User created successfully");
  res.status(201).json(response);
})
const loginUser = asyncHandler(async(req,res)=>{
  // Todos 
  // req body --> data
  // username or email
  // find the user
  // password check
  // access and refresh token
  // send Cookies
 
  const {username,email,password} = req.body;
  if(!username || !email){
    throw new ApiError(404,"Username or Password is required")
  }
 const user= await User.findOne(
    {
      $or:[{username},{email}]
    })
if(!user)
{
  throw new ApiError(404,"User does not exist")
}

const isPasswordValid = await user.isPasswordCorrect(password)
if (!isPasswordValid)
{
  throw new ApiError(401,"This Password is Uncorrect")
}

 const {accessToken,refreshToken} = await generateAccessTokenorRefreshToken(user._id)
 
 const logedInUser=await User.findById(user._id).select("-password -refreshToken")

 const options={
  httpOnly : true,
  secure : true 

 }
 

 return res
 .status(200)
 .cookie("accessToken",accessToken,options)
 .cookie("refreshToken",refreshToken)
 .json(
    new ApiResponse(
      200,
      {
        user : logedInUser,
               accessToken,
               refreshToken
      },
        "User is Loged in Sucessfully"
    ))
})
// Writing Method for Log Out User
const logoutUser = asyncHandler(async(req,res)=>{


  
})

export { 
  registerUser,
  loginUser
 };
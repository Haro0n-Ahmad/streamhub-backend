import { ApiError } from "../utils/ApiError";
import asyncHandler from "../utils/asyncHandler";
import jwt from "jsonwebtoken"

export const verifyJwt= asyncHandler(async(req,res,next)=>{
   const token= req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
   if(!token)
   {
    throw new ApiError(401,"Unauthorized Request")
   }
 
   
   const decodedresponse=jwt.verify(token,process.env.Access_Token_Secret)

})

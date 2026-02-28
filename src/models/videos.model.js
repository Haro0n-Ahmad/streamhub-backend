import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new mongoose.Schema(
    
    {
     title : {
        type : String,
        required : true,
        trim : true,
     },
      description :
      {
        type : String,
        trim : true,
      },
      videofile : {
        type : String, // we will store the videos on Cloudinary and get the Url,
        required : true,

      },
       thumbnail : {
        type : String , // we will store the images on cloudinary and get the Url from there.
        required : true,
        
       },
         duration : {
        type : Number , // we will store the duration of the video in seconds in this model,
        required : true,
         },
        views : {
        type : Number ,
        default : 0,
       },
       isPublised : {
        type : Boolean,
        default : true,

       },
       owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
       },



    },
    {
        timestamps: true,
    })

    videoSchema.plugin(mongooseAggregatePaginate)
    
export const Video = mongoose.model("Video",videoSchema)
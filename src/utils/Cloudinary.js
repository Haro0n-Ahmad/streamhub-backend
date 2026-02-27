import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configuration
cloudinary.config({
    cloud_name: process.env.Cloudinary_Cloud_Name,
    api_key: process.env.Cloudinary_Api_Key,
    api_secret: process.env.Cloudinary_Api_Secret
});

async function uploadOnCloudinary(LocalfilePath) {

    try {
        if (!LocalfilePath) return null;
        const response = await cloudinary.uploader.upload(LocalfilePath, { resource_type: "auto" });
        // Remove the file from the Server after uploading successfully to Cloudinary
        console.log("File uploaded successfully on Cloudinary", response.url);
        fs.unlinkSync(LocalfilePath);
        return response;


    } catch (error) {
        fs.unlinkSync(LocalfilePath);
        console.log("Error while uploading the file on Cloudinary", error);
        return null;

    }
}


export default uploadOnCloudinary;
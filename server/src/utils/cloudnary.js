const cloudinary = require('cloudinary').v2;
const { log } = require('console');
const fs = require('fs');

cloudinary.config({ 
    cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
    api_key: process.env.CLOUDNARY_API_KEY, 
    api_secret: process.env.CLOUDNARY_API_SECRET 
  });

const uploadOnCloudnary = async(localFilePath)=>{
    try {
        if (!localFilePath) return null;
        // upload execution
        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type:'auto'
        });
        console.log("file is uploaded on cloudnary",result.url);
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file if upload operation got failed
        return null;
    }
}

module.exports={uploadOnCloudnary}
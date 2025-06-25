//import cloudinary module
import cloudinary from "cloudinary";

async function uploadFileToCloudinary(file,folder,height,quality){
    const options = {folder};
    if(height){
        options.height = height;
    }
    if(quality){
        options.quality = quality;
    }
    options.resource_type = "auto";

    try {
        // Upload file to Cloudinary
        const result = await cloudinary.uploader.upload(file.tempFilePath, options);
        return result;
    } catch (error) {
        // Handle errors
        console.error("Error uploading to Cloudinary:", error.message);
        throw error;
    }
}

export default uploadFileToCloudinary;
const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

require("dotenv").config();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup using memory storage;
const storage = multer.memoryStorage(); // with this we are telling the  multer to direclty store the uploaded files firectly in the RAM, rather than saving them inn file systems
const upload = multer({ storage }); // upload can now be used as MW for file uploads

const router = express.Router();

// @route POST /api/upload
// @desc upload image to cloudinary
// @access Private
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Funciton to handle the stream upload to Cloudinary
    const StreamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        // Use streamifier to convert file buffer to a stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    // Call the StreamUpload to upload file
    const result = await StreamUpload(req.file.buffer);

    // Resold with the uploaded image url;
    res.json({ image: result.secure_url });
  } catch (error) {
    console.log("Error uploadRoutes-49 /api/upload POST:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
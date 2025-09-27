import multer from "multer";

const storage = multer.diskStorage({
  filename: function (req, file, callback) {
    callback(null, file.originalname); // keep the original file name
  },
});

// Create the multer upload instance
const upload = multer({ storage });

// Export the configured upload instance
export default upload;
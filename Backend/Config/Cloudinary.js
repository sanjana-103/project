import { v2 as cloudinary } from 'cloudinary';
import 'dotenv/config'; // Ensure .env variables are loaded

// Optional: Log to confirm values (Remove in production)
console.log("Cloudinary config =>", {
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  // Do NOT log secret key
});

// Configure Cloudinary with environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Export the configured instance
export default cloudinary;

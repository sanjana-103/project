import express from 'express';
import cors from 'cors';
import "dotenv/config";
import connectDB from './Config/mongodb.js';
import './Config/Cloudinary.js'; // ✅ just import to configure once, no need to call

import userRouter from './routes/userRoutes.js';
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB(); // ✅ Connect to MongoDB

app.use(express.json());
app.use(cors());

// ✅ Routes
app.use("/api/user", userRouter);
app.use("/api/product", productRoutes);

app.get('/', (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server is Running ON Port: " + port));

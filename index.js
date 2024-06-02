import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoute.js";
import cors from 'cors';
import path from 'path';


dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, './client/build')))

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.use('*', function(req, res){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server Running on port: ${PORT}`);
});

// CLOUDINARY_CLOUD_NAME=dzgnogwur
// CLOUDINARY_KEY=983514456525589
// CLOUDINARY_SECRET=lAAeVHK0I0B-U09gU-eLP3fmBqk
// DB_URL=mongodb+srv://anand1119:Shankar%40731@cluster0.secr746.mongodb.net/?retryWrites=true&w=majority
// SECRET=thisisasecretonlyforme
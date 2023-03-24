import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import productsRoutes from './routes/products.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/products",productsRoutes);



app.listen(8800,() => {
    console.log("Connected");
})  
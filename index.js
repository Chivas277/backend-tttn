import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import productsRoutes from './routes/products.js';
import CateRoutes from './routes/cate.js';
import SupplierRoutes from './routes/supplier.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/products",productsRoutes);
app.use("/api/categories",CateRoutes);
app.use("/api/suppliers",SupplierRoutes);


// app.get("/books", (req, res) => {
//     const q = "SELECT * FROM products";
//     db.query(q, (err, data) => {
//       if (err) {
//         console.log(err);
//         return res.json(err);
//       }
//       return res.json(data);
//     });
//   });


app.listen(8800,() => {
    console.log("Connected");
})  
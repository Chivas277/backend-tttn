import { addProduct, getProduct } from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/getproduct", getProduct);
router.post("/addproduct", addProduct);

export default router;
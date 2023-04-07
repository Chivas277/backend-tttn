import { addProduct, delProduct, getProduct, getProductCate, getProductId, updateProduct } from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/getproduct", getProduct);
router.get("/:id",getProductId);

router.get("/getproductcate/:id",getProductCate);

router.post("/addproduct", addProduct);

router.put("/updateproduct/:id",updateProduct)

router.delete("/delproduct/:id",delProduct)


export default router;
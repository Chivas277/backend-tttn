import { addProduct, getProduct, getProductId } from "../controllers/productController.js";
import express from "express";

const router = express.Router();

router.get("/getproduct", getProduct);
router.get("/:id",getProductId);
router.post("/addproduct", addProduct);

export default router;
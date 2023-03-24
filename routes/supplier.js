import express from "express";
import { getSupplier } from "../controllers/supplierController.js";

const router = express.Router();

router.get("/getsupplier", getSupplier);

export default router;
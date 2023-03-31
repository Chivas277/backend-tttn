import express from "express";
import { AddSupplier, getSupplier } from "../controllers/supplierController.js";

const router = express.Router();

router.get("/getsupplier", getSupplier);
router.post("/addsup",AddSupplier);

export default router;
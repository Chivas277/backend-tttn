import express from "express";
import { AddSupplier, getSupplier, delSup } from "../controllers/supplierController.js";

const router = express.Router();

router.get("/getsupplier", getSupplier);
router.post("/addsup",AddSupplier);
router.delete("/deletesup",delSup);

export default router;
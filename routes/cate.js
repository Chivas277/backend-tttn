import express from "express";
import { getCate, addCate, delCate } from "../controllers/cateController.js";

const router = express.Router();

router.get("/getcate", getCate);
router.post("/addcate",addCate);

router.delete("/deletecate/:id",delCate);

export default router;
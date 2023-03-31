import express from "express";
import { getCate, addCate } from "../controllers/cateController.js";

const router = express.Router();

router.get("/getcate", getCate);
router.post("/addcate",addCate);

export default router;
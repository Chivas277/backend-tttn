import express from "express";
import { getCate } from "../controllers/cateController.js";

const router = express.Router();

router.get("/getcate", getCate);

export default router;
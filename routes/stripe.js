import express from "express";
import stripeController from "../controllers/stripeController.js";

const router = express.Router();

router.post("/payment", stripeController.stripePayment);

export default router;
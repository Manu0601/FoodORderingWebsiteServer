import express from "express";
import { addToCart, deleteItem, getCart } from "../../controllers/cartController.js";
import { authMiddleware } from "../../middileware/authmiddileware.js";
const router = express.Router();

router.post("/item",authMiddleware,addToCart)
router.delete("/remove/:itemId",authMiddleware,deleteItem)
router.get("/all",authMiddleware,getCart)
export const cartRouter = router;

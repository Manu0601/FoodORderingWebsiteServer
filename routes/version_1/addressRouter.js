import express from "express";
import { createAddress, deleteAddress } from "../../controllers/addressController.js";
import {
    authMiddleware,
    roleMiddleware,
  } from "../../middileware/authmiddileware.js";


const router = express.Router();

router.post("/create",authMiddleware,createAddress)
router.delete("/delete/:addressId",authMiddleware,deleteAddress)

export const addressRouter = router;


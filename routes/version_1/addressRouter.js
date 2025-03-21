import express from "express";
import { createAddress, deleteAddress, getaddress } from "../../controllers/addressController.js";
import {
    authMiddleware,
    roleMiddleware,
  } from "../../middileware/authmiddileware.js";


const router = express.Router();

router.post("/create",authMiddleware,createAddress)
router.delete("/delete/:addressId",authMiddleware,deleteAddress)
router.get("/get",authMiddleware,getaddress)

export const addressRouter = router;


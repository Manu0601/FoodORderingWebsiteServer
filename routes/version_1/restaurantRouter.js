import express from "express";
import {
  deleteRestaurant,
  getAllRestaurant,
  getRestaurantById,
  getRestaurantByName,
  loginRestaurant,
  logout,
  registerRestaurant,
  updateRestaurant,
} from "../../controllers/restaurantController.js";
import { upload } from "../../middileware/multermiddileware.js";
const router = express.Router();

router.post("/register", upload.single("image"), registerRestaurant);
router.post("/login", loginRestaurant);
router.put(
  "/update/:restaurantId",
  upload.single("image"),
  updateRestaurant
);

router.get("/by/:name", getRestaurantByName);
router.get("/all", getAllRestaurant);
router.get("/id/:restaurantId", getRestaurantById);
router.delete("/delete/:restaurantId", deleteRestaurant);
router.post("/logout",logout)

export const restaurantRouter = router;

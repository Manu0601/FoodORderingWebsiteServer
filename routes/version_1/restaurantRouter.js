import express from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getAllRestaurant,
  getRestaurantById,
  getRestaurantByName,
  updateRestaurant,
} from "../../controllers/restaurantController.js";
import {
  authMiddleware,
  roleMiddleware,
} from "../../middileware/authmiddileware.js";
import { upload } from "../../middileware/multermiddileware.js";
const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  roleMiddleware("admin"),
  upload.single("image"),
  createRestaurant
);
router.put(
  "/update/:restaurantId",
  authMiddleware,
  roleMiddleware("admin"),
  updateRestaurant
);

router.get("/by/:name",getRestaurantByName)
router.get("/all",getAllRestaurant)
router.get("/id/:restaurantId",getRestaurantById)
router.delete("/delete/:restaurantId",deleteRestaurant)

export const restaurantRouter = router;



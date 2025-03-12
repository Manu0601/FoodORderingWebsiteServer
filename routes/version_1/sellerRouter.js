import express from "express";
import {
  getProfile,
  getRole,
  login,
  profileUpdate,
  signUp,
} from "../../controllers/authContoller.js";
import {
  authMiddleware,
  roleMiddleware,
} from "../../middileware/authmiddileware.js";

const router = express.Router();

router.post("/login", roleMiddleware("seller"), login);
router.post("/signup", signUp);
router.get("/profile", authMiddleware, roleMiddleware("seller"), getProfile);
router.put("/update", authMiddleware, roleMiddleware("seller"), profileUpdate);
router.get("/profile/role", authMiddleware, roleMiddleware("seller"), getRole);

export const sellerRouter = router;

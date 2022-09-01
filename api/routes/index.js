import express from "express";
import { Register } from "../controllers/registerController.js";
import { Login } from "../controllers/loginController.js";
import { getUsers } from "../controllers/getUserDetails.js";
import { Logout } from "../controllers/logoutController.js";
import {
  verifyToken,
  isAdmin,
  isModerator,
  checkDuplicateUsernameOrEmail,
} from "../middleware/verifyToken.js";
import {
  adminBoard,
  moderatorBoard,
} from "../controllers/dashboardsControllers.js";
import { useValidator } from "../middleware/validateInputs.js";
import { validate } from "../middleware/validateInputs.js";

import { check } from "express-validator";
import { validationResult } from "express-validator";

const router = express.Router();
//[checkDuplicateUsernameOrEmail]
// router.post("/register", validate, useValidator);

router.post("/register", [checkDuplicateUsernameOrEmail], Register);

router.post("/login", Login);
router.get("/users/all", getUsers);
router.get("/users", [verifyToken], getUsers);

router.get("/users/admin", [verifyToken, isAdmin], adminBoard);
router.get(
  "/users/moderator",
  [verifyToken, isModerator],

  moderatorBoard
);
router.delete("/logout", Logout);

export default router;

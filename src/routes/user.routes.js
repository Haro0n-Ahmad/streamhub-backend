import { Router } from "express"  // ✅ Correct (named import)

import { registerUser } from "../controllers/user.controllers.js";
import express from "express"

const router = express.Router()  // ✅ Also correct

 router.route("/register").post(registerUser);
 

export default router;
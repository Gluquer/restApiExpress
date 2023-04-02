import { Router } from "express";
import {
    createUser,
    getUsers
   // getUser,
   // updateUser,
    //deleteUser
} from "../controllers/user-controller.js";

const router = Router();

router.get("/users", getUsers)
router.post("/users", createUser)

/*
router.get("/user/:id", getUser)
router.patch("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)
*/

export default router;
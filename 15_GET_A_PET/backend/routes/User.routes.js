import express from "express"
import UserController from "../controllers/User.controller.js"

const router = express.Router()

router.post('/register', UserController.register)

export default router
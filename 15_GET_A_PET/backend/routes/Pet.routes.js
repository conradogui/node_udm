import express from "express";
import PetController from "../controllers/Pet.controller.js";

// middlewares
import verifyToken from "../helpers/verify-token.js";
import imageUpload from "../helpers/image-upload.js";

const router = express.Router();

router.post(
  "/create",
  verifyToken,
  imageUpload.array("images"),
  PetController.create
);

export default router;
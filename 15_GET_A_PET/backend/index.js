import express from "express";
import cors from "cors";

const app = express();

//config JSON response
app.use(express.json());

// solve cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// public folder for images
app.use(express.static("public"));

// routes
import UserRoutes from "./routes/User.routes.js"
import PetRoutes from "./routes/Pet.routes.js"

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)
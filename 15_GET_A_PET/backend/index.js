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

app.use('/users', UserRoutes)

app.listen(5000)
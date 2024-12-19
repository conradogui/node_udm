import express from "express";
import cors from "cors";

const app = express();

//config JSON response
app.use(express.json());

// solve cors
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
 
app.use(allowCrossDomain);

// public folder for images
app.use(express.static("public"));

// routes
import UserRoutes from "./routes/User.routes.js"
import PetRoutes from "./routes/Pet.routes.js"

app.use('/users', UserRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)
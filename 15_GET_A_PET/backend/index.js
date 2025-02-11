import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

// Configuração do CORS
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*"); 
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH'); 
    next();
}

app.use(allowCrossDomain);

app.use(cors({
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  origin: '*' 
}));

app.use(express.static("public"));

import UserRoutes from "./routes/User.routes.js";
import PetRoutes from "./routes/Pet.routes.js";

app.use('/users', UserRoutes);
app.use('/pets', PetRoutes);

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});

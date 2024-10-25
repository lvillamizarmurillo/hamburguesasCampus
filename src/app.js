import express from "express"
import rateLimit from "./config/rateLimit.js";
import routeIndex from "./routes/index.js";
import "dotenv/config.js";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
app
    .use(rateLimit)

    .use(express.json())

    .use(async(req, res, next) => {
        try{
            app.use("/api", await routeIndex(req.header('Accept-version')));
        }catch{
            res.status(400).json({status: 400, message: "Vercion de la api especificada no existe"});
        }
        next()
    })

    .listen(PORT, ()=> {
        console.log(`http://127.10.10.10:${PORT}`);
    })

    //filtroMongo_LudwingSantiagoVillamizarMurillo
    //mongodb+srv://latinoamericacampus233:Campus2023@cluster0.zarbjab.mongodb.net/
    //mongodb+srv://latinoamericacampus233:Campus2023@cluster0.l3dtumk.mongodb.net/


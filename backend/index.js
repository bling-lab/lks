import express from "express";
import cors from "cors";
import "dotenv/config";
import { database as db, storage } from "./libs/env.js";

console.log(db, storage)

import database from "./config/database.js";
import katalog from "./models/models.js";
import route from "./controllers/controllers.js";
import image from "./libs/multer.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api", route.getAllkatalog);
app.post("/api", image.single("file"), route.addKatalog);

try {
  database.authenticate();
  katalog.sync({ force: true });
  console.log("connnected database...");
} catch (error) {
  console.log(error);
}

app.listen(5000, () => console.log("server up"));

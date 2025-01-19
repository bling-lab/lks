import express from "express";
import cors from "cors";
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
  katalog.sync();
  console.log("connnected database...");
} catch (error) {
  console.log(error);
}

app.listen(5000, () => console.log("server up"));

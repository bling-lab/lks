import katalog from "../models/models.js";
import sendImage from "../libs/s3client.js";
import { v4 as random } from "uuid";
import { storage } from "../libs/env.js";

const route = {
  getAllkatalog: async (req, res) => {
    try {
      const data = await katalog.findAll();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  },

  addKatalog: async (req, res) => {
    try {
      const { title, description } = req.body;

      if (!(title, description)) {
        return res.status(404).json({ message: "harap isi semua field" });
      }

      const file = req.file;
      console.log(req.file);
      const filename = random() + req.file.originalname;
      console.log(filename);
      const result = await sendImage(filename, file);
      console.log(result.RequestCharged);

      const data = {
        title,
        description,
        imageUrl: storage.baseUrl + filename,
      };

      await katalog.create(data);

      res.status(201).json({ message: "katalog berhasil dibuat", status: 200 });
    } catch (error) {
      console.log(error);
    }
  },
};

export default route;

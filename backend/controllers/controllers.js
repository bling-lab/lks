import katalog from "../models/models.js";
import sendImage from "../libs/s3client.js";
import getIp from "../libs/network.js";
import { storage, iface } from "../libs/env.js";
import { v4 as random } from "uuid";

const route = {
  getAllkatalog: async (req, res) => {
    try {
      const data = await katalog.findAll();
      return res.status(200).json({
        data,
        serverIP: getIp(iface)
      });
    } catch (error) {
      console.log(error);
    }
  },

  addKatalog: async (req, res) => {
    try {
      const { title, description } = req.body;

      if (!(title, description)) {
        return res.status(400).json({ message: "harap isi semua field", status: 400 });
      }

      if (!req.file) {
        return res.status(400).json({ message: "harap isi file", status: 400 });
      }

      const file = req.file;
      const filename = random() + req.file.originalname;
      const result = await sendImage(filename, file);
      const data = {
        title,
        description,
        imageUrl: `${storage.baseUrl}${filename}`,
      };

      await katalog.create(data);

      res.status(201).json({ message: "katalog berhasil dibuat", status: 201 });
    } catch (error) {
      console.log(error);
    }
  },
};

export default route;

import { DataTypes } from "sequelize";
import database from "../config/database.js";

const katalog = database.define(
  "katalog",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  },
  {
    freezeTableName: false,
  }
);

export default katalog;

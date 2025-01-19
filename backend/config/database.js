import { Sequelize } from "sequelize";
import { database as db } from "../libs/env.js";

const database = new Sequelize({
  database: db.name,
  host: db.host,
  port: db.port,
  username: db.user,
  password: db.pass,
  dialect: "mysql",
});

export default database;

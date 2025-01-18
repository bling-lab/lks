import { Sequelize } from "sequelize";
import "dotenv/config";

const { databases, host, user, pass } = process.env;

const database = new Sequelize({
  database: databases,
  host: host,
  port: 3306,
  username: user,
  password: "bling12345#",
  dialect: "mysql",
});

export default database;

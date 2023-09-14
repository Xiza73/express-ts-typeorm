import "reflect-metadata";
import { DataSource } from "typeorm";
import { ENV } from "./common/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: ENV.DB_HOST,
  port: +ENV.DB_PORT,
  username: ENV.DB_USER,
  password: ENV.DB_PASS,
  database: ENV.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [__dirname + "/modules/**/*.entity{.ts,.js}"],
  migrations: [],
  subscribers: [],
});

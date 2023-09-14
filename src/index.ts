import express, { Request, Response } from "express";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { appRouter } from "./router";
import path from "path";
import { ENV, logger } from "./common";

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();

    // add middlewares
    app.set("port", ENV.PORT);
    app.use(morgan("dev"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());

    // register express routes from defined application routes
    app.use("/", appRouter.routes);

    app.use(express.static(path.join(__dirname, "public")));
    app.get("*", (_: Request, res: Response) => {
      res.send("Hello World");
    });

    // start express server
    app.listen(app.get("port"), () => {
      logger(`Server on port http://localhost:${app.get("port")}`);
    });

    logger("Express server has started");
  })
  .catch((error) => logger(error, "error"));

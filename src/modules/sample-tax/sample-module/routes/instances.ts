import { sampleModuleController } from "../controllers";
import { sampleModuleMiddleware } from "../middlewares";
import { SampleModuleRouter } from "./sample-module.route";

export const sampleModuleRouter = new SampleModuleRouter(
  sampleModuleController,
  sampleModuleMiddleware
);

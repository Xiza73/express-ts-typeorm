import { Router } from "express";
import {
  SampleModuleRouter,
  sampleModuleRouter,
} from "./modules/sample-tax/sample-module/routes";

class AppRouter {
  public routes: Router;

  constructor(private sampleModuleRouter: SampleModuleRouter) {
    this.routes = Router();
    this.init();
  }

  init() {
    this.routes.use("/api/sample-module", this.sampleModuleRouter.routes);
  }
}

export const appRouter = new AppRouter(sampleModuleRouter);

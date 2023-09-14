import { SampleModuleController } from "../controllers";
import { BaseRouter } from "../../../../common";
import { SampleModuleMiddleware } from "../middlewares";

export class SampleModuleRouter extends BaseRouter<
  SampleModuleController,
  SampleModuleMiddleware
> {
  constructor(
    public sampleModuleController: SampleModuleController,
    public sampleModuleMiddleware: SampleModuleMiddleware
  ) {
    super(sampleModuleController, sampleModuleMiddleware);
  }

  init() {
    this.routes.get("/", (req, res, next) =>
      this.sampleModuleController.all(req, res, next)
    );
    this.routes.get("/:id", (req, res, next) =>
      this.sampleModuleController.one(req, res, next)
    );
    this.routes.post(
      "/",
      (req, res, next) =>
        this.sampleModuleMiddleware.createSampleModuleValidator(req, res, next),
      (req, res, next) => this.sampleModuleController.save(req, res, next)
    );
    this.routes.delete("/:id", (req, res, next) =>
      this.sampleModuleController.remove(req, res, next)
    );
  }
}

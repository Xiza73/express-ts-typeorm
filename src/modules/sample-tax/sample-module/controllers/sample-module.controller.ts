import { NextFunction, Request, Response } from "express";
import { SampleModuleService } from "../services";
import { responseHandler } from "../../../../common";

export class SampleModuleController {
  constructor(private sampleModuleService: SampleModuleService) {}

  async all(_req: Request, res: Response, _next: NextFunction) {
    const response = await this.sampleModuleService.all();

    return responseHandler(response, res, _next);
  }

  async one(req: Request, res: Response, _next: NextFunction) {
    const id = parseInt(req.params.id);

    const response = await this.sampleModuleService.one(id);

    return responseHandler(response, res, _next);
  }

  async save(req: Request, res: Response, _next: NextFunction) {
    const { firstName, lastName, age } = req.body;

    const response = await this.sampleModuleService.save({
      firstName,
      lastName,
      age,
    });

    return responseHandler(response, res, _next);
  }

  async remove(req: Request, res: Response, _next: NextFunction) {
    const id = parseInt(req.params.id);

    const response = await this.sampleModuleService.remove(id);

    return responseHandler(response, res, _next);
  }
}

import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import {
  SharedMiddleware,
  UnprocessableEntityException,
  responseHandler,
} from "../../../../common";
import { CreateSampleModuleDto } from "../dtos";

export class SampleModuleMiddleware extends SharedMiddleware {
  constructor() {
    super();
  }

  createSampleModuleValidator(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, age } = req.body;

    const dto = new CreateSampleModuleDto();

    Object.assign(dto, { firstName, lastName, age });

    validate(dto).then((err) => {
      return err.length > 0
        ? responseHandler(
            new UnprocessableEntityException(err?.toString() || "Invalid data"),
            res,
            next
          )
        : next();
    });
  }
}

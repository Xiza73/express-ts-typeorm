import { NextFunction, Response } from "express";
import { HttpException } from "./error.handler";

export class ResponseData<T> {
  constructor(public data: T | boolean) {}
}

export class ResponseList<T> {
  constructor(
    public data: T[],
    public total?: number,
    public limit?: number,
    public page?: number
  ) {}
}

export type ApiResponseData<T> = ResponseData<T> | HttpException;
export type ApiResponseList<T> = ResponseList<T> | HttpException;

export const responseHandler = <T>(
  response: ResponseData<T> | ResponseList<T> | HttpException,
  res: Response,
  _next: NextFunction
) => {
  return response instanceof HttpException
    ? res.status(response.statusCode).json({
        message: response.message,
      })
    : res.status(200).json(response);
};

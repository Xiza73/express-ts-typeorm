import { Router } from "express";

export class BaseRouter<T, U> {
  public routes: Router;
  constructor(
    public controller: T,
    public middleware: U
  ) {
    this.routes = Router();
    this.init();
  }

  init() {}
}

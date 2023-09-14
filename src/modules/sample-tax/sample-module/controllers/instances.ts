import { sampleModuleService } from "../services";
import { SampleModuleController } from "./sample-module.controller";

export const sampleModuleController = new SampleModuleController(sampleModuleService);

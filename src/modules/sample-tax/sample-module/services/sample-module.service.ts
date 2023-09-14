import { ApiResponseData, ApiResponseList } from "../../../../common";
import { CreateSampleModuleDto } from "../dtos";
import { SampleModule } from "../entities";

export interface SampleModuleService {
  all(): Promise<ApiResponseList<SampleModule>>;

  one(sampleModuleId: number): Promise<ApiResponseData<SampleModule>>;

  save({
    firstName,
    lastName,
    age,
  }: CreateSampleModuleDto): Promise<ApiResponseData<SampleModule>>;

  remove(sampleModuleId: number): Promise<ApiResponseData<String>>;
}

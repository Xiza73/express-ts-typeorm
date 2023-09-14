import { SampleModuleService } from "../sample-module.service";
import { SampleModule } from "../../entities";
import { AppDataSource } from "../../../../../data-source";
import {
  ApiResponseData,
  ApiResponseList,
  BadRequestException,
  NotFoundException,
} from "../../../../../common";
import { CreateSampleModuleDto } from "../../dtos";

export class SampleModuleServiceImpl implements SampleModuleService {
  private sampleRepository = AppDataSource.getRepository(SampleModule);

  async all(): Promise<ApiResponseList<SampleModule>> {
    try {
      const samples = await this.sampleRepository.find();

      if (!samples) return new NotFoundException("users not found");

      const response: ApiResponseList<SampleModule> = {
        data: samples,
      };

      return response;
    } catch (error) {
      return new BadRequestException(
        error?.message || "There was an error with the request"
      );
    }
  }

  async one(sampleModuleId: number): Promise<ApiResponseData<SampleModule>> {
    try {
      const user = await this.sampleRepository.findOne({
        where: { id: sampleModuleId },
      });

      if (!user) return new NotFoundException("user not found");

      const response: ApiResponseData<SampleModule> = {
        data: user,
      };

      return response;
    } catch (error) {
      return new BadRequestException(
        error?.message || "There was an error bringing the user"
      );
    }
  }

  async save({
    firstName,
    lastName,
    age,
  }: CreateSampleModuleDto): Promise<ApiResponseData<SampleModule>> {
    try {
      const user = this.sampleRepository.create({
        first_name: firstName,
        last_name: lastName,
        age,
      });

      // return this.sampleRepository.save(user);
      const response: ApiResponseData<SampleModule> = {
        data: await this.sampleRepository.save(user),
      };

      return response;
    } catch (error) {
      return new BadRequestException(
        error?.message || "There was an error saving the user"
      );
    }
  }

  async remove(sampleModuleId: number): Promise<ApiResponseData<String>> {
    try {
      let userToRemove = await this.sampleRepository.findOneBy({
        id: sampleModuleId,
      });

      if (!userToRemove) return new NotFoundException("user not found");

      await this.sampleRepository.remove(userToRemove);

      return {
        data: "user removed",
      };
    } catch (error) {
      return new BadRequestException(
        error?.message || "There was an error removing the user"
      );
    }
  }
}

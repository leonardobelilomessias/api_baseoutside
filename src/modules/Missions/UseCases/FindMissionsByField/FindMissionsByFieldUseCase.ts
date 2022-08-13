import { AppError } from "../../../../shared/errors/AppError"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class FindMissionsByFieldUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute(field): Promise<Mission[]>{
    if(!field) throw new AppError('Value of field is undefined')
    const foundMissionsByField = await this.missionRepository.findMissionsByField(field)
    return foundMissionsByField
  }

}
export{ FindMissionsByFieldUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericMissionDTO } from "../../dtos/IMissionDTO"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class FindMissionsByLocalUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }

  async execute(local: string): Promise<IOutputGenericMissionDTO[]>{
    if (!local) throw new AppError('Value of local is undefined')
    const missionsByLocal = await this.missionRepository.findMissionByLocal(local)
    return missionsByLocal
  }

}
export{FindMissionsByLocalUseCase}
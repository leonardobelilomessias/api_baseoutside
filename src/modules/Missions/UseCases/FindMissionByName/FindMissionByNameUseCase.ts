import { AppError } from "../../../../shared/errors/AppError"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class FindMissionByNameUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute(name: string): Promise<Mission>{
    if(!name) throw new AppError('Fild name is undefined')
    const missionByName = await this.missionRepository.findByName(name)
    return missionByName
  }

}
export{FindMissionByNameUseCase}
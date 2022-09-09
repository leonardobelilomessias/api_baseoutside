import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { ICreateWarningsMissionDTO, IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class CreateWarningMissionUseCase{
  private warningMissionRepository:IWarningsMissionRepository
  constructor(warningMissionRepository:IWarningsMissionRepository){
    this.warningMissionRepository = warningMissionRepository
  }
  async execute({ id_mission, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsMissionDTO):Promise<WarningsMission>{
    if(!id_mission||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    const createWarning = await this.warningMissionRepository.create({ id_mission, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningMissionUseCase}
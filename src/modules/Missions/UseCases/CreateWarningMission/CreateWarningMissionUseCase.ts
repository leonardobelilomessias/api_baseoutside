import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreateWarningsMissionDTOS, IOutputGenericWarningsMissionDTOS } from "../../dtos/IWarningsMissionDTOS"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import {  IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class CreateWarningMissionUseCase{
  private warningMissionRepository:IWarningsMissionRepository
  private menagePermissionMission :MenagerPermissionRespository
  constructor(warningMissionRepository:IWarningsMissionRepository,menagePermissionMission :MenagerPermissionRespository){
    this.warningMissionRepository = warningMissionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id_mission, id_creator, title, content, priority, is_active, state, type }:IInputCreateWarningsMissionDTOS):Promise<IOutputGenericWarningsMissionDTOS>{
    if(!id_mission||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    if(id_creator !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const alowTocreateWarning = await this.menagePermissionMission.confirmePermissionMission({id_agent_token,id_mission})

    if(!alowTocreateWarning) throw new AppError("Agent authenticate haven't permission to create warning")
    const createWarning = await this.warningMissionRepository.create({ id_mission, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningMissionUseCase}
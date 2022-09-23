import { AppError } from "../../../../shared/errors/AppError"
import { IInputEditCardMissionDTO } from "../../dtos/ICardMissionDTO"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class EditCardMissionUseCase{
  private cardMissionRepository:ICardMissionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(cardMissionRepository:ICardMissionRepository){
    this.cardMissionRepository = cardMissionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_mission,title,description}:IInputEditCardMissionDTO):Promise<CardMission>{ 
    if(!id_mission)throw new AppError("Value of Mission is undefined.")
    if(!title && !description) throw new AppError("Must be sent some new value")
    const findMission = await this.cardMissionRepository.listByid(id_mission)
    if(!findMission) throw new AppError("Card Mission not found.")
    const allowEditCard = await this.menagePermissionMission.confirmePermissionMission({id_agent_token,id_mission})
    if(!allowEditCard) throw new AppError("Agent authenticate doesen't have permission to do that action")
    const editedMission = await this.cardMissionRepository.edit({id_mission,title,description})
    return editedMission
  }
}
export{
  EditCardMissionUseCase
}
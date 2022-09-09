import { AppError } from "../../../../shared/errors/AppError"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class EditCardMissionUseCase{
  private cardMissionRepository:ICardMissionRepository
  constructor(cardMissionRepository:ICardMissionRepository){
    this.cardMissionRepository = cardMissionRepository
  }
  async execute({id_mission,title,description}):Promise<CardMission>{ 
    if(!id_mission)throw new AppError("Value of Mission is undefined.")
    if(!title && !description) throw new AppError("Must be sent some new value")
    const findMission = await this.cardMissionRepository.listByid(id_mission)
    if(!findMission) throw new AppError("Card Mission not found.")
    const editedMission = await this.cardMissionRepository.edit({id_mission,title,description})
    return editedMission
  }
}
export{
  EditCardMissionUseCase
}
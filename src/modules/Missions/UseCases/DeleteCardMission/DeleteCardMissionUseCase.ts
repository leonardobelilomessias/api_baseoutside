import { Request, Response } from "express"
import { AppError } from "../../../../shared/errors/AppError"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class DeleteCardMissionUseCase{
  private cardMissionRepository:ICardMissionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(cardMissionRepository:ICardMissionRepository){
    this.cardMissionRepository = cardMissionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_mission}):Promise<CardMission>{ 
    if(!id_mission) throw new AppError("Value of Mission is undefined.")
    const allowDeleteCard = await this.menagePermissionMission.confirmePermissionMission({id_agent_token})
    if(!allowDeleteCard) throw new AppError("Agent authenticated haven't permission to this action")
    const findCardMission = await this.cardMissionRepository.listByid(id_mission)
    if(!findCardMission) throw new AppError("Card Mission not found.")
    const deletedCardMission = await this.cardMissionRepository.delete(id_mission)
    return deletedCardMission
  }
}
export{DeleteCardMissionUseCase}
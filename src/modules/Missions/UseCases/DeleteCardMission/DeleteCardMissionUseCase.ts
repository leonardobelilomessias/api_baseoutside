import { Request, Response } from "express"
import { AppError } from "../../../../shared/errors/AppError"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class DeleteCardMissionUseCase{
  private cardMissionRepository:ICardMissionRepository
  constructor(cardMissionRepository:ICardMissionRepository){
    this.cardMissionRepository = cardMissionRepository
  }
  async execute(id_mission:string):Promise<CardMission>{ 
    if(!id_mission) throw new AppError("Value of Mission is undefined.")
    const findCardMission = await this.cardMissionRepository.listByid(id_mission)
    if(!findCardMission) throw new AppError("Card Mission not found.")
    const deletedCardMission = await this.cardMissionRepository.delete(id_mission)
    return deletedCardMission
  }
}
export{DeleteCardMissionUseCase}
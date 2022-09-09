import { AppError } from "../../../../shared/errors/AppError"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class FindCardMissionUseCase{
  private cardMissionRepository:ICardMissionRepository
  constructor(cardMissionRepository:ICardMissionRepository){
    this.cardMissionRepository = cardMissionRepository
  }
  async execute(id_mission:string):Promise<CardMission>{
    if(!id_mission) throw new AppError("Value of Mission is undefined.")
    const findMission = await this.cardMissionRepository.listByid(id_mission)
    return findMission
  }
}
export{FindCardMissionUseCase}
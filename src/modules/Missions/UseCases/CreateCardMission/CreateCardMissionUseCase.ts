import { AppError } from "../../../../shared/errors/AppError"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class CreateCardMissionUseCase{
  private cardMissionReposotory:ICardMissionRepository
  constructor(cardMissionReposotory:ICardMissionRepository){
    this.cardMissionReposotory = cardMissionReposotory
  }
  async execute({id_mission,description,title}):Promise<CardMission>{
    if(!id_mission||!description||!title) throw new AppError(" Some Value required is undefined")
    const findCard = await this.cardMissionReposotory.listByid(id_mission)
    if(findCard) throw new AppError("Already exist a card Mission.")
    const createMission = await this.cardMissionReposotory.create({id_mission,description,title})
    return createMission
  }
}
export{CreateCardMissionUseCase}
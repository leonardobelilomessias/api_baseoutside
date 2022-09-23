import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreateCardMissionDTO, IOutputGenericCardMissionDTO } from "../../dtos/ICardMissionDTO"
import { CardMission } from "../../infra/typeorm/entities/CardMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { ICardMissionRepository } from "../../repositories/ICardMissionRepository"

class CreateCardMissionUseCase{
  private cardMissionReposotory:ICardMissionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(cardMissionReposotory:ICardMissionRepository){
    this.cardMissionReposotory = cardMissionReposotory
    this.menagePermissionMission =  new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_mission,description,title}:IInputCreateCardMissionDTO):Promise<IOutputGenericCardMissionDTO>{
    if(!id_mission||!description||!title) throw new AppError(" Some Value required is undefined")
    const alowEditCard = await this.menagePermissionMission.confirmePermissionMission({id_agent_token,id_mission})
    if(!alowEditCard) throw new AppError("Agent authennticate dont have permission to that action")
    const findCard = await this.cardMissionReposotory.listByid(id_mission)
    if(findCard) throw new AppError("Already exist a card Mission.")
    const createMission = await this.cardMissionReposotory.create({id_mission,description,title})
    return createMission
  }
}
export{CreateCardMissionUseCase}
import { prototype } from "events"
import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreatePublicationDTO, IOutputCreatePublicationMissionDTO } from "../../dtos/IPublicationMissionDTOS"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IPublicationMission, IResponsePublicationMission } from "../../repositories/IPublicationMissionRepository"

class CreatePublicationMissionUseCase{
  private publicationMissionRepository:IPublicationMission
  private menagepermission :MenagerPermissionRespository
  constructor(publicationMissionRepository:IPublicationMission){
    this.publicationMissionRepository = publicationMissionRepository
    this.menagepermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id_mission,description,type,content}:IInputCreatePublicationDTO):Promise<IOutputCreatePublicationMissionDTO>{

    if(!id_mission||!description||!type|| !id_agent_token) throw new AppError("Some required value is undefiend")
    const alowPublicate = await this.menagepermission.confirmePermissionMission({id_agent_token,id_mission})
    if(!alowPublicate) throw new AppError("agent authenticate have no permission to publicate")
    const newPublicationMission = await this.publicationMissionRepository.create({id_mission,description,type,content})
    return newPublicationMission

  }
}
export{CreatePublicationMissionUseCase}
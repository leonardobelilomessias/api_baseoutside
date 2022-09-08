import { prototype } from "events"
import { AppError } from "../../../../shared/errors/AppError"
import { IPublicationMission, IResponsePublicationMission } from "../../repositories/IPublicationMissionRepository"

class CreatePublicationMissionUseCase{
  private publicationMissionRepository:IPublicationMission
  constructor(publicationMissionRepository:IPublicationMission){
    this.publicationMissionRepository = publicationMissionRepository
  }
  async execute({id_mission,description,type,content}):Promise<IResponsePublicationMission>{

    if(!id_mission||!description||!type) throw new AppError("Some required value is undefiend")
    const newPublicationMission = await this.publicationMissionRepository.create({id_mission,description,type,content})
    return newPublicationMission

  }
}
export{CreatePublicationMissionUseCase}
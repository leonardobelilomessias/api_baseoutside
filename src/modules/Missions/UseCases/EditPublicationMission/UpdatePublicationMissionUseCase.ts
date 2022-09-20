import { AppError } from "../../../../shared/errors/AppError"
import { PublicationMission } from "../../infra/typeorm/entities/PublicationMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IPublicationMission } from "../../repositories/IPublicationMissionRepository"

class UpdatePublicationMissionUseCase{
  private publicationMissionRepository:IPublicationMission
  private menageMissionPermission:MenagerPermissionRespository
  constructor(publicationMissionRepository:IPublicationMission){
    this.menageMissionPermission = new MenagerPermissionRespository()

    this.publicationMissionRepository = publicationMissionRepository
  }
  async execute({id_agent_token,id_publication,description}):Promise<PublicationMission>{
    if(!id_publication||!description) throw new AppError("Some Required value is undefined.")
    const allowUpdate = await this.menageMissionPermission.confirmePermissionMission({id_agent_token})
    if(!allowUpdate) throw new AppError("Agent authenticated haven't permission to that action.")
    const updateedPublication = await this.publicationMissionRepository.edit({id_publication,description})
    return updateedPublication
  }
}
export{UpdatePublicationMissionUseCase}
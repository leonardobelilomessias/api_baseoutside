import { AppError } from "../../../../shared/errors/AppError"
import { IInputEditPublicationMissionDTO, IOutputGenericPublicationMissionDTO } from "../../dtos/IPublicationMissionDTOS"
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
  async execute({id_agent_token,id_publication,description}:IInputEditPublicationMissionDTO):Promise<IOutputGenericPublicationMissionDTO>{
    if(!id_publication||!description) throw new AppError("Some Required value is undefined.")
    const findPublication = await this.publicationMissionRepository.findById(id_publication)
    if(!findPublication)throw new AppError("Publication not found.")
    const allowUpdate = await this.menageMissionPermission.confirmePermissionMission({id_agent_token,id_mission:findPublication.id_mission})
    if(!allowUpdate) throw new AppError("Agent authenticated haven't permission to that action.")
    const updateedPublication = await this.publicationMissionRepository.edit({id_publication,description})
    return updateedPublication
  }
}
export{UpdatePublicationMissionUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericPublicationDTO } from "../../../Agents/DTOS/IPublicationAgentDTOS"
import { IInputDeletePublicationMissionDTO, IOutputGenericPublicationMissionDTO } from "../../dtos/IPublicationMissionDTOS"
import { PublicationMission } from "../../infra/typeorm/entities/PublicationMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IPublicationMission } from "../../repositories/IPublicationMissionRepository"

class DeletePublicationMissionUseCase{
  private publicationMissionRepository:IPublicationMission
  private menagePermission:MenagerPermissionRespository
  constructor(publicationMissionRepository:IPublicationMission){
    this.publicationMissionRepository = publicationMissionRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_publication,id_agent_token}:IInputDeletePublicationMissionDTO):Promise<IOutputGenericPublicationMissionDTO> {
    if(!id_publication) throw new AppError("Value of publication is undefined.")
    const findPublication = await this.publicationMissionRepository.findById(id_publication)
    if(!findPublication) throw new AppError("Publication not found ")
    const alowDeletepublication = await this.menagePermission.confirmePermissionMission({id_agent_token,id_mission:findPublication.id_mission})
    if(!alowDeletepublication) throw new AppError("Agent haven't todo this action.")
    const deletedPublication = await this.publicationMissionRepository.delete(id_publication)
    return deletedPublication
  }
}
export{DeletePublicationMissionUseCase}
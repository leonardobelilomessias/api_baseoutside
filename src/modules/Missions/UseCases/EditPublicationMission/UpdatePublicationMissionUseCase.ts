import { AppError } from "../../../../shared/errors/AppError"
import { PublicationMission } from "../../infra/typeorm/entities/PublicationMission"
import { IPublicationMission } from "../../repositories/IPublicationMissionRepository"

class UpdatePublicationMissionUseCase{
  private publicationMissionRepository:IPublicationMission
  constructor(publicationMissionRepository:IPublicationMission){
    this.publicationMissionRepository = publicationMissionRepository
  }
  async execute({id_publication,description}):Promise<PublicationMission>{
    if(!id_publication||!description) throw new AppError("Some Required value is undefined.")
    const updateedPublication = await this.publicationMissionRepository.edit({id_publication,description})
    return updateedPublication
  }
}
export{UpdatePublicationMissionUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { PublicationMission } from "../../infra/typeorm/entities/PublicationMission"
import { IPublicationMission } from "../../repositories/IPublicationMissionRepository"

class DeletePublicationMissionUseCase{
  private publicationMissionRepository:IPublicationMission
  constructor(publicationMissionRepository:IPublicationMission){
    this.publicationMissionRepository = publicationMissionRepository
  }
  async execute(id_publication:string):Promise<PublicationMission> {
    if(!id_publication) throw new AppError("Value of publication is undefined.")
    console.log(id_publication)
    const deletedPublication = await this.publicationMissionRepository.delete(id_publication)
    return deletedPublication
  }
}
export{DeletePublicationMissionUseCase}
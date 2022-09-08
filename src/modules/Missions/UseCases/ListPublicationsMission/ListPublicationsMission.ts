import { AppError } from "../../../../shared/errors/AppError"
import { PublicationMission } from "../../infra/typeorm/entities/PublicationMission"
import { PublicationMissionRepository } from "../../infra/typeorm/repositories/PublicationMissionRepository"

class ListPublicationsMissionUseCase{
  private publicationsMissionRepository:PublicationMissionRepository
  constructor(publicationsMissionRepository:PublicationMissionRepository){
    this.publicationsMissionRepository = publicationsMissionRepository
  }
  async execute(id_mission:string):Promise<PublicationMission[]>{ 
    if(!id_mission) throw new AppError("Value of mission is undefined.")
    const listPublicationsMission = this.publicationsMissionRepository.list(id_mission)
    return listPublicationsMission
  }
}
export{ListPublicationsMissionUseCase}
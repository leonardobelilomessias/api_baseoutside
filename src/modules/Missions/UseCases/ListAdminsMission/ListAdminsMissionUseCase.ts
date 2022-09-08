import { AppError } from "../../../../shared/errors/AppError"
import { AdminMission } from "../../infra/typeorm/entities/AdminMission"
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository"

class ListAdminsMissionUseCase{
  private adminMissionRepository:IAdminMissionRepository
  constructor(adminMissionRepository:IAdminMissionRepository){
    this.adminMissionRepository = adminMissionRepository
  }
  async execute(id_mission:string):Promise<AdminMission[]>{
    if(!id_mission) throw new AppError("Value of mission is undefined.")
    const foundAdmininMission = await this.adminMissionRepository.listAdminsMission(id_mission)
    return foundAdmininMission
  }
}
export{ListAdminsMissionUseCase}
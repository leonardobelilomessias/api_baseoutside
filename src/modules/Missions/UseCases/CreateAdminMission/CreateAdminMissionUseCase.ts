import { AppError } from "../../../../shared/errors/AppError";
import { AdminMission } from "../../infra/typeorm/entities/AdminMission";
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository";
import { IMissionRepository } from "../../repositories/IMissonRepository";

class CreateAdminMissionUseCase{
  private adminmissionRepository: IAdminMissionRepository
  constructor(missionRepository: IAdminMissionRepository) {
    this.adminmissionRepository = missionRepository
  }
  async execute({id_mission,id_agent,type}):Promise<AdminMission> {
    if (!id_mission || !id_agent ||!type) throw new AppError("Some required value is undefined.")
    const createdAgent = await this.adminmissionRepository.createAdminMission({ id_agent, id_mission, type })

    return createdAgent
  }
}
export{CreateAdminMissionUseCase}
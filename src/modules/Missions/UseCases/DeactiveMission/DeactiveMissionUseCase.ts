import { AppError } from "../../../../shared/errors/AppError"
import { IInputDeactiveMissionDTO, IOutputGenericMissionDTO } from "../../dtos/IMissionDTO"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class DeactivateMissionUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute({id,id_agent_token}:IInputDeactiveMissionDTO): Promise<IOutputGenericMissionDTO> {
    if (!id) throw new AppError("Value of id mission cannot be undefined")
    const findMission = await this.missionRepository.findById(id)
    if(!findMission) throw new AppError("Mission not found.")
    if(findMission.is_active === false) throw new AppError("Mission already is deactive.")
    if(id_agent_token !== findMission?.creator ) throw new AppError("Agent authenticate haven't authorization to this action.")
    const deactivedMission = await this.missionRepository.deactivate(id)
    return deactivedMission
  }
}
export {  DeactivateMissionUseCase}
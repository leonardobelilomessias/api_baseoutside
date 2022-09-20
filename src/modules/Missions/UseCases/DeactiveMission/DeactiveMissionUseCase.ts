import { AppError } from "../../../../shared/errors/AppError"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class DeactivateMissionUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute({id,id_agent_token}): Promise<Mission> {
    if (!id) throw new AppError("Value of id mission cannot be undefined")
    const findMission = await this.missionRepository.findById(id)

    if(id_agent_token !== findMission.creator ) throw new AppError("Agent authenticate haven't authorization to this action.")
    const deactivedMission = await this.missionRepository.deactivate(id)
    return deactivedMission
  }
}
export {  DeactivateMissionUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class DeactivateMissionUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute(id: string): Promise<Mission> {
    if (!id) throw new AppError("Value of id mission cannot be undefined")
    const deactivedMission = await this.missionRepository.deactivate(id)
    return deactivedMission
  }
}
export {  DeactivateMissionUseCase}
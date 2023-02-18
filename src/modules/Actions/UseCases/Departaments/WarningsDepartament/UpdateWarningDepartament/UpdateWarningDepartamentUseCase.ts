import { AppError } from "../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputUpdateWarningDEpartamentActionDTO, IOutputUpdateWarningDEpartamentActionDTO } from "../../../../dtos/IWarningDepartamentDTOS"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IDepartamentRepository } from "../../../../repositories/IDepartamentRepository"
import { IWarningsDepartamentRepository, IEditWarningsDepartamentDTO } from "../../../../repositories/IWarningsDepartamentRepository"

class UpdateWarningDepartamentUseCase {
  private warningDepartamentRepository: IWarningsDepartamentRepository
  private departamentRepository: IDepartamentRepository
  private menagePermission: MenagerPermissionRespository
  constructor(warningDepartamentRepository: IWarningsDepartamentRepository, departamentRepository: IDepartamentRepository) {
    this.warningDepartamentRepository = warningDepartamentRepository
    this.departamentRepository = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({ id_agent_token, id, title, content, priority, is_active, state, type }: IInputUpdateWarningDEpartamentActionDTO): Promise<IOutputUpdateWarningDEpartamentActionDTO> {
    if (!id) throw new AppError("Value of warning is undefined.")
    const findWarning = await this.warningDepartamentRepository.findById(id)
    if (typeof priority !== typeof Number()) throw new AppError("Value of priority must be a number.")
    if (typeof type !== typeof Number() && !!type) throw new AppError("Value of type must be a number.")
    if (typeof state !== typeof Number() && !!state) throw new AppError("Value of state must be a number.")
    if (typeof is_active !== typeof Boolean() && !!is_active) throw new AppError("Value of is_active must be a number.")
    if (!findWarning) throw new AppError("Warning not found.")
    const findDepartament = await this.departamentRepository.findDepartamentById({ id_departament: findWarning.id_departament })
    const allowUpdateWarningDepartament = await this.menagePermission.confirmePermissionAction({ id_action: findDepartament.id_action, id_agent_token })
    if (!allowUpdateWarningDepartament) throw new AppError("Agent authenticated dowesn't have permission to action.")
    const editedWarningission = await this.warningDepartamentRepository.edit({ id, title, content, priority, is_active, state, type })
    return editedWarningission
  }
}
export { UpdateWarningDepartamentUseCase }
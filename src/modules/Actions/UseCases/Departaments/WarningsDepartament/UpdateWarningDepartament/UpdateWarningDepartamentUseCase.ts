import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository, IEditWarningsDepartamentDTO } from "../../../../repositories/IWarningsDepartamentRepository"

class UpdateWarningDepartamentUseCase{
  private warningDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningDepartamentRepository:IWarningsDepartamentRepository){
    this.warningDepartamentRepository = warningDepartamentRepository
  }
  async execute({ id, title, content, priority, is_active, state, type }: IEditWarningsDepartamentDTO):Promise<WarningsDepartament>{
    if(!id)throw new AppError("Value of warning is undefined.")
    const findWarning = await this.warningDepartamentRepository.findById(id)
    if(typeof priority !== typeof Number())throw new AppError("Value of priority must be a number.")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of type must be a number.")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    if(typeof is_active !== typeof Boolean()&& !!is_active)throw new AppError("Value of is_active must be a number.")
    if(!findWarning)throw new AppError("Warning not found.")
    const editedWarningission = await this.warningDepartamentRepository.edit({ id, title, content, priority, is_active, state, type })
    return editedWarningission
  }
}
export{UpdateWarningDepartamentUseCase}
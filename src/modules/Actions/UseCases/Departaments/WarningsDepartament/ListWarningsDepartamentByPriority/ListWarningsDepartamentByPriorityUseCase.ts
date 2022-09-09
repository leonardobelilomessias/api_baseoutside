import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository } from "../../../../repositories/IWarningsDepartamentRepository"


class ListWarningsDepartamentByPriorityUseCase{
  private warningsDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningsDepartamentRepository:IWarningsDepartamentRepository){
    this.warningsDepartamentRepository = warningsDepartamentRepository
  }
  async execute({priority,id_departament}):Promise<WarningsDepartament[]>{
    if(!priority) throw new AppError("Value of Priority is undefined")
    if(typeof priority !== typeof Number()&& !!priority)throw new AppError("Value of Priority must be a number.")
    const listWarningsByPriority = this.warningsDepartamentRepository.listByPriority({priority,id_departament})
    return listWarningsByPriority
  }
}
export{ListWarningsDepartamentByPriorityUseCase}
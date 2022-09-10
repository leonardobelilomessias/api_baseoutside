import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository } from "../../../../repositories/IWarningsDepartamentRepository"


class ListWarningsDepartamentByStatusUseCase{
  private warningsDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningsDepartamentRepository:IWarningsDepartamentRepository){
    this.warningsDepartamentRepository = warningsDepartamentRepository
  }
  async execute({state,id_departament}):Promise<WarningsDepartament[]>{
    if(!state) throw new AppError("Value of status is undefined")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    const listWarningsByStatus = this.warningsDepartamentRepository.listByStatus({state,id_departament})
    return listWarningsByStatus
  }
}
export{ListWarningsDepartamentByStatusUseCase}
import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository } from "../../../../repositories/IWarningsDepartamentRepository"

class ListWarningsDepartamentByTypeUseCase{
  private warningsDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningsDepartamentRepository:IWarningsDepartamentRepository){
    this.warningsDepartamentRepository = warningsDepartamentRepository
  }
  async execute({type,id_departament}):Promise<WarningsDepartament[]>{
    if(!type) throw new AppError("Value of Type is undefined")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of Type must be a number.")
    const listWarningsByType = this.warningsDepartamentRepository.listByType({type,id_departament})
    return listWarningsByType
  }
}
export{ListWarningsDepartamentByTypeUseCase}
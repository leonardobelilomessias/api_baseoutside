import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository } from "../../../../repositories/IWarningsDepartamentRepository"


class ListWarningsDepartamentUseCase{
  private warningsDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningsDepartamentRepository:IWarningsDepartamentRepository){
    this.warningsDepartamentRepository = warningsDepartamentRepository
  }
  async execute(id_departament:string):Promise<WarningsDepartament[]>{
    if(!id_departament) throw new AppError("Value of Departament is undefined")
    const listWarnings = this.warningsDepartamentRepository.listByIdDepartament(id_departament)
    return listWarnings
  }
}
export{ListWarningsDepartamentUseCase}
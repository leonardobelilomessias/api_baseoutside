import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository } from "../../../../repositories/IWarningsDepartamentRepository"



class DeleteWarningDepartamentUseCase{
  private warningsDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningsDepartamentRepository:IWarningsDepartamentRepository){
    this.warningsDepartamentRepository = warningsDepartamentRepository
  }
  async execute(id:string):Promise<WarningsDepartament>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const deletedWarnigDepartament = await this.warningsDepartamentRepository.delete(id)
    return deletedWarnigDepartament
  }
} 
export{DeleteWarningDepartamentUseCase}
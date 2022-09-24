import { AppError } from "../../../../../shared/errors/AppError"
import { IOutputGenericDepartamentActionDTO } from "../../../dtos/IDEpartamentActionDTOS"
import { Departament } from "../../../infra/typeorm/entities/Departament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class ListDepartamentsUseCase{
  private departamentRepository:IDepartamentRepository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
  }
  async execute(id_action:string):Promise<IOutputGenericDepartamentActionDTO[]>{
    if(!id_action) throw new AppError("Value of actions is undefined.")
    const departaments = await this.departamentRepository.listAll(id_action)
    return departaments
  }
}
export{ListDepartamentsUseCase}
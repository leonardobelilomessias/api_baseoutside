import { AppError } from "../../../../../shared/errors/AppError"
import { Departament } from "../../../infra/typeorm/entities/Departament"
import { IDepartamentRepository, IEditDepartement } from "../../../repositories/IDepartamentRepository"

class UpdateDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
  }
  async execute({id,name,description,agents_limit,agents_necessary}:IEditDepartement):Promise<Departament>{
    if(!id) throw new AppError("Value of departament is undefined.")
    const updateDepartament = this.departamentRepository.edit({id,name,description,agents_limit,agents_necessary})
    return updateDepartament
  }
}
export{UpdateDepartamentUseCase}
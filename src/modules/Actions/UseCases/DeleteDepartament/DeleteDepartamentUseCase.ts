import { AppError } from "../../../../shared/errors/AppError"
import { Departament } from "../../infra/typeorm/entities/Departament"
import { IDepartamentRepository } from "../../repositories/IDepartamentRepository"

class DeleteDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository  = departamentRepository
  }
  async execute(id):Promise<Departament>{
    if(!id) throw new AppError("Value of id departament is undefined")
    const deleteDepartament = await this.departamentRepository.delete(id)
    return deleteDepartament
  }
}
export{DeleteDepartamentUseCase}
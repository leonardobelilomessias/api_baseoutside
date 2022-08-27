import { AppError } from "../../../../shared/errors/AppError"
import { Departament } from "../../infra/typeorm/entities/Departament"
import { ICreateDepartament, IDepartamentRepository } from "../../repositories/IDepartamentRepository"

class CreateDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
  }
  async execute({id_action,name,description,agents_limit,agents_necessary}:ICreateDepartament):Promise<Departament>{
    if(!id_action||!name||!description) throw new AppError("Some require value is undefined.")
    const createDepartament = await this.departamentRepository.create({id_action,name,description,agents_limit,agents_necessary})
    return createDepartament
  }
}
export{CreateDepartamentUseCase}
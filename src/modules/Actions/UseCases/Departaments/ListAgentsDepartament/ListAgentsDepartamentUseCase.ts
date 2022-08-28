import { AppError } from "../../../../../shared/errors/AppError"
import { AgentDepartament } from "../../../infra/typeorm/entities/AgentDepartament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class ListAgentsDepartamentUseCase{
  private departamentRepository :IDepartamentRepository
  constructor(departamentRepository :IDepartamentRepository){
    this.departamentRepository = departamentRepository
  }
  async execute(id_departament):Promise<AgentDepartament[]>{
    if(!id_departament) throw new AppError("Value of departament is undefined.")
    const listAgentsDepartament = await this.departamentRepository.listAgentsDepartament(id_departament)
    return listAgentsDepartament
  }
}
export{ListAgentsDepartamentUseCase}
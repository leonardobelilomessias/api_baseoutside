import { AppError } from "../../../../../shared/errors/AppError"
import { AgentDepartament } from "../../../infra/typeorm/entities/AgentDepartament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class DeleteAgentDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
  }
  async execute({id_agent,id_departament}):Promise<AgentDepartament>{
    if(!id_agent || !id_departament) throw new AppError("Value of agent or departament is undefined.")
    const deleteAgentDepartament = await this.departamentRepository.deleteAgentDepartament({id_agent,id_departament})
    return deleteAgentDepartament
  }
}
export{DeleteAgentDepartamentUseCase}
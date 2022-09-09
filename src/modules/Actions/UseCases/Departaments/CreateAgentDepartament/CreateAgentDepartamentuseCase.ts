import { AppError } from "../../../../../shared/errors/AppError"
import { AgentDepartament } from "../../../infra/typeorm/entities/AgentDepartament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class CreateAgentDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
  }
  async execute({id_agent,id_departament}):Promise<AgentDepartament>{
    if(!id_agent||!id_departament) throw new AppError("Value of agent or departament is undefined.")
    const existAgentDepartament = await this.departamentRepository.findAgentDepartament({id_agent,id_departament})
    if(existAgentDepartament) throw new AppError("already exist agent departament")
    const createAgentDepartament = await this.departamentRepository.createAgentDepartament({id_agent,id_departament})
    return createAgentDepartament
  }
}
export{ 
  CreateAgentDepartamentUseCase
}
import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputCreateAgentDepartamentAcionDTO } from "../../../dtos/IAgentDepartamentsDTOS"
import { AgentDepartament } from "../../../infra/typeorm/entities/AgentDepartament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class CreateAgentDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  private
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_agent,id_departament}:IInputCreateAgentDepartamentAcionDTO):Promise<AgentDepartament>{
    if(!id_agent||!id_departament) throw new AppError("Value of agent or departament is undefined.")
    if(id_agent!== id_agent_token)throw new AppError("Agent authenticated doesn't have permission to action with this token")
    const findDepartament = await this.departamentRepository.findDepartamentById({id_departament})
    if(!findDepartament) throw new AppError("Departament not found")
    const existAgentDepartament = await this.departamentRepository.findAgentDepartament({id_agent,id_departament})
    if(existAgentDepartament) throw new AppError("already exist agent departament")
    const ableSubscribeDepartament = await this.menagePermission.ableSubscribeDepartament({id_action:findDepartament.id_action,id_agent})
    if(!ableSubscribeDepartament) throw new AppError("Agend must be subscribe at action before of subscribe departament")
    const createAgentDepartament = await this.departamentRepository.createAgentDepartament({id_agent,id_departament})
    return createAgentDepartament
  }
}
export{ 
  CreateAgentDepartamentUseCase
}
import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputDeleteAgentDepartamentAcionDTO, IOutputDeletAgentDepartamentAcionDTO } from "../../../dtos/IAgentDepartamentsDTOS"
import { AgentDepartament } from "../../../infra/typeorm/entities/AgentDepartament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class DeleteAgentDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  private menagePermission : MenagerPermissionRespository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_agent,id_departament}:IInputDeleteAgentDepartamentAcionDTO):Promise<IOutputDeletAgentDepartamentAcionDTO>{
    if(!id_agent || !id_departament) throw new AppError("Value of agent or departament is undefined.")
    const findAgentDepartament = await this.departamentRepository.findAgentDepartament({id_agent,id_departament})
    if(!findAgentDepartament)throw new AppError("Agent departament not found")
    const findDepartament = await this.departamentRepository.findDepartamentById({id_departament})
    const allowDeleteAgentDepartament = await this.menagePermission.confirmePermissionAction({id_action:findDepartament.id_action,id_agent_token})
    if(!allowDeleteAgentDepartament) throw new AppError("Agent doesn't have permission to action.")
    const deleteAgentDepartament = await this.departamentRepository.deleteAgentDepartament({id_agent,id_departament})
    return deleteAgentDepartament
  }
}
export{DeleteAgentDepartamentUseCase}
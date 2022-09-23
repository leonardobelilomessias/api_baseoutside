import { AppConfig } from "aws-sdk"
import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericAgentDTO } from "../../DTOS/IAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { MapResponseCreateAgent } from "../../MapFields/MapResponseCreateAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"



class FindAgentsByVocationUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute( vocation:{vocation:string} ): Promise<IOutputGenericAgentDTO[]> {
    
    if(!vocation) throw new AppError("Value sent  of field is undefined.")
    const agentByVocation = await this.agentRepository.findByVocation(vocation)
    const filterActiveAgents= agentByVocation.filter(agents=>(agents.is_active===true))
    const responseMapFieldsAgent = filterActiveAgents.map(agent=>( MapResponseCreateAgent.mapFields(agent)))

    return responseMapFieldsAgent
  }

}
export{FindAgentsByVocationUseCase}
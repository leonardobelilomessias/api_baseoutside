import { IOutputCreateAgentDTO } from "../DTOS/IAgentDTOS";
import { Agent } from "../infra/typeorm/entities/Agent";

class MapResponseCreateAgent{
  agent:Agent
  constructor(agent:Agent){
    this.agent = agent
  }
  static mapFields(agent:Agent):IOutputCreateAgentDTO{
    delete agent.password
    delete agent.created_at
    return agent as IOutputCreateAgentDTO
  }
}
export{MapResponseCreateAgent}
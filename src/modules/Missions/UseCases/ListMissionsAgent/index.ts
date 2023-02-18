import { AgentsMissionRepository } from "../../infra/typeorm/repositories/AgentsMissionRepository"
import { ListMissionsAgentController } from "./ListAgentsMissionController"
import { ListMissionsAgentUseCase } from "./ListMissionsAgentUseCase"

export default()=>{
    
    const agentsMissionsRepository = new AgentsMissionRepository()
    const listMissionsAgentUseCase = new ListMissionsAgentUseCase(agentsMissionsRepository)
    const listMissionsAgentController = new ListMissionsAgentController(listMissionsAgentUseCase)
    return listMissionsAgentController
}
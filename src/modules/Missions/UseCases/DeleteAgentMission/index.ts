import { AgentsMissionRepository } from "../../infra/typeorm/repositories/AgentsMissionRepository";
import { DeleteAgentMissionController } from "./DeleteAgentMissionController";
import { DeleteAgentMissionUseCase } from "./DeleteAgentMissionUseCase";

export default()=>{
    
    const agentsMissionRepository = new AgentsMissionRepository()
    const deleteAgentMissionUseCase = new DeleteAgentMissionUseCase(agentsMissionRepository)
    const deleteAgentMissionController = new DeleteAgentMissionController(deleteAgentMissionUseCase)
    return  deleteAgentMissionController
}
import { AgentsMissionRepository } from "../../../Missions/infra/typeorm/repositories/AgentsMissionRepository";
import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { AgentActionRepository } from "../../infra/typeorm/repositories/AgentActionRepository";
import { CreateAgentActionController } from "./CreateAgentActionController";
import { CreateAgentActionUseCase } from "./CreateAgentActionUseCase";

export default ()=>{
    
    const agentActionRepository = new AgentActionRepository()
    const createAgentActionUseCase = new CreateAgentActionUseCase(agentActionRepository)
    const createAgentActionController = new CreateAgentActionController(createAgentActionUseCase)   
    return createAgentActionController
}
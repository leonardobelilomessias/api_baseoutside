import { AgentActionRepository } from "../../infra/typeorm/repositories/AgentActionRepository";
import { CancelAgentActionController } from "./CancelAgentActionController";
import { CancelAgentActionUseCase } from "./CancelAgentActionUseCase";

export default ()=>{
const agentActionRepository = new AgentActionRepository()
const cancelAgentActionUseCase = new CancelAgentActionUseCase(agentActionRepository)
const cancelAgentActionController = new CancelAgentActionController(cancelAgentActionUseCase)
return cancelAgentActionController

}
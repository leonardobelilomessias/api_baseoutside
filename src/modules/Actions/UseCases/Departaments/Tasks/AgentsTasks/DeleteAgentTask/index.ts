import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { DeleteAgentTaskController } from "./DeleteAgentTaskController";
import { DeleteAgentTaskUseCase } from "./DeleteAgentTaskUseCase";

export default ()=>{
    
    const agentTaskRepository = new AgentTaskRepository()
    const deleteAgentTaskUseCase = new DeleteAgentTaskUseCase(agentTaskRepository)
    const deleteAgentTaskController = new  DeleteAgentTaskController(deleteAgentTaskUseCase)
    return deleteAgentTaskController
}
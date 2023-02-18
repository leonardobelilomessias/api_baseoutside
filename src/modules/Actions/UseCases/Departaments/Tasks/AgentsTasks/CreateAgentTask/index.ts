import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { CreateAgentTaskController } from "./CreateAgentTaskController";
import { CreateAgentTaskUseCase } from "./CreateAgentTaskUseCase";

export default ()=>{
    
    const agentTaskRepository = new AgentTaskRepository()
    const createagentTaskUseCase = new CreateAgentTaskUseCase(agentTaskRepository)
    const createAgentTaskController = new CreateAgentTaskController(createagentTaskUseCase)   
    return createAgentTaskController
}
import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { ListAgentTaksController } from "./ListAgentTasksController";
import { ListAgentTasksUseCase } from "./ListAgentTasksUseCase";

export default ()=>{
    
    const agentTaskRepository = new AgentTaskRepository()
    const listAgentTaskUseCase = new ListAgentTasksUseCase(agentTaskRepository)
    const listAgentTaskController = new ListAgentTaksController(listAgentTaskUseCase)
    return listAgentTaskController
}
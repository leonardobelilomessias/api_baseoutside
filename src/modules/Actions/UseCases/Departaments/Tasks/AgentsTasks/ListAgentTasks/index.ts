import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { ListAgentTaksController } from "./ListAgentTasksController";
import { ListAgentTasksUseCase } from "./ListAgentTasksUseCase";

const agentTaskRepository = new AgentTaskRepository()
const listAgentTaskUseCase = new ListAgentTasksUseCase(agentTaskRepository)
const listAgentTaskController = new ListAgentTaksController(listAgentTaskUseCase)
export{listAgentTaskController}
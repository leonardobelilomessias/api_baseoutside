import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { ListAgentTasksUseCase } from "../ListAgentTasks/ListAgentTasksUseCase";
import { ListTaskAgentsController } from "./ListTakAgentController";
import { ListTaskAgentsUseCase } from "./ListTaskAgentsUseCase";

const agentTaskRepository = new AgentTaskRepository()
const listTaksAgentsUseCase = new ListTaskAgentsUseCase(agentTaskRepository)
const listTaskAgentController = new ListTaskAgentsController(listTaksAgentsUseCase)
export{listTaskAgentController}
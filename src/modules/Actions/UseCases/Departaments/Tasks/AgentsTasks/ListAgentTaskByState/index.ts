import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { ListAgentTaskByStateController } from "./ListAgentTaskByStateController";
import { ListAgentTaskByStateUseCase } from "./ListAgentTaskByStateUseCase";

const agentTaskRepository = new AgentTaskRepository()
const listAgentTaskByStateUseCase = new ListAgentTaskByStateUseCase(agentTaskRepository)
const listAgentTaskByStateController = new ListAgentTaskByStateController(listAgentTaskByStateUseCase)
export{listAgentTaskByStateController}
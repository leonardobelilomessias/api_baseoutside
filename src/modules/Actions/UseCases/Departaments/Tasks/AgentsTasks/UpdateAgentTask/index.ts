import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { UpdateAgentTaksController } from "./UpdateAgentTaskController";
import { UpdateAgentTaskUseCase } from "./UpdateAgentTaskUseCase";

const agentTaskRepositor = new AgentTaskRepository()
const updateAgentTaskUseCase = new UpdateAgentTaskUseCase(agentTaskRepositor)
const updateAgentTaskController = new UpdateAgentTaksController(updateAgentTaskUseCase)
export{ updateAgentTaskController}
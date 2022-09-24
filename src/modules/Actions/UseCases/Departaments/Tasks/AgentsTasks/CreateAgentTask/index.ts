import { AgentTaskRepository } from "../../../../../infra/typeorm/repositories/AgentTaskRepository";
import { CreateAgentTaskController } from "./CreateAgentTaskController";
import { CreateAgentTaskUseCase } from "./CreateAgentTaskUseCase";

const agentTaskRepository = new AgentTaskRepository()
const createagentTaskUseCase = new CreateAgentTaskUseCase(agentTaskRepository)
const createAgentTaskController = new CreateAgentTaskController(createagentTaskUseCase)

export{createAgentTaskController}
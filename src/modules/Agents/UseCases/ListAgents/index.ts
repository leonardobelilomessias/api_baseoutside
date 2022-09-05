import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { ListAgentsController } from "./ListAgentsController";
import { ListAgentsUseCase } from "./ListAgentsUseCase";

const agentRepository = new AgentRepository()
const listsAgentUsecase = new ListAgentsUseCase(agentRepository)
const listsAgentController = new ListAgentsController(listsAgentUsecase)

export{listsAgentController}
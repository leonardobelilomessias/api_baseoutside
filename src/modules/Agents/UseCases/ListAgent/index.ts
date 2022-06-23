import { AgentRepository } from "../../Repository/AgentRepository";
import { ListAgentController } from "./ListAgentController";
import { ListAgentUseCase } from "./ListAgentUseCase";

const agentRepository = new AgentRepository()
const listAgentUsecase = new ListAgentUseCase(agentRepository)
const listAgentController = new ListAgentController(listAgentUsecase)

export{listAgentController}
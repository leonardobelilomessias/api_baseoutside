import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { FindAgentController } from "./FindAgentController";
import { FindAgentUseCase } from "./FindAgentUseCase";

const agenteRepository = new AgentRepository()
const findAgentUseCase = new FindAgentUseCase(agenteRepository)
const findAgentController = new FindAgentController(findAgentUseCase)

export{findAgentController}
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { CreateColabAgentController } from "./CreateColabController";
import { CreateColabAgentUseCase } from "./CreateColabUseCase";


export default () => {
  const colabAgentRepository = new ColabAgentRepository()
  const agentRepository = new AgentRepository()
  const createColabAgentUseCase = new CreateColabAgentUseCase(colabAgentRepository, agentRepository)
  const createColabAgentController = new CreateColabAgentController(createColabAgentUseCase)
  return createColabAgentController

}

import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { ListColabsAgentController } from "./ListColabsAgentController";
import { ListColabsAgentUseCase } from "./ListColabsAgentUseCase";

export default()=>{

  const colabAgentRepository = new ColabAgentRepository()
  const listColabsAgentUseCase = new ListColabsAgentUseCase(colabAgentRepository)
  const listColabsAgentController = new ListColabsAgentController(listColabsAgentUseCase)
  return listColabsAgentController
}


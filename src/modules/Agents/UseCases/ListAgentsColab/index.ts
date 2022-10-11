import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { ListAgentsColabController } from "./ListAgentsColabController";
import { ListAgentsColabUseCase } from "./ListAgentsColaUseCase";

export default()=>{

  const colabAgentRepository = new ColabAgentRepository()
  const listAgentsColabUseCase = new ListAgentsColabUseCase(colabAgentRepository)
  const listAgentsColabController = new ListAgentsColabController(listAgentsColabUseCase)
  return listAgentsColabController
}

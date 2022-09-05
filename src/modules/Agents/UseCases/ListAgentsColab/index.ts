import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { ListAgentsColabController } from "./ListAgentsColabController";
import { ListAgentsColabUseCase } from "./ListAgentsColaUseCase";

const colabAgentRepository = new ColabAgentRepository()
const listAgentsColabUseCase = new ListAgentsColabUseCase(colabAgentRepository)
const listAgentsColabController = new ListAgentsColabController(listAgentsColabUseCase)
export{listAgentsColabController}
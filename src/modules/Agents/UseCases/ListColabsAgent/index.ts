import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { ListColabsAgentController } from "./ListColabsAgentController";
import { ListColabsAgentUseCase } from "./ListColabsAgentUseCase";

const colabAgentRepository = new ColabAgentRepository()
const listColabsAgentUseCase = new ListColabsAgentUseCase(colabAgentRepository)
const listColabsAgentController = new ListColabsAgentController(listColabsAgentUseCase)

export{listColabsAgentController}
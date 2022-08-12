import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { CreateColabAgentController } from "./CreateColabController";
import { CreateColabAgentUseCase } from "./CreateColabUseCase";


const colabAgentRepository = new ColabAgentRepository()
const createColabAgentUseCase = new CreateColabAgentUseCase(colabAgentRepository)
const createColabAgentController = new CreateColabAgentController(createColabAgentUseCase)

export{createColabAgentController}
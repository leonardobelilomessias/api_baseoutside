import { AgentRepository } from "../../Repository/AgentRepository";
import { UpdateImageAgentController } from "./UpdateImageAgent";
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase";

const agenteRepository = new AgentRepository()
const updateImageAvatarUseCase = new UpdateImageAgentUseCase(agenteRepository)
const updateImageAgentController = new UpdateImageAgentController(updateImageAvatarUseCase)

export{updateImageAgentController}
import { CardAgentRepository } from "../../infra/typeorm/repositories/CardAgentRepository";
import { EditCardAgentController } from "./EditCardAgentController";
import { EditCardAgentUseCase } from "./EditCardAgentUseCase";

const cardAgentRepository = new CardAgentRepository()
const editCardAgentUseCase = new EditCardAgentUseCase(cardAgentRepository)
const editCardAgentController = new EditCardAgentController(editCardAgentUseCase)
export{editCardAgentController}
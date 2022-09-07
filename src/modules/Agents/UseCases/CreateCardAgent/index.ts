import { CreateActionUseCase } from "../../../Actions/UseCases/CreateAction/CreateActionUseCase";
import { CardAgentRepository } from "../../infra/typeorm/repositories/CardAgentRepository";
import { CreateCardAgentController } from "./CreateCardAgentController";
import { CreateCardAgentUseCase } from "./CreateCardAgentUseCase";

const cardAgentRepository = new CardAgentRepository()
const createCardAgentUseCase = new CreateCardAgentUseCase(cardAgentRepository)
const createCardAgentController = new CreateCardAgentController(createCardAgentUseCase)
export{ createCardAgentController}
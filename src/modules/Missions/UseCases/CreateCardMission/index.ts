import { CreateActionUseCase } from "../../../Actions/UseCases/CreateAction/CreateActionUseCase";
import { CardMissionRepository } from "../../infra/typeorm/repositories/CardMissionRepository";
import { CreateCardMissionController } from "./CreateCardMissionController";
import { CreateCardMissionUseCase } from "./CreateCardMissionUseCase";

const cardMissionRepository = new CardMissionRepository()
const createCardMissionUseCase = new CreateCardMissionUseCase(cardMissionRepository)
const createCardMissionController = new CreateCardMissionController(createCardMissionUseCase)
export{ createCardMissionController}
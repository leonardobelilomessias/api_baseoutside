import { CardMissionRepository } from "../../infra/typeorm/repositories/CardMissionRepository";
import { DeleteCardMissionController } from "./DeleteCardMissionController";
import { DeleteCardMissionUseCase } from "./DeleteCardMissionUseCase";

const cardMissionRepository = new CardMissionRepository()
const deleteCardMissionUseCase = new DeleteCardMissionUseCase(cardMissionRepository)
const deletedCardMissionController = new DeleteCardMissionController(deleteCardMissionUseCase)
export{deletedCardMissionController}
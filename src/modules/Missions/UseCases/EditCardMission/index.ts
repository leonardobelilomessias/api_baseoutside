import { CardMissionRepository } from "../../infra/typeorm/repositories/CardMissionRepository";
import { EditCardMissionController } from "./EditCardMissionController";
import { EditCardMissionUseCase } from "./EditCardMissionUseCase";

export default()=>{
    
    const cardMissionRepository = new CardMissionRepository()
    const editCardMissionUseCase = new EditCardMissionUseCase(cardMissionRepository)
    const editCardMissionController = new EditCardMissionController(editCardMissionUseCase)
    return editCardMissionController
}
import { CardMissionRepository } from "../../infra/typeorm/repositories/CardMissionRepository";
import { FindCardMissionController } from "./FindCardMissionController";
import { FindCardMissionUseCase } from "./FindCardMissionUseCase";

export default()=>{
    
    const cardMissionRepository = new CardMissionRepository()
    const findCardMissionUseCase = new FindCardMissionUseCase(cardMissionRepository)
    const findCardMissionController = new FindCardMissionController(findCardMissionUseCase)
    return findCardMissionController
}
import { CreateActionUseCase } from "../../../Actions/UseCases/CreateAction/CreateActionUseCase";
import { CardMissionRepository } from "../../infra/typeorm/repositories/CardMissionRepository";
import { CreateCardMissionController } from "./CreateCardMissionController";
import { CreateCardMissionUseCase } from "./CreateCardMissionUseCase";

export default()=>{
    
    const cardMissionRepository = new CardMissionRepository()
    const createCardMissionUseCase = new CreateCardMissionUseCase(cardMissionRepository)
    const createCardMissionController = new CreateCardMissionController(createCardMissionUseCase)
    return  createCardMissionController
}
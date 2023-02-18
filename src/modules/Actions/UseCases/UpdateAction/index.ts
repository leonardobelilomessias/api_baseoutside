import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { UpdateActionController } from "./UpdateActionController";
import { UpdateActionUseCase } from "./UpdateActionUseCase";

export default ()=>{
    
    const actionRepository = new ActionRepository()
    const updateActionUseCase = new UpdateActionUseCase(actionRepository)
    const updateActionController = new UpdateActionController(updateActionUseCase)
    return updateActionController
}
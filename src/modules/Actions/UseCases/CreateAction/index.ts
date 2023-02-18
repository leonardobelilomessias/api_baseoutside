import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { CreateActionController } from "./CreateActionController";
import { CreateActionUseCase } from "./CreateActionUseCase";

export default ()=>{
    
    const actionRepository = new ActionRepository()
    const createActionUseCase = new CreateActionUseCase(actionRepository)
    const createActionController = new CreateActionController(createActionUseCase)
    return createActionController
}

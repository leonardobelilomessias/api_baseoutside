import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { FindActionByNameController } from "./FindActionBynameController";
import { FindActionByNameUseCase } from "./FindActionByNameUseCase";

export default ()=>{
    
    const actionRepository = new ActionRepository()
    const findActionByNameUseCase = new FindActionByNameUseCase(actionRepository)
    const findActionByNameController = new FindActionByNameController(findActionByNameUseCase)    
    return findActionByNameController
}
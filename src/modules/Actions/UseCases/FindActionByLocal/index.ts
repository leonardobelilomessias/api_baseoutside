import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { FindActionByLocalController } from "./FindActionByLocalController";
import { FindActionByLocalUseCase } from "./FindActionByLocalUseCase";

export default ()=>{
    
    const actionRepository = new ActionRepository()
    const findActionByLocalUseCase = new FindActionByLocalUseCase(actionRepository)
    const findActionByLocalController = new  FindActionByLocalController(findActionByLocalUseCase)
    return  findActionByLocalController
}
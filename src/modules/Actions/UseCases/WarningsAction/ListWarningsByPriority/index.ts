import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { ListWarningsActionBySatusController } from "./ListWarningsActionByPriorityController";

import { ListWarningsActionByPriorityUseCase } from "./ListWarningsActionByPriorityUseCase";

export default ()=>{
    
    const warningsActionRepository = new WarningActionRepository()
    const listwarnigsActionUseCase = new ListWarningsActionByPriorityUseCase(warningsActionRepository)
    const listWarnigsActionByPriorityController = new ListWarningsActionBySatusController(listwarnigsActionUseCase)
    return listWarnigsActionByPriorityController
}
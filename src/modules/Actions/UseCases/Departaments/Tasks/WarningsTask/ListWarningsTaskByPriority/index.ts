
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { ListWarningsTaskBySatusController } from "./ListWarningsTaskByPriorityController";

import { ListWarningsTaskByPriorityUseCase } from "./ListWarningsTaskByPriorityUseCase";

export default ()=>{
    
    const warningsTaskRepository = new WarningTaskRepository()
    const listwarnigsTaskUseCase = new ListWarningsTaskByPriorityUseCase(warningsTaskRepository)
    const listWarningsTaskByPriorityController = new ListWarningsTaskBySatusController(listwarnigsTaskUseCase)
    return listWarningsTaskByPriorityController
}
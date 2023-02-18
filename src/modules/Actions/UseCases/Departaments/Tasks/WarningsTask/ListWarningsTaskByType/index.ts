
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { ListWarningsTaskBySatusController } from "./ListWarningsTaskByTypeController";

import { ListWarningsTaskByTypeUseCase } from "./ListWarningsTaskByTypeUseCase";

export default ()=>{
    
    const warningsTaskRepository = new WarningTaskRepository()
    const listwarnigsTaskUseCase = new ListWarningsTaskByTypeUseCase(warningsTaskRepository)
    const listwarningsTaskByTypeController = new ListWarningsTaskBySatusController(listwarnigsTaskUseCase)
    return listwarningsTaskByTypeController
}
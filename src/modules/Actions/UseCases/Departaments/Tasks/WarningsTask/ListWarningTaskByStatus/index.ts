
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { ListWarningsTaskBySatusController } from "./ListWarningsTaskByStatusController";

import { ListWarningsTaskByStatusUseCase } from "./ListWarningsTaskByStatusUseCase";

export default ()=>{
    
    const warningsTaskRepository = new WarningTaskRepository()
    const listwarnigsTaskUseCase = new ListWarningsTaskByStatusUseCase(warningsTaskRepository)
    const listWarningsTaskByStateController = new ListWarningsTaskBySatusController(listwarnigsTaskUseCase)
    return listWarningsTaskByStateController
}
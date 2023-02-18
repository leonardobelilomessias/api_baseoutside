
import { TaskDepartamentRepository } from "../../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { UpdateWarningTaskController } from "./updateWarningTaskController";
import { UpdateWarningTaskUseCase } from "./UpdateWarningTaskUseCase";
export default ()=>{
    
    const warningTaskRepository = new WarningTaskRepository()
    const taskDepartamentRepository = new TaskDepartamentRepository()
    const updateWarningTaskUseCase = new UpdateWarningTaskUseCase(warningTaskRepository,taskDepartamentRepository)
    const updateWarningTaskController = new UpdateWarningTaskController(updateWarningTaskUseCase)
    return updateWarningTaskController
}
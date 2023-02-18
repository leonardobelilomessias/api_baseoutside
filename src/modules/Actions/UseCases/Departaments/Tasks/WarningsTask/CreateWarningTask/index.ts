
import { TaskDepartamentRepository } from "../../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { CreaterWarningTaskController } from "./CreateWarningTaskController";
import { CreateWarningTaskUseCase } from "./CreateWarningTaskUseCase";

export default ()=>{
    
    const warningTaskRepository = new WarningTaskRepository()
    const taskDepartamentRespository = new TaskDepartamentRepository()
    const createWarningTaskUseCase = new CreateWarningTaskUseCase(warningTaskRepository, taskDepartamentRespository)
    const createWarningTaskController = new CreaterWarningTaskController(createWarningTaskUseCase)
    return createWarningTaskController
}
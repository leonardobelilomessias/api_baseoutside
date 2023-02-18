import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { UpdateTaskDepartamentController } from "./UpdateTaskDepartamentController";
import { UpdateTaskDepartamentUseCase } from "./UpdateTaskDepartamentUseCase";

export default ()=>{
    
    const taskDepartamentRepository =  new TaskDepartamentRepository()
    const updateTaskDepartamentUseCase = new UpdateTaskDepartamentUseCase(taskDepartamentRepository)
    const updateTaskDepartementController = new UpdateTaskDepartamentController(updateTaskDepartamentUseCase)
    
    return updateTaskDepartementController
}
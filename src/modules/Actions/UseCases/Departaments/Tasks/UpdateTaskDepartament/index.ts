import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { UpdateTaskDepartamentController } from "./UpdateTaskDepartamentController";
import { UpdateTaskDepartamentUseCase } from "./UpdateTaskDepartamentUseCase";

const taskDepartamentRepository =  new TaskDepartamentRepository()
const updateTaskDepartamentUseCase = new UpdateTaskDepartamentUseCase(taskDepartamentRepository)
const updateTaskDepartementController = new UpdateTaskDepartamentController(updateTaskDepartamentUseCase)

export{updateTaskDepartementController}
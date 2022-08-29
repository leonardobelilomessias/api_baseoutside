import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { DeleteTaskDepartamentController } from "./DeleteTaskDepartamentController";
import { DeleteTaskDepartamentUseCase } from "./DeleteTaskDepartamentUseCase";

const taskDepartamentRepository = new TaskDepartamentRepository()
const deletaTaskDepartamentUseCase = new DeleteTaskDepartamentUseCase(taskDepartamentRepository)
const deleteTaskDepartamentController = new DeleteTaskDepartamentController(deletaTaskDepartamentUseCase)

export{deleteTaskDepartamentController}
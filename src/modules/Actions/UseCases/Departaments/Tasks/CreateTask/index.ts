import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository"
import { CreateTaskDepartamentController } from "./CreateTaskDepartamentController"

import { CreateTaskDepartamentUseCase } from "./CreateTaskDepartamentUseCase"


const taskDepartamentRepository = new TaskDepartamentRepository()
const createTaskDepartamentUseCase = new CreateTaskDepartamentUseCase(taskDepartamentRepository)
const createTaskDepartamentController = new CreateTaskDepartamentController(createTaskDepartamentUseCase)

export{ createTaskDepartamentController}
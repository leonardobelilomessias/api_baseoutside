import { DepartamentRepository } from "../../../../infra/typeorm/repositories/DepartamentRepository"
import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository"
import { CreateTaskDepartamentController } from "./CreateTaskDepartamentController"

import { CreateTaskDepartamentUseCase } from "./CreateTaskDepartamentUseCase"


const taskDepartamentRepository = new TaskDepartamentRepository()
const departamentRepository = new DepartamentRepository()
const createTaskDepartamentUseCase = new CreateTaskDepartamentUseCase(taskDepartamentRepository,departamentRepository)
const createTaskDepartamentController = new CreateTaskDepartamentController(createTaskDepartamentUseCase)

export{ createTaskDepartamentController}
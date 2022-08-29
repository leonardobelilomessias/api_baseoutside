import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { ListTasksDepartamentController } from "./ListTasksDepartamentController";
import { ListTasksDepartamentUseCase } from "./ListTasksDepartamentUseCase";

const taskDepartamentRepository = new TaskDepartamentRepository()
const listTasksDepartamentUseCase = new ListTasksDepartamentUseCase(taskDepartamentRepository)
const listTasksDepartamentController = new ListTasksDepartamentController(listTasksDepartamentUseCase)

export{listTasksDepartamentController}
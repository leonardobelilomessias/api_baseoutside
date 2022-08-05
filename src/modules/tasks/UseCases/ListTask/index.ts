import { ListActionUseCase } from "../../../Actions/UseCases/ListActionUseCase/ListActionUseCase";
import { TaskRepository } from "../../infra/typeorm/repositories/TaskRepository";

import { ListTaskController } from "./ListTaskController";
import { ListTaskUseCase } from "./ListTaskUseCase";

const taskRepository = new TaskRepository()
const listTaskUseCase = new ListTaskUseCase(taskRepository)
const listTaskController = new ListTaskController(listTaskUseCase)

export{listTaskController}
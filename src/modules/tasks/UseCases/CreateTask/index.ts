
import { TaskRepository } from "../../infra/typeorm/repositories/TaskRepository";
import { CreateTaskController } from "./CreateTaskController";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

const taskRepository = new TaskRepository()
const createTaskUseCase = new CreateTaskUseCase(taskRepository)
const createTaskController = new CreateTaskController(createTaskUseCase)

export{ createTaskController}
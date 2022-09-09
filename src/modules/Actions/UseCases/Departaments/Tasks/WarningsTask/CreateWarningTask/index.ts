
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { CreaterWarningTaskController } from "./CreateWarningTaskController";
import { CreateWarningTaskUseCase } from "./CreateWarningTaskUseCase";

const warningTaskRepository = new WarningTaskRepository()
const createWarningTaskUseCase = new CreateWarningTaskUseCase(warningTaskRepository)
const createWarningTaskController = new CreaterWarningTaskController(createWarningTaskUseCase)
export{createWarningTaskController}
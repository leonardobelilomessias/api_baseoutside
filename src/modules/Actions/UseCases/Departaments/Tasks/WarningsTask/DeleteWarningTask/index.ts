
import { TaskDepartamentRepository } from "../../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { DeleteWarningTaskController } from "./DeleteWarningTaskController";
import { DeleteWarningTaskUseCase } from "./DeleteWarningTaskUseCase";

const warningTaskRepository = new WarningTaskRepository()
const taskDepartamentRepository = new TaskDepartamentRepository()
const deleteWarningTaskUseCase = new  DeleteWarningTaskUseCase(warningTaskRepository,taskDepartamentRepository)
const deletedWarnigTaskController = new DeleteWarningTaskController(deleteWarningTaskUseCase)
export{deletedWarnigTaskController}
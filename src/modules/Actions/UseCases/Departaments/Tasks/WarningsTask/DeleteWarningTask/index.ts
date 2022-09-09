
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { DeleteWarningTaskController } from "./DeleteWarningTaskController";
import { DeleteWarningTaskUseCase } from "./DeleteWarningTaskUseCase";

const warningTaskRepository = new WarningTaskRepository()
const deleteWarningTaskUseCase = new  DeleteWarningTaskUseCase(warningTaskRepository)
const deletedWarnigTaskController = new DeleteWarningTaskController(deleteWarningTaskUseCase)
export{deletedWarnigTaskController}
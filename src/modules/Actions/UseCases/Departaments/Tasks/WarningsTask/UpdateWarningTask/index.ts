
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { UpdateWarningTaskController } from "./updateWarningTaskController";
import { UpdateWarningTaskUseCase } from "./UpdateWarningTaskUseCase";

const warningTaskRepository = new WarningTaskRepository()
const updateWarningTaskUseCase = new UpdateWarningTaskUseCase(warningTaskRepository)
const updateWarningTaskController = new UpdateWarningTaskController(updateWarningTaskUseCase)
export{updateWarningTaskController}
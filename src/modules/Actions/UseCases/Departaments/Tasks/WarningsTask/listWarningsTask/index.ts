
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { ListWarningsTaskController } from "./ListWarningsTaskController";
import { ListWarningsTaskUseCase } from "./ListWarningsTaskUseCase";

const warningsTaskRepository = new WarningTaskRepository()
const listWarnigsTaskUseCase = new ListWarningsTaskUseCase(warningsTaskRepository)
const listWarningsTaskController = new ListWarningsTaskController(listWarnigsTaskUseCase)
export{listWarningsTaskController}
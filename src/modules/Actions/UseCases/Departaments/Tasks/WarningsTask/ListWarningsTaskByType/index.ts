
import { WarningTaskRepository } from "../../../../../infra/typeorm/repositories/WarningsTaskRepository";
import { ListWarningsTaskBySatusController } from "./ListWarningsTaskByTypeController";

import { ListWarningsTaskByTypeUseCase } from "./ListWarningsTaskByTypeUseCase";

const warningsTaskRepository = new WarningTaskRepository()
const listwarnigsTaskUseCase = new ListWarningsTaskByTypeUseCase(warningsTaskRepository)
const listwarningsTaskByTypeController = new ListWarningsTaskBySatusController(listwarnigsTaskUseCase)
export{listwarningsTaskByTypeController}
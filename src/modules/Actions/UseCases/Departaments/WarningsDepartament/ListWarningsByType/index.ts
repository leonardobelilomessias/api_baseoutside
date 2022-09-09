import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { ListWarningsActionBySatusController } from "./ListWarningsActionByTypeController";

import { ListWarningsActionByTypeUseCase } from "./ListWarningsActionByTypeUseCase";

const warningsActionRepository = new WarningActionRepository()
const listwarnigsActionUseCase = new ListWarningsActionByTypeUseCase(warningsActionRepository)
const listwarnigsActionByTypeController = new ListWarningsActionBySatusController(listwarnigsActionUseCase)
export{listwarnigsActionByTypeController}
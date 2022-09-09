import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { ListWarningsActionBySatusController } from "./ListWarningsActionByStatusController";

import { ListWarningsActionByStatusUseCase } from "./ListWarningsActionByStatusUseCase";

const warningsActionRepository = new WarningActionRepository()
const listwarnigsActionUseCase = new ListWarningsActionByStatusUseCase(warningsActionRepository)
const listwarnigsActionByStateController = new ListWarningsActionBySatusController(listwarnigsActionUseCase)
export{listwarnigsActionByStateController}
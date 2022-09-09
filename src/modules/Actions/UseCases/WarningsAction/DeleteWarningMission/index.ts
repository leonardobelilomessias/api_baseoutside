import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { DeleteWarningActionController } from "./DeleteWarningActionController";
import { DeleteWarningActionUseCase } from "./DeleteWarningActionUseCase";

const warningActionRepository = new WarningActionRepository()
const deleteWarningActionUseCase = new  DeleteWarningActionUseCase(warningActionRepository)
const deletedWarnigActionController = new DeleteWarningActionController(deleteWarningActionUseCase)
export{deletedWarnigActionController}
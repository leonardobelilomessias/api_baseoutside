import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { CancelActionController } from "./CancelActionController";
import { CancelActionUseCase } from "./CancelActionUseCase";

const actionRepository = new ActionRepository()
const canceledActionUseCase = new CancelActionUseCase(actionRepository)
const cancelActionController = new CancelActionController(canceledActionUseCase)

export {cancelActionController}

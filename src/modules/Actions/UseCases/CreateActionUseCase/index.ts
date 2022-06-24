import { ActionRepository } from "../../ActionsRepository/ActionRepository";
import { CreateActionController } from "./CreateActionController";
import { CreateActionUseCase } from "./CreateActionUseCase";

const actionRepository = new ActionRepository()
const createActionUseCase = new CreateActionUseCase(actionRepository)
const createActionController = new CreateActionController(createActionUseCase)

export { createActionController}
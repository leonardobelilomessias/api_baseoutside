import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { ListActionController } from "./ListActionController";
import { ListActionUseCase } from "./ListActionUseCase";

const actionRepository = new ActionRepository()
const listActionUseCase = new ListActionUseCase(actionRepository)
const listActionController = new ListActionController(listActionUseCase)

export {listActionController}
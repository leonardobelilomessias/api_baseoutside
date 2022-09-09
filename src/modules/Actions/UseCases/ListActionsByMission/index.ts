import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { ListActionByMissionController } from "./ListActionByMissionController";
import { ListActionByMissionUseCase } from "./ListActionByMissionUseCase";

const actionRepository = new ActionRepository()
const listActionByMissionUseCase = new ListActionByMissionUseCase(actionRepository)
const listActionByMissionController = new ListActionByMissionController(listActionByMissionUseCase)
export{listActionByMissionController}
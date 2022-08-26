import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository";
import { FindActionByLocalController } from "./FindActionByLocalcontroller";
import { FindActionByLocalUseCase } from "./FindActionByLocalUseCase";

const actionRepository = new ActionRepository()
const findActionByLocalUseCase = new FindActionByLocalUseCase(actionRepository)
const findActionByLocalController = new  FindActionByLocalController(findActionByLocalUseCase)

export{ findActionByLocalController}
import { DeactivateAgentController } from "../../../agents/UseCases/DeactivateAgent/DeactivateAgentController";
import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty";
import { DeactivateMissionUseCase } from "./DeactiveMissionUseCase";

const missionRepository = new MissionRepository()
const deactivateMissionUseCase = new DeactivateMissionUseCase(missionRepository)
const deactivateMisionController = new DeactivateAgentController(deactivateMissionUseCase)
export{deactivateMisionController}
import { DeactivateAgentController } from "../../../Agents/UseCases/DeactivateAgent/DeactivateAgentController";
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { DeactivateMissionUseCase } from "./DeactiveMissionUseCase";
import {DeactiveMissionController } from "./DeactiveMissionController";

export default()=>{
    
    const missionRepository = new MissionRepository()
    const deactivateMissionUseCase = new DeactivateMissionUseCase(missionRepository)
    const deactivateMisionController = new DeactiveMissionController(deactivateMissionUseCase)
    return deactivateMisionController
}
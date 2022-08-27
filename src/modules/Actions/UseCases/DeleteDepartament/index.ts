import { DeleteAgentMissionController } from "../../../Missions/UseCases/DeleteColabMission/DeleteAgentMissionController";
import { DepartamentRepository } from "../../infra/typeorm/repositories/DepartamentRepository";
import { DeleteDepartamentController } from "./DeleteDepartamentController";
import { DeleteDepartamentUseCase } from "./DeleteDepartamentUseCase";

const departamentRepository = new  DepartamentRepository()
const deleteDepartamentUseCase = new DeleteDepartamentUseCase(departamentRepository)
const deleteDepartamentController = new DeleteDepartamentController(deleteDepartamentUseCase)

export{deleteDepartamentController}
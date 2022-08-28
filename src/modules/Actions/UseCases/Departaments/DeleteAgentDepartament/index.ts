import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { DeleteAgentDepartamentController } from "./DeleteAgentDepartamentController";
import { DeleteAgentDepartamentUseCase } from "./DeleteAgentDepartamentUseCase";

const departamentRepository = new DepartamentRepository()
const deleteAgentDepartamentUseCase = new DeleteAgentDepartamentUseCase(departamentRepository)
const deleteAgentDepartamentController = new DeleteAgentDepartamentController(deleteAgentDepartamentUseCase)

export{deleteAgentDepartamentController}
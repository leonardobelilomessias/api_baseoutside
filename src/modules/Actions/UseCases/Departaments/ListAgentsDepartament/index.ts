import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { ListAgentsDepartamentController } from "./ListAgentsDepartamentController";
import { ListAgentsDepartamentUseCase } from "./ListAgentsDepartamentUseCase";

const departamentRepository = new DepartamentRepository()
const listAgentsDepartamentUseCase = new ListAgentsDepartamentUseCase(departamentRepository)
const listAgentsDepartmentController = new ListAgentsDepartamentController(listAgentsDepartamentUseCase)

export{listAgentsDepartmentController}
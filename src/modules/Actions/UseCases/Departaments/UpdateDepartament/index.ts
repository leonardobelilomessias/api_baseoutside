import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { UpdateDepartamentController } from "./UpdateDepartamentController";
import { UpdateDepartamentUseCase } from "./UpdateDepartamentUseCase";

const departamentRepository = new DepartamentRepository()
const updateDepartamentUseCase = new UpdateDepartamentUseCase(departamentRepository)
const updateDepartamentController = new UpdateDepartamentController(updateDepartamentUseCase)
export{updateDepartamentController}

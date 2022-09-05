import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository"
import { CreateDepartamentController } from "./CreateDepartamentController"
import { CreateDepartamentUseCase } from "./CreateDepartamentUseCase"

const departamentRepository = new DepartamentRepository()
const createDepartamentUseCase = new CreateDepartamentUseCase(departamentRepository)
const createDepartamentController = new CreateDepartamentController(createDepartamentUseCase)

export{createDepartamentController}
import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { ListDepartamentsController } from "./ListDepartamentsController";
import { ListDepartamentsUseCase } from "./ListDepartamentsUseCase";

const departamentRepository = new DepartamentRepository()
const listDepartamentUseCase = new ListDepartamentsUseCase(departamentRepository)
const listDepartamentController = new ListDepartamentsController(listDepartamentUseCase)

export{listDepartamentController}
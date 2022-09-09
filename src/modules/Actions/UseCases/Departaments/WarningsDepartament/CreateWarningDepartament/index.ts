
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { CreaterWarningDepartamentController } from "./CreateWarningDepartamentController";
import { CreateWarningDepartamentUseCase } from "./CreateWarningDepartamentUseCase";

const warningDepartamentRepository = new WarningDepartamentRepository()
const createWarningDepartamentUseCase = new CreateWarningDepartamentUseCase(warningDepartamentRepository)
const createWarningDepartamentController = new CreaterWarningDepartamentController(createWarningDepartamentUseCase)
export{createWarningDepartamentController}
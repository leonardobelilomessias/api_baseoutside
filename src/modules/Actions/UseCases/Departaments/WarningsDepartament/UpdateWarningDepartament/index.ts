
import { DepartamentRepository } from "../../../../infra/typeorm/repositories/DepartamentRepository";
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { UpdateWarningDepartamentController } from "./updateWarningDepartamentController";
import { UpdateWarningDepartamentUseCase } from "./UpdateWarningDepartamentUseCase";

const warningDepartamentRepository = new WarningDepartamentRepository()
const departamentRepository = new DepartamentRepository()
const updateWarningDepartamentUseCase = new UpdateWarningDepartamentUseCase(warningDepartamentRepository,departamentRepository)
const updateWarningDepartamentController = new UpdateWarningDepartamentController(updateWarningDepartamentUseCase)
export{updateWarningDepartamentController}
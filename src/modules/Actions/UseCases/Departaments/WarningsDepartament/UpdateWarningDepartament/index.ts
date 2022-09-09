
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { UpdateWarningDepartamentController } from "./updateWarningDepartamentController";
import { UpdateWarningDepartamentUseCase } from "./UpdateWarningDepartamentUseCase";

const warningDepartamentRepository = new WarningDepartamentRepository()
const updateWarningDepartamentUseCase = new UpdateWarningDepartamentUseCase(warningDepartamentRepository)
const updateWarningDepartamentController = new UpdateWarningDepartamentController(updateWarningDepartamentUseCase)
export{updateWarningDepartamentController}
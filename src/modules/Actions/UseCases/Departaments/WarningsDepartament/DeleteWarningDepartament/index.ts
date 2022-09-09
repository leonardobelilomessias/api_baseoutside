
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { DeleteWarningDepartamentController } from "./DeleteWarningDepartamentController";
import { DeleteWarningDepartamentUseCase } from "./DeleteWarningDepartamentUseCase";

const warningDepartamentRepository = new WarningDepartamentRepository()
const deleteWarningDepartamentUseCase = new  DeleteWarningDepartamentUseCase(warningDepartamentRepository)
const deletedWarnigDepartamentController = new DeleteWarningDepartamentController(deleteWarningDepartamentUseCase)
export{deletedWarnigDepartamentController}
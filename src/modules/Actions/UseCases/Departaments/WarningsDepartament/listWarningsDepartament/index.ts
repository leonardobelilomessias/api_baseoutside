
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { ListWarningsDepartamentController } from "./ListWarningsDepartamentController";
import { ListWarningsDepartamentUseCase } from "./ListWarningsDepartamentUseCase";

const warningsDepartamentRepository = new WarningDepartamentRepository()
const listWarnigsDepartamentUseCase = new ListWarningsDepartamentUseCase(warningsDepartamentRepository)
const listWarningsDepartamentController = new ListWarningsDepartamentController(listWarnigsDepartamentUseCase)
export{listWarningsDepartamentController}

import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { ListWarningsDepartamentBySatusController } from "./ListWarningsDepartamentByStatusController";

import { ListWarningsDepartamentByStatusUseCase } from "./ListWarningsDepartamentByStatusUseCase";

export default ()=>{
    
    const warningsDepartamentRepository = new WarningDepartamentRepository()
    const listwarnigsDepartamentUseCase = new ListWarningsDepartamentByStatusUseCase(warningsDepartamentRepository)
    const listWarningsDepartamentByStateController = new ListWarningsDepartamentBySatusController(listwarnigsDepartamentUseCase)
    return listWarningsDepartamentByStateController
}
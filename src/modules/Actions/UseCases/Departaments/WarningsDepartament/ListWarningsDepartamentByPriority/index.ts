
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { ListWarningsDepartamentBySatusController } from "./ListWarningsDepartamentByPriorityController";

import { ListWarningsDepartamentByPriorityUseCase } from "./ListWarningsDepartamentByPriorityUseCase";

export default ()=>{
    
    const warningsDepartamentRepository = new WarningDepartamentRepository()
    const listwarnigsDepartamentUseCase = new ListWarningsDepartamentByPriorityUseCase(warningsDepartamentRepository)
    const listWarningsDepartamentByPriorityController = new ListWarningsDepartamentBySatusController(listwarnigsDepartamentUseCase)
    return listWarningsDepartamentByPriorityController
}
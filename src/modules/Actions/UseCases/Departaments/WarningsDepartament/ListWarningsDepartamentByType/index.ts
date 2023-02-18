
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { ListWarningsDepartamentBySatusController } from "./ListWarningsDepartamentByTypeController";

import { ListWarningsDepartamentByTypeUseCase } from "./ListWarningsDepartamentByTypeUseCase";

export default ()=>{
    
    const warningsDepartamentRepository = new WarningDepartamentRepository()
    const listwarnigsDepartamentUseCase = new ListWarningsDepartamentByTypeUseCase(warningsDepartamentRepository)
    const listwarningsDepartamentByTypeController = new ListWarningsDepartamentBySatusController(listwarnigsDepartamentUseCase)
    return listwarningsDepartamentByTypeController
}
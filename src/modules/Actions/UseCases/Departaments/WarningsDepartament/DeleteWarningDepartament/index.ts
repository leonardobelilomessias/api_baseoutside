
import { DepartamentRepository } from "../../../../infra/typeorm/repositories/DepartamentRepository";
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { DeleteWarningDepartamentController } from "./DeleteWarningDepartamentController";
import { DeleteWarningDepartamentUseCase } from "./DeleteWarningDepartamentUseCase";

export default ()=>{
    
    const warningDepartamentRepository = new WarningDepartamentRepository()
    const departamentRepository = new DepartamentRepository()
    const deleteWarningDepartamentUseCase = new  DeleteWarningDepartamentUseCase(warningDepartamentRepository,departamentRepository)
    const deletedWarnigDepartamentController = new DeleteWarningDepartamentController(deleteWarningDepartamentUseCase)
    return deletedWarnigDepartamentController
}
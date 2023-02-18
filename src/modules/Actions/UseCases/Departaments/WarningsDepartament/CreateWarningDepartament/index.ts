
import { DepartamentRepository } from "../../../../infra/typeorm/repositories/DepartamentRepository";
import { WarningDepartamentRepository } from "../../../../infra/typeorm/repositories/WarningsDepartamentRepository";
import { CreaterWarningDepartamentController } from "./CreateWarningDepartamentController";
import { CreateWarningDepartamentUseCase } from "./CreateWarningDepartamentUseCase";

export default ()=>{
    
    const warningDepartamentRepository = new WarningDepartamentRepository()
    const departamentRepository = new DepartamentRepository()
    const createWarningDepartamentUseCase = new CreateWarningDepartamentUseCase(warningDepartamentRepository,departamentRepository)
    const createWarningDepartamentController = new CreaterWarningDepartamentController(createWarningDepartamentUseCase)
    return createWarningDepartamentController
}
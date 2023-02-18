import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { UpdateDepartamentController } from "./UpdateDepartamentController";
import { UpdateDepartamentUseCase } from "./UpdateDepartamentUseCase";

export default ()=>{
    
    const departamentRepository = new DepartamentRepository()
    const updateDepartamentUseCase = new UpdateDepartamentUseCase(departamentRepository)
    const updateDepartamentController = new UpdateDepartamentController(updateDepartamentUseCase)
    return updateDepartamentController
}

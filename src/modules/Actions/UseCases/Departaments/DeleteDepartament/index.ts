import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { DeleteDepartamentController } from "./DeleteDepartamentController";
import { DeleteDepartamentUseCase } from "./DeleteDepartamentUseCase";

export default ()=>{
    
    const departamentRepository = new  DepartamentRepository()
    const deleteDepartamentUseCase = new DeleteDepartamentUseCase(departamentRepository)
    const deleteDepartamentController = new DeleteDepartamentController(deleteDepartamentUseCase)
    return deleteDepartamentController
}
import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { ListAgentsDepartamentController } from "./ListAgentsDepartamentController";
import { ListAgentsDepartamentUseCase } from "./ListAgentsDepartamentUseCase";

export default ()=>{
    
    const departamentRepository = new DepartamentRepository()
    const listAgentsDepartamentUseCase = new ListAgentsDepartamentUseCase(departamentRepository)
    const listAgentsDepartmentController = new ListAgentsDepartamentController(listAgentsDepartamentUseCase)
    return listAgentsDepartmentController
}
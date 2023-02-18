import { DepartamentRepository } from "../../../infra/typeorm/repositories/DepartamentRepository";
import { CreateAgentDepartamentController } from "./CreateAgentDepartamentController";
import { CreateAgentDepartamentUseCase } from "./CreateAgentDepartamentuseCase";

export default ()=>{
    
    const departamentRepository = new DepartamentRepository()
    const createAgentDepartametUseCase = new CreateAgentDepartamentUseCase(departamentRepository)
    const createAgentDepartamentController = new CreateAgentDepartamentController(createAgentDepartametUseCase)
    
    return createAgentDepartamentController
}
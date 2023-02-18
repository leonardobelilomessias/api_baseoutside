import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { CreaterWarningActionController } from "./CreateWarningActionController";
import { CreateWarningActionUseCase } from "./CreateWarningActionUseCase";

export default ()=>{
    
    const warningActionRepository = new WarningActionRepository()
    const createWarningActionUseCase = new CreateWarningActionUseCase(warningActionRepository)
    const createWarningActionController = new CreaterWarningActionController(createWarningActionUseCase)
    return createWarningActionController
}
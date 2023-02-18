import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { ListWarningsActionController } from "./ListWarningsActionController";
import { ListWarningsActionUseCase } from "./ListWarningsActionUseCase";

export default ()=>{
    
    const warningsActionRepository = new WarningActionRepository()
    const listWarnigsActionUseCase = new ListWarningsActionUseCase(warningsActionRepository)
    const listWarnigsActionController = new ListWarningsActionController(listWarnigsActionUseCase)
    return listWarnigsActionController
}
import { WarningActionRepository } from "../../../infra/typeorm/repositories/WarningsActionRepository";
import { UpdateWarningActionController } from "./updateWarningActionController";
import { UpdateWarningActionUseCase } from "./UpdateWarningActionUseCase";

export default ()=>{
    
    const warningActionRepository = new WarningActionRepository()
    const updateWarningActionUseCase = new UpdateWarningActionUseCase(warningActionRepository)
    const updateWarningActionController = new UpdateWarningActionController(updateWarningActionUseCase)
    return updateWarningActionController
}
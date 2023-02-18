import { CreateActionController } from "../../../Actions/UseCases/CreateAction/CreateActionController";
import { AdminMissionRepository } from "../../infra/typeorm/repositories/AdminMissionRepository";
import { CreateAdminMissionController } from "./CreateAdminMissionController";
import { CreateAdminMissionUseCase } from "./CreateAdminMissionUseCase";
export default()=>{
    
    const adminMissionRepository = new AdminMissionRepository()
    const createAdminMissionUseCase = new CreateAdminMissionUseCase(adminMissionRepository)
    const createAdminMissionController = new CreateAdminMissionController(createAdminMissionUseCase)
    return createAdminMissionController
}
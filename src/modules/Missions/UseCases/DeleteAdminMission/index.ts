import { AdminMissionRepository } from "../../infra/typeorm/repositories/AdminMissionRepository";
import { DeleteAdminController } from "./DeleteAdminMissionController";
import { DeleteAdminMissionUseCase } from "./DeleteAdminMissionUseCase";

export default()=>{
    
    const adminMissionRepository = new AdminMissionRepository()
    const deleteAdminMissionUseCase = new DeleteAdminMissionUseCase(adminMissionRepository)
    const deleteAdminMissionController = new DeleteAdminController(deleteAdminMissionUseCase)
    return deleteAdminMissionController
}
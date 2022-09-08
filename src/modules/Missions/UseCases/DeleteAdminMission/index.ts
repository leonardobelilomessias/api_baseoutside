import { AdminMissionRepository } from "../../infra/typeorm/repositories/AdminMissionRepository";
import { DeleteAdminController } from "./DeleteAdminMissionController";
import { DeleteAdminMissionUseCase } from "./DeleteAdminMissionUseCase";

const adminMissionRepository = new AdminMissionRepository()
const deleteAdminMissionUseCase = new DeleteAdminMissionUseCase(adminMissionRepository)
const deleteAdminMissionController = new DeleteAdminController(deleteAdminMissionUseCase)
export{deleteAdminMissionController}
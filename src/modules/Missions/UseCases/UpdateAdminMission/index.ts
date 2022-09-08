import { AdminMissionRepository } from "../../infra/typeorm/repositories/AdminMissionRepository";
import { UpdateAdminMissionContrller } from "./UpdateAdminMissionController";
import { UpdateAdminMissionUseCase } from "./UpdateAdminMissionUseCase";

const adminMissionRepository = new AdminMissionRepository()
const updateAdminMissionUseCase = new UpdateAdminMissionUseCase(adminMissionRepository)
const updateAdminMissionController = new UpdateAdminMissionContrller(updateAdminMissionUseCase)
export{updateAdminMissionController}
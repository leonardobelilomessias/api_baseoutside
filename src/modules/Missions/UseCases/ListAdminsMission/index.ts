import { AdminMissionRepository } from "../../infra/typeorm/repositories/AdminMissionRepository";
import { ListAdminsMissionController } from "./ListAdminsMissionController";
import { ListAdminsMissionUseCase } from "./ListAdminsMissionUseCase";

const adminMissionRepository = new AdminMissionRepository()
const listAdminsMissionUseCase = new ListAdminsMissionUseCase(adminMissionRepository)
const listAdminsMissionControler = new ListAdminsMissionController(listAdminsMissionUseCase)
export{ listAdminsMissionControler}
import { AppError } from "../../../../shared/errors/AppError"
import { AdminMissionRepositoryInMemory } from "../../RepositoryInMemory/AdminMissionRepositoryInMemory"
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { CreateAdminMissionUseCase } from "./CreateAdminMissionUseCase"

let createAdminMissionUseCase: CreateAdminMissionUseCase
let adminMissionRepositoryInMemory: AdminMissionRepositoryInMemory

describe("Create Admin Mission", () => {
  beforeEach(() => {
    adminMissionRepositoryInMemory = new AdminMissionRepositoryInMemory()
    createAdminMissionUseCase = new CreateAdminMissionUseCase(adminMissionRepositoryInMemory)
  })
  it("Shouldn'd be able create a admin mission with invalid values", async () => {
    expect(async () => {
      await createAdminMissionUseCase.execute({id_mission:'',id_agent:'',type:''})
  }).rejects.toBeInstanceOf(AppError)
 }) 
})
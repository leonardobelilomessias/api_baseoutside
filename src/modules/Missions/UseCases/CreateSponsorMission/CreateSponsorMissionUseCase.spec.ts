import { AppError } from "../../../../shared/errors/AppError"
import { SponsorMissionRepositoryInMemory } from "../../RepositoryInMemory/SponsorMissionRepositoryInMemory"
import { CreateSponsorMissionUseCase } from "./CreateSponsorMissionUseCase"

let sponsorMissionRepository: SponsorMissionRepositoryInMemory
let createSponsorMissionUseCase:CreateSponsorMissionUseCase
describe("Create Sponsor Mission", () => {
  beforeEach(() => {
    sponsorMissionRepository = new SponsorMissionRepositoryInMemory()
    createSponsorMissionUseCase = new CreateSponsorMissionUseCase(sponsorMissionRepository)
  })
  it("Shoundn't be able create a sponsor mission with undefined value", async () => {
    expect(async () => {
      await createSponsorMissionUseCase.execute({id_mission:"",id_sponsor:"",type:0,sponsor_private:false,mission_private:false})
   }).rejects.toBeInstanceOf(AppError)
  })

  it("shouldn't be able create a sponsormission with invalid id ", async () => {
    const newSponsorAgent = await createSponsorMissionUseCase.execute({id_mission:"00",id_sponsor:"00",type:0,sponsor_private:false,mission_private:false})
    expect(newSponsorAgent.id_sponsor).toBe("00")  
  })
})
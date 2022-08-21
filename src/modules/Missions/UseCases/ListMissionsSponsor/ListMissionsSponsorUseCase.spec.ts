import { AppError } from "../../../../shared/errors/AppError"
import { SponsorMissionRepositoryInMemory } from "../../RepositoryInMemory/SponsorMissionRepositoryInMemory"
import { ListMissionsSponsorUsecase } from "./ListMissionsSponsorUseCase"

let sponsorsMissionRepositoryInMemory:SponsorMissionRepositoryInMemory
let listMissionsSponsorUseCase:ListMissionsSponsorUsecase
describe("List missions Sponsors",()=>{
  beforeEach(()=>{
    sponsorsMissionRepositoryInMemory = new SponsorMissionRepositoryInMemory()
    listMissionsSponsorUseCase = new ListMissionsSponsorUsecase(sponsorsMissionRepositoryInMemory)
  })
  it("Shouln't be able list missions of a invalid value sponsor",async()=>{
    expect(async()=>{
      await listMissionsSponsorUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Sould be able list sponsors mission",async()=>{
    const createSponsorMission = await sponsorsMissionRepositoryInMemory.create({id_mission:'01',id_sponsor:'02',mission_private:false,sponsor_private:false,type:"as"})
    const createSponsorMission2 = await sponsorsMissionRepositoryInMemory.create({id_mission:'02',id_sponsor:'02',mission_private:false,sponsor_private:false,type:"as"})
    const sponsorsMission = await listMissionsSponsorUseCase.execute("02")
    expect(sponsorsMission).toEqual([createSponsorMission,createSponsorMission2])
  })
})
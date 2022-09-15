import { AppError } from "../../../../shared/errors/AppError";
import { SponsorMissionRepositoryInMemory } from "../../RepositoryInMemory/SponsorMissionRepositoryInMemory";
import { ListSponsorsMissionUseCase } from "./ListSponsorsMissionUseCase";

let sponsorsMissionRepositoryInMemory :SponsorMissionRepositoryInMemory
let listSponsorsMissionUseCase:ListSponsorsMissionUseCase

describe("List Sponsors Mission",()=>{
  beforeEach(()=>{
    sponsorsMissionRepositoryInMemory = new  SponsorMissionRepositoryInMemory()
    listSponsorsMissionUseCase = new ListSponsorsMissionUseCase(sponsorsMissionRepositoryInMemory)
  })

  it("Shouldn't be able list sponsors with undefined id",async()=>{
    expect(async()=>{
    await listSponsorsMissionUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Sould be able list sponsors mission",async()=>{
    const createSponsorMission = await sponsorsMissionRepositoryInMemory.create({id_mission:'01',id_sponsor:'02',mission_private:false,sponsor_private:false,type:"as"})
    const createSponsorMission2 = await sponsorsMissionRepositoryInMemory.create({id_mission:'01',id_sponsor:'03',mission_private:false,sponsor_private:false,type:"as"})
    const sponsorsMission = await listSponsorsMissionUseCase.execute("01")
    expect(sponsorsMission).toEqual([createSponsorMission,createSponsorMission2])
  })
})
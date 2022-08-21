import { AppError } from "../../../../shared/errors/AppError"
import { SponsorAgentRepositoryInMemory } from "../../../Agents/RepositoryInMemory/SponsorAgentRepositoryInMemory"
import { SponsorMissionRepositoryInMemory } from "../../RepositoryInMemory/SponsorMissionRepositoryInMemory"
import { DeleteSponsorMissionUseCase } from "./DeleteSponsorMissionUseCase"

let sponsorRepositoryInMemory:SponsorMissionRepositoryInMemory
let deletedSponsorMissionUseCase:DeleteSponsorMissionUseCase

describe("Delete sponsor mission",()=>{
  beforeEach(()=>{
    sponsorRepositoryInMemory = new SponsorMissionRepositoryInMemory()
    deletedSponsorMissionUseCase =  new DeleteSponsorMissionUseCase(sponsorRepositoryInMemory)
  })
  it("Shouldn't be able delete a sponso with invalid values",async()=>{
    expect(async()=>{
      await deletedSponsorMissionUseCase.execute({id_mission:"",id_sponsor:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able delete a sponsor mission",async()=>{
    const createSponsorMission = await sponsorRepositoryInMemory.create({id_mission:'01',id_sponsor:'02',mission_private:false,sponsor_private:false,type:"as"})
    const deleteSponsorMission = await deletedSponsorMissionUseCase.execute({id_sponsor:createSponsorMission.id_sponsor,id_mission:createSponsorMission.id_mission})
    expect(deleteSponsorMission.id).toEqual(createSponsorMission.id)
  })

})
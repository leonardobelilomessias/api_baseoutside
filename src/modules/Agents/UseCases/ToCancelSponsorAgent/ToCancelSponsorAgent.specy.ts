import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { SponsorAgentRepositoryInMemory } from "../../RepositoryInMemory/SponsorAgentRepositoryInMemory"
import { ToCancelSponsorAgentUseCase } from "./ToCancelSponsorAgentUseCase"

let sponsorAgentRepositoryInMemory: ISponsorAgentRepository
let agentInMemoryRepository: IAgentRepository
let toCancelSponsorAgent:ToCancelSponsorAgentUseCase

describe("To Cancel SponsorAgent", () => {
  beforeEach(() => {
    sponsorAgentRepositoryInMemory = new SponsorAgentRepositoryInMemory()
    agentInMemoryRepository = new AgentInMemoryRepository()
    toCancelSponsorAgent = new ToCancelSponsorAgentUseCase(sponsorAgentRepositoryInMemory)
  })
  it("Should be able to cancel a sponsor agent",async  () => {
   const agent1 = await agentInMemoryRepository.create({name:"agent1",email:"agent1@email",password:"xxx",user_name:"neoagent"})
    const agent2 = await agentInMemoryRepository.create({ name: "agent2", email: "agent2@email", password: "xxx",user_name:"neoagent" })
    const newSponsor =await  sponsorAgentRepositoryInMemory.create({id_agent:agent1.id,id_sponsor:agent2.id,type:'sponsor', agent_private:false, sponsor_private:false})
    const canceledSponsor = await toCancelSponsorAgent.execute({ id_agent: agent1, id_sponsor: agent2 })
    expect(newSponsor).toEqual(canceledSponsor)
  })
})
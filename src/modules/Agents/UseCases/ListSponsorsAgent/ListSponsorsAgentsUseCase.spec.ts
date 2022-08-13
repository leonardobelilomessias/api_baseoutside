import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"
import { SponsorAgentRepositoryInMemory } from "../../RepositoryInMemory/SponsorAgentRepositoryInMemory"
import { ListSponsorsAgentsUseCase } from "./ListSponsorsAgentsUseCase"

let sponsorAgentRepositoryInMemory: ISponsorAgentRepository
let listSponsorsAgentsUseCase:ListSponsorsAgentsUseCase
describe("List Sponsors Agent", () => {
  beforeEach(() => {
    sponsorAgentRepositoryInMemory = new SponsorAgentRepositoryInMemory()
    listSponsorsAgentsUseCase = new ListSponsorsAgentsUseCase(sponsorAgentRepositoryInMemory)
  })
  it("should be able list sponsors agent", async () => {
    const newSponsor = await sponsorAgentRepositoryInMemory.create({ id_agent:"01",id_sponsor:"02",type:"sponsor",agent_private:false,sponsor_private:false})
    const sponsorSgent = await listSponsorsAgentsUseCase.execute('01')

    expect(sponsorSgent[0].id_sponsor).toBe('02')

  })
})
import { AppError } from "../../../../shared/errors/AppError"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { SponsorAgentRepositoryInMemory } from "../../RepositoryInMemory/SponsorAgentRepositoryInMemory"
import { CreateNewSponsorAgentUseCase } from "./CreateNewSponsorAgentUseCase"

let sponsorRespository: SponsorAgentRepositoryInMemory
let createNewSponsorAgentUseCase: CreateNewSponsorAgentUseCase
let agentRepository:IAgentRepository
describe("Create new sponsor", () => {
  beforeEach(() => {
    sponsorRespository = new SponsorAgentRepositoryInMemory()
    agentRepository = new AgentInMemoryRepository()
    createNewSponsorAgentUseCase = new CreateNewSponsorAgentUseCase(sponsorRespository, agentRepository)
  })
  it("Shoundn't be able create a new sponsor to agent with invalid filds ", async () => {
    expect(async() => {
      const newSponsor = {
        id_agent: '',
        id_sponsor: '',
        agent_private: false,
        sponsor_private: false,
        type: "current",
        id_agent_token:"01"
      };
      const sponsor = await createNewSponsorAgentUseCase.execute(newSponsor)
   }).rejects.toBeInstanceOf(AppError)
  })
  it("Shold be able create a new sponsor to agent  ", async () => {
  
    const agent = await agentRepository.create({ name: "agent", email: "agent@email", password: '123', user_name:'neoagent' })
    const sponsorAgent = await agentRepository.create({ name: "sponsor", email: "sponsor@email", password: '123' ,user_name:'neoagent'})
   
    const allAgents = await  agentRepository.listAll()

    const newSponsor = {
    id_agent: agent.id,
    id_sponsor: sponsorAgent.id,
    agent_private: false,
    sponsor_private: false,
    type: "current",
    id_agent_token:"01"
  };
    const sponsor = await createNewSponsorAgentUseCase.execute(newSponsor)

    expect(sponsor).toHaveProperty("id")
  })
  it("Shoundn't be able create a new sponsor to agent with no existents agents", async () => {

          expect(async ()=>{const newSponsor = {
            id_agent: '123',
            id_sponsor: '321',
            agent_private: false,
            sponsor_private: false,
            type: "current",
            id_agent_token:"123"
          };
          const sponsor = await createNewSponsorAgentUseCase.execute(newSponsor)
            
          }).rejects.toBeInstanceOf(AppError)

     
      })
})
import { AppError } from "../../../../shared/errors/AppError"
import { AgentActionRepositoryInMemory } from "../../repositoryInMemory/AgentActionRepositoryInMemory"
import { CancelAgentActionUseCase } from "./CancelAgentActionUseCase"

let agentActionRepositoryInMemory:AgentActionRepositoryInMemory
let cancelAgentActionUseCase:CancelAgentActionUseCase

describe("Cancel agent action",()=>{
  beforeEach(()=>{
    agentActionRepositoryInMemory = new AgentActionRepositoryInMemory()
    cancelAgentActionUseCase = new CancelAgentActionUseCase(agentActionRepositoryInMemory)

  })
  it("Shouldn't be able cancel a agent action with undefined value.",async()=>{
    expect(async()=>{
      await cancelAgentActionUseCase.execute({id_action:"",id_agent:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able cancel a agent action",async()=>{
    const agentAction = await agentActionRepositoryInMemory.create({id_action:"01",id_agent:"02"})
    const cancelAgentAction = await cancelAgentActionUseCase.execute({id_agent:agentAction.id_agent, id_action:agentAction.id_action})
    const listAgents = await agentActionRepositoryInMemory.listAgentsAction("02")
    console.log(listAgents)
    expect(listAgents).toEqual([])
  })
})
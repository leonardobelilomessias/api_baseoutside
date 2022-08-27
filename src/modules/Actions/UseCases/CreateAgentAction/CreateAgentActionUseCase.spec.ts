import { AppError } from "../../../../shared/errors/AppError"
import { AgentActionRepositoryInMemory } from "../../repositoryInMemory/AgentActionRepositoryInMemory"
import { CreateAgentActionUseCase } from "./CreateAgentActionUseCase"


let agentActionRepositoryInMemory:AgentActionRepositoryInMemory
let createAgentActionUseCase:CreateAgentActionUseCase

describe("Create Agent Missin",()=>{
  beforeEach(()=>{
    agentActionRepositoryInMemory = new AgentActionRepositoryInMemory()
    createAgentActionUseCase = new CreateAgentActionUseCase(agentActionRepositoryInMemory)
  })
  it("shouldn't be able create agent in mission with undefoned values",async()=>{
    expect(async()=>{
      await createAgentActionUseCase.execute({id_agent:"",id_action:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shouldn't be able create a agent in mission alread exist",async()=>{
    expect(async()=>{
      await createAgentActionUseCase.execute({id_agent:"01",id_action:"02"})
      await createAgentActionUseCase.execute({id_agent:"01",id_action:"02"})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able create agent in action",async()=>{
    const agentAction = await createAgentActionUseCase.execute({id_agent:"01",id_action:"02"})
    expect(agentAction).toHaveProperty("id")
  })
})
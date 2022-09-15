import { AppError } from "../../../../shared/errors/AppError"
import { AgentActionRepositoryInMemory } from "../../repositoryInMemory/AgentActionRepositoryInMemory"
import { ListAgentsActionUseCase } from "./ListAgentsActionUseCase"

let agentActionRepositoryInMemory : AgentActionRepositoryInMemory
let listAgentsActionUseCase:ListAgentsActionUseCase

describe("List agent of action",()=>{
  beforeEach(()=>{
    agentActionRepositoryInMemory = new AgentActionRepositoryInMemory()
    listAgentsActionUseCase = new ListAgentsActionUseCase(agentActionRepositoryInMemory)
  })
  it("Shouldn't be able list agent mission with undefined value of mission",async()=>{
    expect(async()=>{
      await listAgentsActionUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shouldn be able list agents of action ",async()=>{
    const agentAction = await agentActionRepositoryInMemory.create({id_action:"01", id_agent:"02"})
    const AgenstActions = await listAgentsActionUseCase.execute(agentAction.id_action)
    expect(AgenstActions[0].id_action).toEqual(agentAction.id_action)
  })
})
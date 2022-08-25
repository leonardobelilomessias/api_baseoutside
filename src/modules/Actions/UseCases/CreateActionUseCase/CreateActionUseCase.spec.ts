import { AppError } from "../../../../shared/errors/AppError"
import { ActionInMemoryRepository } from "../../repositoryInMemory/ActionInMemoryRepository"
import { CreateActionUseCase } from "./CreateActionUseCase"

let actionRepositoryInMemory:ActionInMemoryRepository
let createActionUseCase:CreateActionUseCase

describe("Create a Action",()=>{
  actionRepositoryInMemory = new ActionInMemoryRepository()
  createActionUseCase = new CreateActionUseCase(actionRepositoryInMemory)
  it("Shouldn't be able create a  a action with invalid values",async()=>{
    expect(async ()=>{
      await createActionUseCase.execute({name:"",description:"",id_mission:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able create a new action",async()=>{
    const action = {name:"NewAction", description:"Description Action",id_mission:"0001"}
    const newAction = await createActionUseCase.execute(action)
    expect(newAction.name).toBe(action.name)
  })
})
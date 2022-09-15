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
    const action = {name:"NewAction", description:"Description Action",id_mission:"0001", date_start:"2023-08-28",date_end:"2023-08-29"}
    const newAction = await createActionUseCase.execute(action)
    expect(newAction.name).toBe(action.name)
  })

  it("Shouldn't be able create a new action with invalid time",async()=>{
    expect(async()=>{
      const action = {name:"NewAction", description:"Description Action",id_mission:"0001", date_stat:"2023-08-20",date_end:"2023-08-20"}
      const newAction = await createActionUseCase.execute(action)
      expect(newAction.name).toBe(action.name)
    }).rejects.toBeInstanceOf(AppError)
  })
  
})
import { AppError } from "../../../../shared/errors/AppError"
import { ActionInMemoryRepository } from "../../repositoryInMemory/ActionInMemoryRepository"
import { CancelActionUseCase } from "./CancelActionUseCase"

let actionRepositoryInMemory:ActionInMemoryRepository
let canceledActionUseCase: CancelActionUseCase

describe("Cancel action",()=>{
  beforeEach(()=>{
    actionRepositoryInMemory = new ActionInMemoryRepository()
    canceledActionUseCase = new CancelActionUseCase(actionRepositoryInMemory)
  })
  it("Shouldn't be able cancel a action with undefined id",async()=>{
    expect(async()=>{
      await canceledActionUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shouldn't be able cancel of not found action",async()=>{
    expect(async()=>{
      await canceledActionUseCase.execute("01")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able cancel a action",async()=>{
    const action = await actionRepositoryInMemory.create({name:"new action",description:"description a action", id_mission:"001"})
    const canceledAction = await canceledActionUseCase.execute(action.id)
    expect(canceledAction).toEqual(action)
  })
  })
import { AppError } from "../../../../shared/errors/AppError"
import { ActionInMemoryRepository } from "../../repositoryInMemory/ActionInMemoryRepository"
import { UpdateActionUseCase } from "./UpdateActionUseCase"

let actionRepositoryInMemory:ActionInMemoryRepository
let updateActionUseCase:UpdateActionUseCase
describe("Update action",()=>{
  beforeEach(()=>{
    actionRepositoryInMemory = new ActionInMemoryRepository()
    updateActionUseCase = new UpdateActionUseCase(actionRepositoryInMemory)
  })
  it("Should'nt be able create update a action with undefined value",async()=>{
    expect(async()=>{
      const action = { id:"", name:"",description:"",value:0,state:0,local:""}
      await updateActionUseCase.execute(action)
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shouldn't be able update a action doesn't found.",async()=>{
    expect(async()=>{
      const action = { id:"011", name:"",description:"",date_start:new Date(""),date_end:new Date(""),value:0,state:0,local:""}
      await updateActionUseCase.execute(action)
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shoud be able update a action",async()=>{
    const action = { name:"newAction",description:"newaction",date_start:"2022-09-15",date_end:"2022-09-01",id_mission:"01",value:0,state:0,local:""}
    const newAction = await  actionRepositoryInMemory.create(action)
     const updatedAction = await updateActionUseCase.execute({ id:String(newAction.id),name:"newAction",description:"newaction",date_start:new Date("2022-09-15"),date_end:new Date("2022-09-01"),state:0,local:"updateLocal"})
    expect(updatedAction.local).toEqual("updateLocal")
  })
})
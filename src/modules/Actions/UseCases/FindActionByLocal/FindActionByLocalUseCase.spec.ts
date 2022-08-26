import { AppError } from "../../../../shared/errors/AppError"
import { ActionInMemoryRepository } from "../../repositoryInMemory/ActionInMemoryRepository"
import { FindActionByLocalUseCase } from "./FindActionByLocalUseCase"


let actionRepositoryInMemory:ActionInMemoryRepository
let findActionByLocalUseCase :FindActionByLocalUseCase
describe("Find action by local",()=>{
  beforeEach(()=>{ 
    actionRepositoryInMemory = new ActionInMemoryRepository()
    findActionByLocalUseCase = new FindActionByLocalUseCase(actionRepositoryInMemory)
  })
  it("Should'nt be able find action with value local invalid",async()=>{
    expect(async()=>{
      await findActionByLocalUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able find a action by name",async()=>{
    const action = {name:"NewAction", description:"Description Action",id_mission:"0001", date_start:"2022-08-20",date_end:"2022-08-20",local:"local action"}
    const newAction = await actionRepositoryInMemory.create(action)
    const foundAction = await findActionByLocalUseCase.execute(action.local)
    expect(foundAction[0]).toEqual(newAction)
  })
})
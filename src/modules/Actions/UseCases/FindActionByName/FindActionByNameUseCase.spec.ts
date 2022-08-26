import { AppError } from "../../../../shared/errors/AppError"
import { ActionInMemoryRepository } from "../../repositoryInMemory/ActionInMemoryRepository"
import { FindActionByNameUseCase } from "./FindActionByNameUseCase"

let actionRepositoryInMemory:ActionInMemoryRepository
let findActionByNameUseCase:FindActionByNameUseCase
describe("Find action by name",()=>{
  beforeEach(()=>{
    actionRepositoryInMemory = new ActionInMemoryRepository()
    findActionByNameUseCase = new FindActionByNameUseCase(actionRepositoryInMemory)
  })
  it("shouldn't be able find action by name undefined",async()=>{
    expect(async()=>{
      await findActionByNameUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able find action by name",async()=>{
    const action = {name:"NewAction", description:"Description Action",id_mission:"0001", date_start:"2022-08-20",date_end:"2022-08-20"}

      const newAction = await actionRepositoryInMemory.create(action)
      const foundAction =  await findActionByNameUseCase.execute(newAction.name)
      expect(foundAction[0]).toEqual(newAction)

  })
})
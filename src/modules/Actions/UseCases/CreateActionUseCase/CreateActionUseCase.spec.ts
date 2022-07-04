import { ActionInMemoryRepository } from "../../ActionsRepository/ActionInMemoryRepository"
import { CreateActionUseCase } from "./CreateActionUseCase"

let actionInMemoryRepository: ActionInMemoryRepository
let createActionUseCase: CreateActionUseCase
beforeEach(() => {
  actionInMemoryRepository = new ActionInMemoryRepository()
  createActionUseCase = new CreateActionUseCase(actionInMemoryRepository)
})
describe("shold be able create a new action", () => {
  it("should be able create a new Action", async () => {
    const action ={ name:"new Action", description:"new Description",date_start:"21",date_end:"12", value:"1235", mission:"teste" }
    const newAction = await createActionUseCase.execute({ name:"new Action", description:"new Description",date_start:"21",date_end:"12", value:123, mission:"teste" })
    expect(newAction).toHaveProperty("id")
  })
})
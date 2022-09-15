import { AppError } from "../../../../../../shared/errors/AppError"
import { TaskDepartamentRepositoryInMemory } from "../../../../repositoryInMemory/TaskDepartamentRepositoryInMemory"
import { ListTasksDepartamentUseCase } from "./ListTasksDepartamentUseCase"

let taskDepartamentRepositoryInMemory :TaskDepartamentRepositoryInMemory
let listTasksDepartamentUseCase:ListTasksDepartamentUseCase
describe("List all tasks Depatament",()=>{
  beforeEach(()=>{
    taskDepartamentRepositoryInMemory = new TaskDepartamentRepositoryInMemory()
    listTasksDepartamentUseCase = new ListTasksDepartamentUseCase(taskDepartamentRepositoryInMemory)
  })
  it("shouldn't be able list tasks with undefined value",async()=>{
    expect(async()=>{
    await listTasksDepartamentUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able list task departament",async()=>{
    const taskDepartament = await taskDepartamentRepositoryInMemory.create({title:"new task",description:"description new task",id_action:"01", id_departament:"02",id_mission:"03"})
    const tasksDepartament = await listTasksDepartamentUseCase.execute("02")
    expect(tasksDepartament[0]).toEqual(taskDepartament)
  })
})
import { AppError } from "../../../../../../shared/errors/AppError"
import { TaskDepartamentRepositoryInMemory } from "../../../../repositoryInMemory/TaskDepartamentRepositoryInMemory"
import { CreateTaskDepartamentUseCase } from "./CreateTaskDepartamentUseCase"

let taskDepartementRepositoryInMeMory:TaskDepartamentRepositoryInMemory
let createTaskDepartamentUseCase:CreateTaskDepartamentUseCase
describe("Create task departament",()=>{
  beforeEach(()=>{
    taskDepartementRepositoryInMeMory = new TaskDepartamentRepositoryInMemory()
    createTaskDepartamentUseCase = new CreateTaskDepartamentUseCase(taskDepartementRepositoryInMeMory)
  })
  it("Shouldn't  be able create a new task with invalid values",async()=>{
    expect(async()=>{
    await createTaskDepartamentUseCase.execute({title:"",description:"",id_action:"", id_departament:"",id_mission:""})

    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able create a task departament",async()=>{

    const taskDepartament = await createTaskDepartamentUseCase.execute({title:"new task",description:"description new task",id_action:"01", id_departament:"02",id_mission:"03"})
    expect(taskDepartament).toHaveProperty("id")
  })
})
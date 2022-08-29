import { TaskDepartamentRepositoryInMemory } from "../../../../repositoryInMemory/TaskDepartamentRepositoryInMemory"
import { DeleteTaskDepartamentUseCase } from "./DeleteTaskDepartamentUseCase"


let taskDepartamentRepositoryInMemory:TaskDepartamentRepositoryInMemory
let deleteTaskDepartamentUseCase:DeleteTaskDepartamentUseCase
describe("Delete Task Departament",()=>{
  beforeEach(()=>{
    taskDepartamentRepositoryInMemory = new TaskDepartamentRepositoryInMemory()
    deleteTaskDepartamentUseCase = new DeleteTaskDepartamentUseCase(taskDepartamentRepositoryInMemory)
  })
  it("Shouldn't be able deleta a task with undefined id.",async()=>{
    expect(async()=>{
      await deleteTaskDepartamentUseCase.execute("")
    })
  })
  it("Should be able deleta a task of departament",async()=>{
    const taskDepartament = await taskDepartamentRepositoryInMemory.create({title:"new task",description:"description new task",id_action:"01", id_departament:"02",id_mission:"03"})
    const deletaTaskDepartament = await deleteTaskDepartamentUseCase.execute(taskDepartament.id)
    expect(deletaTaskDepartament).toEqual(taskDepartament)
  })
})
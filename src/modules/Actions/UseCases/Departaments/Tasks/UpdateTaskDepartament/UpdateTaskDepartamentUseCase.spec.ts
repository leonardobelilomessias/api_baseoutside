import { AppError } from "../../../../../../shared/errors/AppError"
import { TaskDepartamentRepositoryInMemory } from "../../../../repositoryInMemory/TaskDepartamentRepositoryInMemory"
import { UpdateTaskDepartamentUseCase } from "./UpdateTaskDepartamentUseCase"

let taskDepartamentRepositoryInMemory:TaskDepartamentRepositoryInMemory
let updateTaskDepartementUseCase : UpdateTaskDepartamentUseCase
describe("Update task departament",()=>{
  beforeEach(()=>{
    taskDepartamentRepositoryInMemory = new TaskDepartamentRepositoryInMemory()
    updateTaskDepartementUseCase = new UpdateTaskDepartamentUseCase(taskDepartamentRepositoryInMemory)
  })
  it("Shouldn't be able update a task with invalid value required",async()=>{
   expect(async()=>{
    await updateTaskDepartementUseCase.execute({id:"",id_departament:""})
   }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able update a task departament",async()=>{
    const taskDepartament = await taskDepartamentRepositoryInMemory.create({title:"new task",description:"description new task",id_action:"01", id_departament:"02",id_mission:"03"})
    const editedTask = await updateTaskDepartementUseCase.execute({id:taskDepartament.id,id_departament:"02",title:"Update title"})
    expect(editedTask.title).toBe("Update title")
  })
})
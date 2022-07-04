

import { InMemoryTaskRepository } from "../../TasksRepository/InMemoryTaskRepository";
import { TaskRepository } from "../../TasksRepository/TaskRepository";
import { CreateTaskUseCase } from "./CreateTaskUseCase";

let inMemorytaskRepository: InMemoryTaskRepository
let createTaskUseCase: CreateTaskUseCase
describe("Create Task", () => {
  beforeEach(() => {
    inMemorytaskRepository = new InMemoryTaskRepository()
    createTaskUseCase = new CreateTaskUseCase(inMemorytaskRepository)
  })
  it("shold be able create a new task",async () => {
    

    const newTask = {
      title: "newTask",
      description: "new Task description",
      id_mission:'92ab4bac-fbce-11ec-810d-00155da0d8eb'
    }
    const taskCreated = await createTaskUseCase.execute({
      title: "newTask",
      description: "new Task description",
      id_action: '92ab4bac-fbce-11ec-810d-00155da0d8eb'
    })
    console.log(taskCreated)
  expect(taskCreated).toHaveProperty("id")
  })

})

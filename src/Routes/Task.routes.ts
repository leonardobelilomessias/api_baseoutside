
import { Router } from 'express'
import { createTaskController } from '../modules/Task/UseCases/CreateTask'
import { listTaskController } from '../modules/Task/UseCases/ListTask'

const task = Router()

task.post("/", (request, response) => {
  createTaskController.handle(request,response)
})

task.get("/", (request, response) => {
  listTaskController.handle(request,response)
})


export {task}
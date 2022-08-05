
import { Router } from 'express'
import { createTaskController } from '../../../../modules/tasks/UseCases/CreateTask'
import { listTaskController } from '../../../../modules/tasks/UseCases/ListTask'


const task = Router()

task.post("/", (request, response) => {
  createTaskController.handle(request,response)
})

task.get("/", (request, response) => {
  listTaskController.handle(request,response)
})


export {task}
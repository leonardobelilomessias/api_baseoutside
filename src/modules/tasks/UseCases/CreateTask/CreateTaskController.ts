import { Request, Response } from "express"
import { ICreateTask } from "../../repositories/ITaskRepository"

import { CreateTaskUseCase } from "./CreateTaskUseCase"

class CreateTaskController{
  createTaskUseCase: CreateTaskUseCase
  constructor(createTaskUseCase: CreateTaskUseCase) { 
    this.createTaskUseCase = createTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const { title, description, id_action }: ICreateTask = request.body
    const newTask = await this.createTaskUseCase.execute({ title, description, id_action })
    return response.status(201).json(newTask)
  }
}
export {CreateTaskController}
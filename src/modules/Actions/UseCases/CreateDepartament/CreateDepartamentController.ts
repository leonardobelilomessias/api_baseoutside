import { Request, Response } from "express"
import { CreateDepartamentUseCase } from "./CreateDepartamentUseCase"


class CreateDepartamentController{
  private createDepartamentUseCase:CreateDepartamentUseCase
  constructor(createDepartamentUseCase:CreateDepartamentUseCase){
    this.createDepartamentUseCase = createDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id_action, name, description, agents_limit, agents_necessary } = request.body
    const createdDepartament = await this.createDepartamentUseCase.execute({ id_action, name, description, agents_limit, agents_necessary })
    return response.status(200).json(createdDepartament)
  }
}
export{CreateDepartamentController}
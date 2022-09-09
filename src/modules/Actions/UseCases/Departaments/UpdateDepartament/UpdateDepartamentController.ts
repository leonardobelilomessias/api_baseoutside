import { Request, Response } from "express"
import { UpdateDepartamentUseCase } from "./UpdateDepartamentUseCase"


class UpdateDepartamentController{
  private updateDepartamentUseCase:UpdateDepartamentUseCase
  constructor(updateDepartamentUseCase:UpdateDepartamentUseCase){
    this.updateDepartamentUseCase = updateDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id,name,description,agents_limit,agents_necessary} = request.body
    const updatedDepartament = await this.updateDepartamentUseCase.execute({id,name,description,agents_limit,agents_necessary})
    return response.status(200).json(updatedDepartament)
  }
}
export{UpdateDepartamentController}
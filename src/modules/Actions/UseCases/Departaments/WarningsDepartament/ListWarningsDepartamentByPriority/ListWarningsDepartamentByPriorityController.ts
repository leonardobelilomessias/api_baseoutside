import { Request, Response } from "express"
import { ListWarningsDepartamentByPriorityUseCase } from "./ListWarningsDepartamentByPriorityUseCase"

class ListWarningsDepartamentBySatusController{
  private listwarnigsDepartamentUseCase:ListWarningsDepartamentByPriorityUseCase
  constructor(listwarnigsDepartamentUseCase:ListWarningsDepartamentByPriorityUseCase){
    this.listwarnigsDepartamentUseCase = listwarnigsDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {priority,id_departament} = request.body
    const listWarningsByPriority = await this.listwarnigsDepartamentUseCase.execute({priority,id_departament})
    return response.status(200).json(listWarningsByPriority)
  }
}
export{ListWarningsDepartamentBySatusController}
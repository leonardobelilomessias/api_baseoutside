import { Request, Response } from "express"
import { ListWarningsDepartamentByTypeUseCase } from "./ListWarningsDepartamentByTypeUseCase"

class ListWarningsDepartamentBySatusController{
  private listwarnigsDepartamentUseCase:ListWarningsDepartamentByTypeUseCase
  constructor(listwarnigsDepartamentUseCase:ListWarningsDepartamentByTypeUseCase){
    this.listwarnigsDepartamentUseCase = listwarnigsDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {type,id_departament} = request.body
    const listWarningsByType = await this.listwarnigsDepartamentUseCase.execute({type,id_departament})
    return response.status(200).json(listWarningsByType)
  }
}
export{ListWarningsDepartamentBySatusController}
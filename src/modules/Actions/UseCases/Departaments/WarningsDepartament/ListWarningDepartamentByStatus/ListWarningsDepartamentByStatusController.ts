import { Request, Response } from "express"
import { ListWarningsDepartamentByStatusUseCase } from "./ListWarningsDepartamentByStatusUseCase"

class ListWarningsDepartamentBySatusController{
  private listwarnigsDepartamentUseCase:ListWarningsDepartamentByStatusUseCase
  constructor(listwarnigsDepartamentUseCase:ListWarningsDepartamentByStatusUseCase){
    this.listwarnigsDepartamentUseCase = listwarnigsDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {state,id_departament} = request.body
    const listWarningsByStatus = await this.listwarnigsDepartamentUseCase.execute({state,id_departament})
    return response.status(200).json(listWarningsByStatus)
  }
}
export{ListWarningsDepartamentBySatusController}
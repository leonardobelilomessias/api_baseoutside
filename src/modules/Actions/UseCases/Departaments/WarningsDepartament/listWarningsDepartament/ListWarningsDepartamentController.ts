import { Request, Response } from "express"
import { ListWarningsDepartamentUseCase } from "./ListWarningsDepartamentUseCase"

class ListWarningsDepartamentController{
  private listwarnigsDepartamentUseCase:ListWarningsDepartamentUseCase
  constructor(listwarnigsDepartamentUseCase:ListWarningsDepartamentUseCase){
    this.listwarnigsDepartamentUseCase = listwarnigsDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_departament} = request.body
    const listWarnings = await this.listwarnigsDepartamentUseCase.execute(id_departament)
    return response.status(200).json(listWarnings)
  }
}
export{ListWarningsDepartamentController}
import { Request, Response } from "express"
import { ListAgentsDepartamentUseCase } from "./ListAgentsDepartamentUseCase"

class ListAgentsDepartamentController{
  private listAgentDepartamentUseCase :ListAgentsDepartamentUseCase
  constructor(listAgentDepartamentUseCase :ListAgentsDepartamentUseCase){
    this.listAgentDepartamentUseCase = listAgentDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_departament} = request.body
    const listAgentsDepartament = await this.listAgentDepartamentUseCase.execute(id_departament)
    return response.status(200).json(listAgentsDepartament)
  }
}
export {ListAgentsDepartamentController}
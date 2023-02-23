import { Request, Response } from "express"
import { ListAgentsColabUseCase } from "./ListAgentsColaUseCase"

class ListAgentsColabController{
  private listAgentsColabUseCase:ListAgentsColabUseCase
  constructor(listAgentsColabUseCase:ListAgentsColabUseCase){
    this.listAgentsColabUseCase = listAgentsColabUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const query= request.params
    const id_colab = query.id_colab as string
    const listAgentColab = await this.listAgentsColabUseCase.execute(id_colab)
    return response.status(200).json(listAgentColab)
  }
}
export{ListAgentsColabController}
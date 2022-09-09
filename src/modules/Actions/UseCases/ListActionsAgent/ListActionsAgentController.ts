import { Request, Response } from "express"
import { ListActionsAgentUseCase } from "./ListActionsAgentUseCase"

class ListActionsAgentController{
  private listActionsAgentUseCase:ListActionsAgentUseCase
  constructor(listActionsAgentUseCase:ListActionsAgentUseCase){
    this.listActionsAgentUseCase = listActionsAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent} = request.body
    const listCationsAgent = await this.listActionsAgentUseCase.execute(id_agent)
    return response.status(200).json(listCationsAgent)
  }
}
export{ListActionsAgentController}
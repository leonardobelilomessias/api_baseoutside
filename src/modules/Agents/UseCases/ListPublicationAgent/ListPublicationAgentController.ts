import { Request, Response } from "express"
import { ListPublicationAgentUseCase } from "./ListPublicationAgentUseCase"

class ListPublicationAgentController{
  private listPublicationAgentUseCase:ListPublicationAgentUseCase
  constructor(listPublicationAgentUseCase:ListPublicationAgentUseCase){
    this.listPublicationAgentUseCase = listPublicationAgentUseCase
  }
  async handle(request:Request,response:Response){
    const {id_agent} = request.body

    const listAgentPublication = await this.listPublicationAgentUseCase.execute(id_agent)
    return response.status(200).json(listAgentPublication)
  }
}
export{
  ListPublicationAgentController
}
import { Request, Response } from "express"
import { ListPublicationsByIdAgentUseCase } from "./ListPublicationsByIdAgentUseCase"

class ListPublicatonsByIdAgentController{
  private listPublicatonsByIdAgentUseCase: ListPublicationsByIdAgentUseCase
  constructor(listPublicatonsByIdAgentUseCase: ListPublicationsByIdAgentUseCase) {
    this.listPublicatonsByIdAgentUseCase = listPublicatonsByIdAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const id_agent  = request.query.id.toString()
    console.log(id_agent)
    if(!id_agent) return response.status(200).json([])
    const publicationsByIdAgent = await this.listPublicatonsByIdAgentUseCase.execute(id_agent)
    return response.status(200).json(publicationsByIdAgent)
  }
}
export{ListPublicatonsByIdAgentController}
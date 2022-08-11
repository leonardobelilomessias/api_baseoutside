import { Request, Response } from "express"
import { ListPublicationsByIdAgentUseCase } from "./ListPublicationsByIdAgentUseCase"

class ListPublicatonsByIdAgentController{
  private listPublicatonsByIdAgentUseCase: ListPublicationsByIdAgentUseCase
  constructor(listPublicatonsByIdAgentUseCase: ListPublicationsByIdAgentUseCase) {
    this.listPublicatonsByIdAgentUseCase = listPublicatonsByIdAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { idAgent } = request.body
    if(!idAgent) return response.status(200).json([])
    const publicationsByIdAgent = await this.listPublicatonsByIdAgentUseCase.execute(idAgent)
    return response.status(200).json(publicationsByIdAgent)
  }
}
export{ListPublicatonsByIdAgentController}
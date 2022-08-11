import { Request, Response } from "express"
import { ListAllPublicationsAgentsUseCase } from "./ListAllPublicationsAgentsUseCase"

class ListAllPublicationsAgentsController{
  private listAllPublicationsAgentsUseCase: ListAllPublicationsAgentsUseCase
  constructor(listAllPublicationsAgentsUseCase: ListAllPublicationsAgentsUseCase) {
    this.listAllPublicationsAgentsUseCase = listAllPublicationsAgentsUseCase
  }
  async handle(request: Request, response: Response):Promise<Response> {
    const allPublicationsAgents = await this.listAllPublicationsAgentsUseCase.execute()
    return response.status(200).json(allPublicationsAgents)
  }

}
export{ ListAllPublicationsAgentsController}
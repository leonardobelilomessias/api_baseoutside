import { Request, Response } from "express"
import { CreatePublicationAgentUseCase } from "./CreatePublicationAgentUseCase"

class CreatePublicationAgentController{
  private createPublicationAgentUseCase: CreatePublicationAgentUseCase
  constructor(createPublicationAgentUseCase:CreatePublicationAgentUseCase) {
    this.createPublicationAgentUseCase = createPublicationAgentUseCase
  }

  async handle(request:Request,response:Response):Promise<Response> {
    const { } = request.body
    return
  }

}
export{CreatePublicationAgentController}
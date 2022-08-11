import { Request, response, Response } from "express"
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent"
import { UpdatePublicationAgentUseCase } from "./UpdatePublicationAgentUseCase"

class UpdatePublicationAgentController{
  private updatePublicationAgentUseCase: UpdatePublicationAgentUseCase
  constructor(updatePublicationAgentUseCase: UpdatePublicationAgentUseCase) {
    this.updatePublicationAgentUseCase = updatePublicationAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { id_publication, description } = request.body
    const updatePublication = await this.updatePublicationAgentUseCase.execute(id_publication,description)
     return response.status(200).json(updatePublication)
  }
}
export{UpdatePublicationAgentController}
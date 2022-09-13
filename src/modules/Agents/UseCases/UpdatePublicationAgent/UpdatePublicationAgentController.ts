import { Request,  Response } from "express"
import { UpdatePublicationAgentUseCase } from "./UpdatePublicationAgentUseCase"

class UpdatePublicationAgentController{
  private updatePublicationAgentUseCase: UpdatePublicationAgentUseCase
  constructor(updatePublicationAgentUseCase: UpdatePublicationAgentUseCase) {
    this.updatePublicationAgentUseCase = updatePublicationAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { id_publication, description } = request.body
    const id_agent_token = request.user.id
    const updatePublication = await this.updatePublicationAgentUseCase.execute({id_publication,description , id_agent_token})
     return response.status(200).json(updatePublication)
  }
}
export{UpdatePublicationAgentController}
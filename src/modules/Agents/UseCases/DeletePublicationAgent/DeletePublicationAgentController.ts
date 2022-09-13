import { Request, Response } from "express"
import { DeletePublicationAgentUseCase } from "./DeletePublicationAgentUseCase"

class DeletePublicationAgentController{
  private deletePublicationAgentUseCase: DeletePublicationAgentUseCase
  constructor(deletePublicationAgentUseCase: DeletePublicationAgentUseCase){
    this.deletePublicationAgentUseCase = deletePublicationAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_publication} = request.body
    const id_agent_token = request.user.id
    const deletedPublication = await this.deletePublicationAgentUseCase.execute({id_agent_token, id_publication})
    return response.status(200).json(deletedPublication)
  }
}
export{DeletePublicationAgentController}
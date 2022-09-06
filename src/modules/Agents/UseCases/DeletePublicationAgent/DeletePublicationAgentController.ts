import { Request, Response } from "express"
import { DeletePublicationAgentUseCase } from "./DeletePublicationAgentUseCase"

class DeletePublicationAgentController{
  private deletePublicationAgentUseCase: DeletePublicationAgentUseCase
  constructor(deletePublicationAgentUseCase: DeletePublicationAgentUseCase){
    this.deletePublicationAgentUseCase = deletePublicationAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_publication} = request.body
    const deletedPublication = await this.deletePublicationAgentUseCase.execute(id_publication)
    return response.status(200).json(deletedPublication)
  }
}
export{DeletePublicationAgentController}
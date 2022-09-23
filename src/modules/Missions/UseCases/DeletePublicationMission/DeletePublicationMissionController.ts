import { Request, Response } from "express"
import { DeletePublicationMissionUseCase } from "./DeletePublicationMissionUseCase"

class DeletePublicationMissionController{
  private deletePublicationMissionUseCase:DeletePublicationMissionUseCase
  constructor(deletePublicationMissionUseCase:DeletePublicationMissionUseCase){
    this.deletePublicationMissionUseCase = deletePublicationMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{ 
    const {id_publication} = request.body
    const id_agent_token = request.user?.id
    const deletedPublication = await this.deletePublicationMissionUseCase.execute({id_publication,id_agent_token})
    return response.status(200).json(deletedPublication)
  }
}
export{DeletePublicationMissionController}
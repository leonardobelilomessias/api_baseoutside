import { Request, Response } from "express"
import { DeletePublicationMissionUseCase } from "./DeletePublicationMissionUseCase"

class DeletePublicationMissionController{
  private deletePublicationMissionUseCase:DeletePublicationMissionUseCase
  constructor(deletePublicationMissionUseCase:DeletePublicationMissionUseCase){
    this.deletePublicationMissionUseCase = deletePublicationMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{ 
    const {id_publication} = request.body
    const deletedPublication = await this.deletePublicationMissionUseCase.execute(id_publication)
    return response.status(200).json(deletedPublication)
  }
}
export{DeletePublicationMissionController}
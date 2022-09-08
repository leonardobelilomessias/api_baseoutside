import { Request, Response } from "express"
import { UpdatePublicationMissionUseCase } from "./UpdatePublicationMissionUseCase"

class UpdatePublicationMissionController{
  private updatePublicationMissionUseCase:UpdatePublicationMissionUseCase
  constructor(updatePublicationMissionUseCase:UpdatePublicationMissionUseCase){
    this.updatePublicationMissionUseCase = updatePublicationMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_publication,description} = request.body
    const editedPublication = await this.updatePublicationMissionUseCase.execute({id_publication,description})
    return response.status(200).json(editedPublication)
  }
}
export{UpdatePublicationMissionController}
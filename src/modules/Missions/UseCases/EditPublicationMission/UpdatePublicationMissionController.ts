import { Request, Response } from "express"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { UpdatePublicationMissionUseCase } from "./UpdatePublicationMissionUseCase"

class UpdatePublicationMissionController{
  private updatePublicationMissionUseCase:UpdatePublicationMissionUseCase

  constructor(updatePublicationMissionUseCase:UpdatePublicationMissionUseCase){
    this.updatePublicationMissionUseCase = updatePublicationMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_publication,description} = request.body
    const id_agent_token = request.user.id
    const editedPublication = await this.updatePublicationMissionUseCase.execute({id_agent_token,id_publication,description})
    return response.status(200).json(editedPublication)
  }
}
export{UpdatePublicationMissionController}
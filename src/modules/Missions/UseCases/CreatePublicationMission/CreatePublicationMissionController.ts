import { Request, Response } from "express"
import { CreatePublicationMissionUseCase } from "./CreatePublicationMissionUseCase"

interface IFiles{
  filename:string
}
class CreatePublicationMissionController{
  private createPublicationMissionUseCase:CreatePublicationMissionUseCase
  constructor(createPublicationMissionUseCase:CreatePublicationMissionUseCase){
    this.createPublicationMissionUseCase = createPublicationMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission,description,type} = request.body
    const files = request.files as IFiles[]
    const content = files.map((file) => { return file.filename }) 
    const newPublication = await this.createPublicationMissionUseCase.execute({id_mission,description,type,content})
    return response.status(200).json(newPublication)
  }
}
export{CreatePublicationMissionController}
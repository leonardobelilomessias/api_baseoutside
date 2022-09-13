import { Request, Response } from "express"
import { CreatePublicationAgentUseCase } from "./CreatePublicationAgentUseCase"

interface IFiles{
  filename:string
}
class CreatePublicationAgentController{
  private createPublicationAgentUseCase: CreatePublicationAgentUseCase
  constructor(createPublicationAgentUseCase:CreatePublicationAgentUseCase) {
    this.createPublicationAgentUseCase = createPublicationAgentUseCase
  }

  async handle(request:Request,response:Response):Promise<Response> {
    const { description, id_agent, type } = request.body
    const files = request.files as IFiles[]
    const content = files.map((file) => { return file.filename }) 
    const id_agent_token = request.user.id
    const publicationAgent = await this.createPublicationAgentUseCase.execute({id_agent_token, id_agent, type, description, content })
    return response.status(201).json(publicationAgent)
    
  }

}
export{CreatePublicationAgentController}
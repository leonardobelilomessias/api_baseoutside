import { Request, Response } from "express"
import { EditCardAgentUseCase } from "./EditCardAgentUseCase"

class EditCardAgentController{
  private editCardAgentRepository:EditCardAgentUseCase
  constructor(editCardAgentRepository:EditCardAgentUseCase){
    this.editCardAgentRepository = editCardAgentRepository
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,title,description} = request.body
    const id_agent_token = request.user.id
    const editAgent =await  this.editCardAgentRepository.execute({id_agent_token,id_agent,title,description})
    return response.status(200).json(editAgent)
  }
}
export{EditCardAgentController}
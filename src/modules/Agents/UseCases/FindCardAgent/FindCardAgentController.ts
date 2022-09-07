import { Request, Response } from "express"
import { FindCardAgentUseCase } from "./FindCardAgentUseCase"

class FindCardAgentController{
  private findCardAgentUseCase:FindCardAgentUseCase
  constructor(findCardAgentUseCase:FindCardAgentUseCase){
    this.findCardAgentUseCase = findCardAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent} = request.body 
    const findCardAgent =await  this.findCardAgentUseCase.execute(id_agent)
    return response.status(200).json(findCardAgent)
  }
}
export{FindCardAgentController}
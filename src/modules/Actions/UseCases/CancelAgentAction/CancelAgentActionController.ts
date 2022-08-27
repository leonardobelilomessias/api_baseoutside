import { Request, Response } from "express";
import { CancelAgentActionUseCase } from "./CancelAgentActionUseCase";

class CancelAgentActionController{
  private cancelAgentActionUseCase:CancelAgentActionUseCase
  constructor(cancelAgentActionUseCase:CancelAgentActionUseCase){
    this.cancelAgentActionUseCase = cancelAgentActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_action,id_agent} = request.body
    const cancelAgentAction = await this.cancelAgentActionUseCase.execute({id_action,id_agent})
    return response.status(200).json(cancelAgentAction)
  }
}
export{CancelAgentActionController}
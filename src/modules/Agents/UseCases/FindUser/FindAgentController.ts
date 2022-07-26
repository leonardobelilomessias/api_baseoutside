import { Request, Response } from "express"

import { FindAgentUseCase } from "./FindAgentUseCase"

class FindAgentController{
 
  private findAgentUseCase: FindAgentUseCase
  constructor(findAgentUseCase:FindAgentUseCase) {
    this.findAgentUseCase = findAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.params
    const foundAgent = await  this.findAgentUseCase.execute({ name })
    return response.status(200).json(foundAgent)
  }

}

export{FindAgentController}
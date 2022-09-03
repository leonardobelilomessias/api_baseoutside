import { Request, Response } from "express"

import { FindAgentByNameUseCase } from "./FindAgentByNameUseCase"

class FindAgentByNameController{
 
  private findAgentByNameByNameUseCase: FindAgentByNameUseCase
  constructor(FindAgentByNameByNameUseCase:FindAgentByNameUseCase) {
    this.findAgentByNameByNameUseCase = FindAgentByNameByNameUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.body
    const foundAgent = await  this.findAgentByNameByNameUseCase.execute(name)
    return response.status(200).json(foundAgent)
  }

}

export{FindAgentByNameController}
import { Request, Response } from "express"
import { FindAgentsByVocationUseCase } from "./FindAgentsByVocationUseCase"


class FindAgentsByVocationController{
  private findAgentsByVocationUseCase: FindAgentsByVocationUseCase
  
  constructor(findAgentsByVocationUseCase: FindAgentsByVocationUseCase) {
    this.findAgentsByVocationUseCase = findAgentsByVocationUseCase
  }

  async handle(request:Request,response:Response):Promise<Response> {
    const { vocation } = request.body
    const usersAgentsByVocation = this.findAgentsByVocationUseCase.execute({ vocation })
    return response.status(200).json(usersAgentsByVocation)
  }
}
export{FindAgentsByVocationController}
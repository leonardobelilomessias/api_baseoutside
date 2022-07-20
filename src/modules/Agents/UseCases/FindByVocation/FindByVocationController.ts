import { Request, Response } from "express"
import { FindByVocationUseCase } from "./FindByVocationUseCase"

class FindByVocationController{
  private findByVocationUseCase: FindByVocationUseCase
  
  constructor(findByVocationUseCase: FindByVocationUseCase) {
    this.findByVocationUseCase = findByVocationUseCase
  }

  async handle(request:Request,response:Response):Promise<Response> {
    const { vocation } = request.body
    const usersByVocation = this.findByVocationUseCase.execute({ vocation })
    return response.status(200).json(usersByVocation)
  }
}
export{FindByVocationController}
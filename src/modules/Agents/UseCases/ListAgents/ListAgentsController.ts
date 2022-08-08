import { Request, Response } from "express"
import { ListAgentsUseCase } from "./ListAgentsUseCase"

class ListAgentsController{
  private listAgenUseCase: ListAgentsUseCase
  constructor(listAgentsUsecase:ListAgentsUseCase) {
    this.listAgenUseCase = listAgentsUsecase
  }

  async handle(resquest:Request,response:Response):Promise<Response> {
    const allAgent = await this.listAgenUseCase.execute()
    return response.status(200).json(allAgent)
  }

}
export {ListAgentsController}
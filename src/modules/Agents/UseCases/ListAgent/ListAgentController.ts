import { Request, Response } from "express"
import { ListAgentUseCase } from "./ListAgentUseCase"

class ListAgentController{
  private listAgenUseCase: ListAgentUseCase
  constructor(listAgentUsecase:ListAgentUseCase) {
    this.listAgenUseCase = listAgentUsecase
  }

  async handle(resquest:Request,response:Response):Promise<Response> {
    const allAgent = await this.listAgenUseCase.execute()
    return response.status(200).json(allAgent)
  }

}
export {ListAgentController}
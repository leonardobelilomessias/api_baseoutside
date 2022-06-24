import { Request, Response } from "express"
import { ListActionUseCase } from "./ListActionUseCase"

class ListActionController {
  private listActionUseCase: ListActionUseCase
  constructor(listActionUseCase: ListActionUseCase) {
    this.listActionUseCase = listActionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const allAction = await this.listActionUseCase.execute()
    return response.status(200).json(allAction)
  }
}
export{ListActionController}
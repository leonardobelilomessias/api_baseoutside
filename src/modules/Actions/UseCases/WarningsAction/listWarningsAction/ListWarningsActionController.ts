import { Request, Response } from "express"
import { ListWarningsActionUseCase } from "./ListWarningsActionUseCase"

class ListWarningsActionController{
  private listwarnigsActionUseCase:ListWarningsActionUseCase
  constructor(listwarnigsActionUseCase:ListWarningsActionUseCase){
    this.listwarnigsActionUseCase = listwarnigsActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_action} = request.body
    const listWarnings = await this.listwarnigsActionUseCase.execute(id_action)
    return response.status(200).json(listWarnings)
  }
}
export{ListWarningsActionController}
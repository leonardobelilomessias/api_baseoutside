import { Request, Response } from "express";
import { ListDepartamentsUseCase } from "./ListDepartamentsUseCase";

class ListDepartamentsController {
  private listDepartamentsUseCase:ListDepartamentsUseCase
  constructor(listDepartamentsUseCase:ListDepartamentsUseCase){
    this.listDepartamentsUseCase = listDepartamentsUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_action} = request.body
    const listDepartaments = await this.listDepartamentsUseCase.execute(id_action)
    return response.status(200).json(listDepartaments)
  }
}
export{ListDepartamentsController}
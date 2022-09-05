import { Request, Response } from "express"
import { ListTasksDepartamentUseCase } from "./ListTasksDepartamentUseCase"

class ListTasksDepartamentController{
  private listTasksDepartamentUseCase:ListTasksDepartamentUseCase
  constructor(listTasksDepartamentUseCase:ListTasksDepartamentUseCase){
    this.listTasksDepartamentUseCase = listTasksDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_departament} = request.body
    const tasksDepartament = await this.listTasksDepartamentUseCase.execute(id_departament)
    return response.status(200).json(tasksDepartament)
  }
}
export{ListTasksDepartamentController}
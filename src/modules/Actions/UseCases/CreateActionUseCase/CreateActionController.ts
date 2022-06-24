import { Request, Response } from "express"
import { CreateActionUseCase } from "./CreateActionUseCase"

interface IRequest{

  name: string;
  description: string,
  value?: number;
  date_start?: string;
  date_end?: string;
  mission?: string;
  
}


class CreateActionController{
  private createActionUseCase: CreateActionUseCase
  constructor(createActionUseCase: CreateActionUseCase) {
    this.createActionUseCase = createActionUseCase
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const {name,description,mission,value,date_end,date_start}:IRequest = request.body
    const action = await this.createActionUseCase.execute({ name, description, mission, value, date_end, date_start })
    return response.status(201).json(action)
  }


}
export{CreateActionController}
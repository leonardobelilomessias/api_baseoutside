import { Request, Response } from "express"
import { CreateMissionUseCase } from "./CreateMissionUseCase"

interface IRequest{
  name: string;
  description?: string;
  creator: string;
  image_profile?:string
}

class CreateMissionController{
  private createMissionUseCase: CreateMissionUseCase
  constructor(createMissionUseCase:CreateMissionUseCase) {
    this.createMissionUseCase = createMissionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    
    const { name, creator, description, image_profile }: IRequest = request.body
    
    const mission = await this.createMissionUseCase.execute({ name, creator, description, image_profile })
    return response.status(201).json((mission))
  }
}
export{CreateMissionController}
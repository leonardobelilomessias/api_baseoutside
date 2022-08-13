import { Request, Response } from "express"
import { CreateMissionUseCase } from "./CreateMissionUseCase"

interface IRequest{
  name: string;
  description: string;
  creator: string,
  local?:string
  image_profile?: string;
  duration?: string
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;
}

class CreateMissionController{
  private createMissionUseCase: CreateMissionUseCase
  constructor(createMissionUseCase:CreateMissionUseCase) {
    this.createMissionUseCase = createMissionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field}: IRequest = request.body
    const mission = await this.createMissionUseCase.execute({ name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field})
    return response.status(201).json((mission))
  }
}
export{CreateMissionController}
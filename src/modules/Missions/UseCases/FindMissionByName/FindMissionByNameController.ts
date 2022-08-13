import { Request, Response } from "express"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { FindMissionByNameUseCase } from "./FindMissionByNameUseCase"

class FindMissionByNameController{
  private findMissionByNameUseCase:FindMissionByNameUseCase
  constructor(findMissionByNameUseCase:FindMissionByNameUseCase) {
    this.findMissionByNameUseCase = findMissionByNameUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { name } =  request.params.name?{name:request.params.name}:request.body
    const findMissionByName = await this.findMissionByNameUseCase.execute(name)
    return response.status(200).json(findMissionByName)
  }
}
export{FindMissionByNameController}
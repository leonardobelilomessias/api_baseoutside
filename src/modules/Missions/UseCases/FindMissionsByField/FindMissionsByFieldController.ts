import { Request, Response } from "express"
import { FindMissionsByFieldUseCase } from "./FindMissionsByFieldUseCase"

class FindMissionsByFieldUseCaseController{
  private findMissionsByFieldUseCase: FindMissionsByFieldUseCase
  constructor(findMissionsByFieldUseCase: FindMissionsByFieldUseCase) {
    this.findMissionsByFieldUseCase = findMissionsByFieldUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { field } = request.params.field ? { field: request.params.field } : request.body
    const foundMissionsByField = await this.findMissionsByFieldUseCase.execute(field)
    return response.status(200).json(foundMissionsByField)
  }
}
export{FindMissionsByFieldUseCaseController}
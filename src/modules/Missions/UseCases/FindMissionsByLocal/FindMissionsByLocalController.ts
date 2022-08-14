
import { Request, Response } from "express"
import { FindMissionsByLocalUseCase } from "./FindMissionsByLocalUseCase"

class FindMissionsByLocalUseCaseController{
  private findMissionsByLocalUseCase: FindMissionsByLocalUseCase
  constructor(findMissionsByLocalUseCase: FindMissionsByLocalUseCase) {
    this.findMissionsByLocalUseCase = findMissionsByLocalUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { local } = request.params.Local ? { local: request.params.Local } : request.body
    const foundMissionsByLocal = await this.findMissionsByLocalUseCase.execute(local)
    return response.status(200).json(foundMissionsByLocal)
  }
}
export{FindMissionsByLocalUseCaseController}
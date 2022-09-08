import { Request, Response } from "express"
import { DeleteJourneyMissionUseCase } from "./DeleteJourneyMissionUseCase"

class DeleteJourneyMissionController{
  private deleteJourneyMissionUseCase:DeleteJourneyMissionUseCase
  constructor(deleteJourneyMissionUseCase:DeleteJourneyMissionUseCase){
    this.deleteJourneyMissionUseCase = deleteJourneyMissionUseCase
  }
  async handle(request:Request,response:Response){
    const {id} = request.body
    const deletedJourneyMission = await this.deleteJourneyMissionUseCase.execute(id)
    return response.status(200).json(deletedJourneyMission
      )
  }
}
export{DeleteJourneyMissionController}
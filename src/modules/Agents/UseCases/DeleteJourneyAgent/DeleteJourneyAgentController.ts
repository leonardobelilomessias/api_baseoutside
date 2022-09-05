import { Request, Response } from "express"
import { DeleteJourneyAgentUseCase } from "./DeleteJourneyAgentUseCase"

class DeleteJourneyAgentController{
  private deleteJourneyAgentUseCase:DeleteJourneyAgentUseCase
  constructor(deleteJourneyAgentUseCase:DeleteJourneyAgentUseCase){
    this.deleteJourneyAgentUseCase = deleteJourneyAgentUseCase
  }
  async handle(request:Request,response:Response){
    const {id} = request.body
    const deletedJourneyAgent = await this.deleteJourneyAgentUseCase.execute(id)
    return response.status(200).json(deletedJourneyAgent
      )
  }
}
export{DeleteJourneyAgentController}
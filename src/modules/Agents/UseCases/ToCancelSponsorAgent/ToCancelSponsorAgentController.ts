import { Request, Response } from "express"
import { AppError } from "../../../../shared/errors/AppError"
import { ToCancelSponsorAgentUseCase } from "./ToCancelSponsorAgentUseCase"

class ToCancelSponsorAgentController{
  private toCancelSponsotUseCase: ToCancelSponsorAgentUseCase
  constructor(toCancelSponsotUseCase: ToCancelSponsorAgentUseCase) {
    this.toCancelSponsotUseCase = toCancelSponsotUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    
      const { id_agent, id_sponsor } = request.body 
      const canceledSponsor = await this.toCancelSponsotUseCase.execute({ id_agent, id_sponsor })
      return response.status(200).json(canceledSponsor)

  }

}
export{ ToCancelSponsorAgentController}
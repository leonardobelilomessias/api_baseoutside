import { Request, Response } from "express"
import { ListSponsorsAgentsUseCase } from "./ListSponsorsAgentsUseCase"

class ListSponsorAgentController{
  private listSponsorAgentUseCase: ListSponsorsAgentsUseCase
  constructor(listSponsorAgentUseCase: ListSponsorsAgentsUseCase) {
    this.listSponsorAgentUseCase = listSponsorAgentUseCase
  }

  async handle(request: Request, response: Response): Promise<Response>{
    const { id_agent } = request.body
    const sponsorAgent = await this.listSponsorAgentUseCase.execute(id_agent)
    return response.status(200).json(sponsorAgent)
  }
}
export {ListSponsorAgentController}
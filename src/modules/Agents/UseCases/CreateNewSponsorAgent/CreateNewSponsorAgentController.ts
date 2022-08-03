import { Request, Response } from "express"
import { CreateNewSponsorAgentUseCase } from "./CreateNewSponsorAgentUseCase"

class CreateNewSponsorAgentController{
  private createNewSponsorAgentUseCase: CreateNewSponsorAgentUseCase
  constructor(createNewSponsorAgentUseCase:CreateNewSponsorAgentUseCase) {
    this.createNewSponsorAgentUseCase = createNewSponsorAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const {id_agent,id_sponsor,type,agent_private,sponsor_private} = request.body
    const newSponsor =await this.createNewSponsorAgentUseCase.execute({id_agent,id_sponsor,type,agent_private,sponsor_private})
    return response.status(201).json(newSponsor)
  }

}
export{CreateNewSponsorAgentController}
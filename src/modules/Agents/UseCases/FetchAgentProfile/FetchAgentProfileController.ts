import { Request, Response } from "express"
import { FetchAgentProfileUseCase } from "./FetchAgentProfileUseCase"

class FetchAgentProfileController{
  private fetchAgentProfileUseCase:FetchAgentProfileUseCase
  constructor(fetchAgentProfileUseCase:FetchAgentProfileUseCase){
    this.fetchAgentProfileUseCase = fetchAgentProfileUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const data = request.query
    const id_agent = data.id_agent as string
    if(!id_agent) return response.status(200).json([])
    const agentProfile = await this.fetchAgentProfileUseCase.execute(id_agent)
    return response.status(200).json(agentProfile)
  }
}
export{FetchAgentProfileController}
import { Request,Response } from "express"
import { FindAgentsBySkillsUseCase } from "./FindAgentBySkillUseCase"


class FindAgentsBySkillsController{
  private findAgentsBySkillsUseCase: FindAgentsBySkillsUseCase
  constructor(findAgentBySkillUseCase: FindAgentsBySkillsUseCase) {
    this.findAgentsBySkillsUseCase = findAgentBySkillUseCase
  }
  async handle(request: Request, response: Response):Promise<Response> {
    const { skills } = request.body 
    const agentsWithSkill =await this.findAgentsBySkillsUseCase.execute( skills )
    return response.status(200).json(agentsWithSkill)
  }

}
export{FindAgentsBySkillsController}
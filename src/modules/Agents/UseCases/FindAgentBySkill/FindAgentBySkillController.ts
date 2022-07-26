import { Request,Response } from "express"
import { FindAgentBySkillUseCase } from "./FindAgentBySkillUseCase"


class FindAgentBySkillController{
  private findAgentBySkillUseCase: FindAgentBySkillUseCase
  constructor(findAgentBySkillUseCase: FindAgentBySkillUseCase) {
    this.findAgentBySkillUseCase = findAgentBySkillUseCase
  }
  async handle(request: Request, response: Response):Promise<Response> {
    const { skill } = request.body 
    const agentsWithSkill =await this.findAgentBySkillUseCase.execute({ skill })
    return response.status(200).json(agentsWithSkill)
  }

}
export{FindAgentBySkillController}
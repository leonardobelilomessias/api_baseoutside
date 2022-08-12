import { Request, Response } from "express"
import { CreateColabAgentUseCase } from "./CreateColabUseCase"


class CreateColabAgentController{
  private createColabAgentUseCase: CreateColabAgentUseCase
  constructor(createColabAgentUseCase: CreateColabAgentUseCase) {
    this.createColabAgentUseCase = createColabAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id_agent,id_colab,type} = request.body
    const newColab = await this.createColabAgentUseCase.execute({ id_agent, id_colab, type })
    
    return response.status(200).json(newColab)
  }
}
export{CreateColabAgentController}
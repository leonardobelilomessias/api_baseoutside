import { Request, Response } from "express"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { ToCancelColabAgentUseCase } from "./ToCancelColabAgentUseCase"

class ToCancelColabAgentController{
  private toCancelColabAgentUseCase: ToCancelColabAgentUseCase
  constructor(toCancelColabAgentUseCase: ToCancelColabAgentUseCase) {
    this.toCancelColabAgentUseCase = toCancelColabAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const {id_agent,id_colab} = request.body
    const canceledColab =await  this.toCancelColabAgentUseCase.execute({ id_agent, id_colab })
    return response.status(200).json(canceledColab)
  }

}
export{ToCancelColabAgentController}
import { ListColabsAgentUseCase } from "./ListColabsAgentUseCase"
import{Request,Response} from 'express'
class ListColabsAgentController{
  private listColabsAgentUseCase: ListColabsAgentUseCase
  constructor(listColabsAgentUseCase: ListColabsAgentUseCase) {
    this.listColabsAgentUseCase = listColabsAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const query= request.query
    const id_agent = query.id_agent as string
    const sponsorsAsgent = await this.listColabsAgentUseCase.execute(id_agent)
    return response.status(200).json(sponsorsAsgent)
  }
}
export{ListColabsAgentController}
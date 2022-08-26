import { Response ,Request} from "express"
import { FindActionByLocalUseCase } from "./FindActionByLocalUseCase"

class FindActionByLocalController{
  private findActionByLocal:FindActionByLocalUseCase
  constructor(findActionByLocal:FindActionByLocalUseCase){
    this.findActionByLocal = findActionByLocal
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {local} = request.body
    const foundAction = await this.findActionByLocal.execute(local)
    return response.status(200).json(foundAction)
  }
}
export{FindActionByLocalController}
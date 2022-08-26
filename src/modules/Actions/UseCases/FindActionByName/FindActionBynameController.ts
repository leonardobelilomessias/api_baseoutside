import { Request, Response } from "express"
import { FindActionByNameUseCase } from "./FindActionByNameUseCase"

class FindActionByNameController{
   private findActionByNameUseCase:FindActionByNameUseCase
   constructor(findActionByNameUseCase:FindActionByNameUseCase){
    this.findActionByNameUseCase = findActionByNameUseCase
   }
   async handle(request:Request,response:Response):Promise<Response>{
    const {name}= request.body
    const foundAction = await this.findActionByNameUseCase.execute(name)
    return response.status(200).json(foundAction)
   }
}
export{FindActionByNameController}
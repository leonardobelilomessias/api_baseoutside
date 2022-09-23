import { Request, Response } from "express"
import { ListAgentsSponsorUseCase } from "./ListAgentsSponsorUseCase"

class ListAgentsSponsorController{
    private lisAgentsSponsorUseCase:ListAgentsSponsorUseCase
    constructor(lisAgentsSponsorController:ListAgentsSponsorUseCase){
      this.lisAgentsSponsorUseCase= lisAgentsSponsorController
    }
    async handle(request:Request,response:Response){
      const {id_sponsor} = request.body
      const listAgentsSponsor = await this.lisAgentsSponsorUseCase.execute(id_sponsor)
      return response.status(200).json(listAgentsSponsor)
    }
}
export{ListAgentsSponsorController}
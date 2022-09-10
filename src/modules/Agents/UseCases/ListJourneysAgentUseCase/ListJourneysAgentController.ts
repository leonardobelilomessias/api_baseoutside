import { Request, Response } from "express";
import { ListJourneysAgentUseCase } from "./ListJourneysAgents";

class ListJourneysAgentController{
  private listJourneysAgentUseCase:ListJourneysAgentUseCase
  constructor(listJourneysAgentUseCase:ListJourneysAgentUseCase){
    this.listJourneysAgentUseCase = listJourneysAgentUseCase
  }
  async handle(request:Request,response:Response){
    const {id_agent} = request.body
    const journeysAgent =await  this.listJourneysAgentUseCase.execute(id_agent)
    return response.status(200).json(journeysAgent)
  }
}

export{ListJourneysAgentController}
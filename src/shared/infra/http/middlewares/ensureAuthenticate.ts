import { NextFunction, Request,Response } from "express";
import { verify } from "jsonwebtoken";
import { AgentTokenRepository } from "../../../../modules/accounts/userToken/infra/typeorm/repositories/AgentTokenRepository";
import { AgentRepository } from "../../../../modules/Agents/infra/typeorm/repositories/AgentRepository";
import { AppError } from "../../../errors/AppError";
import auth from "../../../../config/auth";


interface IPayload{
  sub:string
}

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const agenteRepository = new AgentRepository()
  const agentTokenRepository = new AgentTokenRepository()

  const authHeader = request.headers.authorization


  if (authHeader==="Bearer") {
    throw new AppError("token missing")
  }

  const [, token] = authHeader.split(" ")

  try {
    const {sub:agent_id} =    verify(token, auth.secret_refreshToken) as IPayload
    
    const user = await agentTokenRepository.findById(agent_id,token)
    
    if (!user) {
      throw new  AppError("agent does not exist!",400)
    } 
    request.user = {
      id:user.id_agent
    }
    next()
    
  } catch (err){
    throw err   
  }
} 
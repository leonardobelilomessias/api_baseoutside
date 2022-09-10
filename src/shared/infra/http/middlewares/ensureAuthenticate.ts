import { NextFunction, Request,Response } from "express";
import { verify } from "jsonwebtoken";
import { AgentTokenRepository } from "../../../../modules/accounts/UserToken/infra/typeorm/repositories/AgentTokenRepository";
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
  if(!authHeader) throw new AppError("you need are authentication.")
  if (authHeader==="Bearer") throw new AppError("token missing")
  const [, token] = authHeader.split(" ")
  try {
    const {sub:agent_id} =    verify(token, auth.secret_token) as IPayload
    request.user = {
      id:agent_id
    }
    next()
  }catch (err){
    throw err   
  }
} 
import { NextFunction, Request,Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { AgentRepository } from "../modules/Agents/Repository/AgentRepository";

export async function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const agenteRepository = new AgentRepository

  const authHeader = request.headers.authorization

  if (authHeader==="Bearer") {
    throw new AppError("token missing")
  }

  const [, token] = authHeader.split(" ")

  try {
    const {sub} =   verify(token, "e5ff181ccf72acc8a9c890ab2fd9f2f1")
    const id_agent = sub
    const user = await agenteRepository.findById({ id: id_agent })

    
    if (!user) {
      throw new  AppError("agent does not exist!",400)
    }
    request.user = {
      id:user.id
    }
    next()
    
  } catch (err){
    throw err
    
    
  }
} 
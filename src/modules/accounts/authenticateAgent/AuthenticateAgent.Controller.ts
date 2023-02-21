import { Request, Response } from "express";
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase";

class AuthenticateAgentController{
  authenticateAgentUseCase: AuthenticateAgentUseCase
  constructor(authenticateAgentUseCase: AuthenticateAgentUseCase) {
    this.authenticateAgentUseCase = authenticateAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const { password, email } = request.body
    console.log('email e password', email,password)
    console.log(request.body)

    const token = await this.authenticateAgentUseCase.execute({password, email })
    return response.json(token)
  }

}
export {AuthenticateAgentController}
import { Request, Response } from "express";
import { SendForgotPasswordUseCase } from './SendForgotPasswordUseCase';

class SendForgotPasswordController{
  private sendForgotPasswordUseCase: SendForgotPasswordUseCase
  constructor(sendForgotPassword:SendForgotPasswordUseCase) {
    this.sendForgotPasswordUseCase = sendForgotPassword
  }
  async handle(request: Request, response: Response):Promise<Response> {
    const {email} = request.body
    const resp = await this.sendForgotPasswordUseCase.execute(email)
    return response.json(resp)
  }
}
export{ SendForgotPasswordController}
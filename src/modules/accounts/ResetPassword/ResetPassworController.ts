import { Request ,Response} from "express";
import { AppError } from "../../../shared/errors/AppError";
import { Agent } from "../../Agents/infra/typeorm/entities/Agent";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";


class ResetPassworController{
  private resetePasswordUseCase:ResetPasswordUseCase
  constructor(resetPasswordUseCase:ResetPasswordUseCase){
    this.resetePasswordUseCase = resetPasswordUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,token,password } = request.body
    if(!id_agent||!token||!password) throw new AppError("Some fild is invalid")
    const resetAgent = await this.resetePasswordUseCase.execute({token,id_agent,password})
    return response.status(200).json(resetAgent)
  }
}
export{ResetPassworController}
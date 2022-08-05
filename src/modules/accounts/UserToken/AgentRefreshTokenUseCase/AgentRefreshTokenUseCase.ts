
import {sign, verify} from 'jsonwebtoken'
import auth from "../../../../config/auth"
import { AppError } from '../../../../shared/errors/AppError'
import { IAgentTokenRepository } from '../repositories/IAgentTokenRepository'

interface IPayload{
  sub: string
  email:string
}
class AgentRefreshTokenUseCase{
  private agentTokenReposiotory: IAgentTokenRepository
  constructor(agentTokenRepository: IAgentTokenRepository) {
    this.agentTokenReposiotory = agentTokenRepository
  }
  
  async execute(token:string) {
    const {sub,email} = verify(token, auth.secret_refreshToken)as IPayload 
    const id_agent = sub 
    const AgentToken = await this.agentTokenReposiotory.findById(id_agent,token)
    if (!AgentToken) {
      throw new AppError("Refresh Token doesn't exist")
    }
    await this.agentTokenReposiotory.deleteById(id_agent)
    const refresh_token = sign({email}, auth.secret_refreshToken,{
      subject: sub,
      expiresIn:auth.expires_in_refreshToken
    })
    await this.agentTokenReposiotory.create({id_agent,expires_date:'2022-07-04 20:09:06',refresh_token})
    return refresh_token
  }

}

export{AgentRefreshTokenUseCase}
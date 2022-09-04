import { compare } from 'bcryptjs'
import {sign} from 'jsonwebtoken'
import auth from '../../../config/auth'
import { AppError } from '../../../shared/errors/AppError';
import { IAgentRepository } from '../../Agents/repositories/IAgentRepository';
import { IAgentTokenRepository } from '../userToken/repositories/IAgentTokenRepository';

interface IRequest{
  email: string;
  password:string
}

interface IResponse{
  agent: {
    name:string
    email:string,
  }
  token: string
  refresh_token:string
}

class AuthenticateAgentUseCase{
  private agentRepository: IAgentRepository
  private agentTokenRepository:IAgentTokenRepository

  constructor(agentRepository:IAgentRepository, agentTokenRepository:IAgentTokenRepository) {
    this.agentRepository = agentRepository
    this.agentTokenRepository = agentTokenRepository
  }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const agent = await this.agentRepository.findByEmail({ email })

      if (!agent) {
    
        throw new AppError("Email or password incorrect")
      }
      const passwordMatch = await compare(password, agent.password)
      if (!passwordMatch) {
        throw new AppError("Email or password incorrect")
      }

          const token = sign({}, auth.secret_token, {
            subject: agent.id,
            expiresIn: auth.expires_in
          })
    const refresh_token = sign({email}, auth.secret_refreshToken,{
      subject: agent.id,
      expiresIn:auth.expires_in_refreshToken
    })
    if (agent.is_active===false) await this.agentRepository.activate({email:agent.email})
    await this.agentTokenRepository.deleteById(agent.id)
    await this.agentTokenRepository.create({
      id_agent:agent.id
      , expires_date:'2022-07-04 20:09:06'
      , refresh_token:refresh_token
    })
      
    const tokenReturn = {
            token,
            agent: {
              name: agent.name,
              email: agent.email
            },
            refresh_token
          }
          return tokenReturn 
    }
    

}

export{ AuthenticateAgentUseCase}
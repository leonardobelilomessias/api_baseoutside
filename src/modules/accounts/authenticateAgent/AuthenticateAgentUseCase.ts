import { compare } from 'bcrypt'
import {sign} from 'jsonwebtoken'
import { AppError } from '../../../errors/AppError';
import { AgentRepository } from "../../Agents/Repository/AgentRepository";
import { DTOAgentRepository } from '../../Agents/Repository/DTOAgentRepository';

interface IRequest{
  email: string;
  password:string
}

interface IResponse{
  agent: {
    name:string
    email:string,
  }
  token:string
}

class AuthenticateAgentUseCase{
  private agentRepository:DTOAgentRepository

  constructor(agentRepository:DTOAgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const agent = await this.agentRepository.findByEmail({ email })
    try {
      if (!agent) {
        throw new AppError("Email or password incorrect")
      }

        const passwordMatch = await compare(password, agent.password)
        if (!passwordMatch) {
          throw new AppError("Email or password incorrect")
  }
      
    } catch (err) {

      throw err
    }

      
          const token = sign({}, "e5ff181ccf72acc8a9c890ab2fd9f2f1", {
            subject: agent.id,
            expiresIn: "1d"
          })
      
          const tokenReturn = {
            token,
            agent: {
              name: agent.name,
              email: agent.email
            }
          }
          return tokenReturn
        
    }
    

}

export{ AuthenticateAgentUseCase}
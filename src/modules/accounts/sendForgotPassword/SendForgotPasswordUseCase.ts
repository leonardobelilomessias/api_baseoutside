
import { v4 as uuidv4} from 'uuid'

import {resolve} from 'path'
import { AppError } from '../../../shared/errors/AppError'
import { IMailProvider } from '../../../utils/providers/MailProvider/IMailProvider'
import { IAgentRepository } from '../../agents/repositories/IAgentRepository'
import { AgentTokenRepository } from '../userToken/infra/typeorm/repositories/AgentTokenRepository'
import { IAgentTokenRepository } from '../userToken/repositories/IAgentTokenRepository'

class SendForgotPasswordUseCase{
  private agentRepository: IAgentRepository
  private agentTokenRepository: IAgentTokenRepository
  private mailProvider:IMailProvider
  constructor(agentRepository:IAgentRepository, agentTokenRepository:AgentTokenRepository,mailProvider:IMailProvider) {
    this.agentRepository = agentRepository
    this.agentTokenRepository = agentTokenRepository
    this.mailProvider = mailProvider
    
  }
  async execute(email:string):Promise<String> {
    const agent = await this.agentRepository.findByEmail({ email })
    const templatePath = resolve(__dirname,"..","views","emails","forgotPassword.hbs")
    if (!agent) {
      throw new AppError("Agent does not exist")
    }
    const token = uuidv4()
    await this.agentTokenRepository.create({
      refresh_token: token,
      agent_id: agent.id,
      expires_date:'2022-07-04 20:09:06'
    })
    const variables = {
      name: agent.name,
      link:`http://localhost:3333/forgot/reset?token=${token}`
    }
    await this.mailProvider.sendMail(email, "recuperação de senha",variables,templatePath)
    return 'Messagem enviada para seu email'
  }
  

}
export{SendForgotPasswordUseCase}
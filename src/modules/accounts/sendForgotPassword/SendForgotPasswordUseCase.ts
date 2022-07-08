import { AppError } from "../../../errors/AppError"
import { AgentRepository } from "../../Agents/Repository/AgentRepository"
import { DTOAgentRepository } from "../../Agents/Repository/DTOAgentRepository"
import { IAgentTokenRepository } from "../UserToken/Repository/IAgentTokenRepository"
import { v4 as uuidv4} from 'uuid'
import { IMailProvider } from "../../../utils/providers/MailProvider/IMailProvider"
import { AgentTokenRepository } from "../UserToken/Repository/AgentTokenRepository"
import {resolve} from 'path'

class SendForgotPasswordUseCase{
  private agentRepository: DTOAgentRepository
  private agentTokenRepository: IAgentTokenRepository
  private mailProvider:IMailProvider
  constructor(agentRepository:DTOAgentRepository, agentTokenRepository:AgentTokenRepository,mailProvider:IMailProvider) {
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
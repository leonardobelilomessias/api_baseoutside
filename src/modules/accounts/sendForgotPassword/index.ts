import { EtherealMailProvider } from "../../../utils/providers/MailProvider/EtherealMailProvider";
import { AgentRepository } from "../../Agents/Repository/AgentRepository";
import { AgentTokenRepository } from "../UserToken/Repository/AgentTokenRepository";
import { SendForgotPasswordController } from "./SendForgotPasswordController";
import { SendForgotPasswordUseCase } from "./SendForgotPasswordUseCase";


const agentRepository = new AgentRepository()
const agentTokenRepository = new AgentTokenRepository()
const mailProvider = new EtherealMailProvider()


const sendForgotPasswordUseCase = new SendForgotPasswordUseCase(agentRepository, agentTokenRepository, mailProvider)
const sendForgotPasswordController = new SendForgotPasswordController(sendForgotPasswordUseCase)

export{sendForgotPasswordController}
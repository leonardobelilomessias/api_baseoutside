import { EtherealMailProvider } from "../../../utils/providers/MailProvider/EtherealMailProvider";
import { AgentRepository } from "../../Agents/infra/typeorm/repositories/AgentRepository";
import { AgentTokenRepository } from "../userToken/infra/typeorm/repositories/AgentTokenRepository";

import { SendForgotPasswordController } from "./SendForgotPasswordController";
import { SendForgotPasswordUseCase } from "./SendForgotPasswordUseCase";


const agentRepository = new AgentRepository()
const agentTokenRepository = new AgentTokenRepository()
const mailProvider = new EtherealMailProvider()


const sendForgotPasswordUseCase = new SendForgotPasswordUseCase(agentRepository, agentTokenRepository, mailProvider)
const sendForgotPasswordController = new SendForgotPasswordController(sendForgotPasswordUseCase)

export{sendForgotPasswordController}
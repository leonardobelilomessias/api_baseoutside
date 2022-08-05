import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../../shared/infra/typeorm";
import { IAgentTokenRepository, ICreateAgentTokenDTO } from "../../../repositories/IAgentTokenRepository";
import { AgentToken } from "../entities/AgentToken";


class AgentTokenRepository implements IAgentTokenRepository{
  private agentTokenRepository: Repository<AgentToken>
  constructor() {
    this.agentTokenRepository = AppDataSource.getRepository(AgentToken)
  }
  async deleteById(id: string): Promise<void> {
    await this.agentTokenRepository.delete({id_agent:id})
  }
  async findById(id_agent: string,refresh_token:string): Promise<AgentToken> {
    const userTokens = await this.agentTokenRepository.findOne({
      where: {
        id_agent: id_agent,
        refresh_token:refresh_token
      }
    })
    return userTokens

  }
  async create({ id_agent, expires_date, refresh_token }: ICreateAgentTokenDTO): Promise<AgentToken> {
    const userToken = this.agentTokenRepository.create({ id_agent, expires_date, refresh_token })
    await this.agentTokenRepository.save(userToken)
    return userToken
  }

}
export{AgentTokenRepository}
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database";
import { AgentToken } from "../Entity/AgentToken";
import { IAgentTokenRepository, ICreateAgentTokenDTO } from "./IAgentTokenRepository";

class AgentTokenRepository implements IAgentTokenRepository{
  private agentTokenRepository: Repository<AgentToken>
  constructor() {
    this.agentTokenRepository = AppDataSource.getRepository(AgentToken)
  }
  async deleteById(id: string): Promise<void> {
    await this.agentTokenRepository.delete({agent_id:id})
  }
  async findById(agent_id: string,refresh_token:string): Promise<AgentToken> {
    const userTokens = await this.agentTokenRepository.findOne({
      where: {
        agent_id: agent_id,
        refresh_token:refresh_token
      }
    })
    return userTokens

  }
  async create({ agent_id, expires_date, refresh_token }: ICreateAgentTokenDTO): Promise<AgentToken> {
    const userToken = this.agentTokenRepository.create({ agent_id, expires_date, refresh_token })
    await this.agentTokenRepository.save(userToken)
    return userToken
  }

}
export{AgentTokenRepository}
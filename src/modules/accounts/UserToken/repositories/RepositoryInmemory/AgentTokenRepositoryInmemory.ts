import { IAgentRepository } from "../../../../Agents/repositories/IAgentRepository";
import { AgentToken } from "../../infra/typeorm/entities/AgentToken";
import { IAgentTokenRepository, ICreateAgentTokenDTO } from "../IAgentTokenRepository";

class AgentTokenRepositoryInMemory implements IAgentTokenRepository {
  agentTokenRepositoryInMemory: AgentToken[]
  constructor() {
    this.agentTokenRepositoryInMemory =[]
  }
  async create({ id_agent, expires_date, refresh_token }: ICreateAgentTokenDTO): Promise<AgentToken> {
    const newToken = new AgentToken()
    Object.assign(newToken, { id_agent, expires_date, refresh_token })
    await this.agentTokenRepositoryInMemory.push(newToken)
    return newToken
  }
  async findById(id_agent: string, refres_token: string): Promise<AgentToken> {
    const findToken = await this.agentTokenRepositoryInMemory.find((token) => {
      return token.refresh_token === refres_token && token.id_agent ===id_agent
    })
    return findToken
  }
  async deleteById(id: string): Promise<void> {
    const indexToken = await this.agentTokenRepositoryInMemory.findIndex(token=> token.id === id)
    if (indexToken) this.agentTokenRepositoryInMemory.splice(indexToken, 1)
    return 
  }

}
export{AgentTokenRepositoryInMemory}
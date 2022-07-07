import { AgentToken } from "../Entity/AgentToken";


interface ICreateAgentTokenDTO{
  agent_id: string;
  expires_date: string;
  refresh_token: string;

}

interface IAgentTokenRepository{

  create({ agent_id, expires_date, refresh_token }: ICreateAgentTokenDTO): Promise<AgentToken>
  findById(agent_id: string, refres_token: string): Promise<AgentToken>
  deleteById(id:string):Promise<void>
}
export{IAgentTokenRepository,ICreateAgentTokenDTO}
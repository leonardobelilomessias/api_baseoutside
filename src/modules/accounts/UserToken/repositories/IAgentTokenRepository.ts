import { AgentToken } from "../Entity/AgentToken";


interface ICreateAgentTokenDTO{
  id_agent: string;
  expires_date: string;
  refresh_token: string;

}

interface IAgentTokenRepository{

  create({ id_agent, expires_date, refresh_token }: ICreateAgentTokenDTO): Promise<AgentToken>
  findById(id_agent: string, refres_token: string): Promise<AgentToken>
  deleteById(id:string):Promise<void>
}
export{IAgentTokenRepository,ICreateAgentTokenDTO}
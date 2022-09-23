interface ICreateColabAgentDTO{
  id_agent: string;
  id_colab: string;
  type?:number;
  agent_private?:boolean;
	sponsor_private?:boolean;
}
interface IInputCreateColabAgentDTO{
  id_agent_token:string
  id_agent: string;
  id_colab: string;
  type?:number;
  agent_private?:boolean;
	sponsor_private?:boolean;
}
interface IOutputGenericColabAgentDTO{
  id_agent: string;
  id_colab: string;
  type?:number;
  agent_private?:boolean;
	sponsor_private?:boolean;
}
interface IOutputListColabsDTO{
  id: string;
  email: string;
  name: string;
  user_name: string;
  description?:string | null;
  balance?: number;
  is_active?: boolean;
  level?: number;
  image_profile?: string | null
  vocation?: string;
  state?: number
}
interface IInputDeleteColabAgentDTO{
  id_agent_token:string;
  id_agent:string;
	id_colab:string;
}
interface IDeleteColabAgentDTO{
  id_agent:string;
	id_colab:string;
}
export{
  ICreateColabAgentDTO,
  IInputCreateColabAgentDTO,
  IOutputGenericColabAgentDTO,
  IOutputListColabsDTO,
  IInputDeleteColabAgentDTO,
  IDeleteColabAgentDTO

}
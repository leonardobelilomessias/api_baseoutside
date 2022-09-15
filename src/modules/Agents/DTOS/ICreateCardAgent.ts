
interface ICreateCardAgentDTO{
  id_agent_token:string;
  id_agent:string;
  description?:string;
  title?:string
}

interface IResponseCreateCadAgentDTO{
  
}
export{ICreateCardAgentDTO,IResponseCreateCadAgentDTO}
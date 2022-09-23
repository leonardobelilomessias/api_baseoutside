
interface IEditCardAgent{
  id_agent:string;
  description:string;
  title:string
}

interface IInputCreateCardAgentDTO{
  id_agent_token:string;
  id_agent:string;
  description?:string;
  title?:string
}
interface ICreateCardAgentDTO{
  id_agent:string;
  description:string;
  title:string
}
interface IOutputCreateCadAgentDTO{
  
}

export{IEditCardAgent,IInputCreateCardAgentDTO,IOutputCreateCadAgentDTO,ICreateCardAgentDTO}
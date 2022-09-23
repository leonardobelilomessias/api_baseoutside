
interface IEditCardAgentDTO{
  id_agent:string;
  description:string;
  title:string
}
interface IInputEditCardAgentDTO{
  id_agent_token:string;
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
interface IOutputCreateCardAgentDTO{
  id:string;
  id_agent:string;
  description:string;
  title:string;
}
interface IOutputGenericCardAgentDTO{
  id:string;
  id_agent:string;
  description:string;
  title:string;
}

interface IInputDeleteCardAgent{
  id_agent:string;
  id_agent_token:string
}

export{
IEditCardAgentDTO,
IInputCreateCardAgentDTO,
IOutputCreateCardAgentDTO,
ICreateCardAgentDTO,
IInputEditCardAgentDTO,
IInputDeleteCardAgent,
IOutputGenericCardAgentDTO
}
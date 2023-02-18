interface IInputCreateAgentDepartamentAcionDTO{
  id_agent_token:string;
  id_agent:string;
  id_departament:string;
}
interface IInputDeleteAgentDepartamentAcionDTO{
  id_agent_token:string;
  id_agent:string;
  id_departament:string;
}
interface IOutputDeletAgentDepartamentAcionDTO{
  id:string;
  id_agent:string;
  id_departament:string;
}
interface IOutputAgentDepartamentAcionDTO {
  id:string
  id_agent_token?:string;
  id_agent:string;
  id_departament:string;
  created_at:Date
}
export{ 
  IInputCreateAgentDepartamentAcionDTO,
  IInputDeleteAgentDepartamentAcionDTO,
  IOutputDeletAgentDepartamentAcionDTO,
  IOutputAgentDepartamentAcionDTO 
}
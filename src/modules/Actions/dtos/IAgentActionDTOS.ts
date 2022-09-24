interface IInputCreateAgentActionDTO{
id_agent_token:string;
id_agent:string;
id_action:string;
}
interface IOutputCreateAgentActionDTO{
  id:string;
  id_agent:string;
  id_action:string;
  }
export{
  IInputCreateAgentActionDTO,
  IOutputCreateAgentActionDTO
}
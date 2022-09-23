interface IInputCreateAgentMissionDTO{
  id_agent_token:string;
  id_mission:string;
  id_agent:string;
}
interface IOutputGenericAgentMissionDTO{
  id_mission:string;
  id_agent:string;
}
interface IInputDeleteAgentMissionDTO{
  id_agent_token:string;
  id_mission:string;
  id_agent:string;
}
export{
  IInputCreateAgentMissionDTO,
  IOutputGenericAgentMissionDTO,
  IInputDeleteAgentMissionDTO
}
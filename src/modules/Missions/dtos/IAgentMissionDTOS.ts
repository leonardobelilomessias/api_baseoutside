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
interface IOutputAgentMissionDTO{
  id_mission:string;
  id_agent:string;
  id: string;
  created_at:Date;

}
export{
  IInputCreateAgentMissionDTO,
  IOutputGenericAgentMissionDTO,
  IInputDeleteAgentMissionDTO,
  IOutputAgentMissionDTO
}
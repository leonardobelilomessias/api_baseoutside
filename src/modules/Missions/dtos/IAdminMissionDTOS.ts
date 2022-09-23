
interface IInputCreateAdminMissionDTO{
  id_agent_token:string;
  id_mission:string;
  id_agent:string;
  type?:string;
}

interface IOutputCreateAdminMissionDTO{
  id:string;
  id_mission:string;
  id_agent:string;
  type?:string;
}
interface IOutputListAdminMissionDTO{
  id:string;
  id_mission:string;
  id_agent:string;
  type?:string;
}
interface IInputUpdateAdminMissionDTO{
  id_agent_token:string;
  id_mission:string;
  id_agent:string;
  type?:string;
}
interface IOutputUpdateAdminMissionDTO{

  id_mission:string;
  id_agent:string;
  type?:string;
}
interface IInputDeleteAdminMissionDTO{
  id_agent_token:string;
  id_mission:string;
  id_agent:string;
  type?:string;
}
interface IOutputDeleteAdminMissionDTO{
  id_mission:string;
  id_agent:string;
  type?:string;
}
export{
  IInputCreateAdminMissionDTO,
  IOutputCreateAdminMissionDTO,
  IOutputListAdminMissionDTO,
  IInputUpdateAdminMissionDTO,
  IOutputUpdateAdminMissionDTO,
  IInputDeleteAdminMissionDTO,
  IOutputDeleteAdminMissionDTO
}
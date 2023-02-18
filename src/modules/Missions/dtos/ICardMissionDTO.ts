
interface IInputCreateCardMissionDTO{
  id_agent_token:string;
  id_mission:string;
  description:string;
  title:string;
}

interface IOutputGenericCardMissionDTO{
  id:string;
  id_mission:string;
  description:string;
  title:string;
}
interface IInputDeleteCardMissionDTO{
  id_agent_token:string
  id_mission:string
}
interface IInputEditCardMissionDTO{
  id_agent_token:string;
  id_mission:string;
  title?:string;
  description?:string;
}
interface IOutputCardMissionDTO{
  id:string;
  id_mission:string;
  description:string;
  title:string;
}
export{
  IInputCreateCardMissionDTO,
  IOutputGenericCardMissionDTO,
  IInputDeleteCardMissionDTO,
  IInputEditCardMissionDTO,
  IOutputCardMissionDTO
}
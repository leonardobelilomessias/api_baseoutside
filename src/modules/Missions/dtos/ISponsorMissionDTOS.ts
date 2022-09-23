
interface IInputCreateSponsorMissionDTO{
  id_agent_token:string;
  id_sponsor:string;
  id_mission:string;
  type:string;
  mission_private?:boolean;
  sponsor_private?:boolean;
  value:number 
}

interface IOutputCreateSponsorMissionDTO{
  id:string;
  id_sponsor:string;
  id_mission:string;
  type:number;
  mission_private?:boolean;
  sponsor_private?:boolean;
  value:number 
}
interface IOutputListSponsorMissionDTO{
  id:string;
  id_sponsor:string;
  id_mission:string;
  type:number;
  mission_private?:boolean;
  sponsor_private?:boolean;
  value:number 
}
interface IOutputListMissionsSponsorDTO{
  id:string;
  id_sponsor:string;
  id_mission:string;
  type:number;
  mission_private?:boolean;
  sponsor_private?:boolean;
  value:number 
}
interface IInputDeleteSponsorMissionDTO{
  id_agent_token:string;
  id_sponsor:string;
  id_mission:string;
}
interface IOutputDeleteMissionsSponsorDTO{
  id:string;
  id_sponsor:string;
  id_mission:string;
  type:number;
  mission_private?:boolean;
  sponsor_private?:boolean;
  value:number 
}
export{
  IInputCreateSponsorMissionDTO,
  IOutputCreateSponsorMissionDTO,
  IOutputListSponsorMissionDTO,
  IOutputListMissionsSponsorDTO,
  IInputDeleteSponsorMissionDTO,
  IOutputDeleteMissionsSponsorDTO
}
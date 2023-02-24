interface IInputCreateActionDTO{
  id_agent_token:string;
  creator:string;
  name:string;
  description:string;
  date_start:Date;
  date_end:string;
  id_mission:string;
  local?:string;
  state?:number;
  type?:number
}
interface IOutputCreateActionDTO{
  creator:string;
  name:string;
  description:string;
  date_start?:Date;
  date_end?:Date;
  id_mission:string;
  local?:string;
  state?:number;
  type?:number
  
}
interface IOutputGenericActionDTO{
  
  creator:string;
  name:string;
  description:string;
  date_start?:Date;
  date_end?:Date;
  id_mission:string;
  local?:string;
  state?:number;
  type?:number
}
interface IIOutputUpdateActionDTO{
  id:string;
  creator:string;
  name:string;
  description:string;
  date_start?:Date;
  date_end?:Date;
  id_mission:string;
  local?:string;
  state?:number;
  type?:number
}
interface IInputUpdateActionDTO{
  id:string;
  id_agent_token:string;
  creator:string;
  name:string;
  description:string;
  date_start?:Date;
  date_end?:Date;
  id_mission:string;
  local?:string;
  state?:number;
  type?:number
}
interface IUpdateActionDTO{
  id:string;
  name:string;
  description:string;
  date_start?:Date;
  date_end?:Date;
  local?:string;
  state?:number;
  type?:number
}
export {
  IInputCreateActionDTO,
  IOutputCreateActionDTO,
  IOutputGenericActionDTO,
  IIOutputUpdateActionDTO,
  IUpdateActionDTO,
  IInputUpdateActionDTO
}
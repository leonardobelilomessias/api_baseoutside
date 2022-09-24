interface IInputCreateWarningActionDTO{
  id_agent_token:string
  id_action:string;
  id_creator:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IOutputCreateWarningActionDTO{
  
  id:string
  id_action:string;
  id_creator:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IOutputUpdateWarningActionDTO{
  id:string
  id_action:string;
  id_creator:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IInputUpdateWarningActionDTO{
  id:string;
  id_agent_token:string
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IInputDeleteWarnigActionDTO{
  id:string;
  id_agent_token:string;
}
interface IOutputDeleteWarnigActionDTO{
  id:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IOutputGenericWarnigActionDTO{
  id:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
export { 
  IInputCreateWarningActionDTO,
  IOutputCreateWarningActionDTO,
  IInputUpdateWarningActionDTO,
  IOutputUpdateWarningActionDTO,
  IInputDeleteWarnigActionDTO,
  IOutputDeleteWarnigActionDTO,
  IOutputGenericWarnigActionDTO
}
interface IInputCreateWarningDEpartamentActionDTO{
  id_agent_token:string;
  id_departament:string;
  id_creator:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IOutputCreateWarningDEpartamentActionDTO{
  id:string;
  id_departament:string;
  id_creator:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IInputUpdateWarningDEpartamentActionDTO{
  id_agent_token:string;
  id:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IOutputUpdateWarningDEpartamentActionDTO{
  id:string;
  id_departament:string;
  id_creator:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
export{
  IInputCreateWarningDEpartamentActionDTO,
  IOutputCreateWarningDEpartamentActionDTO,
  IInputUpdateWarningDEpartamentActionDTO,
  IOutputUpdateWarningDEpartamentActionDTO
  
}
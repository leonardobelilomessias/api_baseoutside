interface IInputCreateWarningDepartamentActionDTO{
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
interface IOutputCreateWarningDepartamentActionDTO{
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
interface IInputUpdateWarningDepartamentActionDTO{
  id_agent_token:string;
  id:string;
  title:string;
  content:string;
  priority:number;
  is_active:boolean;
  state:number;
  type:number;
}
interface IOutputUpdateWarningDepartamentActionDTO{
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
interface IOutputWarningDepartamentDTO{
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
  IInputCreateWarningDepartamentActionDTO,
  IOutputCreateWarningDepartamentActionDTO,
  IInputUpdateWarningDepartamentActionDTO,
  IOutputUpdateWarningDepartamentActionDTO,
  IOutputWarningDepartamentDTO
  
}
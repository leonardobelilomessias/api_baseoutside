
interface IInputCreateWarningsMissionDTOS{
  id_agent_token:string;
  id_mission:string;
  id_creator:string;
  title :string;
  content:string; 
  priority?:number; 
  is_active?:boolean ;
  state?:number 
  type?:number;
}

interface ICreateWarningsMissionDTOS{
  id_mission:string;
  id_creator:string;
  title :string;
  content:string; 
  priority?:number; 
  is_active?:boolean ;
  state?:number 
  type?:number;
}
interface IOutputGenericWarningsMissionDTOS{
  id_mission:string;
  id_creator:string;
  title :string;
  content:string; 
  priority?:number; 
  is_active?:boolean ;
  state?:number 
  type?:number;
}

interface IInputEditWarningsMissionDTO{
  id_agent_token:string
  id:string;
  title?:string;
  content?:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
} 

interface IEditWarningsMissionDTO{
  id:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IInputDeleteWarning{
  id_agent_token:string;
  id:string
}
interface IOutputWarningsMissionDTOS{
  id_mission:string;
  id_creator:string;
  title :string;
  content:string; 
  priority?:number; 
  is_active?:boolean ;
  state?:number 
  type?:number;
}
export {
  IInputCreateWarningsMissionDTOS,
  ICreateWarningsMissionDTOS,
  IEditWarningsMissionDTO,
  IInputEditWarningsMissionDTO,
  IOutputGenericWarningsMissionDTOS,
  IInputDeleteWarning,
  IOutputWarningsMissionDTOS

}
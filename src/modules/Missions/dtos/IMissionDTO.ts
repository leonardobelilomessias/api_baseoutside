
interface ICreateMissionDTO{

  identifier:string;
  name: string;
  description: string;
  creator: string,
  local?:string
  image_profile?: string;
  duration?: number;
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;

}
interface IInputCreateMissionDTO{
  id_agent_token:string;
  identifier:string;
  name: string;
  description: string;
  creator: string,
  local?:string
  image_profile?: string;
  duration?: number;
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;

}
interface IUpdateMissionDTO{
  id?: string;
  name?: string;
  description?: string;
  local?:string
  image_profile?: string;
  duration?: number;
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;

}
interface IInputUpdateMissionDTO{
  id_agent_token:string
  id?: string;
  name?: string;
  description?: string;
  local?:string
  image_profile?: string;
  duration?: number;
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;

}
interface IOutputGenericMissionDTO{
  id:string;
  identifier:string;
  name: string;
  description: string;
  creator: string,
  local?:string
  image_profile?: string;
  duration?: number
  date_start?: Date;
  date_end?: Date;
  is_private?: boolean;
  type?: number;
  field?: string;

}
interface IInputDeactiveMissionDTO{
  id_agent_token:string;
  id:string;
}

export{
  ICreateMissionDTO,
  IUpdateMissionDTO,
  IInputCreateMissionDTO,
  IOutputGenericMissionDTO,
  IInputUpdateMissionDTO,  
  IInputDeactiveMissionDTO
}
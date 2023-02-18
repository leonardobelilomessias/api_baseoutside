
interface IInputCreateDepartamentActionDTO{
  id_agent_token:string;
  id_action:string;
  name:string;
  description:string;
  agents_limit:number;
  agents_necessary:number
}

interface IOutputCreateDepartamentActionDTO{
  id:string;
  id_action:string;
  name:string;
  description:string;
  agents_limit:number;
  agents_necessary:number
}
interface IInputUpdateDepartamentActionDTO{
  id_agent_token:string;
  id:string;
  name:string;
  description:string;
  agents_limit:number;
  agents_necessary:number
}

interface IOutputUpdateDepartamentActionDTO{
  id:string;
  id_action:string;
  name:string;
  description:string;
  agents_limit:number;
  agents_necessary:number
}

interface IOutputDeleteDepartamentActionDTO{
  id:string;
  id_action:string;
  name:string;
  description:string;
  agents_limit:number;
  agents_necessary:number
}
interface InputDeleteDepartamentActionDTO{
  id_agent_token:string;
  id:string;
}
interface IOutputGenericDepartamentActionDTO{
  id:string;
  id_action:string;
  name:string;
  created_at?:Date;
  description?:string;
  agents_limit?:number;
  agents_necessary?:number
  image_profile?:string;
}

interface IOutputAgentDepartamentDTO{
  id:string;
  id_agent:string
  id_departament:string;
  created_at:Date;

}

export{
  IInputCreateDepartamentActionDTO,
  IOutputCreateDepartamentActionDTO,
  IInputUpdateDepartamentActionDTO,
  IOutputUpdateDepartamentActionDTO,
  IOutputDeleteDepartamentActionDTO,
  InputDeleteDepartamentActionDTO,
  IOutputGenericDepartamentActionDTO,
  IOutputAgentDepartamentDTO
}
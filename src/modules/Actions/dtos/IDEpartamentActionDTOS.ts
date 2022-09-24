
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
  id_action:string;
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
  description:string;
  agents_limit:number;
  agents_necessary:number
}

export{
  IInputCreateDepartamentActionDTO,
  IOutputCreateDepartamentActionDTO,
  IInputUpdateDepartamentActionDTO,
  IOutputUpdateDepartamentActionDTO,
  IOutputDeleteDepartamentActionDTO,
  InputDeleteDepartamentActionDTO,
  IOutputGenericDepartamentActionDTO
}
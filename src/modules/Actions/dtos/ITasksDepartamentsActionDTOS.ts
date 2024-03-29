interface IInputCreateTaskDEpartamentActionDTO{
  id_agent_token:string
  title:string;
  description:string;
  id_action:string;
  local:string;
  is_active:boolean;
  state:number;
  agents_necessary:number;
  agents_limit:number;
  priority:number;
  date_limit_subscribe:Date;
  is_require_skill:boolean;
  skill_require:string;
  id_mission:string;
  id_departament:string;
}
interface IInputUpdateTaskDEpartamentActionDTO{
  id_agent_token:string
  id:string;
  title:string;
  description:string;
  local:string;
  is_active:boolean;
  state:number;
  agents_necessary:number;
  agents_limit:number;
  priority:number;
  date_limit_subscribe:Date;
  is_require_skill:boolean;
  skill_require:string;
  id_departament:string;
}
interface IOutputTaskDepartamentDTO{
  id: string;
  id_departament: string;
  id_action: string;
  id_mission: string;
  title: string;
  created_at?: Date;
  description: string;
  local?: string;
  is_active?: boolean;
  state?:number;
  agents_necessary?: number;
  agents_limit?: number;
  priority: number;
  date_limit_subscribe?: Date;
  is_require_skill: boolean;
  skill_require?:string
}
export{
  IInputCreateTaskDEpartamentActionDTO,
  IInputUpdateTaskDEpartamentActionDTO,
  IOutputTaskDepartamentDTO
}
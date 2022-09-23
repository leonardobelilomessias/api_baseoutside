interface IInputCreateAgentDTO{
  name: string
  email: string
  password: string
  id?: string
  image_profile?: string
  vocation?: string
  description?:string
  user_name:string;
}
interface IOutputCreateAgentDTO{
  id: string;
  email: string;
  name: string;
  user_name: string;
  description?:string | null;
  balance?: number;
  is_active?: boolean;
  level?: number;
  image_profile?: string | null
  vocation?: string;
  state?: number
}
interface IOutputGenericAgentDTO{
  id: string;
  email: string;
  name: string;
  user_name: string;
  description?:string | null;
  balance?: number;
  is_active?: boolean;
  level?: number;
  image_profile?: string | null
  vocation?: string;
  state?: number
}
interface IResponseAgentDTO{
  id: string;
  name: string;
  email: string;
  description: string;
  skills?: string[];
  interests?: string[];
  vocation?: string;
}


interface IOutputAgentDTO{
  id: string;
  email: string;
  password: string;
  name: string;
  user_name: string;
  description: null;
  balance: string;
  is_active: boolean;
  level: number;
  image_profile: string | null
  vocation: string;
  state: number
  skills: [] | string[],
  interests: [] | string[],
  owner_mission: [] | string[]
}

interface IEditAgentInputDTO{
  id_agent_token:string;
  id:string 
  name?: string
  email?: string
  description?: string
  interests?: string[]
  skills?: string[]
  vocation?: string;
  image_profile?:string

}
interface IEditAgentDTO{
  id:string 
  name?: string
  email?: string
  description?: string
  interests?: string[]
  skills?: string[]
  vocation?: string;
  image_profile?:string

}

export{
IInputCreateAgentDTO,
IOutputAgentDTO,
IEditAgentDTO,
IOutputCreateAgentDTO,
IResponseAgentDTO,
IEditAgentInputDTO,
IOutputGenericAgentDTO
}
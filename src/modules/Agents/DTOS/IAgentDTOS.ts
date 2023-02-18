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
  password: string;
  name: string;
  user_name:string;
  description: string;
  balance:number 
  is_active: boolean
  level: number
  image_profile: string;
  vocation: string
  created_at: Date;
  state:number
}

interface IOutputGenericAgentDTO{
  id: string;
  email: string;
  name: string;
  user_name: string;
  password?: string;
  description?:string | null;
  balance?: number;
  is_active?: boolean;
  level?: number;
  image_profile?: string | null
  vocation?: string;
  state?: number
  created_at: Date;
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
  id?: string;
  email: string;
  password?: string;
  name: string;
  user_name: string;
  description: null |string;
  balance: number |string;
  is_active: boolean;
  level: number |string ;
  image_profile: string | null
  vocation: string;
  created_at?: Date;
  state: number
  skills?: [] | string[],
  interests?: [] | string[],
  owner_mission?: [] | string[]
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
interface IOutputFetchProfileAgentDTO{
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

export{
IInputCreateAgentDTO,
IOutputAgentDTO,
IEditAgentDTO,
IOutputCreateAgentDTO,
IResponseAgentDTO,
IEditAgentInputDTO,
IOutputGenericAgentDTO,
IOutputFetchProfileAgentDTO
}
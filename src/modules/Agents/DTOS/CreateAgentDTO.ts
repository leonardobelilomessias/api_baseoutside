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
export{IInputCreateAgentDTO,IOutputAgentDTO}
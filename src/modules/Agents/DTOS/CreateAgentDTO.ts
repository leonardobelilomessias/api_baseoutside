interface ICreateAgentDTO{
  name: string
  email: string
  password: string
  id?: string
  image_profile?: string
  vocation?: string
  description?:string
}

export{ICreateAgentDTO}
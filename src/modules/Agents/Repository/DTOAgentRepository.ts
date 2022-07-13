import { Agent } from "../Entities/Agent";

interface CreateAgent{
  name: string
  email: string
  password: string
  id?: string
  image_profile?:string
}

interface EditAgent{
  id:string 
  name?: string
  email?: string
  description?:string
}

interface DTOAgentRepository{
  
  create({name,email,password}:CreateAgent): Promise<Agent>

  list(): Promise<Agent[]>
  
  deactivate({ id }): Promise<Agent>
  
  activate({email}):Promise<void>

  edit({id, description,email,name}:EditAgent): Promise<Agent>

  findByEmail({ email }): Promise<Agent>

  findById({ id }): Promise<Agent>
  
  findByName({name}):Promise<Agent>
} 
export {DTOAgentRepository,CreateAgent,EditAgent} 
import { Agent } from "../Entities/Agent";

interface CreateAgent{
  name: string
  email: string
  password: string
  id?: string
  image_profile?:string
}

interface EditAgent{
  name?: string
  email?: string
  password?: string
  description?:string
}

interface DTOAgentRepository{
  
  create({name,email,password}:CreateAgent): Promise<Agent>

  list(): Promise<Agent[]>
  
  delete({id}): Promise<Agent>

  edit(): Promise<Agent>

  findByEmail({ email }): Promise<Agent>

  findById({id}):Promise<Agent>
} 
export {DTOAgentRepository,CreateAgent} 
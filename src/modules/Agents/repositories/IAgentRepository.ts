
import { Decimal } from "@prisma/client/runtime";
import {  IEditAgentDTO, IInputCreateAgentDTO, IResponseAgentDTO } from "../DTOS/IAgentDTOS";

interface Agent{
  id: string;
  email: string;
  password: string;
  name: string;
  user_name:string;
  description: string;
  balance:number | Decimal
  is_active: boolean
  level: number
  image_profile: string;
  vocation: string
  created_at: Date;
  state:number
}

interface IAgentRepository{
  
  create({name,email,password,}:IInputCreateAgentDTO): Promise<Agent>

  listAll(): Promise<Agent[]>
  
  deactivate( {id,password}): Promise<Agent>
  
  activate({email}):Promise<void>

  edit({id, description,email,name,skills,interests,image_profile}:IEditAgentDTO): Promise<IResponseAgentDTO>

  findByEmail({ email }): Promise<Agent>

  findById( id :string): Promise<Agent>
  
  findByName(name :string): Promise<Agent>
  
  findBySkills(skill:string[]):Promise<Agent[]>
  
  findByInterest( interest:string[] ): Promise<Agent[]>

  findByVocation({vocation}:{vocation:string}):Promise<Agent[]>

  resetPassword({id_agent,password}):Promise<Agent>

  findByUserName(user_name:string):Promise<Agent>

  fetchAgentProfile(id_agent:string)
} 
export {IAgentRepository} 
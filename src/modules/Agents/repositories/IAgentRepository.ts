
import { Decimal } from "@prisma/client/runtime";

import {  IEditAgentDTO, IInputCreateAgentDTO, IOutputAgentDTO, IOutputCreateAgentDTO, IOutputGenericAgentDTO, IResponseAgentDTO } from "../DTOS/IAgentDTOS";

interface Agent{
  id: string;
  email: string;
  password: string;
  name: string;
  user_name:string;
  description: string;
  balance:number | Decimal |string
  is_active: boolean
  level: number
  image_profile: string;
  vocation: string
  created_at: Date;
  state:number
}

interface IAgentRepository{
  
  create({name,email,password,}:IInputCreateAgentDTO): Promise<IOutputAgentDTO>

  listAll(): Promise<IOutputAgentDTO[]>
  
  deactivate( {id,password}): Promise<IOutputAgentDTO>
  
  activate({email}):Promise<void>

  edit({id, description,email,name,skills,interests,image_profile}:IEditAgentDTO): Promise<IResponseAgentDTO>

  findByEmail({ email }): Promise<IOutputAgentDTO>

  findById( id :string): Promise<IOutputAgentDTO>
  
  findByName(name :string): Promise<IOutputAgentDTO>
  
  findBySkills(skill:string[]):Promise<IOutputAgentDTO[]>
  
  findByInterest( interest:string[] ): Promise<IOutputAgentDTO[]>

  findByVocation({vocation}:{vocation:string}):Promise<IOutputAgentDTO[]>

  resetPassword({id_agent,password}):Promise<IOutputAgentDTO>

  findByUserName(user_name:string):Promise<IOutputAgentDTO>

  fetchAgentProfile(id_agent:string)
} 
export {IAgentRepository} 

import {  IEditAgentDTO, IInputCreateAgentDTO, IResponseAgentDTO } from "../DTOS/IAgentDTOS";
import { Agent } from "../infra/typeorm/entities/Agent"




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
} 
export {IAgentRepository} 
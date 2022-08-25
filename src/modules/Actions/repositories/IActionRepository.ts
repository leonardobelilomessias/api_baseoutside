import { Action } from "../infra/typeorm/entities/Action";



interface ICreateAction{
  name: string;
  description: string
  date_start?: string
  date_end?: string
  id_mission: string
  value?:number;
  state?:number;
  local?:string
}

interface IActionRepository{

  create({name,description,date_start,date_end,value,id_mission,state,local}:ICreateAction):Promise<Action>
  
  listAll(): Promise<Action[]>
  
  findById(id:string): Promise<Action>
  
  findByName(name:string): Promise<Action>

  findByLocal(local:string): Promise<Action[]>

  findByField(field:string): Promise<Action>

  edit(): Promise<Action>
  
  delete(): Promise<Action>

}

export{
  IActionRepository,ICreateAction}
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
interface IUpdateAction{
  id:string;
  name?: string;
  description?: string
  date_start?: Date;
  date_end?: Date;
  value?:number;
  state?:number;
  local?:string
}

interface IActionRepository{

  create({name,description,date_start,date_end,value,id_mission,state,local}:ICreateAction):Promise<Action>
  
  listAll(): Promise<Action[]>
  
  findById(id:string): Promise<Action>

  findByIdMission(id_mission:string): Promise<Action[]>
  
  findByName(name:string): Promise<Action[]>

  findByLocal(local:string): Promise<Action[]>

  findByField(field:string): Promise<Action>

  edit({ id, name,description,date_start,date_end,value,state,local}:IUpdateAction): Promise<Action>
  
  delete(Action:Action): Promise<Action>

}

export{
  IActionRepository,ICreateAction,IUpdateAction}
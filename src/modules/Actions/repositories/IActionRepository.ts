import { Action } from "../infra/typeorm/entities/Action";




interface IActionRepository{

  create({creator, name,description,date_start,date_end,value,id_mission,state,local}):Promise<Action>
  
  listAll(): Promise<Action[]>
  
  findById(id:string): Promise<Action>

  findByIdMission(id_mission:string): Promise<Action[]>
  
  findByName(name:string): Promise<Action[]>

  findByLocal(local:string): Promise<Action[]>

  findByField(field:string): Promise<Action>

  edit({ id, name,description,date_start,date_end,value,state,local}): Promise<Action>
  
  delete(Action:Action): Promise<Action>

}

export{
  IActionRepository}
import { IUpdateActionDTO } from "../dtos/IActionDTOS";
import { Action } from "../infra/typeorm/entities/Action";




interface IActionRepository{

  create({creator, name,description,date_start,date_end,id_mission,state,local}):Promise<Action>
  
  listAll(): Promise<Action[]>
  
  findById(id:string): Promise<Action>

  findByIdMission(id_mission:string): Promise<Action[]>
  
  findByName(name:string): Promise<Action[]>

  findByLocal(local:string): Promise<Action[]>

  findByField(field:string): Promise<Action>

  edit({ id, name,description,date_start,date_end,state,local}:IUpdateActionDTO): Promise<Action>
  
  delete(Action:Action): Promise<Action>

}

export{
  IActionRepository}
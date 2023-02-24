import { IOutputCreateActionDTO, IUpdateActionDTO,IOutputGenericActionDTO } from "../dtos/IActionDTOS";
import { Action } from "../infra/typeorm/entities/Action";




interface IActionRepository{

  create({creator, name,description,date_start,date_end,id_mission,state,local}):Promise<IOutputCreateActionDTO>
  
  listAll(): Promise<IOutputCreateActionDTO[]>
  
  findById(id:string): Promise<IOutputCreateActionDTO>

  findByIdMission(id_mission:string): Promise<IOutputCreateActionDTO[]>
  
  findByName(name:string): Promise<IOutputCreateActionDTO[]>

  findByLocal(local:string): Promise<IOutputCreateActionDTO[]>

  findByField(field:string): Promise<IOutputCreateActionDTO>

  edit({ id, name,description,date_start,date_end,state,local}:IUpdateActionDTO): Promise<IOutputCreateActionDTO>
  
  delete(Action:Action): Promise<IOutputCreateActionDTO>

  searchActionsByName(name:string):Promise<IOutputGenericActionDTO[]>

}

export{
  IActionRepository}
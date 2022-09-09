import { WarningsMission } from "../infra/typeorm/entities/WarningMission";

interface ICreateWarningsMissionDTO{
  id_mission:string;
  id_creator:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IEditWarningsMissionDTO{
  id:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IWarningsMissionRepository{

  create({id_mission,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsMissionDTO):Promise<WarningsMission>

  findById(id:string):Promise<WarningsMission>

  listByIdMission(id_mission:string):Promise<WarningsMission[]>

  listByStatus({state,id_mission}):Promise<WarningsMission[]>

  listByPriority(priority:string):Promise<WarningsMission[]>

  listByType(type:number):Promise<WarningsMission[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsMissionDTO):Promise<WarningsMission>

  delete(id:string):Promise<WarningsMission>

}

export{ICreateWarningsMissionDTO,IEditWarningsMissionDTO,IWarningsMissionRepository}
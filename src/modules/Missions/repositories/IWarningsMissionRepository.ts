import { ICreateWarningsMissionDTOS, IEditWarningsMissionDTO } from "../dtos/IWarningsMissionDTOS";
import { WarningsMission } from "../infra/typeorm/entities/WarningMission";

interface IWarningsMissionRepository{

  create({id_mission,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsMissionDTOS):Promise<WarningsMission>

  findById(id:string):Promise<WarningsMission>

  listByIdMission(id_mission:string):Promise<WarningsMission[]>

  listByStatus({state,id_mission}):Promise<WarningsMission[]>

  listByPriority({priority,id_mission}):Promise<WarningsMission[]>

  listByType({type,id_mission}):Promise<WarningsMission[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsMissionDTO):Promise<WarningsMission>

  delete(id:string):Promise<WarningsMission>

}

export{IEditWarningsMissionDTO,IWarningsMissionRepository}
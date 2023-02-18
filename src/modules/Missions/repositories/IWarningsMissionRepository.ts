import { ICreateWarningsMissionDTOS, IEditWarningsMissionDTO, IOutputWarningsMissionDTOS } from "../dtos/IWarningsMissionDTOS";
import { WarningsMission } from "../infra/typeorm/entities/WarningMission";

interface IWarningsMissionRepository{

  create({id_mission,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsMissionDTOS):Promise<IOutputWarningsMissionDTOS>

  findById(id:string):Promise<IOutputWarningsMissionDTOS>

  listByIdMission(id_mission:string):Promise<IOutputWarningsMissionDTOS[]>

  listByStatus({state,id_mission}):Promise<IOutputWarningsMissionDTOS[]>

  listByPriority({priority,id_mission}):Promise<IOutputWarningsMissionDTOS[]>

  listByType({type,id_mission}):Promise<IOutputWarningsMissionDTOS[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsMissionDTO):Promise<IOutputWarningsMissionDTOS>

  delete(id:string):Promise<IOutputWarningsMissionDTOS>

}

export{IEditWarningsMissionDTO,IWarningsMissionRepository}
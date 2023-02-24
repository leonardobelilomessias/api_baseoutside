
import { ICreateMissionDTO, IUpdateMissionDTO } from "../dtos/IMissionDTO";
import { IOutputMissionDTO } from "../dtos/IMissionDTOS";
import { Mission } from "../infra/typeorm/entities/Mission";

interface IMissionRepository{

  create({identifier, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}:ICreateMissionDTO): Promise<IOutputMissionDTO>
  
  listAllMissions(): Promise<IOutputMissionDTO[]>

  findByName(name: string): Promise<IOutputMissionDTO>
  
  findById(id:string): Promise<IOutputMissionDTO>

  findMissionsByField(field:string): Promise<IOutputMissionDTO[]>

  findMissionByLocal(local:string):Promise<IOutputMissionDTO[]>
  
  updateMission({name,description,image_profile,date_end,date_start,duration,is_private,local,type,field}:IUpdateMissionDTO): Promise<IOutputMissionDTO>
  
  deactivate(id:string): Promise<IOutputMissionDTO>

  createAdminMission({id_mission,id_agent,type})
  
  serachMissionsByName(name:string):Promise<IOutputMissionDTO[]>
  
}

export {IMissionRepository}
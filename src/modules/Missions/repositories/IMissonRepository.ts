import { ICreateMissionDTO } from "../dtos/ICreateMissionDTO";
import { IUpdateMission } from "../dtos/IUpdateMissionDTO";
import { Mission } from "../infra/typeorm/entities/Mission";

interface IMissionRepository{

  create({identifier, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}): Promise<Mission>
  
  listAllMissions(): Promise<Mission[]>

  findByName(name: string): Promise<Mission>
  
  findById(id:string): Promise<Mission>

  findMissionsByField(field:string): Promise<Mission[]>

  findMissionByLocal(local:string):Promise<Mission[]>
  
  updateMission({name,description,image_profile,date_end,date_start,duration,is_private,local,type,field}:IUpdateMission): Promise<Mission>
  
  deactivate(id:string): Promise<Mission>

  createAdminMission({id_mission,id_agent,type})
  
  
}

export {IMissionRepository}
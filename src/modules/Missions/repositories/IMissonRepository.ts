import { ICreateMissionDTO } from "../dtos/ICreateMissionDTO";
import { IUpdateMission } from "../dtos/IUpdateMissionDTO";
import { Mission } from "../infra/typeorm/entities/Mission";





interface IMissionRepository{

  create({name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}:ICreateMissionDTO): Promise<Mission>
  
  listAllMissions(): Promise<Mission[]>

  findByName(name:string): Promise<Mission>

  findMissionsByField(field:string): Promise<Mission[]>

  findMissionByLocal(local:string):Promise<Mission[]>
  
  edit({name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}:IUpdateMission): Promise<Mission>
  
  deactivate(id:string): Promise<Mission>

  createAdminMission({id_agent,type})
  
  
}

export {IMissionRepository}
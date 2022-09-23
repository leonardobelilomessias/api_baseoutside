
import { ICreateMissionDTO, IUpdateMissionDTO } from "../dtos/IMissionDTO";
import { Mission } from "../infra/typeorm/entities/Mission";

interface IMissionRepository{

  create({identifier, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}:ICreateMissionDTO): Promise<Mission>
  
  listAllMissions(): Promise<Mission[]>

  findByName(name: string): Promise<Mission>
  
  findById(id:string): Promise<Mission>

  findMissionsByField(field:string): Promise<Mission[]>

  findMissionByLocal(local:string):Promise<Mission[]>
  
  updateMission({name,description,image_profile,date_end,date_start,duration,is_private,local,type,field}:IUpdateMissionDTO): Promise<Mission>
  
  deactivate(id:string): Promise<Mission>

  createAdminMission({id_mission,id_agent,type})
  
  
}

export {IMissionRepository}
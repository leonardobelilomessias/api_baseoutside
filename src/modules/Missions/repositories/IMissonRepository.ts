import { ICreateMissionDTO } from "../dtos/ICreateMissionDTO";
import { Mission } from "../infra/typeorm/entities/Mission";





interface IMissionRepository{

  create({name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type}:ICreateMissionDTO): Promise<Mission>
  
  listAllMissions(): Promise<Mission[]>

  findByName(name:string): Promise<Mission>

  findMissionByFild(fild:string): Promise<Mission[]>

  findMissionByLocal(local:string):Promise<Mission[]>
  
  edit({ data }): Promise<Mission>
  
  deactivate(id:string): Promise<Mission>

  createAdminMission({id_agent,type})
  
  
}

export {IMissionRepository}
import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { Mission } from "../entities/Mission";


class MenagerPermissionRespository{
  private menagerPermissionRepository:DataSource
  constructor(){
  this.menagerPermissionRepository = AppDataSource
  }
  async confirmePermissionMission({id_agent_token,id_mission}){
    console.log(id_agent_token)
    const alow = await this.menagerPermissionRepository.createQueryRunner()
    .manager.query(`select mission.id as id_mission , mission.creator as id_creator, admin.id_agent as id_agent from missions mission 
    left join admins_missions admin on mission.id = admin.id_mission 
    where ((admin.id_agent = '${id_agent_token}')= true or (mission.creator ='${id_agent_token}')=true) = true and (mission.id= '${id_mission}')= true ;`)
    console.log(alow,id_agent_token, id_mission)
    return alow[0]

  }
  async confirmePermissionAction({id_agent_token, id_action}){
    const alow =  await this.menagerPermissionRepository.createQueryRunner()
    .manager.query(`select mission.id as id_mission, mission.creator as creator,action.id as id_action, adm.id_agent  as admin_mission  from missions mission 
    inner join actions action
    on mission.id = action.id_mission  left  join admins_missions adm on action.id_mission = adm.id_mission 
    where  (action.id = '${id_action}' and creator = '${id_agent_token}') = true  
    or (action.id = '${id_action}' and adm.id_agent  = '${id_agent_token}') = true;
    `)
    return alow[0]
  }
}
export {MenagerPermissionRespository}
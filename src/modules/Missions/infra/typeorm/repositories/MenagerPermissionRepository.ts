import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { Mission } from "../entities/Mission";


class MenagerPermissionRespository{
  private menagerPermissionRepository:DataSource
  constructor(){
  this.menagerPermissionRepository = AppDataSource
  }
  async confirmePermissionMission({id_agent_token,id_mission}){

    const alow = await this.menagerPermissionRepository.createQueryRunner()
    .manager.query(`select mission.id as id_mission , mission.creator as id_creator, admin.id_agent as id_agent from missions mission 
    left join admins_missions admin on mission.id = admin.id_mission 
    where ((admin.id_agent = '${id_agent_token}')= true or (mission.creator ='${id_agent_token}')=true) = true and (mission.id= '${id_mission}')= true ;`)

    return alow[0]

  }
  async confirmePermissionAction({id_agent_token, id_action}){
    const alow =  await this.menagerPermissionRepository.createQueryRunner()
    .manager.query(`select mission.id as id_mission, mission.creator as mission_creator,action.id as id_action, adm.id_agent  as admin_mission  from missions mission 
    inner join actions action
    on mission.id = action.id_mission  left  join admins_missions adm on action.id_mission = adm.id_mission 
    where  (action.id = '${id_action}')= true and (action.creator = '${id_agent_token}') = true  
    or (action.id = '${id_action}')= true and (adm.id_agent = '${id_agent_token}') = true
   or (action.id ='${id_action}') = true and (mission.creator ='${id_agent_token}' ) = true;
    `)
    return alow[0]
  }
  static async ableSubscribeAction({id_action,id_agent}){
    const alow =  await AppDataSource.createQueryRunner()
    .manager.query( `
    select action.id as action_id,action.id_mission, mission.id as mission_id, agent_mission.id_agent as id_agent  from actions action  
    inner join missions mission on mission.id = action.id_mission 
    inner join agents_missions agent_mission on agent_mission.id_mission = mission .id 
    where (action.id ='${id_action}')= true and (agent_mission.id_agent ='${id_agent}') = true;
    `)
    return alow[0]

  }

  async ableSubscribeDepartament({id_action,id_agent}){
    const alow =  await AppDataSource.createQueryRunner()
    .manager.query( `
    select action.id as action_id,action.id_mission, mission.id as mission_id, agent_mission.id_agent as id_agent ,agent_action.id_agent as id_agent_action  
    from actions action  
    inner join missions mission on mission.id = action.id_mission 
    inner join agents_missions agent_mission on agent_mission.id_mission = mission.id 
    inner join agents_actions agent_action on agent_action.id_agent  = agent_mission.id_agent  
    where ((action.id ='${id_action}')=true 
    and (agent_mission.id_agent ='${id_agent}')=true
    and (agent_action.id_agent ='${id_agent}') = true
    )= true;`)
    return alow[0]
  }
}
export {MenagerPermissionRespository}
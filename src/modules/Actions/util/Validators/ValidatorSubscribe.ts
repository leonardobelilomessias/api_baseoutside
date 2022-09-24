
import { AppDataSource } from "../../../../shared/infra/typeorm"

class ValidatorSubscribe{

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
}
export{ValidatorSubscribe}
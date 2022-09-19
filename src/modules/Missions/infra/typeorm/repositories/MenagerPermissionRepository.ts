import { DataSource, Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { Mission } from "../entities/Mission";


class MenagerPermissionRespository{
  private menagerPermissionRepository:DataSource
  constructor(){
  this.menagerPermissionRepository = AppDataSource
  }
  async confirmePermissionMission({id_agent_token}){
    const alow = await this.menagerPermissionRepository.createQueryRunner()
    .manager.query(`select mission.id as id_mission ,admin.id_agent as id_agent from missions mission 
    inner join admins_missions admin on mission.id = admin.id_mission 
    where admin.id_agent = '${id_agent_token}';`)
    console.log(alow)
    return alow[0]
  }
}
export {MenagerPermissionRespository}
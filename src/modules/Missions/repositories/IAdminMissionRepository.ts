import { AdminMission } from "../infra/typeorm/entities/AdminMission"

interface IAdminMission{

  createAdminMission({ id_mission, id_agent, type }): Promise<AdminMission>

  findAdminMission({id_agent,id_mission}):Promise<AdminMission>
  
  updateAdminMission({ id_agent, id_mission }): Promise<AdminMission>
  
  deleteAdminMission({id_agent,id_mission}):Promise<AdminMission> 
}
export{IAdminMission}
import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IAdminMissionRepository } from "../../../repositories/IAdminMissionRepository";
import { IMissionRepository } from "../../../repositories/IMissonRepository";
import { AdminMission } from "../entities/AdminMission";
import { AgentMission } from "../entities/AgentMission";
import { Mission } from "../entities/Mission";
import { MissionRepository } from "./MissionRepository";
import {IAgentsMissions} from "../../../repositories/IAgentsMissions"
import { AgentsMissionRepository } from "./AgentsMissionRepository";

class AdminMissionRepository implements IAdminMissionRepository{
  private adminMissionRepository :Repository<AdminMission>
  private agentMissionRepository:IAgentsMissions
  private missionRepository:IMissionRepository
  constructor(){
    this.adminMissionRepository = AppDataSource.getRepository(AdminMission)
    this.agentMissionRepository = new AgentsMissionRepository()
    this.missionRepository = new MissionRepository()
    
  }
  async findCreatorMission(id_mission: string): Promise<string> {
    const findMission = await this.missionRepository.findById(id_mission)
    return findMission.creator
  }
  async findAgentInMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    const agentMission = await this.agentMissionRepository.findAgentMission({id_agent,id_mission})
    return agentMission
  }
 async  listAdminsMission(id_mission: string): Promise<AdminMission[]> {
    const foundAdmininMission = await this.adminMissionRepository.find({where:{id_mission}})
    return foundAdmininMission
  }
 async createAdminMission({ id_mission, id_agent, type }): Promise<AdminMission> {
  try{
    const newAdmin = new AdminMission()
    Object.assign(newAdmin,{id_agent,id_mission,type})
    const createdAdmin = await this.adminMissionRepository.save(newAdmin)
    return createdAdmin
  }catch{
    throw new AppError("There was some problem verify if values are correct.")
  }

  }
  async findAdminMission({ id_agent, id_mission }): Promise<AdminMission> {
    const findAdminMission = await this.adminMissionRepository.findOne({where:{id_agent,id_mission}})
    return findAdminMission
  }
  async updateAdminMission({ id_agent, id_mission,type }): Promise<AdminMission> {
    try{
      const findAdminMission = await this.adminMissionRepository.findOne({where:{id_agent,id_mission}})
      findAdminMission.type = type
      const updatedAdmin = await this.adminMissionRepository.save(findAdminMission)
      return updatedAdmin
    }catch{
      throw new AppError("there was some error. Verify if value are correct.")
    }
  }
  async deleteAdminMission({ id_agent, id_mission }): Promise<AdminMission> {
   const findAdminMission =  await this.adminMissionRepository.findOne({where:{id_agent,id_mission}})
   if(!findAdminMission) throw new AppError("Admin not found on mission.")
   await this.adminMissionRepository.delete(findAdminMission.id)
   return findAdminMission
  }

}
export{AdminMissionRepository}
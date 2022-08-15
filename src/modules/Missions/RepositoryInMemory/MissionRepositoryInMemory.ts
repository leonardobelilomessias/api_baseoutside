import { AppError } from "../../../shared/errors/AppError"
import { ICreateMissionDTO } from "../dtos/ICreateMissionDTO"
import { Mission } from "../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../repositories/IMissonRepository"

class MissionRepositoryInMemory implements IMissionRepository{
  private missionRepositoryInMemory: Mission[]
  constructor() {
    this.missionRepositoryInMemory =[]
  }
  async findById(id: string): Promise<Mission> {
    const foundMissionById = this.missionRepositoryInMemory.find(mission => (mission.id === id))
    return foundMissionById
  }

  async create({ name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field}: ICreateMissionDTO): Promise<Mission> {
    const newMission = new Mission()
    Object.assign(newMission,{ name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type,field })
    this.missionRepositoryInMemory.push(newMission)
    return newMission
  }
  async listAllMissions(): Promise<Mission[]> {
    return this.missionRepositoryInMemory
  }
  async findByName(name: string): Promise<Mission> {
    const missionByName = await this.missionRepositoryInMemory.find(mission => (mission.name === name))
    return missionByName
  }
  async findMissionsByField(field: string): Promise<Mission[]> {
    const missionByName = await this.missionRepositoryInMemory.filter(mission => (mission.field === field))
    return missionByName
  }
  async findMissionByLocal(local: string): Promise<Mission[]> {
    const missionByName = await this.missionRepositoryInMemory.filter(mission => (mission.local === local))
    return missionByName
  }
  async updateMission({ id, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type, field }): Promise<Mission> {
    if (!id) throw new AppError("Value id  mission cannot be undefined")
    
    const updatedMission = await this.missionRepositoryInMemory.find(mission => {
      return mission.id ===id
    })
    if(!updatedMission) throw new AppError("Mission not found")
    Object.assign(updatedMission, { id, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type, field })
    return updatedMission
  }
 async  deactivate(id: string): Promise<Mission> {
    const deactivateMission = await this.missionRepositoryInMemory.find(mission => (mission.id === id))
    if(!deactivateMission) throw new AppError("Mission not found")
    Object.assign(deactivateMission, { is_active: false })
    return  deactivateMission
  }
  createAdminMission({ id_agent, type }: { id_agent: any; type: any }) {
    throw new Error("Method not implemented.")
  }


}
export{MissionRepositoryInMemory}
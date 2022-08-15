import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateMissionDTO } from "../../../dtos/ICreateMissionDTO"
import { IMissionRepository } from "../../../repositories/IMissonRepository"
import { Mission } from "../entities/Mission"


class MissionRepository implements IMissionRepository{
  private missionRepository:Repository<Mission>
  constructor(){
    this.missionRepository = AppDataSource.getRepository(Mission)
  }
  async findById(id: string): Promise<Mission> {
    const foundMissionById = await this.missionRepository.findOneBy({ id: id })
    return foundMissionById
  }
  async create({ name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field}: ICreateMissionDTO): Promise<Mission> {
    const newMission = new Mission()
    Object.assign(newMission, { name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field})
    const mission = await this.missionRepository.save(newMission)
    return mission
  }
  async listAllMissions(): Promise<Mission[]> {
    const allMissions =await this.missionRepository.find()
    return allMissions
  }
  async findByName(name: string): Promise<Mission> {
    const findMissionByName = await this.missionRepository.findOne({
      where:{name:name}
    })
    return findMissionByName
  }
  async findMissionsByField(field: string): Promise<Mission[]> {
    const findMissionByName = await  this.missionRepository.findBy({ field:field })
    return findMissionByName
  }
  async findMissionByLocal(local: string): Promise<Mission[]> {
    const findMissionByName = await  this.missionRepository.findBy({ local:local })
    return findMissionByName
  }
  async updateMission({id, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}): Promise<Mission> {
    if(!id) throw new  AppError("Value id mission is undefined")
    const updateMission = await this.missionRepository.findOneBy({ id: id })
    if (!updateMission) throw new AppError("Not found mission")
    Object.assign(updateMission, { id, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type, field })
    const updatedMission = await this.missionRepository.save(updateMission)
    return updatedMission

  }
  async deactivate(id: string): Promise<Mission> {
    const foundMission = await this.missionRepository.findOneBy({ id: id })
    if(!foundMission) throw  new AppError("Mission not found ")
    Object.assign(foundMission, { is_active: false })
    const deactivateMision = await this.missionRepository.save(foundMission)
    return deactivateMision
  }
  createAdminMission({ id_agent, type }: { id_agent: any; type: any }) {
    throw new Error("Method not implemented.")
  }




}

export{MissionRepository}
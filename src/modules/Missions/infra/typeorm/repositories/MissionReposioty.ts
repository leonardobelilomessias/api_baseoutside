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
  edit({ data }: { data: any }): Promise<Mission> {
    throw new Error("Method not implemented.")
  }
  deactivate(id: string): Promise<Mission> {
    throw new Error("Method not implemented.")
  }
  createAdminMission({ id_agent, type }: { id_agent: any; type: any }) {
    throw new Error("Method not implemented.")
  }




}

export{MissionRepository}
import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IOutputMissionDTO } from "../../../dtos/IMissionDTOS"
import { IMissionRepository } from "../../../repositories/IMissonRepository"
import { Mission } from "../entities/Mission"

class MissionRepository implements IMissionRepository{
  private missionRepository:Repository<Mission>
  constructor(){
    this.missionRepository = AppDataSource.getRepository("missions")
  }
  async fetchProfileMission(id: string): Promise<any> {
    if (!id) return null
    const missionFound = await this.missionRepository.findOne({where:{id:id}})
    return missionFound
  }
  async   serachMissionsByName(name:string): Promise<IOutputMissionDTO[]> {
    const missionsRawFound = await this.missionRepository.createQueryBuilder()
    .select()
    .where(`LOWER(name) LIKE LOWER('%${name}%')`)
    .getMany()
    return missionsRawFound
  }
  async findById(id: string): Promise<IOutputMissionDTO> {
    const foundMissionById = await this.missionRepository.findOneBy({ id: id })
    return foundMissionById
  }
  async create({identifier, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field}): Promise<IOutputMissionDTO> {
    
    try{
      const newMission = new Mission()
      Object.assign(newMission, {identifier, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type ,field})
      console.log(newMission)
      const mission = await this.missionRepository.save(newMission)
      return mission
    }catch{
      throw new AppError("There was some error. verify the values or try again")
    }
  }
  async listAllMissions(): Promise<IOutputMissionDTO[]> {
    const allMissions =await this.missionRepository.find({where:{is_active:true}})
    return allMissions
  }
  async findByName(name: string): Promise<IOutputMissionDTO> {
    const findMissionByName = await this.missionRepository.findOne({
      where:{name:name}
    })
    return findMissionByName
  }
  async findMissionsByField(field: string): Promise<IOutputMissionDTO[]> {
    const findMissionByName = await  this.missionRepository.findBy({ field:field })
    return findMissionByName
  }
  async findMissionByLocal(local: string): Promise<IOutputMissionDTO[]> {
    const findMissionByName = await  this.missionRepository.findBy({ local:local })
    return findMissionByName
  }
  async updateMission({id, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}): Promise<IOutputMissionDTO> {
    if(!id) throw new  AppError("Value id mission is undefined")
    const updateMission = await this.missionRepository.findOneBy({ id: id })
    if (!updateMission) throw new AppError("Not found mission")
    Object.assign(updateMission, { id, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type, field })
    const updatedMission = await this.missionRepository.save(updateMission)
    return updatedMission

  }
  async deactivate(id: string): Promise<IOutputMissionDTO> {
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
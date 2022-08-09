import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateMission, IMissionReposiotry } from "../../../repositories/IMissonRepository"
import { Mission } from "../entities/Mission"


class MissionRepository implements IMissionReposiotry{
  private missionRepository:Repository<Mission>
  constructor(){
    this.missionRepository = AppDataSource.getRepository(Mission)
  }
  deactivate({ id }: { id: any }): Promise<Mission> {
    throw new Error("Method not implemented.")
  }
  async create({ name, description, creator, image_profile }: ICreateMission): Promise<Mission> {
    const newMission =  this.missionRepository.create({ name, description, creator, image_profile })
    const mission = await this.missionRepository.save(newMission)
    return mission
  }
  async list(): Promise<Mission[]> {
    const allMission = await this.missionRepository.find()
    return allMission
  }
  findByName({name}): Promise<Mission> {
    throw new AppError("Method not implemented.")
  }
  edit({ data }: { data: any }): Promise<Mission> {
    throw new AppError("Method not implemented.")
  }




}

export{MissionRepository}
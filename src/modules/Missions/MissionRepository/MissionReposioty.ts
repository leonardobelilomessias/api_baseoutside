import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { AppError } from "../../../errors/AppError"
import { Mission } from "../Entities/Mission"
import { DTOMissionReposiotry, ICreateMission } from "./DTOMissonRepository"

class MissionRepository implements DTOMissionReposiotry{
  private missionRepository:Repository<Mission>
  constructor(){
    this.missionRepository = AppDataSource.getRepository(Mission)
  }
  async create({ name, description, create_by, image_profile }: ICreateMission): Promise<Mission> {
    const newMission =  this.missionRepository.create({ name, description, create_by, image_profile })
    const mission = await this.missionRepository.save(newMission)
    return mission
  }
  async list(): Promise<Mission[]> {
    const allMission = await this.missionRepository.find()
    return allMission
  }
  find(): Promise<Mission> {
    throw new AppError("Method not implemented.")
  }
  edit({ data }: { data: any }): Promise<Mission> {
    throw new AppError("Method not implemented.")
  }


}

export{MissionRepository}
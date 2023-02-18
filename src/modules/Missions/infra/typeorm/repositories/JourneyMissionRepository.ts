import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IOutputourneyMission } from "../../../dtos/IJourneyMissionDTO"
import { ICreateJourneyMission, IJourneyMissionRepository } from "../../../repositories/IJourneyRepository"
import { JourneyMission } from "../entities/JourneyMission"

class JourneyMissionRepository implements IJourneyMissionRepository{
  private journeyMissionRepository:Repository<JourneyMission>
  constructor(){
    this.journeyMissionRepository = AppDataSource.getRepository("journeys_mission")
  }
  async create({id_mission,type,id_content,is_hidden,is_private }:ICreateJourneyMission): Promise<IOutputourneyMission> {
    const newJourneyMission = new JourneyMission()
    Object.assign(newJourneyMission,{id_mission,type,id_content,is_hidden,is_private })
    const createNewJourney = await this.journeyMissionRepository.save(newJourneyMission)
    return createNewJourney
  }
  async list(): Promise<JourneyMission[]> {
    const journeysMission = await this.journeyMissionRepository.find()
    return journeysMission
  }
  async listByIdMission(id_mission: string): Promise<IOutputourneyMission[]> {
    const journeyMission = await this.journeyMissionRepository.find({where:{id_mission}})
    return journeyMission
  }
  async hidden(id: string): Promise<IOutputourneyMission> {
    const journeyMission = await this.journeyMissionRepository.findOneBy({id})
    journeyMission.is_hidden = true
    const journeyHidden = this.journeyMissionRepository.save(journeyMission)
    return journeyHidden
  }
 async  show(id: string): Promise<IOutputourneyMission> {
    const journeyMission = await this.journeyMissionRepository.findOneBy({id})
    journeyMission.is_hidden = false
    const journeyHidden = this.journeyMissionRepository.save(journeyMission)
    return journeyHidden
  }
  async delete(id: string): Promise<IOutputourneyMission> {
    const findJourney = await this.journeyMissionRepository.findOneBy({id})
    if(!findJourney)throw new AppError("Journey not found ")
    const journeyDelete = await this.journeyMissionRepository.delete(findJourney.id)
    return findJourney
  }
}
export{JourneyMissionRepository}
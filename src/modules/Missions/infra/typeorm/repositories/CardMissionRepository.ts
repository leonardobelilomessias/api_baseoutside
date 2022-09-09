import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICardMissionRepository, ICreateCardMission, IEditCardMission } from "../../../repositories/ICardMissionRepository";
import { CardMission } from "../entities/CardMission";
  
class CardMissionRepository implements ICardMissionRepository{
  private cardMissionRepository:Repository<CardMission>
  constructor(){
    this.cardMissionRepository = AppDataSource.getRepository("card_mission")
  }
  async create({ id_mission, description,title }: ICreateCardMission): Promise<CardMission> {
    try{
      const newMission = new CardMission()
      Object.assign(newMission,{id_mission:id_mission,description:description,title:title})
      const createMission = await this.cardMissionRepository.save(newMission)
      return createMission
    }catch{
      throw new AppError("Some value are wrong")
    }

  }
  async edit({ description, id_mission,title }: IEditCardMission): Promise<CardMission> {
    const editMission = await this.cardMissionRepository.findOne({where:{id_mission:id_mission}})
    Object.assign(editMission,{description:description,id_Mission:id_mission,title:title})
    const editedMission = await this.cardMissionRepository.save(editMission)
    return editMission  
  }
  async listByid(id_mission: string): Promise<CardMission> {
    const findMission = await this.cardMissionRepository.findOne({where:{id_mission:id_mission}})
    return findMission
  }
  async delete(id_mission: string): Promise<CardMission> {
    const findMission = await this.cardMissionRepository.findOne({where:{id_mission:id_mission}})
    await this.cardMissionRepository.delete({id:findMission.id})
    return findMission
  }

}
export{CardMissionRepository}
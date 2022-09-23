import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IActionRepository } from "../../../repositories/IActionRepository";
import { Action } from "../entities/Action";


class ActionRepository implements IActionRepository{
  private actionRepository: Repository<Action>
  constructor() {
    this.actionRepository = AppDataSource.getRepository("actions")
  }
  async findByIdMission(id_mission: string): Promise<Action[]> {
    const findActionsByMission = await this.actionRepository.find({where:{id_mission}})
    return findActionsByMission
  }
  async create({creator, name, description, date_start, date_end, value, id_mission,local }): Promise<Action> {
    try{
      const action = new Action()
      Object.assign(action,{creator, name, description, date_start, date_end, value, id_mission,local })
      const newAction = await this.actionRepository.save(action)
      return newAction
    }catch(err){
      throw new AppError("invalid value of mission")
    }

  }
 async  listAll(): Promise<Action[]> {
    const action = await this.actionRepository.find()
    return action
  }
  async findById(id: string): Promise<Action> {
    const findAction = await this.actionRepository.findOneBy({id})
    return findAction
  }
  async findByName(name: string): Promise<Action[]> {
    const foundAction = await this.actionRepository.findBy({name})
    return foundAction
  }
  async findByLocal(local: string): Promise<Action[]> {
    const foundAction = await this.actionRepository.findBy({local})
    return foundAction
  }
  findByField(field: string): Promise<Action> {
    throw new Error("Method not implemented.");
  }
  async edit({ id, name,description,date_start,date_end,value,state,local}): Promise<Action> {
      const updatedAction = await this.actionRepository.save({ id, name,description,date_start,date_end,value,state,local})
      return updatedAction
  }
  async delete(action:Action): Promise<Action> {
    const cancelAction = await this.actionRepository.delete({id:action.id})
    return action

  }
 
}
export{ ActionRepository}
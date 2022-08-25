import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IActionRepository, ICreateAction } from "../../../repositories/IActionRepository";
import { Action } from "../entities/Action";


class ActionRepository implements IActionRepository{
  private actionRepository: Repository<Action>
  constructor() {
    this.actionRepository = AppDataSource.getRepository(Action)
  }
  async create({ name, description, date_start, date_end, value, id_mission }): Promise<Action> {
    try{
      const action = new Action()
      Object.assign(action,{ name, description, date_start, date_end, value, id_mission })
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
  findById(id: string): Promise<Action> {
    throw new Error("Method not implemented.");
  }
  findByName(name: string): Promise<Action> {
    throw new Error("Method not implemented.");
  }
  findByLocal(local: string): Promise<Action[]> {
    throw new Error("Method not implemented.");
  }
  findByField(field: string): Promise<Action> {
    throw new Error("Method not implemented.");
  }
  edit(): Promise<Action> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<Action> {
    throw new Error("Method not implemented.");
  }
 
}
export{ ActionRepository}
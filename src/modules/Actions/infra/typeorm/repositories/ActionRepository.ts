import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { DTOActionRepository, ICreateAction } from "../../../repositories/IActionRepository";
import { Action } from "../entities/Action";


class ActionRepository implements DTOActionRepository{
  private actionRepository: Repository<Action>
  constructor() {
    this.actionRepository = AppDataSource.getRepository(Action)
  }
  async create({name,description,date_start,date_end,value,mission}:ICreateAction): Promise<Action> {
    const newAction = this.actionRepository.create({ name, description, date_start, date_end, value,mission })
    const action = await this.actionRepository.save(newAction)
    return action
  }
  async list(): Promise<Action[]> {
    const allAction = this.actionRepository.find()
    return allAction
  }
  async find(): Promise<Action> {
    throw new AppError("Method not implemented.");
  }
  edit(): Promise<Action> {
    throw new AppError("Method not implemented.");
  }
  delete(): Promise<Action> {
    throw new AppError("Method not implemented.");
  }

}
export{ ActionRepository}
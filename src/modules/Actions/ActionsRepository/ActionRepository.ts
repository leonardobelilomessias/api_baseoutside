import { Repository } from "typeorm";
import { AppDataSource } from "../../../database";
import { Action } from "../Entity/Action";
import { DTOActionRepository, ICreateAction } from "./DTOActionRepository";

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
  find(): Promise<Action> {
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
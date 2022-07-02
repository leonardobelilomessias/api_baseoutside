import { Action } from "../Entity/Action";
import { DTOActionRepository, ICreateAction } from "./DTOActionRepository";

class ActionInMemoryRepository implements DTOActionRepository{
  actionRepository:Action[]= []


  async create({ name, description, date_start, date_end, value, mission }: ICreateAction): Promise<Action> {
    const newAction = new Action()
    Object.assign(newAction, { name, description, date_start, date_end, value, mission })
    this.actionRepository.push(newAction)
    return newAction

  }
  async list(): Promise<Action[]> {
    const all = this.actionRepository
    return all
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
export{ActionInMemoryRepository}
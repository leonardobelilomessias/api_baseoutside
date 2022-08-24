
import { Action } from "../infra/typeorm/entities/Action"
import { IActionRepository } from "../repositories/IActionRepository"


class ActionInMemoryRepository implements IActionRepository{
  private actionRepositoryInMemory:Action[]

  constructor(){
    this.actionRepositoryInMemory = []
  }

  async create({ name, description, date_start, date_end, value, mission }: { name: any; description: any; date_start: any; date_end: any; value: any; mission: any }): Promise<Action> {
    const newAction= new Action()
    Object.assign(newAction,{ name, description, date_start, date_end, value, mission })
    this.actionRepository.push(newAction)
    return newAction
  }
  async listAll(): Promise<Action[]> {
    return this.actionRepositoryInMemory
  }
  findById(id: string): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  findByName(name: string): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  findByLocal(local: string): Promise<Action[]> {
    throw new Error("Method not implemented.")
  }
  findByField(field: string): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  edit(): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  delete(): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  actionRepository:Action[]= []



}
export{ActionInMemoryRepository}
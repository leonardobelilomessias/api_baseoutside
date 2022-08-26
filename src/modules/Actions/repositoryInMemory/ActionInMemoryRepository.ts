
import { Action } from "../infra/typeorm/entities/Action"
import { IActionRepository, ICreateAction } from "../repositories/IActionRepository"


class ActionInMemoryRepository implements IActionRepository{
  private actionRepositoryInMemory:Action[]

  constructor(){
    this.actionRepositoryInMemory = []
  }

  async create({ name, description, date_start, date_end, value, id_mission,local }:ICreateAction): Promise<Action> {
    const newAction= new Action()
    Object.assign(newAction,{ name, description, date_start, date_end, value,id_mission,local })
    this.actionRepository.push(newAction)
    return newAction
  }
  async listAll(): Promise<Action[]> {
    return this.actionRepositoryInMemory
  }
  findById(id: string): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  async findByName(name: string): Promise<Action[]> {
    const foundAction = this.actionRepository.filter(action =>(action.name === name))
    return foundAction
  }
  async findByLocal(local: string): Promise<Action[]> {
    const foundAction = await this.actionRepository.filter(action =>(action.local === local))
    return foundAction
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
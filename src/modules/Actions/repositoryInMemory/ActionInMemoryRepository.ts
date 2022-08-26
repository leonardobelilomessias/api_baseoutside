
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
    await this.actionRepositoryInMemory.push(newAction)
    return newAction
  }
  async listAll(): Promise<Action[]> {
    return this.actionRepositoryInMemory
  }
  async findById(id: string): Promise<Action> {
    const foundActionById = await this.actionRepositoryInMemory.find(action =>{ return action.id ===id})
    return foundActionById
    }
  async findByName(name: string): Promise<Action[]> {
    const foundAction = this.actionRepositoryInMemory.filter(action =>(action.name === name))
    return foundAction
  }
  async findByLocal(local: string): Promise<Action[]> {
    const foundAction = await this.actionRepositoryInMemory.filter(action =>(action.local === local))
    return foundAction
  }
  findByField(field: string): Promise<Action> {
    throw new Error("Method not implemented.")
  }
  async edit({id, name, description, date_start, date_end, value, id_mission,local }): Promise<Action> {
    const findAction= this.actionRepositoryInMemory.find(action=>(action.id ===id))
    const updateAction = Object.assign(findAction,{id, name, description, date_start, date_end, value, id_mission,local })
    return updateAction
  }
  async delete(action:Action): Promise<Action> {
    const findAction = await this.actionRepositoryInMemory.findIndex(actionArray=>(actionArray.id === action.id))
    const deletedAction = await this.actionRepositoryInMemory.slice(findAction,1) 
    return deletedAction[0]
  }




}
export{ActionInMemoryRepository}
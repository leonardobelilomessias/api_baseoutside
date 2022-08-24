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
  create({ name, description, date_start, date_end, value, mission }: { name: any; description: any; date_start: any; date_end: any; value: any; mission: any; }): Promise<Action> {
    throw new Error("Method not implemented.");
  }
  listAll(): Promise<Action[]> {
    throw new Error("Method not implemented.");
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
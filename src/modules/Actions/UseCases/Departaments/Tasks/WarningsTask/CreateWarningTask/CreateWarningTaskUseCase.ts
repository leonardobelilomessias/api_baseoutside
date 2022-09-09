import { AppError } from "../../../../../../../shared/errors/AppError"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { IWarningsTaskRepository, ICreateWarningsTaskDTO } from "../../../../../repositories/IWarningsTaskRepository"



class CreateWarningTaskUseCase{
  private warningTaskRepository:IWarningsTaskRepository
  constructor(warningTaskRepository:IWarningsTaskRepository){
    this.warningTaskRepository = warningTaskRepository
  }
  async execute({ id_task, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsTaskDTO):Promise<WarningsTask>{
    if(!id_task||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    const createWarning = await this.warningTaskRepository.create({ id_task, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningTaskUseCase}
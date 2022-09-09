import { AppError } from "../../../../../shared/errors/AppError"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository, ICreateWarningsActionDTO } from "../../../repositories/IWarningsActionRepository"


class CreateWarningActionUseCase{
  private warningActionRepository:IWarningsActionRepository
  constructor(warningActionRepository:IWarningsActionRepository){
    this.warningActionRepository = warningActionRepository
  }
  async execute({ id_action, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsActionDTO):Promise<WarningsAction>{
    if(!id_action||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    const createWarning = await this.warningActionRepository.create({ id_action, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningActionUseCase}
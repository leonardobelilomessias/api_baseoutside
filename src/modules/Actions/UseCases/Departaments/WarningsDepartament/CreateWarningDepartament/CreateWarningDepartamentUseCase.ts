import { AppError } from "../../../../../../shared/errors/AppError"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IWarningsDepartamentRepository, ICreateWarningsDepartamentDTO } from "../../../../repositories/IWarningsDepartamentRepository"


class CreateWarningDepartamentUseCase{
  private warningDepartamentRepository:IWarningsDepartamentRepository
  constructor(warningDepartamentRepository:IWarningsDepartamentRepository){
    this.warningDepartamentRepository = warningDepartamentRepository
  }
  async execute({ id_departament, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsDepartamentDTO):Promise<WarningsDepartament>{
    if(!id_departament||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    const createWarning = await this.warningDepartamentRepository.create({ id_departament, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningDepartamentUseCase}
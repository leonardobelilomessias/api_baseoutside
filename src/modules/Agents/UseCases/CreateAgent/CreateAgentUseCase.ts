import { hash } from "bcryptjs"
import { AppError } from "../../../../shared/errors/AppError"
import { cleanEmptySpace } from "../../../../utils/cleanEmptySpace"
import { ICreateAgentDTO } from "../../DTOS/CreateAgentDTO"
import { IAgentRepository } from "../../repositories/IAgentRepository"

class CreateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentReposiotory:IAgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, user_name, password ,description,vocation}:ICreateAgentDTO) {
    if(!name||!email||!user_name||!password) throw new AppError("You sent some invalid require value.")
    const agentClean  = await cleanEmptySpace({ name, email, user_name, password ,description,vocation})

    const agentExistByEmail = await this.agentRepository.findByEmail({ email })   
    const agentExistByUserName = await this.agentRepository.findByUserName(user_name)
    if (agentExistByEmail) throw  new AppError("User with sent email already exist",200)
    if (agentExistByUserName) throw  new AppError("User with sent user name already exist",200)
    try{
      const passwordHash = await hash(password, 8)
      const agent = await this.agentRepository.create(agentClean as ICreateAgentDTO)
      return agent
    }catch{
      return new AppError('erro encript')
    }
 } 

}
export{CreateAgentUseCase}

import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { Agent } from "../Entities/Agent"
import { CreateAgent, DTOAgentRepository } from "./DTOAgentRepository"
import{hash} from 'bcrypt'
import { AppError } from "../../../errors/AppError"

class AgentRepository implements DTOAgentRepository {
  agentRepository: Repository<Agent>
  constructor() {
    this.agentRepository = AppDataSource.getRepository(Agent)
  }
  async findById({id}): Promise<Agent> {
    const findAgent = await this.agentRepository.findOneBy({id:id})
    return  findAgent
  }
  async findByEmail({ email }: { email:string }): Promise<Agent> {
    const findAgent = await this.agentRepository.findOneBy({email:email})
    return  findAgent
  }
  async create({ name, email, password,image_profile,id }: CreateAgent): Promise<Agent> {
    
    const agent =  this.agentRepository.create({ name, email, password,image_profile,id })
    const newAgent = await this.agentRepository.save(agent)
    return newAgent
  }
  async list(): Promise<Agent[]> {
    const allAgents =await  this.agentRepository.find()
    return allAgents
  }
  delete({ id }: { id: any }): Promise<Agent> {
    throw new AppError("Method not implemented.")  
  }
  edit(): Promise<Agent> {
    throw new AppError("Method not implemented.")
  }
}

export {AgentRepository}
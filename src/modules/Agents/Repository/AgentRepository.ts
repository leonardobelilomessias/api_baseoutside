import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { Agent } from "../Entities/Agent"
import { CreateAgent, DTOAgentRepository } from "./DTOAgentRepository"

class AgentRepository implements DTOAgentRepository {
  agentRepository: Repository<Agent>
  constructor() {
    this.agentRepository = AppDataSource.getRepository(Agent)
  }
  async find({ email }: { email: any }): Promise<Agent> {
    const findAgent = await this.agentRepository.findOneBy({email:email})
    return  findAgent
  }
  async create({ name, email, password }: CreateAgent): Promise<Agent> {
    const agent =  this.agentRepository.create({ name, email, password })
    const newAgent = await this.agentRepository.save(agent)
    return newAgent
  }
  async list(): Promise<Agent[]> {
    const allAgents =await  this.agentRepository.find()
    return allAgents
  }
  delete({ id }: { id: any }): Promise<Agent> {
    throw new Error("Method not implemented.")
  }
  edit(): Promise<Agent> {
    throw new Error("Method not implemented.")
  }
}

export {AgentRepository}
import { Agent } from "../Entities/Agent";
import { CreateAgent, DTOAgentRepository } from "./DTOAgentRepository";

class AgentInMemoryRepository implements DTOAgentRepository{
  repositoryInMemory:Agent[] = []
  async create({ name, email, password }: CreateAgent): Promise<Agent> {
    const newAgent = new Agent()
    Object.assign(newAgent, { name, email, password })
    this.repositoryInMemory.push(newAgent)
    return newAgent
  }
  async list(): Promise<Agent[]> {
    const all = this.repositoryInMemory
    return all 
  }
  delete({ id }: { id: any; }): Promise<Agent> {
    throw new Error("Method not implemented.");
  }
  edit(): Promise<Agent> {
    throw new Error("Method not implemented.");
  }
  async findByEmail({ email }: { email: any; }): Promise<Agent> {
    const agent =  this.repositoryInMemory.find((agent) => {
      return agent.email === email
    })
    return agent
  }
  findById({ id }: { id: any; }): Promise<Agent> {
    throw new Error("Method not implemented.");
  }

}
export {AgentInMemoryRepository}
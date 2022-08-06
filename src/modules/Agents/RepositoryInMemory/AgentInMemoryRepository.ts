import { Agent } from "../infra/typeorm/entities/Agent"
import { CreateAgent, EditAgent, IAgentRepository, ResponseAgent } from "../repositories/IAgentRepository"


class AgentInMemoryRepository implements IAgentRepository{
  repositoryInMemory: Agent[] = []
  
  async listAll(): Promise<Agent[]> {
    return this.repositoryInMemory
  }

  async create({ name, email, password }: CreateAgent): Promise<Agent> {
    const newAgent = new Agent()
    Object.assign(newAgent, { name, email, password })
    this.repositoryInMemory.push(newAgent)
    return newAgent
  }

  async findByEmail({ email }: { email: any; }): Promise<Agent> {
    const agent =  this.repositoryInMemory.find((agent) => {
      return agent.email === email
    })
    return agent
  }

  findBySkill({ skill }: { skill: any }): Promise<Agent[]> {
    throw new Error("Method not implemented.")
  }

  findByInterest({ interest }: { interest: any }): Promise<Agent[]> {
    throw new Error("Method not implemented.")
  }

  findByVocation({ vocation }: { vocation: any }): Promise<Agent[]> {
    throw new Error("Method not implemented.")
  }
  
  async delete({ id }: { id: any; }): Promise<Agent> {
    throw new Error("Method not implemented.");
  }

  async edit({id,description,email,interests,name,skills}:EditAgent): Promise<ResponseAgent> {
    throw new Error("Method not implemented.");
  }



  async findById({ id }: { id: any; }): Promise<Agent> {
    throw new Error("Method not implemented.");
  }

  async activate({email}):Promise<void> {
    return
  }
  async deactivate({id}):Promise<Agent> {
    return
  }

  async findByName({name}):Promise<Agent> {
    throw new Error()
  }

}
export {AgentInMemoryRepository}
import { Agent } from "../Entities/Agent";
import { EditAgent, ResponseAgent ,CreateAgent, DTOAgentRepository} from "../Repository/DTOAgentRepository";


class AgentInMemoryRepository implements DTOAgentRepository{
  repositoryInMemory: Agent[] = []
  
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

  async delete({ id }: { id: any; }): Promise<Agent> {
    throw new Error("Method not implemented.");
  }

  async edit({id,description,email,interests,name,skills}:EditAgent): Promise<ResponseAgent> {
    throw new Error("Method not implemented.");
  }

  async findByEmail({ email }: { email: any; }): Promise<Agent> {
    const agent =  this.repositoryInMemory.find((agent) => {
      return agent.email === email
    })
    return agent
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
import { Agent } from "../infra/typeorm/entities/Agent"
import { CreateAgent, EditAgent, IAgentRepository, ResponseAgent } from "../repositories/IAgentRepository"

class AgentInMemoryRepository implements IAgentRepository{
  agentRepositoryInMemory: Agent[]
  constructor() {
    this.agentRepositoryInMemory = []
  }
  
  async listAll(): Promise<Agent[]> {
    return this.agentRepositoryInMemory
  }

  async create({ name, email, password }: CreateAgent): Promise<Agent> {
    const newAgent = new Agent()
    Object.assign(newAgent, { name, email, password })
    this.agentRepositoryInMemory.push(newAgent)
    return newAgent
  }

  async findByName(name: string): Promise<Agent> {
    const agent = await this.agentRepositoryInMemory.find((agent) => {
      return String(agent.name) === name
    })
    
    return agent
  }

  async findByEmail({ email }: { email: any; }): Promise<Agent> {
    const agent =  this.agentRepositoryInMemory.find((agent) => {
      return agent.email === email
    })
    return agent
  }
  async findById( id:String): Promise<Agent> {
    const agent = await this.agentRepositoryInMemory.find((agent) => {
      return String(agent.id) === id
    })
    return agent
  }

  async findBySkills(id_agentsSkills:[]): Promise<Agent[]> {
    const agentsWithSkills = []
    this.agentRepositoryInMemory.forEach(agent => {
      id_agentsSkills.forEach(id_agentsOfSkills => {
        if (agent.id === id_agentsOfSkills) {
          agentsWithSkills.push(agent)
        }
      })
    })
    return agentsWithSkills
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

  async edit({id,description,email,interests,name,skills,vocation}:EditAgent): Promise<ResponseAgent> {
    const findIndexAgent = this.agentRepositoryInMemory.findIndex((agent) => {
      return String(agent.id) === String(id) 
    })
    const [agent] = await this.agentRepositoryInMemory.splice(findIndexAgent, 1)
    Object.assign(agent, { description:description, email:email, interests:interests, name:name, skills:skills ,vocation:vocation})
    this.agentRepositoryInMemory.push(agent)
    return agent as ResponseAgent
  }

  async activate({email}):Promise<void> {
    return
  }
  async deactivate(id:string):Promise<Agent> {
    const agent = await  this.agentRepositoryInMemory.find(agent => agent.id === id)
    Object.assign(agent, { is_active: false })
    return agent
  }

}
export {AgentInMemoryRepository}
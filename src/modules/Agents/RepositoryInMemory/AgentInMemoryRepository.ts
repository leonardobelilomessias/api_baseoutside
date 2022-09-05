import { Agent } from "../infra/typeorm/entities/Agent"
import { CreateAgent, EditAgent, IAgentRepository, ResponseAgent } from "../repositories/IAgentRepository"

class AgentInMemoryRepository implements IAgentRepository{
  agentRepositoryInMemory: Agent[]
  constructor() {
    this.agentRepositoryInMemory = []
  }
  async findByUserName(user_name: string): Promise<Agent> {
    const findAgent = await this.agentRepositoryInMemory.find(agent=>(agent.user_name ===user_name))
    return findAgent
  }
  async resetPassword({ id_agent, password }: { id_agent: any; password: any }): Promise<Agent> {
    throw new Error("Method not implemented.")
  }
  
  async listAll(): Promise<Agent[]> {
    return this.agentRepositoryInMemory
  }

  async create({ name, email, password ,user_name}: CreateAgent): Promise<Agent> {
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

 async findByInterest(id_agentsInterest:string[]): Promise<Agent[]> {
  const agentsWithiInterest = []
  this.agentRepositoryInMemory.forEach(agent => {
    id_agentsInterest.forEach(id_agentsOfSkills => {
      if (agent.id === id_agentsOfSkills) {
        agentsWithiInterest.push(agent)
      }
    })
  })
  return agentsWithiInterest
  }

  async findByVocation({ vocation }: { vocation: any }): Promise<Agent[]> {
    const agents = await  this.agentRepositoryInMemory.filter((agent) => (agent.vocation === vocation))
    return agents
  }
  
  async delete({ id }: { id: any; }): Promise<Agent> {
    throw new Error("Method not implemented.");
  }

  async edit({id,description,email,interests,name,skills,vocation,image_profile}:EditAgent): Promise<ResponseAgent> {
    const findIndexAgent = this.agentRepositoryInMemory.findIndex((agent) => {
      return String(agent.id) === String(id) 
    })
    const [agent] = await this.agentRepositoryInMemory.splice(findIndexAgent, 1)
/*     if (image_profile) {
      const type = extname(image_profile)
      const destination = resolve(`./tmp/localPhotos',${Math.random()},${type}`,)
      const storage = new StorageTestProvider()
      agent.image_profile = await  storage.save(image_profile,destination )
    } */
    const fildEdited = {
      description: description || agent.description,
      email: email || agent.email,
      name: name || agent.name,
      vocation:vocation||agent.vocation
    }
    Object.assign(agent, { description:fildEdited.description, email:fildEdited.email, interests:interests, name:fildEdited.name, skills:skills ,vocation: fildEdited.vocation})
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
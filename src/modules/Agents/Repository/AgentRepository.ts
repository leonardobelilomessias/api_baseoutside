import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { Agent } from "../Entities/Agent"
import { CreateAgent, DTOAgentRepository, EditAgent, ResponseAgent } from "./DTOAgentRepository"
import { SkillsRepository } from "./SkillsRepository"
import { InterestsRepository } from "./InterestsRepository"
interface AgentList{
  id: string
  name:string
  email: string
  description: string
  image_profile: string
  vocation: string | null
  interests: string[] |null
  skills:string[]
}

 class AgentRepository implements DTOAgentRepository {
   agentRepository: Repository<Agent>
   skillsRepository: SkillsRepository
   interestsRepository: InterestsRepository
   
   constructor() {
     this.agentRepository = AppDataSource.getRepository(Agent)
     this.skillsRepository = new SkillsRepository()
     this.interestsRepository = new InterestsRepository()
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
     const moreangent = []
     const allskill = await this.skillsRepository.allSkills()
     const allAgents = await this.agentRepository.find(
       {
         select: {
           name: true,
           id: true,
           email: true,
           description: true,
           image_profile: true,
           vocation: true,
           is_active: true
         },
         where: {
           is_active: true
         }
       })
       
     return allAgents
   }

  async deactivate({ id }): Promise<Agent> {
    const agentWillBeDelete = await  this.agentRepository.findOneBy({ id: id })  
    agentWillBeDelete.is_active = false
    this.agentRepository.save(agentWillBeDelete)
    return  agentWillBeDelete
   }
   
  async activate({email}): Promise<void>{
    const agentActivate = await this.agentRepository.findOneBy({ email: email })
    agentActivate.is_active = true
    await this.agentRepository.save(agentActivate)
   }
   
  async edit({ id, description, email, name, skills, interests}: EditAgent): Promise<ResponseAgent> {

    const agentEdit = await this.agentRepository.findOneBy({ id: id }) 

    const skill = await this.skillsRepository.updateSkills(skills, id)

    const interest = await this.interestsRepository.updateInterests(id,interests)
  

    const agent = Object.assign(agentEdit, { description, email, name })
    await this.agentRepository.save(agent)
    const responseAgent = {
      id,
      name,
      email,
      description,
      skills:skill,
      interests:interest

    }
    return responseAgent
   }
   
  async findByName({ name }): Promise<Agent> {
    const foundAgent = await  this.agentRepository.findOneBy({ name: name })
    return foundAgent
   }
   async findByVocation({ vocation }): Promise<Agent[]>{
     const usersByVocation = this.agentRepository.findBy({ vocation: vocation })
     return usersByVocation
  }
}

export {AgentRepository}
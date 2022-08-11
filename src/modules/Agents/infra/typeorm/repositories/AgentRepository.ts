import { createQueryBuilder, Repository } from "typeorm"

import { SkillsRepository } from "./SkillsRepository"
import { InterestsRepository } from "./InterestsRepository"
import { CreateAgent, EditAgent, IAgentRepository, ResponseAgent } from "../../../repositories/IAgentRepository"
import { Agent } from "../entities/Agent"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateAgentDTO } from "../../../DTOS/CreateAgentDTO"



 class AgentRepository implements IAgentRepository {
   agentRepository: Repository<Agent>
   skillsRepository: SkillsRepository
   interestsRepository: InterestsRepository
    
   constructor() {
     this.agentRepository = AppDataSource.getRepository(Agent)
     this.skillsRepository = new SkillsRepository()
   
  }

   listAll(): Promise<Agent[]> {
     throw new Error("Method not implemented.")
   }
   async findBySkills(skills): Promise<Agent[]> {

    const agentsWithSkill = await this.agentRepository.createQueryBuilder("agents")
    .innerJoinAndMapMany("agents.skills", "skills_agents", "sk", "agents.id = sk.id_agent")
    .where("sk.skill = :skill",{skill:skills})   
    .getMany()
     return agentsWithSkill
   }
   async findByInterest(interests:string[]): Promise<Agent[]> {
     throw new Error("Method not implemented.")
   }

  async findById(id:string): Promise<Agent> {
    const findAgent = await this.agentRepository.findOneBy({id:id})
    return  findAgent
   }
   
  async findByEmail({ email }: { email:string }): Promise<Agent> {
    const findAgent = await this.agentRepository.findOneBy({email:email})
    return  findAgent
   }
   
  async create({ name, email, password,image_profile,description,vocation }): Promise<Agent> {
    const agent =  this.agentRepository.create({ name, email, password,image_profile,description,vocation })
    const newAgent = await this.agentRepository.save(agent)
    return newAgent
   }
   
  async list(): Promise<Agent[]> {
     const moreangent = []
     const allskill = await this.skillsRepository.ListAllSkills()
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
         },
       })
     const newQuery = await this.agentRepository.createQueryBuilder("agent")
       .leftJoinAndMapMany("agent.skills", "skills_agents", "sk", "agent.id = sk.id_agent")
       .leftJoinAndMapMany("agent.interests", "interests_agents", "in", "agent.id = in.id_agent")
       .leftJoinAndMapMany("agent.owner_mission", "missions", "ms", "agent.id = ms.creator")
       .getMany()
     return newQuery
   }

  async deactivate(id:string ): Promise<Agent> {
    const agentWillBeDelete = await this.agentRepository.findOneBy({ id: id })  
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
    const newSkills = []
    const newInterests =[]
    if(skills) {
      const skill = await this.skillsRepository.updateSkillsAgent(skills, id)
      newSkills.push(skill)
    }
    if(interests) {
      const interest = await this.interestsRepository.updateInterests(id,interests)
      newInterests.push(interest)
    }
    const agent = Object.assign(agentEdit, { description, email, name })
    await this.agentRepository.save(agent)
    const responseAgent = {
      id,
      name,
      email,
      description,
      skills:newSkills,
      interests:newInterests
    }
    return responseAgent
   }
   
  async findByName(name :string): Promise<Agent> {
    const foundAgent = await  this.agentRepository.findOneBy({ name: name })
    return foundAgent
   }

  async findByVocation(vocation): Promise<Agent[]>{
     const agentByVocation = await this.agentRepository.findBy({ vocation: vocation })
     return agentByVocation
  }
}

export {AgentRepository}
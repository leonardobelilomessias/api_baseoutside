import {  Repository } from "typeorm"

import { SkillsRepository } from "./SkillsRepository"
import { InterestsRepository } from "./InterestsRepository"
import {  EditAgent, IAgentRepository, ResponseAgent } from "../../../repositories/IAgentRepository"
import { Agent } from "../entities/Agent"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { hash } from "bcryptjs"




 class AgentRepository implements IAgentRepository {
   agentRepository: Repository<Agent>
   skillsRepository: SkillsRepository
   interestsRepository: InterestsRepository
    
   constructor() {
     this.agentRepository = AppDataSource.getRepository("agents")
     this.skillsRepository = new SkillsRepository()
     this.interestsRepository = new InterestsRepository()
   
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
    const findAgent = await this.agentRepository.findOneBy({id:String(id)})
    return  findAgent
   }
   
  async findByEmail({ email }: { email:string }): Promise<Agent> {
    const findAgent = await this.agentRepository.findOneBy({email:email})
    return  findAgent
   }
   
  async create({ name, email,user_name, password,image_profile,description,vocation }): Promise<Agent> {
    const agent = new Agent()
    Object.assign(agent,{ name, email,user_name, password,image_profile,description,vocation })

    const newAgent = await this.agentRepository.save(agent)
    return newAgent
   }
    
  async list(): Promise<Agent[]> {
     const newQuery = await this.agentRepository.createQueryBuilder("agent")
       .leftJoinAndMapMany("agent.skills", "skills_agents", "sk", "agent.id = sk.id_agent")
       .leftJoinAndMapMany("agent.interests", "interests_agents", "in", "agent.id = in.id_agent")
       .leftJoinAndMapMany("agent.owner_mission", "missions", "ms", "agent.id = ms.creator")
       .where("agent.is_active = :is_active", { is_active: true })
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
    
  async edit({ id, description, email, name, skills, interests,vocation,image_profile}: EditAgent): Promise<ResponseAgent> {
 
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
    Object.assign(agentEdit, { description, email, name ,vocation,image_profile,skills:newSkills,interests:newInterests})
    console.log('agent em edit agent=>',agentEdit)
    await this.agentRepository.save(agentEdit)
    const responseAgent = 
    {
      id,
      name,
      email,
      description,
      skills:newSkills,
      interests:newInterests,
      image_profile
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
  
  async resetPassword({ id_agent, password }: { id_agent: any; password: any }): Promise<Agent> {
    const findAgent = await this.agentRepository.findOne({where:{id:id_agent}})
    if(!findAgent) throw new AppError("agent not found")
    const hashPassowrd = await hash(password,8)
    Object.assign(findAgent,{password:hashPassowrd})
    const resetedAgent = this.agentRepository.save(findAgent)
    return resetedAgent
  }
}

export {AgentRepository}
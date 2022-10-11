import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IColabRepository } from "../../../repositories/IColabRepository";
import { IJourneyAgentRepository } from "../../../repositories/IJourneyRepository";
import { Agent } from "../entities/Agent";
import { ColabAgent } from "../entities/ColabAgent";
import { JourneyAgent } from "../entities/JourneyAgent";
import { JourneyAgentRepository } from "./JourneyAgentRepository";

class ColabAgentRepository implements IColabRepository{
  private colabAgentRepository: Repository<ColabAgent>
  private journeyAgentRepository:IJourneyAgentRepository
  constructor() {
    this.colabAgentRepository = AppDataSource.getRepository("colabs_agents")
    this.journeyAgentRepository = new JourneyAgentRepository()
  }
  listFeedColab(id_agent: any) {
    const feedColabsAgets = AppDataSource.createQueryRunner()
    .manager.query(`select agent.name ,colab.id_colab,image_profile, publications.description, photos.url  
    from agents agent inner join colabs_agents colab on agent.id = colab.id_colab
    inner join publications_agents publications on publications.id_agent = colab.id_colab 
    inner join photos_publications_agents photos on photos.id_publication = publications.id 
    where colab.id_agent = '${id_agent}';`)
    return feedColabsAgets
    
  }
  async findIfExistentcolab({ id_agent, id_colab}): Promise<ColabAgent> {
    const findColabAgent = this.colabAgentRepository.findOne({
      where: {
        id_colab: id_colab,
        id_agent:id_agent
      }
    })

    return findColabAgent
  }
  async create({ id_agent, id_colab, type }): Promise<ColabAgent> {
    try {
      const newColab = new ColabAgent()
      Object.assign(newColab, { id_agent:id_agent, id_colab: id_colab, type:type })
      const resp = await this.colabAgentRepository.save(newColab)
      this.journeyAgentRepository.create({id_agent:resp.id_agent,type:"colab",id_content:resp.id})
      return newColab
    } catch (err) {
      if(err.code ==='ER_NO_REFERENCED_ROW_2')
      throw new AppError('Invalid agent ou colab')
    }
  }
  async listColabAgent(id_agent: string): Promise<Agent[]> {
    const colabsAgets = AppDataSource.createQueryRunner()
      .manager.query(`select * from agents agent inner join colabs_agents colab on agent.id = colab.id_colab  where colab.id_agent = '${id_agent}';`)
      
    return colabsAgets 
  }
  listAgentColab(id_colab: string): Promise<Agent[]> {
    const agentsColabs = AppDataSource.createQueryRunner()
    .manager.query(`select * from agents agent inner join colabs_agents colab on agent.id = colab.id_colab  where colab.id_colab = '${id_colab}';`)
    
  return agentsColabs
  }
  async toCancelColab({ id_agent, id_colab }): Promise<ColabAgent> {
    const agentcolab = await  this.colabAgentRepository.findOne({where:{ id_agent: id_agent, id_colab: id_colab }})
    await this.colabAgentRepository
    .createQueryBuilder()
    .delete()
    .from(ColabAgent)
      .where("id = :id", { id:agentcolab.id})
    .execute()
    
    return agentcolab
  }

  

}
export{ColabAgentRepository}
import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IAgentActionRepository } from "../../../repositories/IAgentActionRepository";
import { AgentAction } from "../entities/AgentAction";

class AgentActionRepository implements IAgentActionRepository{
  private agentActionRepository:Repository<AgentAction>
  constructor(){
    this.agentActionRepository = AppDataSource.getRepository("agents_actions")
  }
  async findAgentAction({ id_action, id_agent }): Promise<AgentAction> {
    const agentAction = await this.agentActionRepository.findOne({
      where:{id_action,id_agent}
    })
    return agentAction
  }
  async create({ id_action, id_agent }): Promise<AgentAction> {
    try{
      const newActionAgent = new AgentAction()
      Object.assign(newActionAgent,{ id_action, id_agent })
      const agentAction = await this.agentActionRepository.save(newActionAgent)
      return agentAction
    }catch{
      throw new AppError("There was some error with values sent.")
    }

  }
  async listAgentsAction(id_action: any): Promise<AgentAction[]> {
    const agentsActions = await this.agentActionRepository.findBy({id_action})
    return agentsActions

  }
 async  listActionsAgent(id_agent: any): Promise<AgentAction[]> {
    const findActionsAgent = await this.agentActionRepository.find({where:{id_agent}})
    return findActionsAgent
  }
  async delete({ id_action, id_agent }: { id_action: any; id_agent: any; }): Promise<AgentAction> {
    const findAgentAction = await this.agentActionRepository.findOne({ where:{ id_action, id_agent }})
    if(!findAgentAction) throw new AppError("AgentAction not found.")
    const deleteAgentAction = await this.agentActionRepository.delete(findAgentAction.id)
    return findAgentAction
  }

}
export{AgentActionRepository}
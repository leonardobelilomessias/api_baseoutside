import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IAgentTaskRepository } from "../../../repositories/IAgentTaskRepository";
import { AgentTask } from "../entities/AgentTask";

class AgentTaskRepository implements IAgentTaskRepository{
  private agentTaskRepository:Repository<AgentTask>
  constructor(){
    this.agentTaskRepository = AppDataSource.getRepository(AgentTask)
  }
  async listAgentTaskByState({state,id_task}) {
    const findtaskAgent = await this.agentTaskRepository.find({where:{id_task,state}}) 
    return findtaskAgent
  }
  async create({ id_agent, id_task }) {
    const agentTask = new AgentTask()
    Object.assign(agentTask,{id_agent,id_task})
    const newAgentTask = await this.agentTaskRepository.save(agentTask)
    return newAgentTask 
  }
  async listTaskAgent(id_agent: string) {
    console.log(id_agent)
    const listTaskAgent = await this.agentTaskRepository.find({where:{id_agent}})
    return listTaskAgent
  }
  async listAgentTask(id_task: string) {
    const listAgentTask = await this.agentTaskRepository.find({where:{id_task}})
    return listAgentTask
  }
  async updateAgentTask({ id_agent, id_task,state }) {
    const findagentTask = await this.agentTaskRepository.findOne({where:{id_agent,id_task}})
    Object.assign(findagentTask,{state})
    const updateAgentTask = await this.agentTaskRepository.save(findagentTask)
    return updateAgentTask

  }
  async deleteAgentTask({ id_agent, id_task }: { id_agent: any; id_task: any; }) {
    const findagentTask = await this.agentTaskRepository.findOne({where:{id_agent,id_task}})
    this.agentTaskRepository.delete(findagentTask.id)
    return findagentTask
  }

}
export{AgentTaskRepository}
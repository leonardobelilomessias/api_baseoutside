import { AppError } from "../../../shared/errors/AppError"
import { Agent } from "../infra/typeorm/entities/Agent"
import { ColabAgent } from "../infra/typeorm/entities/ColabAgent"
import { IColabRepository } from "../repositories/IColabRepositoryInMemory"
import { AgentInMemoryRepository } from "./AgentInMemoryRepository"

class ColabAgentRepositoryInMemory implements IColabRepository{
  colabAgentInMemory: ColabAgent[]
  agentRepositoryInMemory: AgentInMemoryRepository
  constructor(agentRepositoryInMemory:AgentInMemoryRepository) {
    this.colabAgentInMemory = []
    this.agentRepositoryInMemory = agentRepositoryInMemory
  }
  async findIfExistentcolab({ id_agent, id_colab, type }: { id_agent: any; id_colab: any; type: any }): Promise<ColabAgent> {
    const findColabAgent = this.colabAgentInMemory.find(colab => ((colab.id_colab === id_colab && colab.id_agent === id_agent)))
    return findColabAgent
  }
  async create({ id_agent, id_colab, type }): Promise<ColabAgent> {
    const findColabAgent = this.colabAgentInMemory.find(colab=>((colab.id_colab ===id_colab && colab.id_agent ===id_agent)))
    if(findColabAgent) throw new AppError('Alredy exist colab')
    const newColab = new ColabAgent()
    Object.assign(newColab, { id_agent, id_colab:id_colab })
    this.colabAgentInMemory.push(newColab)
    return newColab
  }
  async listColabAgent(id_agent: string): Promise<Agent[]> {
    const agents =[]
    const idsColabs = this.colabAgentInMemory.map(colabAgent => {
      if (colabAgent.id_agent === id_agent) {
        return colabAgent.id_colab
      }
    })
    const allAgents = await this.agentRepositoryInMemory.listAll()
    for (let id of idsColabs) {
      for (let key in allAgents) {
        if (allAgents[key].id === id) {
          agents.push(allAgents[key])
        }
      }
    }
    return agents
  }
  listAgentColab(id_colab: string): Promise<Agent[]> {
    throw new Error("Method not implemented.")
  }
  async toCancelColab({id_agent, id_colab}): Promise<ColabAgent> {
    const canceledColabIndex = await this.colabAgentInMemory.findIndex(colabAgent => ((colabAgent.id_agent === id_agent && colabAgent.id_colab === id_colab)))
    const canceledColab = this.colabAgentInMemory.splice(canceledColabIndex, 1)
    return canceledColab[0]
  }


}
export{ColabAgentRepositoryInMemory}
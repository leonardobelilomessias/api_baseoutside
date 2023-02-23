import { MapResponseAgent } from "../../../../utils/handledatAgent/MapFields/MapResponseAgent"
import { MapAgent } from "../../infra/typeorm/entities/MapAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"

class SearchAgentsByNameUseCase{
    private agentRepository:IAgentRepository
    constructor(agentRepository:IAgentRepository){
        this.agentRepository = agentRepository
    }
    async execute(name:string){
        
        const foundAgentsRaw = await this.agentRepository.searchAgentsByname(name)
        const formatedAgents  = foundAgentsRaw.map(data=>{
            const agentFormated = MapResponseAgent.mapFields(data)
            return agentFormated
        })
        return formatedAgents
    }
}

export{SearchAgentsByNameUseCase}
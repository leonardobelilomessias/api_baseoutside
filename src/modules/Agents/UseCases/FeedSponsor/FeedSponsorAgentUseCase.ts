import { AppError } from "../../../../shared/errors/AppError";
import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository";
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository";


class FeedSponsorAgentUseCase{
    private sponsorAgentRepository:ISponsorAgentRepository
    constructor(sponsorReAgentpository:ISponsorAgentRepository){
        this.sponsorAgentRepository = sponsorReAgentpository
    }
    async execute(id_agent:string){
        
        if(!id_agent){
            throw new AppError('value of agent is not defined or invalid.')
        }
        const feedSponsor = await this.sponsorAgentRepository.fetchPublicationsSponsors(id_agent)
        return feedSponsor
    }
}
export{FeedSponsorAgentUseCase}
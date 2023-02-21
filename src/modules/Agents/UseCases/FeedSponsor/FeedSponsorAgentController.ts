import { query, Request, Response } from "express";
import { FeedSponsorAgentUseCase } from "./FeedSponsorAgentUseCase";


class FeedSponsorAgentController{
    private feedSponsorAgentUsecase:FeedSponsorAgentUseCase
    constructor(feedSponsorAgentUsecase:FeedSponsorAgentUseCase){
        this.feedSponsorAgentUsecase = feedSponsorAgentUsecase
    }
    async handle(request:Request,response:Response){
        const data = request.query
        const id_agent = data.id_agent as string
        const feedSponsorAgent = await this.feedSponsorAgentUsecase.execute(id_agent)
        return response.json(feedSponsorAgent)
    }
}
export{FeedSponsorAgentController}
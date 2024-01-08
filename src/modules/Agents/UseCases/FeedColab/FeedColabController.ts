import { Request, Response } from "express"
import { FeedColabUseCase } from "./FeedColabUseCase"


class FeedColabController{
  private feedColabUseCase:FeedColabUseCase
  constructor(feedColabUseCase:FeedColabUseCase){
    this.feedColabUseCase = feedColabUseCase
  }
  async listFeedColab(request:Request,response:Response):Promise<Response>{
    const {id_agent} = request.query
    console.log(id_agent)

    const feedColab = await this.feedColabUseCase.listFeed(id_agent )
    return response.status(200).json(feedColab)
  }
  
}
export{FeedColabController} 
import { IColabRepository } from "../../repositories/IColabRepository";

class FeedColabUseCase{
  private colabRepository:IColabRepository
  constructor(colabRepository:IColabRepository){
    this.colabRepository = colabRepository
  }
  async listFeed(id_agent:string){
    const feedColab = await this.colabRepository.listFeedColab(id_agent)
    return feedColab
  }
}
export{FeedColabUseCase}
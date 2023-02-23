import { AppError } from "../../../../shared/errors/AppError";
import { IColabRepository } from "../../repositories/IColabRepository";

class FeedColabUseCase{
  private colabRepository:IColabRepository
  constructor(colabRepository:IColabRepository){
    this.colabRepository = colabRepository
  }
  async listFeed(id_agent){
    if(!id_agent) throw new AppError('Value canot be empty')

    const feedColab = await this.colabRepository.listFeedColab(id_agent)
    return feedColab
  }
}
export{FeedColabUseCase}
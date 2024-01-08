import { Request, Response } from "express";
import { FetchPublicationAgentByIdUseCase } from "./FetchPublicationAgentByIdUseCase";



class FetchPublicationAgentByIdController{
    private fetchPublicationAgentByIdUseCase:FetchPublicationAgentByIdUseCase
    constructor(fetchPublicationAgentByIdUseCase:FetchPublicationAgentByIdUseCase){
        this.fetchPublicationAgentByIdUseCase = fetchPublicationAgentByIdUseCase
    }
  async   handle(request: Request, response: Response):Promise<Response>{
        const {publication_id} = request.query

        const result = await   this.fetchPublicationAgentByIdUseCase.execute(publication_id)
        return response.status(200).json(result)
    }
}
export{FetchPublicationAgentByIdController}
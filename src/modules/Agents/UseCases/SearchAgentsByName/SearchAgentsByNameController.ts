import { Request, Response } from "express";
import { SearchAgentsByNameUseCase } from "./SearchAgentsByNameUseCase";


class SearchAgentsByNameController{
    private searchAgentsByNameUseCase:SearchAgentsByNameUseCase
    constructor(searchAgentsByNameUseCase:SearchAgentsByNameUseCase){
        this.searchAgentsByNameUseCase = searchAgentsByNameUseCase
    }
    async handle(request:Request,response:Response){
    const data = request.query
    const name = data.name as string
    const agentsFound =await  this.searchAgentsByNameUseCase.execute(name)
    return response.json(agentsFound)
 }
}
export{SearchAgentsByNameController}
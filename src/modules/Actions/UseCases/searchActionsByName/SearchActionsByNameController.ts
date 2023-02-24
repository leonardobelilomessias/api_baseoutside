import { Request, Response } from "express"
import { SearchActionsByNameUseCase } from "./SearchActionsByNameUseCase"


class SearchActionsByNameController{
    private searchActionsByNameUseCase:SearchActionsByNameUseCase
    constructor(searchActionsByNameUseCase:SearchActionsByNameUseCase){
        this.searchActionsByNameUseCase = searchActionsByNameUseCase
    }
    async handle(request:Request,response:Response){
        const data = request.query
        const name  = data.name as string
        const foundAction = await this.searchActionsByNameUseCase.execute(name)
        return response.json(foundAction)
    }
}
export{SearchActionsByNameController}
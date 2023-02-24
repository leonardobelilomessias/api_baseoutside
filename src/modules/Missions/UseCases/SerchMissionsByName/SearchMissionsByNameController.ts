import { Request, Response } from "express"
import { SearchMissionsByNameUseCase } from "./SearchMissionsByNameUseCase"

class SearchMissionsByNameController{
    private searchMissionsByNameUseCase :SearchMissionsByNameUseCase
    constructor(searchMissionsByNameUseCase:SearchMissionsByNameUseCase){
        this.searchMissionsByNameUseCase = searchMissionsByNameUseCase
    }
    async handle(request:Request,response:Response){
        const data =  request.query
        const name = data.name as string
        const missionsFound = await this.searchMissionsByNameUseCase.execute(name)
        return response.json(missionsFound)
        
    }
}
export{SearchMissionsByNameController}
import { Request, Response } from "express";
import { FetchMissionProfileUseCase } from "./FetchMissionProfileUseCase";

class FetchMissionProfileController{
    private fetchMissionProfileUseCase:FetchMissionProfileUseCase
    constructor(fetchMissionProfileUseCase:FetchMissionProfileUseCase){
        this.fetchMissionProfileUseCase = fetchMissionProfileUseCase
    }
    async handle(request:Request,response:Response){
        const data = request.query
        const id = data.id_mission as string 
        const missionFound = await this.fetchMissionProfileUseCase.execute(id)
        return response.json(missionFound)
    }
}
export{FetchMissionProfileController}
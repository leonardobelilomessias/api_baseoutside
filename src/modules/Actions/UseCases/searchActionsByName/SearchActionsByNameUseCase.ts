import { IActionRepository } from "../../repositories/IActionRepository"


class SearchActionsByNameUseCase{
    private actionRepository:IActionRepository
    constructor(actionRepository:IActionRepository){
        this.actionRepository = actionRepository
    }
    async execute(name:string){

        const foundAction = await this.actionRepository.searchActionsByName(name) 
        return foundAction

    }
}
export{ SearchActionsByNameUseCase}
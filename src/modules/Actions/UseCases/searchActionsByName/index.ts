import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository"
import { SearchActionsByNameController } from "./SearchActionsByNameController"
import { SearchActionsByNameUseCase } from "./SearchActionsByNameUseCase"


export default ()=>{
    const actionRepository = new ActionRepository()
    const searchActionsByNameUseCase = new SearchActionsByNameUseCase(actionRepository)
    const searchActionsByNameController = new SearchActionsByNameController(searchActionsByNameUseCase)
    return searchActionsByNameController
}
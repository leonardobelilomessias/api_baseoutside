import { TaskDepartamentRepository } from "../../../../infra/typeorm/repositories/TaskDepartementRepository";
import { ListTasksDepartamentController } from "./ListTasksDepartamentController";
import { ListTasksDepartamentUseCase } from "./ListTasksDepartamentUseCase";

export default ()=>{
    
    const taskDepartamentRepository = new TaskDepartamentRepository()
    const listTasksDepartamentUseCase = new ListTasksDepartamentUseCase(taskDepartamentRepository)
    const listTasksDepartamentController = new ListTasksDepartamentController(listTasksDepartamentUseCase)
    return listTasksDepartamentController
}
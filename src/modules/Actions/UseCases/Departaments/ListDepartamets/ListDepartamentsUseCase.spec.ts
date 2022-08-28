import { AppError } from "../../../../../shared/errors/AppError"
import { DepartamentRepositoryInMemory } from "../../../repositoryInMemory/DepartamenteRepositoryInMemory"
import { ListDepartamentsUseCase } from "./ListDepartamentsUseCase"


let departamentRepositoryInMemory :DepartamentRepositoryInMemory
let listDepartamentUseCase:ListDepartamentsUseCase
describe("List Departaments",()=>{
  beforeEach(()=>{
    departamentRepositoryInMemory = new DepartamentRepositoryInMemory()
    listDepartamentUseCase = new ListDepartamentsUseCase(departamentRepositoryInMemory)
  })
  it("Shouldn't be able list departmant of undefined value of action",async()=>{
    expect(async()=>{
      await listDepartamentUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able list departament of a action",async()=>{
    const departament = await departamentRepositoryInMemory.create({id_action:'01',name:"namedepartament", description:"description departament"})
    const listDepartaments = await listDepartamentUseCase.execute("01")
    expect(listDepartaments[0]).toEqual(departament)
  })
})
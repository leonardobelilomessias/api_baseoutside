import { AppError } from "../../../../../shared/errors/AppError"
import { DepartamentRepositoryInMemory } from "../../../repositoryInMemory/DepartamenteRepositoryInMemory"
import { DeleteAgentDepartamentUseCase } from "./DeleteAgentDepartamentUseCase"

let departamentRepositoryInMemory:DepartamentRepositoryInMemory
let deleteAgentDepartamentUseCase:DeleteAgentDepartamentUseCase
describe("Delete agent Departament",()=>{
  beforeEach(()=>{
    departamentRepositoryInMemory = new DepartamentRepositoryInMemory()
    deleteAgentDepartamentUseCase = new DeleteAgentDepartamentUseCase(departamentRepositoryInMemory)
  })
  it("Shouldn't be able delete a agent departamente with some value undefined",async()=>{
    expect(async()=>{
      await deleteAgentDepartamentUseCase.execute({id_agent:"",id_departament:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able delete a agent departament",async()=>{
    const newAgentDepartament = await departamentRepositoryInMemory.createAgentDepartament({id_departament:"02",id_agent:"01"})

    const deleteAgentDepartament = await deleteAgentDepartamentUseCase.execute({id_agent:"01",id_departament:"02"})

    expect(deleteAgentDepartament).toEqual(newAgentDepartament)
  })
})
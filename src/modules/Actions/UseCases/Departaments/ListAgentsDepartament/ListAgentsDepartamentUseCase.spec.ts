import { AppError } from "../../../../../shared/errors/AppError"
import { DepartamentRepositoryInMemory } from "../../../repositoryInMemory/DepartamenteRepositoryInMemory"
import { ListAgentsDepartamentUseCase } from "./ListAgentsDepartamentUseCase"

let departamentRepositoryInMemory :DepartamentRepositoryInMemory
let listAgentsDepartamentUseCase:ListAgentsDepartamentUseCase

describe("List agents departamet.",()=>{
  beforeEach(()=>{
    departamentRepositoryInMemory = new DepartamentRepositoryInMemory()
    listAgentsDepartamentUseCase = new ListAgentsDepartamentUseCase(departamentRepositoryInMemory)
  })
  it("Shouldn't be able list agents departament with undefined value of departament",async()=>{
    expect(async()=>{
      await listAgentsDepartamentUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able list agents departament",async()=>{
    const newAgentDepartament = await departamentRepositoryInMemory.createAgentDepartament({id_departament:"02",id_agent:"01"})

    const listAgentsDepartament = await listAgentsDepartamentUseCase.execute('02')
    expect(listAgentsDepartament[0]).toEqual(newAgentDepartament)
  })
})
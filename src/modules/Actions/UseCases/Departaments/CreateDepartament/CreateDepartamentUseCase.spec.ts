
import { AppError } from "../../../../../shared/errors/AppError"
import { DepartamentRepositoryInMemory } from "../../../repositoryInMemory/DepartamenteRepositoryInMemory"
import { CreateDepartamentUseCase } from "./CreateDepartamentUseCase"

let departamentRepositoryInMemory:DepartamentRepositoryInMemory
let createDepartamentUseCase:CreateDepartamentUseCase

describe("Create a new departament",()=>{
  beforeEach(()=>{
    departamentRepositoryInMemory = new DepartamentRepositoryInMemory()
    createDepartamentUseCase = new CreateDepartamentUseCase(departamentRepositoryInMemory)
  })
  it("Shoundn't be able creata a departament with require value undefined.",async()=>{
    expect(async()=>{
      await createDepartamentUseCase.execute({id_action:"",name:"",description:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able create new departament",async()=>{
    const createdDepartament = await createDepartamentUseCase.execute({id_action:"01",name:"newDepartament",description:" description departament"})
    expect(createdDepartament).toHaveProperty("id")
  })
})
import { AppError } from "../../../../../shared/errors/AppError"
import { DepartamentRepositoryInMemory } from "../../../repositoryInMemory/DepartamenteRepositoryInMemory"
import { CreateAgentDepartamentUseCase } from "./CreateAgentDepartamentuseCase"

let departamentRepositoryInMemory:DepartamentRepositoryInMemory
let createAgentDepartamentUseCase:CreateAgentDepartamentUseCase
describe("Create agent departament",()=>{
  beforeEach(()=>{
    departamentRepositoryInMemory = new DepartamentRepositoryInMemory()
    createAgentDepartamentUseCase = new CreateAgentDepartamentUseCase(departamentRepositoryInMemory)
  })
  it("Shouldn't be abe create a agent departament with undefined values",async()=>{
    expect(async()=>{
    await createAgentDepartamentUseCase.execute({id_agent:"",id_departament:""})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("should be able create a new agent departament",async()=>{
    const newDepartament = await departamentRepositoryInMemory.create({id_action:"01",name:"nameDepartament", description:" description departament"})

    const createAgentDepartament = await createAgentDepartamentUseCase.execute({id_agent:"01",id_departament:"01"})
    expect(createAgentDepartament).toHaveProperty("id")
  })
})
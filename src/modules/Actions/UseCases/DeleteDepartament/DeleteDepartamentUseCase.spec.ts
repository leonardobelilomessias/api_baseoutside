import { AppError } from "../../../../shared/errors/AppError"
import { DepartamentRepositoryInMemory } from "../../repositoryInMemory/DepartamenteRepositoryInMemory"
import { DeleteDepartamentUseCase } from "./DeleteDepartamentUseCase"

let departamentRepositoryInMemory :DepartamentRepositoryInMemory
let deleteDepartamentUseCase:DeleteDepartamentUseCase

describe("Delete departament",()=>{
  beforeEach(()=>{
    departamentRepositoryInMemory = new DepartamentRepositoryInMemory()
    deleteDepartamentUseCase = new DeleteDepartamentUseCase(departamentRepositoryInMemory)
  })
  it("Shouldnt'be able delete departement with undefined value id",async()=>{
    expect(async()=>{
      await deleteDepartamentUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able delete a dapartament",async()=>{
    const createDepartament = await departamentRepositoryInMemory.create({name:"namedepartament", description:"description departament", id_action:"01"})
    const deletedDepartament = await deleteDepartamentUseCase.execute(createDepartament.id)
    expect(deletedDepartament.id).toBe(createDepartament.id)
  })
})
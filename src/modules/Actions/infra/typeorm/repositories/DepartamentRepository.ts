import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IOutputAgentDepartamentAcionDTO } from "../../../dtos/IAgentDepartamentsDTOS";
import { IOutputAgentDepartamentDTO, IOutputCreateDepartamentActionDTO, IOutputGenericDepartamentActionDTO } from "../../../dtos/IDepartamentActionDTOS";

import { IDepartamentRepository, IEditDepartement } from "../../../repositories/IDepartamentActionRepository";
import { AgentDepartament } from "../entities/AgentDepartament";
import { Departament } from "../entities/DepartamentAction";
import { TaskDepartament } from "../entities/TaskDepartament";



class DepartamentRepository implements IDepartamentRepository {
  private departamentRepository: Repository<Departament>
  private agentDepartamentRepository: Repository<AgentDepartament>
  private TaskDepartamentActionRepository: Repository<TaskDepartament>
  constructor() {
    this.agentDepartamentRepository = AppDataSource.getRepository("agents_departament")
    this.departamentRepository = AppDataSource.getRepository(Departament)
    this.TaskDepartamentActionRepository = AppDataSource.getRepository(TaskDepartament)

  }
  listDepartamentAgent(id_agent: string): Promise<Departament[]> {
    throw new Error("Method not implemented.");
  }
  async create({ id_action, name, description, agents_limit, agents_necessary }): Promise<IOutputCreateDepartamentActionDTO> {

    const newAction = new Departament()
    Object.assign(newAction, { id_action, name, description, agents_limit, agents_necessary })
    const createdDepartament = await this.departamentRepository.save(newAction)
    return createdDepartament
    
  }
  async listAll(id_action: string): Promise<Departament[]> {
    const listDepartament = await this.departamentRepository.find({ where: { id_action: id_action } })
    return listDepartament
  }

  async findDepartamentById({ id_departament }): Promise<Departament> {
    const findDepartament = await this.departamentRepository.findOne({ where: { id: id_departament } })
    return findDepartament
  }

  async findAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<IOutputAgentDepartamentAcionDTO> {
    const agentDepartament = await this.agentDepartamentRepository.findOne({ where: { id_agent, id_departament } })
    return agentDepartament
  }

  async edit({ id, name, description, agents_limit, agents_necessary }: IEditDepartement): Promise<IOutputGenericDepartamentActionDTO> {
    const findDepartament = await this.departamentRepository.findOne({ where: { id } })
    Object.assign(findDepartament, { name, description, agents_limit, agents_necessary })
    const updatedDepartament = await this.departamentRepository.save(findDepartament)
    return updatedDepartament
  }
  


  async delete(id: string): Promise<IOutputGenericDepartamentActionDTO> {
    const findDepartament = await this.departamentRepository.findOneBy({ id })
    if (!findDepartament) throw new AppError("Departament not found.")
    await this.TaskDepartamentActionRepository.createQueryBuilder()
      .delete()
      .from(TaskDepartament)
      .where("id_departament = :id_departament", { id_departament: findDepartament.id })
      .execute()
    await this.departamentRepository.delete({ id })
    return findDepartament
  }
  async createAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<IOutputAgentDepartamentDTO> {
    try {
      const newAgentDepartament = new AgentDepartament()
      Object.assign(newAgentDepartament, { id_agent, id_departament })
      const createAgentDepartament = await this.agentDepartamentRepository.save(newAgentDepartament)
      return createAgentDepartament
    } catch (e) {
      throw new AppError(`Some value is wrong. Confirm if there is the agent or departament${e}`,)
    }
  }
  async listAgentsDepartament(id_departament: any): Promise<IOutputAgentDepartamentDTO[]> {

    const listAgentsDepartament = await this.agentDepartamentRepository.findBy({ id_departament })

    return listAgentsDepartament
  }
  async deleteAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<IOutputAgentDepartamentDTO> {
    const findAgentDepartament = await this.agentDepartamentRepository.findOne({
      where: {
        id_agent, id_departament
      }
    })
    if (!findAgentDepartament) throw new AppError("Not found register of agent departament")
    const deleteAgentDepartament = await this.agentDepartamentRepository.delete(findAgentDepartament.id)
    return findAgentDepartament
  }

}
export { DepartamentRepository }
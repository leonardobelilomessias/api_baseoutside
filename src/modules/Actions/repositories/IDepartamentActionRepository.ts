import { IOutputAgentDepartamentAcionDTO } from '../dtos/IAgentDepartamentsDTOS';
import { IOutputCreateDepartamentActionDTO, IOutputGenericDepartamentActionDTO } from '../dtos/IDepartamentActionDTOS';

import { AgentDepartament } from '../infra/typeorm/entities/AgentDepartament';
import { Departament } from '../infra/typeorm/entities/DepartamentAction';

interface IEditDepartement {
  id: string;
  name?: string;
  description?: string;
  agents_limit?: string;
  agents_necessary?: string;
}

interface IDepartamentRepository {

  create({ id_action, name, description, agents_limit, agents_necessary }): Promise<IOutputCreateDepartamentActionDTO>

  listAll(id_action: string): Promise<IOutputGenericDepartamentActionDTO[]>

  listDepartamentAgent(id_agent: string): Promise<Departament[]>

  findAgentDepartament({ id_agent, id_departament }): Promise<IOutputAgentDepartamentAcionDTO>

  edit({ id, name, description, agents_limit, agents_necessary }): Promise<IOutputGenericDepartamentActionDTO>

  delete(id: String): Promise<IOutputGenericDepartamentActionDTO>

  createAgentDepartament({ id_agent, id_departament }): Promise<IOutputAgentDepartamentAcionDTO>

  listAgentsDepartament(id_departament): Promise<IOutputAgentDepartamentAcionDTO[]>

  deleteAgentDepartament({ id_agent, id_departament }): Promise<IOutputAgentDepartamentAcionDTO>

  findDepartamentById({ id_departament }): Promise<IOutputGenericDepartamentActionDTO>


}
export { IDepartamentRepository, IEditDepartement }
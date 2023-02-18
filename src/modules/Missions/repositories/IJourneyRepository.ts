import { IOutputourneyMission } from "../dtos/IJourneyMissionDTO";
import { JourneyMission } from "../infra/typeorm/entities/JourneyMission"


interface ICreateJourneyMission{
  id_mission:string;
  type:string;
  id_content:string;
  is_hidden?:boolean;
  is_private?:boolean;

}

interface IJourneyMissionRepository{

  create({}:ICreateJourneyMission):Promise<IOutputourneyMission>

  list():Promise<JourneyMission[]>

  listByIdMission(id_mission:string):Promise<IOutputourneyMission[]>

  hidden(id:string):Promise<IOutputourneyMission>

  show(id:string):Promise<IOutputourneyMission>

  delete(id:string):Promise<IOutputourneyMission>
}
export{IJourneyMissionRepository,ICreateJourneyMission}
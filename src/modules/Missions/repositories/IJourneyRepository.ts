import { JourneyMission } from "../infra/typeorm/entities/JourneyMission"


interface ICreateJourneyMission{
  id_mission:string;
  type:string;
  id_content:string;
  is_hidden?:boolean;
  is_private?:boolean;

}

interface IJourneyMissionRepository{

  create({}:ICreateJourneyMission):Promise<JourneyMission>

  list():Promise<JourneyMission[]>

  listByIdMission(id_mission:string):Promise<JourneyMission[]>

  hidden(id:string):Promise<JourneyMission>

  show(id:string):Promise<JourneyMission>

  delete(id:string):Promise<JourneyMission>
}
export{IJourneyMissionRepository,ICreateJourneyMission}
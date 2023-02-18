import { IOutputCardMissionDTO } from "../dtos/ICardMissionDTO";
import { CardMission } from "../infra/typeorm/entities/CardMission";


interface ICreateCardMission{
  id_mission:string;
  description:string;
  title:string
}
interface IEditCardMission{
  id_mission:string;
  description:string;
  title:string
}

interface ICardMissionRepository{

  create({id_mission,description}:ICreateCardMission):Promise<IOutputCardMissionDTO>

  edit({description,id_mission}:IEditCardMission):Promise<IOutputCardMissionDTO>

  listByid(id_mission:string):Promise<IOutputCardMissionDTO>

  delete(id_mission:string):Promise<IOutputCardMissionDTO>
}
export{ICardMissionRepository,ICreateCardMission,IEditCardMission}
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

  create({id_mission,description}:ICreateCardMission):Promise<CardMission>

  edit({description,id_mission}:IEditCardMission):Promise<CardMission>

  listByid(id_mission:string):Promise<CardMission>

  delete(id_mission:string):Promise<CardMission>
}
export{ICardMissionRepository,ICreateCardMission,IEditCardMission}
import { IOutputCreatePublicationMissionDTO } from "../dtos/IPublicationMissionDTOS";
import { PhotoPublicationMission } from "../infra/typeorm/entities/PhotoPublicationMission";
import { PublicationMission } from "../infra/typeorm/entities/PublicationMission";

interface IResponsePublicationMission{
  publication: PublicationMission
  photos:PhotoPublicationMission[];
}


interface IPublicationMission{

  create({id_mission,type,description,content}):Promise<IResponsePublicationMission>

  list(id_mission:string)

  edit({id_publication,description}):Promise<IOutputCreatePublicationMissionDTO>

  delete(id_publication:string):Promise<IOutputCreatePublicationMissionDTO>

  findById(id_publication:string):Promise<IOutputCreatePublicationMissionDTO>

}
export{IPublicationMission,IResponsePublicationMission}
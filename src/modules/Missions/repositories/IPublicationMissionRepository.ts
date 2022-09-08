import { PublicationMission } from "../infra/typeorm/entities/PublicationMission";


interface IPublicationMission{

  create({id_mission,type,description}):Promise<PublicationMission>

  list(id_mission:string):Promise<PublicationMission[]>

  edit(id_publication:string):Promise<PublicationMission[]>

  delete(id_publication:string):Promise<PublicationMission>

}
export{IPublicationMission}